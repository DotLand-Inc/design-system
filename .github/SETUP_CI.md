# CI/CD Setup Guide

This guide will help you set up the continuous integration and code quality tools for the Dotland Design System.

## Prerequisites

- GitHub repository
- GitHub account with admin access
- SonarCloud account (free for open source projects)

## Step-by-Step Setup

### 1. GitHub Actions Setup

GitHub Actions is automatically enabled for your repository. The workflow file is located at `.github/workflows/ci.yml`.

The workflow will run automatically on:
- Every push to any branch
- Every pull request to any branch

**No additional setup required for GitHub Actions.**

### 2. SonarCloud Setup

#### 2.1 Create SonarCloud Account

1. Go to [SonarCloud.io](https://sonarcloud.io)
2. Click "Log in" and authenticate with your GitHub account
3. Authorize SonarCloud to access your GitHub account

#### 2.2 Import Your Repository

1. Once logged in, click the "+" icon in the top right
2. Select "Analyze new project"
3. Choose your organization or create a new one
4. Select the `design-system` repository
5. Click "Set Up"

#### 2.3 Configure SonarCloud Project

1. After importing, SonarCloud will assign:
   - **Organization Key**: Your organization identifier
   - **Project Key**: Your project identifier (usually in format `org_repo`)

2. Go to "Administration" → "Analysis Method"
3. Select "With GitHub Actions"
4. SonarCloud will display the configuration you need

#### 2.4 Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret" and add the following secrets:

   | Secret Name | Description | Where to Find |
   |-------------|-------------|---------------|
   | `SONAR_TOKEN` | SonarCloud authentication token | SonarCloud → My Account → Security → Generate Token |
   | `SONAR_ORGANIZATION` | Your SonarCloud organization key | SonarCloud → Organization Settings → Key |
   | `SONAR_PROJECT_KEY` | Your SonarCloud project key | SonarCloud → Project Settings → Project Key |

**Important**: The `GITHUB_TOKEN` is automatically provided by GitHub Actions and doesn't need to be added manually.

#### 2.5 Update README Badges

1. Open `README.md`
2. Replace the placeholder values:
   - Replace `YOUR_USERNAME` with your GitHub username or organization
   - Replace `YOUR_PROJECT_KEY` with your SonarCloud project key

Example:
```markdown
[![CI](https://github.com/dotland-org/design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/dotland-org/design-system/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dotland-org_design-system&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dotland-org_design-system)
```

### 3. Configure Quality Gate (Optional)

SonarCloud comes with a default quality gate. To customize it:

1. Go to SonarCloud → Your Project
2. Navigate to "Quality Gates"
3. Create a custom quality gate or modify the default one
4. Set conditions for:
   - Code coverage (recommended: at least 80%)
   - Maintainability rating (recommended: A)
   - Security rating (recommended: A)
   - Reliability rating (recommended: A)

### 4. Test the Setup

1. Make a small change to your code
2. Commit and push to a branch
3. Create a pull request
4. Verify that:
   - GitHub Actions workflow runs successfully
   - SonarCloud analysis completes
   - Quality gate check passes/fails appropriately
   - PR shows status checks from both GitHub Actions and SonarCloud

## Workflow Details

### Build and Test Job

- **Trigger**: Every push and PR
- **Node versions**: 18.x and 20.x (matrix strategy)
- **Steps**:
  1. Checkout code
  2. Setup Node.js
  3. Install dependencies
  4. Lint code
  5. Check formatting
  6. Run tests
  7. Build packages
  8. Build Storybook
  9. Upload artifacts (Node 20.x only)

### Code Quality Job

- **Trigger**: After build-and-test succeeds
- **Node version**: 20.x
- **Steps**:
  1. Checkout code
  2. Setup Node.js
  3. Install dependencies
  4. Run tests with coverage
  5. Send results to SonarCloud
  6. Check quality gate status

## Troubleshooting

### GitHub Actions Fails

**Issue**: Workflow fails on dependencies installation
- **Solution**: Make sure `package-lock.json` is committed

**Issue**: Tests fail
- **Solution**: Run tests locally first with `npm run test`

**Issue**: Build fails
- **Solution**: Run build locally with `npm run build` and fix any errors

### SonarCloud Issues

**Issue**: SonarCloud scan fails with authentication error
- **Solution**: Verify `SONAR_TOKEN` secret is correctly set in GitHub

**Issue**: Quality gate fails
- **Solution**: Check the SonarCloud dashboard for specific issues (code coverage, bugs, vulnerabilities)

**Issue**: Coverage report not found
- **Solution**: Ensure tests run with coverage: `npm run test -- --coverage`

**Issue**: Wrong project analyzed
- **Solution**: Verify `SONAR_PROJECT_KEY` matches your SonarCloud project

### Badge Not Showing

**Issue**: Badge shows "unknown" or error
- **Solution**:
  1. Verify project key is correct in badge URL
  2. Ensure SonarCloud analysis has completed at least once
  3. Check project is public in SonarCloud (for public repositories)

## Maintenance

### Updating Node.js Versions

Edit `.github/workflows/ci.yml` and update the matrix:

```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x, 22.x]  # Add new versions here
```

### Adjusting Coverage Requirements

Edit `sonar-project.properties` to add coverage thresholds or modify exclusions:

```properties
sonar.coverage.exclusions=**/*.stories.tsx,**/*.spec.tsx
```

### Modifying Quality Gate

In SonarCloud dashboard:
1. Go to Quality Gates
2. Select your quality gate
3. Add/modify conditions
4. Save changes

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [SonarCloud Documentation](https://docs.sonarcloud.io/)
- [Vitest Coverage Documentation](https://vitest.dev/guide/coverage.html)
- [SonarCloud GitHub Action](https://github.com/SonarSource/sonarcloud-github-action)

## Support

If you encounter issues:
1. Check the GitHub Actions logs for detailed error messages
2. Review SonarCloud analysis results
3. Consult the troubleshooting section above
4. Open an issue in the repository
