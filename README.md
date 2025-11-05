# Dotland Design System

A Lerna monorepo containing the Dotland design system UI components.

## Project Structure

```
dotland-design-system/
├── packages/
│   └── design-system/          # React component library
│       ├── src/
│       │   ├── components/     # UI components
│       │   └── index.ts        # Main export file
│       └── dist/               # Built library (generated)
├── lerna.json                  # Lerna configuration
└── package.json                # Root package configuration
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
# Run all packages in development mode
npm run dev

# Build all packages
npm run build

# Run Storybook for component development
npm run storybook

# Build Storybook static site
npm run build-storybook
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check
```

### Git Hooks

This project uses **Husky** for Git hooks:

- **pre-commit**: Runs `lint-staged` to lint and format staged files automatically

### Working with the Design System Package

The design system package is located at `packages/design-system` and is built with:

- **Material-UI (MUI)** - Base component library with custom theming
- **Vite** for fast builds and HMR
- **React** and **TypeScript** for type-safe components
- **Library mode** for distributing as an npm package
- **Storybook** for component documentation and development
- **ESLint** and **Prettier** for code quality
- **Husky** for Git hooks

### Design System Philosophy

This design system wraps Material-UI components with a custom Dotland theme, providing:

- Consistent branding across all components
- Type-safe component APIs
- Easy theme customization
- Full MUI feature compatibility

#### Building the Library

```bash
# From root
npm run build

# Or from the package directory
cd packages/design-system
npm run build
```

#### Package Exports

The library exports:

- `@dotland/design-system` - Main package name
- ES Module format (`.mjs`)
- CommonJS format (`.cjs`)
- TypeScript definitions (`.d.ts`)

## Component Organization

Components are organized by category:

### Inputs

- **Button** - MUI Button with Dotland theme (variants: contained, outlined, text)

## Usage Example

```tsx
import { Button, dotlandTheme } from '@dotland/design-system';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={dotlandTheme}>
      <Button color="primary" variant="contained" size="medium">
        Click me
      </Button>
    </ThemeProvider>
  );
}
```

**Note**: The Button component includes the ThemeProvider internally, so you can use it without wrapping in ThemeProvider:

```tsx
import { Button } from '@dotland/design-system';

function App() {
  return (
    <Button color="primary" variant="contained">
      Click me
    </Button>
  );
}
```

## Theme Customization

You can access and customize the Dotland theme:

```tsx
import { dotlandThemeOptions } from '@dotland/design-system';
import { createTheme } from '@mui/material/styles';

// Extend the Dotland theme
const customTheme = createTheme({
  ...dotlandThemeOptions,
  palette: {
    ...dotlandThemeOptions.palette,
    primary: {
      main: '#your-color',
    },
  },
});
```

## License

ISC
