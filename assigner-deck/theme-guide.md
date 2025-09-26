# Assignar Slidev Theme Guide

## 🎨 Color Palette

### Core Colors
- **Rich Black**: `#0B090A` - Primary background
- **Eerie Black**: `#161A1D` - Secondary background
- **Blood Red**: `#660708` - Dark accent
- **Ruby Red**: `#A4161A` - Primary brand accent
- **Fire Brick**: `#BA181B` - Secondary brand accent
- **Cinnabar**: `#E5383B` - Bright highlight
- **Silver/Chalk**: `#B1A7A6` - Neutral gray
- **Light Gray**: `#D3D3D3` - UI elements
- **Isabelline**: `#F5F3F4` - Light background
- **White**: `#FFFFFF` - Text, high contrast

### Usage Guidelines
- **Backgrounds**: Use gradient from `#0B090A` to `#161A1D` for depth
- **Headlines**: Primary red (`#A4161A`) for main headings
- **Accents**: Bright red (`#E5383B`) for highlights and CTAs
- **Body Text**: Light background color (`#F5F3F4`) for readability
- **Metrics**: Secondary red (`#BA181B`) for statistics

## 📝 Typography

### Font Family
- **Primary**: Arya (Google Fonts)
- **Weights**: 400 (regular), 700 (bold)

### Hierarchy
- **H1**: 3rem, bold, primary red
- **H2**: 2.2rem, bold, bright red
- **H3**: 1.8rem, bold, secondary red
- **Body**: 1.1rem, regular, light background color

## 🧩 Custom Components

### Metrics Display
```html
<div class="metric">40%</div>
<div class="metric-label">improvement in claims</div>
```

### Feature Boxes
```html
<div class="feature-box">
  <h3>Feature Title</h3>
  <p>Feature description...</p>
</div>
```

### CTA Buttons
```html
<div class="cta-button">
  Get Started
</div>
```

### Section Dividers
```html
<div class="section-divider"></div>
```

## 🎬 Animations

### Available Classes
- `animate-fade-up` - Fade in with upward motion
- `animate-slide-in` - Slide in from left

### Layout Classes
- `layout-center` - Centered content
- `layout-two-cols` - Two column grid

## 🎯 Best Practices

### Contrast & Accessibility
- White text on dark backgrounds for maximum readability
- Red accents used sparingly for emphasis
- Minimum contrast ratio of 4.5:1 maintained

### Visual Hierarchy
1. **Headlines**: Use red colors to establish importance
2. **Body Text**: Light color for easy reading
3. **Metrics**: Bold, colored numbers with descriptive labels
4. **CTAs**: Bright red buttons for clear action items

### Responsive Design
- Mobile-optimized typography scaling
- Grid layouts adapt to smaller screens
- Touch-friendly button sizes

## 🚀 Usage

1. Ensure `style.css` is linked in your slides frontmatter
2. Use semantic HTML with provided CSS classes
3. Leverage custom components for consistency
4. Test on various screen sizes

## 🔧 Customization

To modify the theme:
1. Update CSS variables in `:root` section
2. Adjust component styling as needed
3. Add new utility classes following naming conventions
4. Maintain accessibility standards