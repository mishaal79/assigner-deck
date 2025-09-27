import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      template: {
        compilerOptions: {
          // Allow custom elements for FontAwesome icons
          isCustomElement: (tag) => tag.startsWith('fa-') || tag.includes('fa:')
        }
      }
    }
  }
})