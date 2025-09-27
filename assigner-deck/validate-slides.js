#!/usr/bin/env node

/**
 * Slidev HTML Structure Validation Script
 * Prevents HTML structure imbalances and TypeScript configuration issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SlidevValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
  }

  validateHtmlStructure(content) {
    const lines = content.split('\n');
    const divStack = [];
    const slideStacks = [];
    let currentSlide = 0;
    let inSlide = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const lineNum = i + 1;

      // Detect slide boundaries
      if (line === '---') {
        if (inSlide && divStack.length > 0) {
          this.errors.push({
            type: 'html_structure',
            line: lineNum,
            message: `Slide ${currentSlide} has ${divStack.length} unclosed <div> tags`,
            context: `Stack: ${divStack.join(' -> ')}`
          });
        }
        slideStacks.push([...divStack]);
        divStack.length = 0;
        currentSlide++;
        inSlide = true;
        continue;
      }

      // Track div tags
      const openDivs = (line.match(/<div[^>]*>/g) || []).length;
      const closeDivs = (line.match(/<\/div>/g) || []).length;

      // Add opening divs to stack
      for (let j = 0; j < openDivs; j++) {
        const divClass = line.match(/class="([^"]*)"/) || ['', 'unknown'];
        divStack.push(`${divClass[1]}:${lineNum}`);
      }

      // Remove closing divs from stack
      for (let j = 0; j < closeDivs; j++) {
        if (divStack.length === 0) {
          this.errors.push({
            type: 'html_structure',
            line: lineNum,
            message: `Extra closing </div> tag without matching opening tag`,
            context: line
          });
        } else {
          divStack.pop();
        }
      }
    }

    // Final validation
    if (divStack.length > 0) {
      this.errors.push({
        type: 'html_structure',
        line: 'EOF',
        message: `${divStack.length} unclosed <div> tags at end of file`,
        context: `Unclosed: ${divStack.join(', ')}`
      });
    }
  }

  validateConfigObject(filePath, content) {
    try {
      // Simple duplicate key detection for object literals
      const lines = content.split('\n');
      const keys = new Set();
      let inObject = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        const lineNum = i + 1;

        // Detect object boundaries
        if (line.includes('return {') || line.includes('themeVariables: {')) {
          inObject = true;
          keys.clear();
          continue;
        }

        if (line === '}' && inObject) {
          inObject = false;
          continue;
        }

        // Extract keys in object
        if (inObject) {
          const keyMatch = line.match(/^(\w+):/);
          if (keyMatch) {
            const key = keyMatch[1];
            if (keys.has(key)) {
              this.errors.push({
                type: 'duplicate_key',
                file: filePath,
                line: lineNum,
                message: `Duplicate key "${key}" in object literal`,
                context: line
              });
            }
            keys.add(key);
          }
        }
      }
    } catch (error) {
      this.warnings.push({
        type: 'parse_warning',
        file: filePath,
        message: `Could not fully parse file: ${error.message}`
      });
    }
  }

  validateFile(filePath) {
    if (!fs.existsSync(filePath)) {
      this.errors.push({
        type: 'file_missing',
        file: filePath,
        message: 'File does not exist'
      });
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const ext = path.extname(filePath);

    if (filePath.includes('slides.md')) {
      this.validateHtmlStructure(content);
    } else if (ext === '.ts') {
      this.validateConfigObject(filePath, content);
    }
  }

  validate() {
    const slidesPath = path.join(__dirname, 'slides.md');
    const mermaidPath = path.join(__dirname, 'setup', 'mermaid.ts');

    console.log('🔍 Validating Slidev presentation structure...\n');

    this.validateFile(slidesPath);
    this.validateFile(mermaidPath);

    // Report results
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ All validation checks passed!\n');
      return true;
    }

    if (this.errors.length > 0) {
      console.log('❌ Validation Errors:');
      this.errors.forEach(error => {
        console.log(`  • ${error.type} (${error.file || 'slides.md'}:${error.line}): ${error.message}`);
        if (error.context) {
          console.log(`    Context: ${error.context}`);
        }
      });
      console.log('');
    }

    if (this.warnings.length > 0) {
      console.log('⚠️  Warnings:');
      this.warnings.forEach(warning => {
        console.log(`  • ${warning.type} (${warning.file}): ${warning.message}`);
      });
      console.log('');
    }

    return this.errors.length === 0;
  }
}

// Run validation
if (import.meta.url === `file://${process.argv[1]}`) {
  const validator = new SlidevValidator();
  const isValid = validator.validate();
  process.exit(isValid ? 0 : 1);
}

export default SlidevValidator;