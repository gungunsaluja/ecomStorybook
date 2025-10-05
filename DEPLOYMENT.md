# Deployment Guide

This guide explains how to deploy the E-commerce Design System to GitHub and make it available for others to use.

## 🚀 GitHub Repository Setup

### 1. Create GitHub Repository

1. Go to GitHub and create a new repository
2. Name it `ecomdesignsystem` (or your preferred name)
3. Make it public for open source sharing
4. Initialize with README (optional)

### 2. Push Your Code

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: E-commerce Design System"

# Add remote origin (replace with your GitHub URL)
git remote add origin https://github.com/your-username/ecomdesignsystem.git

# Push to main branch
git push -u origin main
```

## 📦 Publishing to NPM

### 1. Create NPM Account

1. Go to [npmjs.com](https://www.npmjs.com)
2. Create a free account
3. Verify your email address

### 2. Login to NPM

```bash
npm login
```

### 3. Publish Package

```bash
# Build the project
npm run build-storybook

# Publish to NPM
npm publish
```

## 🌐 GitHub Pages Deployment

### 1. Enable GitHub Pages

1. Go to repository Settings
2. Scroll to "Pages" section
3. Select "GitHub Actions" as source
4. The workflow will automatically deploy Storybook

### 2. Access Your Storybook

After deployment, your Storybook will be available at:
`https://your-username.github.io/ecomdesignsystem`

## 📚 Usage by Others

### Installation

Others can install your design system:

```bash
npm install ecomdesignsystem
```

### Usage in Their Projects

```tsx
import { Button, Input, Icon } from 'ecomdesignsystem';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text" />
      <Icon name="cart" />
    </div>
  );
}
```

## 🔄 Continuous Deployment

The GitHub Actions workflows will automatically:

1. **Deploy Storybook** when you push to main branch
2. **Publish to NPM** when you create a release

### Creating Releases

1. Go to repository "Releases" section
2. Click "Create a new release"
3. Tag version (e.g., v1.0.0)
4. Add release notes
5. Publish release

## 🛠️ Local Development

### For Contributors

```bash
# Clone repository
git clone https://github.com/your-username/ecomdesignsystem.git

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Start Next.js dev server
npm run dev
```

## 📋 Checklist for Publishing

- [ ] Repository is public
- [ ] README.md is complete
- [ ] LICENSE file is added
- [ ] All components are documented
- [ ] Storybook builds successfully
- [ ] GitHub Actions are working
- [ ] NPM package is published
- [ ] GitHub Pages is deployed

## 🔗 Useful Links

- [GitHub Repository](https://github.com/your-username/ecomdesignsystem)
- [NPM Package](https://www.npmjs.com/package/ecomdesignsystem)
- [Storybook Documentation](https://your-username.github.io/ecomdesignsystem)
- [Contributing Guide](CONTRIBUTING.md)

## 🆘 Troubleshooting

### Common Issues

1. **Build fails**: Check all dependencies are installed
2. **Storybook won't start**: Verify all stories are properly exported
3. **NPM publish fails**: Check package.json configuration
4. **GitHub Pages not working**: Verify workflow file is correct

### Getting Help

- Check existing issues on GitHub
- Create a new issue with detailed description
- Include error messages and steps to reproduce
