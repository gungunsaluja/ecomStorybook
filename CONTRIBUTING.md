# Contributing to E-commerce Design System

Thank you for your interest in contributing to our design system! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Start Storybook: `npm run storybook`
5. Create a new branch for your feature

## 📝 Development Guidelines

### Component Development

1. **Create components in `src/components/`**
2. **Follow the existing structure:**
   ```
   src/components/ComponentName/
   ├── ComponentName.tsx
   ├── ComponentName.css
   └── index.ts
   ```

3. **Create Storybook stories in `stories/`**
4. **Export components from `src/components/index.ts`**
5. **Update main export in `src/index.ts`**

### Code Style

- Use TypeScript for all components
- Follow existing naming conventions
- Use CSS modules for styling
- Include proper TypeScript interfaces
- Add JSDoc comments for complex functions

### Component Requirements

- **Accessibility**: All components must be accessible
- **Responsive**: Mobile-first design approach
- **Customizable**: Props for styling and behavior
- **Documented**: Clear Storybook documentation
- **Tested**: Include interaction tests

## 🧪 Testing

- Test components in Storybook
- Ensure responsive design works
- Verify accessibility features
- Test keyboard navigation

## 📚 Documentation

- Update README.md for new features
- Add component documentation in Storybook
- Include usage examples
- Document any breaking changes

## 🔄 Pull Request Process

1. **Create a feature branch**
2. **Make your changes**
3. **Test thoroughly**
4. **Update documentation**
5. **Submit pull request with:**
   - Clear description of changes
   - Screenshots if UI changes
   - Link to related issues

## 🐛 Bug Reports

When reporting bugs, please include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser/device information

## ✨ Feature Requests

For new features:
- Check existing issues first
- Provide clear use case
- Include mockups if possible
- Consider impact on existing components

## 📋 Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the golden rule

## 📞 Questions?

Feel free to open an issue for questions or reach out to the maintainers.

Thank you for contributing! 🎉
