# Deployment Guide for Bajaj Finserv API

This guide covers deployment to various hosting platforms.

## Option 1: Vercel (Recommended - Free & Easy)

### Prerequisites
- GitHub account
- Vercel account (free at vercel.com)

### Steps
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Bajaj Finserv API"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bajaj-finserv-api.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect it's a Node.js project
   - Click "Deploy"

3. **Your API will be available at:**
   ```
   https://your-project-name.vercel.app/bfhl
   ```

## Option 2: Railway

### Prerequisites
- GitHub account
- Railway account (free tier available)

### Steps
1. **Push to GitHub** (same as above)

2. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - Sign in with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-deploy

3. **Your API will be available at:**
   ```
   https://your-project-name.railway.app/bfhl
   ```

## Option 3: Render

### Prerequisites
- GitHub account
- Render account (free tier available)

### Steps
1. **Push to GitHub** (same as above)

2. **Deploy on Render:**
   - Go to [render.com](https://render.com)
   - Sign in with GitHub
   - Click "New +" → "Web Service"
   - Connect your repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Click "Create Web Service"

3. **Your API will be available at:**
   ```
   https://your-project-name.onrender.com/bfhl
   ```

## Option 4: Heroku

### Prerequisites
- GitHub account
- Heroku account (free tier discontinued, paid only)

### Steps
1. **Push to GitHub** (same as above)

2. **Deploy on Heroku:**
   - Go to [heroku.com](https://heroku.com)
   - Sign in and create new app
   - Connect to GitHub repository
   - Enable automatic deploys
   - Deploy branch

3. **Your API will be available at:**
   ```
   https://your-app-name.herokuapp.com/bfhl
   ```

## Environment Variables

If you need to set environment variables:

- **Vercel:** Project Settings → Environment Variables
- **Railway:** Variables tab in your project
- **Render:** Environment tab in your service
- **Heroku:** Settings → Config Vars

## Testing Your Deployed API

Once deployed, test with:

```bash
# Example A
curl -X POST https://your-api-url.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'

# Example B
curl -X POST https://your-api-url.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}'

# Example C
curl -X POST https://your-api-url.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A","ABcD","DOE"]}'
```

## Monitoring

- **Vercel:** Built-in analytics and monitoring
- **Railway:** Logs and metrics in dashboard
- **Render:** Logs and uptime monitoring
- **Heroku:** Logs and add-on monitoring

## Cost

- **Vercel:** Free tier with generous limits
- **Railway:** Free tier available, then pay-as-you-use
- **Render:** Free tier available, then $7/month
- **Heroku:** Paid only (starting ~$7/month)

## Recommendation

**Use Vercel** for the easiest deployment experience with a generous free tier.
