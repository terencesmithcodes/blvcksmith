# Deployment Guide for BlvckSmith Website

This document provides instructions for deploying the BlvckSmith website to GitHub Pages with a custom domain.

## Prerequisites

- GitHub account
- Git installed locally
- Node.js and npm installed
- Domain name (blvcksmith.com)

## Deployment Process

### 1. Configure GitHub Pages in package.json

Ensure the following settings are in your `package.json`:

```json
"homepage": "https://blvcksmith.com",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 2. Install GitHub Pages Package

If not already installed, install the gh-pages package:

```bash
npm install --save-dev gh-pages
```

### 3. Configure Custom Domain

Ensure the `CNAME` file exists in the `public` directory with your domain name:

```
blvcksmith.com
```

### 4. Build and Deploy

Run the deployment script:

```bash
npm run deploy
```

This will:
1. Build your React app
2. Push the built files to the gh-pages branch of your repository

### 5. Configure DNS Settings

At your domain registrar, set up the following DNS records:

1. A records pointing to GitHub Pages IP addresses:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

2. CNAME record:
   - Name: www
   - Value: yourusername.github.io

### 6. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select "gh-pages" branch
4. Enter your custom domain in the "Custom domain" field
5. Check "Enforce HTTPS" if you want HTTPS support

## Troubleshooting

- If your site is not accessible after deployment, check the GitHub Pages section in your repository settings for any error messages.
- DNS changes can take up to 48 hours to propagate. Be patient if your custom domain doesn't work immediately.
- If your styles or assets are missing, check that paths in your code are relative and not absolute.

## Maintenance

To update the deployed site after making changes:

1. Make your changes and commit them to the main branch
2. Run `npm run deploy` again to update the gh-pages branch

## Contact Form Implementation

The contact form uses FormSubmit.co to process form submissions. Form responses will be sent to the email address configured in the form action attribute.

No backend server is required for the form to function.