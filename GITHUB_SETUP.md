# GitHub Repository Setup Guide

Follow these steps to create and push your code to GitHub.

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name:** `bajaj-finserv-api`
   - **Description:** `REST API for Bajaj Finserv assignment`
   - **Visibility:** Public
   - **Initialize with:** Don't check any boxes
5. Click "Create repository"

## Step 2: Initialize Local Git Repository

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Bajaj Finserv API"

# Rename branch to main
git branch -M main

# Add remote origin (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/bajaj-finserv-api.git

# Push to GitHub
git push -u origin main
```

## Step 3: Verify Repository

1. Go to your GitHub repository page
2. You should see all your files:
   - `server.js`
   - `package.json`
   - `README.md`
   - `DEPLOYMENT.md`
   - `vercel.json`
   - `.gitignore`
   - `test.js`

## Step 4: Enable GitHub Pages (Optional)

If you want to show your README nicely:

1. Go to repository Settings
2. Scroll down to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

## Step 5: Add Repository Topics

Add relevant topics to make your repository discoverable:

1. Go to your repository page
2. Click on the gear icon next to "About" section
3. Add these topics:
   - `api`
   - `rest-api`
   - `nodejs`
   - `express`
   - `bajaj-finserv`
   - `javascript`

## Step 6: Update README with Repository Links

After pushing to GitHub, update your README.md to include:

```markdown
## Repository

- **GitHub:** [https://github.com/YOUR_USERNAME/bajaj-finserv-api](https://github.com/YOUR_USERNAME/bajaj-finserv-api)
- **Live API:** [https://your-deployed-url.com/bfhl](https://your-deployed-url.com/bfhl)
```

## Step 7: Create Issues for Future Improvements

Create some issues to show project planning:

1. Go to "Issues" tab
2. Click "New issue"
3. Create issues like:
   - "Add input validation improvements"
   - "Implement rate limiting"
   - "Add API documentation with Swagger"
   - "Add unit tests with Jest"

## Step 8: Set Up Branch Protection (Optional)

For production code:

1. Go to Settings → Branches
2. Add rule for "main" branch
3. Check "Require pull request reviews"
4. Check "Require status checks to pass"

## Repository Structure

Your final repository should look like this:

```
bajaj-finserv-api/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
├── DEPLOYMENT.md          # Deployment instructions
├── GITHUB_SETUP.md        # This file
├── vercel.json            # Vercel configuration
├── .gitignore             # Git ignore rules
└── test.js                # Test suite
```

## Next Steps

After setting up GitHub:

1. **Deploy to Vercel** (see DEPLOYMENT.md)
2. **Submit the form** with your deployed API URL
3. **Share your repository** in the submission

## Troubleshooting

### If you get authentication errors:
```bash
# Use GitHub CLI
gh auth login

# Or use personal access token
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/bajaj-finserv-api.git
```

### If you need to update remote URL:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/bajaj-finserv-api.git
```

### If you need to force push (be careful):
```bash
git push -f origin main
```
