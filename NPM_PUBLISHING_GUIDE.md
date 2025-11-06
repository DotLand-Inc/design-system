# NPM Publishing Guide

This guide explains how the automated NPM publishing workflow is configured for the Dotland Design System.

## Overview

The design system is automatically published to NPM when changes are pushed to the `main` branch. The workflow uses Lerna for version management and follows conventional commit standards.

## Configuration Files

### 1. **lerna.json**

Configured for independent versioning with conventional commits:

- `version: "independent"` - Each package maintains its own version
- `conventionalCommits: true` - Automatically determines version bumps from commit messages
- `createRelease: "github"` - Creates GitHub releases with changelogs
- Ignores test files, stories, and documentation changes

### 2. **package.json (root)**

Added scripts for versioning and publishing:

- `npm run version` - Bumps package versions based on conventional commits
- `npm run publish` - Publishes packages to NPM registry

### 3. **packages/design-system/package.json**

Configured with:

- Publishing metadata (description, keywords, author, license)
- Repository information
- `publishConfig` for public access
- `prepublishOnly` script to ensure quality (lint, test, build)
- `files` field to specify what gets published

### 4. **.npmrc**

Configures NPM authentication using the `NPM_TOKEN` environment variable.

### 5. **.npmignore**

Excludes development files from the published package:

- Source files (TypeScript, configs)
- Test files
- Storybook files
- IDE configurations

## GitHub Actions Workflow

The CI pipeline (`.github/workflows/ci.yml`) includes three jobs:

### 1. **build-and-test**

Runs on all pushes and PRs:

- Lints code
- Runs tests
- Builds packages
- Builds Storybook

### 2. **code-quality**

Runs after build-and-test:

- Generates code coverage
- Runs SonarCloud analysis

### 3. **publish**

Runs only on pushes to `main`:

- Requires both previous jobs to pass
- Versions packages using Lerna
- Publishes to NPM registry
- Creates GitHub releases

## Required GitHub Secrets

You need to configure these secrets in your GitHub repository:

### Settings → Secrets and variables → Actions → New repository secret

1. **NPM_TOKEN**
   - Get from: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
   - Click "Generate New Token" → "Classic Token"
   - Select "Automation" type
   - Copy the token and add it to GitHub secrets

2. **GH_TOKEN**
   - Get from: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Required scopes:
     - `repo` (full control)
     - `write:packages`
   - Copy the token and add it to GitHub secrets

3. **SONAR_TOKEN** (if using SonarCloud)
   - Already configured for code quality analysis

4. **SONAR_ORGANIZATION** (if using SonarCloud)
   - Your SonarCloud organization key

5. **SONAR_PROJECT_KEY** (if using SonarCloud)
   - Your SonarCloud project key

## How It Works

### Automatic Version Bumping

Lerna uses conventional commits to determine version bumps:

- **Patch** (0.0.X): `fix:` commits

  ```
  fix: resolve button styling issue
  ```

- **Minor** (0.X.0): `feat:` commits

  ```
  feat: add new TextField component
  ```

- **Major** (X.0.0): Breaking changes

  ```
  feat!: redesign Button API

  BREAKING CHANGE: Button now requires variant prop
  ```

### Publishing Flow

1. Developer pushes code to `main` branch
2. CI runs tests and quality checks
3. If all checks pass, the `publish` job runs:
   - Lerna analyzes commits since last release
   - Determines new version based on commit messages
   - Updates package.json versions
   - Generates CHANGELOG.md
   - Creates git tags
   - Pushes tags to GitHub
   - Creates GitHub release
   - Publishes to NPM registry

### What Gets Published

Only the `dist/` folder and essential files are published:

- `dist/` - Compiled JavaScript and TypeScript definitions
- `README.md` - Package documentation
- `LICENSE` - License file
- `package.json` - Package metadata

Source files, tests, and development configurations are excluded.

## Manual Publishing (if needed)

If you need to manually publish (not recommended):

```bash
# 1. Build packages
npm run build

# 2. Version packages (creates tags and changelog)
npm run version

# 3. Publish to NPM
npm run publish
```

## Commit Message Convention

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Common types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples:

```bash
# Patch version bump
git commit -m "fix: resolve TextField validation issue"

# Minor version bump
git commit -m "feat: add DatePicker component"

# Major version bump (breaking change)
git commit -m "feat!: redesign theme provider API

BREAKING CHANGE: ThemeProvider now requires theme prop instead of using default theme"
```

## Troubleshooting

### Publishing fails with authentication error

- Verify `NPM_TOKEN` is correctly set in GitHub secrets
- Ensure the token has "Automation" permissions
- Check token hasn't expired

### Version not bumping

- Ensure commits follow conventional commit format
- Check that changes aren't in ignored files (tests, docs)
- Verify Lerna configuration in `lerna.json`

### GitHub release creation fails

- Verify `GH_TOKEN` has correct permissions
- Ensure token has `repo` and `write:packages` scopes
- Check token hasn't been revoked

### Package not appearing on NPM

- Verify package name `@dotland/design-system` is available
- Check `publishConfig.access` is set to "public"
- Ensure you have permissions to publish under `@dotland` scope

## Package Installation

Once published, users can install your package:

```bash
npm install @dotland/design-system
```

```bash
yarn add @dotland/design-system
```

```bash
pnpm add @dotland/design-system
```

## Next Steps

1. ✅ Add required GitHub secrets (NPM_TOKEN, GH_TOKEN)
2. ✅ Make sure you have publishing rights on NPM for `@dotland` scope
3. ✅ Test the workflow by pushing a commit to `main`
4. ✅ Verify package appears on NPM
5. ✅ Check GitHub releases are created

## Additional Resources

- [Lerna Documentation](https://lerna.js.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [NPM Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
