# Dotland Design System

[![CI](https://github.com/YOUR_USERNAME/design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/design-system/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=YOUR_PROJECT_KEY&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=YOUR_PROJECT_KEY)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=YOUR_PROJECT_KEY&metric=coverage)](https://sonarcloud.io/summary/new_code?id=YOUR_PROJECT_KEY)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=YOUR_PROJECT_KEY&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=YOUR_PROJECT_KEY)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=YOUR_PROJECT_KEY&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=YOUR_PROJECT_KEY)

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

This design system re-exports Material-UI components with a custom Dotland theme, providing:

- **Simple re-exports**: Direct access to all MUI components and their types
- **Consistent branding**: Apply the Dotland theme via ThemeProvider
- **Type-safe APIs**: Full TypeScript support from MUI
- **Easy theme customization**: Modify the Dotland theme to fit your needs
- **Full MUI compatibility**: All MUI features and props available

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

- **Button** - Re-exported MUI Button component

## Usage Example

### Using the Global Theme Provider (Recommended)

The design system includes a `DotlandThemeProvider` that applies the theme globally to all components:

```tsx
import { Button, DotlandThemeProvider } from '@dotland/design-system';

function App() {
  return (
    <DotlandThemeProvider>
      <Button color="primary" variant="contained">
        Click me
      </Button>
    </DotlandThemeProvider>
  );
}
```

The `DotlandThemeProvider` automatically applies:

- The Dotland custom theme
- MUI's CssBaseline for consistent baseline styles
- Global theme configuration to all child components

### Alternative: Using MUI ThemeProvider Directly

You can also use MUI's ThemeProvider directly if you need more control:

```tsx
import { Button, dotlandTheme } from '@dotland/design-system';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={dotlandTheme}>
      <Button color="primary" variant="contained">
        Click me
      </Button>
    </ThemeProvider>
  );
}
```

All MUI component props and features are available directly.

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

## CI/CD and Code Quality

This project uses GitHub Actions for continuous integration and SonarCloud for code quality analysis.

### GitHub Actions Workflow

The CI workflow runs on every push and pull request:

- **Build and Test Job**:
  - Runs on Node.js 18.x and 20.x
  - Installs dependencies
  - Lints code with ESLint
  - Checks code formatting with Prettier
  - Runs all tests
  - Builds packages
  - Builds Storybook
  - Uploads build artifacts

- **Code Quality Job**:
  - Runs tests with coverage
  - Performs SonarCloud analysis
  - Checks quality gate status

### Setting up SonarCloud

To enable SonarCloud integration, you need to:

1. **Create a SonarCloud account** at [sonarcloud.io](https://sonarcloud.io)

2. **Import your repository** to SonarCloud

3. **Add the following secrets** to your GitHub repository settings:
   - `SONAR_TOKEN`: Your SonarCloud token
   - `SONAR_ORGANIZATION`: Your SonarCloud organization key
   - `SONAR_PROJECT_KEY`: Your SonarCloud project key

4. **Update the README badges** with your actual project information:
   - Replace `YOUR_USERNAME` with your GitHub username
   - Replace `YOUR_PROJECT_KEY` with your SonarCloud project key

### Running Tests with Coverage Locally

```bash
# Run tests with coverage
npm run test -- --coverage

# View coverage report
open coverage/index.html
```

### Code Quality Metrics

SonarCloud analyzes:

- Code coverage
- Code smells
- Bugs and vulnerabilities
- Security hotspots
- Technical debt
- Maintainability rating
- Security rating

## License

ISC
