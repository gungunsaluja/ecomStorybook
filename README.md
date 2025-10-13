# E-commerce Design System

A comprehensive React design system for e-commerce applications with Storybook documentation.

## 🚀 Quick Start

### Installation

```bash
npm install ecomdesignsystem
```

### Basic Usage

```tsx
import { Button, HeadingBar, Footer } from 'ecomdesignsystem';

function App() {
  return (
    <div>
      <HeadingBar
        item1={{ text: "Contact", iconUrl: icons.envelope }}
        item2={{ text: "Phone", iconUrl: icons.phone }}
      />
      
      <Button variant="primary" size="medium">
        Click me
      </Button>
      
      <Footer />
    </div>
  );
}
```

## 📦 Components

### Button
```tsx
import { Button } from 'ecomdesignsystem';

<Button variant="primary" size="medium">
  Click me
</Button>
```

### HeadingBar
```tsx
import { HeadingBar, icons } from 'ecomdesignsystem';

<HeadingBar
  item1={{ text: "Email", iconUrl: icons.envelope }}
  item2={{ text: "Phone", iconUrl: icons.phone }}
/>
```

### Footer
```tsx
import { Footer } from 'ecomdesignsystem';

<Footer />
```

## 🎨 Design Tokens

```tsx
import { colors, typography } from 'ecomdesignsystem';

// Use design tokens
const style = {
  color: colors.pink,
  fontFamily: typography.heading.fontFamily
};
```

## 🛠️ Setup Requirements

### Tailwind CSS
This design system requires Tailwind CSS. Add to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ecomdesignsystem/**/*.{js,ts,jsx,tsx}"
  ],
  // ... rest of config
}
```

### CSS Import
Add the design system CSS to your app:

```tsx
import 'ecomdesignsystem/dist/index.css';
```

## 📚 Storybook

View all components and examples:

```bash
npm run storybook
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build

# Run tests
npm test
```

## 📄 License

MIT