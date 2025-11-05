# SonarCloud Quick Start Guide

## Current Status

⚠️ **The code quality job is currently skipped because SonarCloud is not configured yet.**

The main CI pipeline (build, test, lint) will continue to work without SonarCloud. Once you complete the setup below, code quality analysis will be added automatically.

## Error You Saw

```
ERROR Could not find a default branch for project with key '***'.
Make sure project exists.
```

**What this means:** SonarCloud is looking for a project that doesn't exist yet. You need to create and configure the project in SonarCloud before the GitHub Action can run the analysis.

**The fix:** Follow the steps below to create the project in SonarCloud and configure the default branch.

## Setup Steps (5 minutes)

### Step 1: Create SonarCloud Account

1. Go to https://sonarcloud.io
2. Click **"Log in"** in the top right
3. Select **"With GitHub"**
4. Authorize SonarCloud to access your GitHub account

### Step 2: Import Your Repository

1. Once logged in, click the **"+"** icon in the top right corner
2. Select **"Analyze new project"**
3. You'll see a list of your GitHub repositories
4. Find and select your `design-system` repository
5. Click **"Set Up"**

### Step 3: Configure Analysis Method

After importing, configure how the analysis will run:

1. Go to your project in SonarCloud
2. Click **"Administration"** → **"Analysis Method"**
3. Turn OFF "Automatic Analysis"
4. Select **"GitHub Actions"**
5. SonarCloud will display the configuration - you don't need to copy it, we already have it set up

### Step 4: Get Your Project Keys

Note these important values:

- **Organization Key**: Found in the URL or under "My Organizations"
  - Example: `your-github-username` or `your-org-name`

- **Project Key**: Automatically generated, usually in format:
  - Example: `your-github-username_design-system`

Write these down - you'll need them in the next step!

### Step 5: Generate a Token

1. Click your profile picture in the top right
2. Go to **"My Account"** → **"Security"**
3. Under **"Generate Tokens"**:
   - Name: `GitHub Actions CI`
   - Type: `User Token`
   - Expiration: Choose appropriate duration (e.g., 90 days or no expiration)
4. Click **"Generate"**
5. **Copy the token immediately** (you won't see it again!)

### Step 6: Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"** and add these three secrets:

   **Secret 1:**
   - Name: `SONAR_TOKEN`
   - Value: The token you just generated

   **Secret 2:**
   - Name: `SONAR_ORGANIZATION`
   - Value: Your organization key from Step 4

   **Secret 3:**
   - Name: `SONAR_PROJECT_KEY`
   - Value: Your project key from Step 4

### Step 7: Update README Badges

Open `README.md` and replace the placeholder values:

**Find:**

```markdown
[![CI](https://github.com/YOUR_USERNAME/design-system/actions/workflows/ci.yml/badge.svg)]
```

**Replace with:**

```markdown
[![CI](https://github.com/your-actual-username/design-system/actions/workflows/ci.yml/badge.svg)]
```

**Find:**

```markdown
https://sonarcloud.io/api/project_badges/measure?project=YOUR_PROJECT_KEY
```

**Replace with:**

```markdown
https://sonarcloud.io/api/project_badges/measure?project=your-actual-project-key
```

Replace in **all 4 badge URLs**.

### Step 8: Test the Setup

1. Commit and push your changes:

   ```bash
   git add .
   git commit -m "chore: configure SonarCloud"
   git push
   ```

2. Go to GitHub Actions tab and watch the workflow run

3. The "Code Quality Analysis" job should now run successfully!

4. Check SonarCloud dashboard to see your first analysis

## Verification Checklist

- [ ] SonarCloud account created
- [ ] Repository imported to SonarCloud
- [ ] Token generated
- [ ] All 3 secrets added to GitHub:
  - [ ] SONAR_TOKEN
  - [ ] SONAR_ORGANIZATION
  - [ ] SONAR_PROJECT_KEY
- [ ] README badges updated
- [ ] Workflow runs successfully
- [ ] SonarCloud shows analysis results

## Quick Reference

### Your Configuration

Fill this in as you go through the setup:

```
Organization Key: _________________________

Project Key: _________________________

Token: (stored in GitHub secrets)
```

## Troubleshooting

### "Project doesn't exist" or "default branch not found" error

- **Cause**: Project not imported in SonarCloud yet, or analysis method not configured
- **Fix**:
  1. Make sure you completed Step 2 (Import Repository)
  2. Disable "Automatic Analysis" in Step 3
  3. Ensure all 3 secrets are added in Step 6
  4. The first successful analysis will establish the main branch automatically

### "Authentication failed" error

- **Cause**: Invalid or missing SONAR_TOKEN
- **Fix**: Regenerate token and update secret

### Code Quality job is skipped

- **Cause**: SONAR_TOKEN secret not set
- **Fix**: This is expected until you complete Step 5

### Badge shows "unknown"

- **Cause**: Analysis hasn't run yet or wrong project key
- **Fix**: Wait for first successful analysis, verify project key

## What Happens After Setup?

Once configured, every push and PR will:

1. ✅ Run all tests
2. ✅ Check code quality with lint/format
3. ✅ Build the package
4. ✅ **Analyze code with SonarCloud**
5. ✅ **Generate coverage reports**
6. ✅ **Check quality gate**
7. ✅ **Show results in PR**

## Need Help?

- SonarCloud docs: https://docs.sonarcloud.io/
- Detailed setup guide: `.github/SETUP_CI.md`
- GitHub Actions logs: Check the Actions tab in your repo

## Alternative: Skip SonarCloud Entirely

If you don't want to use SonarCloud:

1. Delete the `code-quality` job from `.github/workflows/ci.yml`
2. Remove SonarCloud badges from `README.md`
3. Delete `sonar-project.properties`

The rest of the CI pipeline will work perfectly fine without it!

---

**Current CI Status**: ✅ Build and Test working | ⏳ SonarCloud pending setup
