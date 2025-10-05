# E-commerce Design System

A comprehensive React design system built with Storybook, featuring reusable components for e-commerce applications.

## 🚀 Features

- **Reusable Components**: Button, Input, Icon, Color, Font, Footer, NotFound
- **Design Tokens**: Colors, Typography, and consistent styling
- **Storybook Integration**: Interactive component documentation
- **TypeScript Support**: Full type safety
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant components

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook

# Start Next.js development server
npm run dev
```

## 📚 Components

### Button
- Multiple variants and sizes
- Customizable styling
- Accessibility features

### Input
- Form input components
- Validation states
- Custom styling options

### Icon
- SVG icon system
- Customizable size and color
- Consistent iconography

### Color
- Color palette display
- Design token integration
- Brand consistency

### Font
- Typography system
- Font weight variations
- Responsive typography

### Footer
- Complete footer component
- Responsive layout
- Social media integration

### NotFound (404)
- Custom 404 page component
- Responsive design
- Branded styling

## 🎨 Design Tokens

### Colors
- Primary: `#FB2E86` (Pink)
- Secondary: `#8B5CF6` (Violet)
- Text: `#2F1893` (Dark Blue)
- Background: `#F6F5FF` (Light Lavender)

### Typography
- **Josefin Sans**: Headings and titles
- **Lato**: Body text and descriptions

## 📖 Usage

```tsx
import { Button, Input, Icon } from 'ecomdesignsystem';

// Use components in your app
<Button variant="primary" size="large">
  Click me
</Button>

<Input placeholder="Enter your email" />

<Icon name="cart" size={24} />
```

## 🚀 Deployment

The Storybook can be deployed to GitHub Pages:

```bash
npm run build-storybook
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- [Storybook Documentation](https://your-storybook-url.com)
- [GitHub Repository](https://github.com/your-username/ecomdesignsystem)
- [NPM Package](https://www.npmjs.com/package/ecomdesignsystem)