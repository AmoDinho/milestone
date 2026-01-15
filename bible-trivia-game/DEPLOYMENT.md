# Deployment Guide

This guide covers deploying the Bible Trivia Game to various platforms.

## 📦 Build for Production

```bash
cd bible-trivia-game
npm install
npm run build
```

The production build will be in the `dist/` folder.

## 🌐 Deployment Options

### Option 1: Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Connect your Git repository
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
cd bible-trivia-game
npm run build
netlify deploy --prod --dir=dist
```

### Option 2: Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd bible-trivia-game
vercel
```

Vercel auto-detects Vite and configures everything.

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/bible-trivia-game"
}
```

3. Update vite.config.js:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/bible-trivia-game/'
})
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: Static Web Server

Copy the `dist/` folder to any static web server:

**Apache:**
```bash
cp -r dist/* /var/www/html/
```

**Nginx:**
```bash
cp -r dist/* /usr/share/nginx/html/
```

**Python (for testing):**
```bash
cd dist
python3 -m http.server 8000
```

Open: http://localhost:8000

### Option 5: Docker

Create `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t bible-trivia-game .
docker run -p 8080:80 bible-trivia-game
```

## 🔧 Configuration

### Base URL
If deploying to a subdirectory, update `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-subdirectory/'
})
```

### Environment Variables
Currently not used, but can be added:

1. Create `.env`:
```
VITE_API_KEY=your_api_key_here
```

2. Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

## 📊 Post-Deployment Checklist

- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Check both game modes work
- [ ] Verify scoring system
- [ ] Test hint functionality
- [ ] Check responsive design
- [ ] Verify session score tracking
- [ ] Test keyboard navigation
- [ ] Check all buttons are clickable

## 🔒 Production Optimizations

Already included in build:
- ✅ Minification
- ✅ Tree shaking
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Gzip compression

## 📈 Analytics (Optional)

Add Google Analytics to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on reload (SPA routing)
Add to your server config:

**Netlify** - Create `_redirects` in `public/`:
```
/*    /index.html   200
```

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Apache** - `.htaccess`:
```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Large bundle size
Already optimized! Current build:
- Total: 183 KB
- Gzipped: 58 KB

This is excellent for a React app.

## 🚀 CDN Integration

For faster global delivery, use a CDN:

1. **Cloudflare**: Add your site to Cloudflare
2. **AWS CloudFront**: Create distribution pointing to S3 bucket
3. **Fastly**: Configure custom CDN

## 📱 PWA (Optional Future Enhancement)

To make it a Progressive Web App:

1. Add manifest.json
2. Add service worker
3. Add offline support
4. Add install prompt

## 🎉 You're Live!

Your Bible Trivia Game is now deployed and accessible to the world!

**Share your deployment:**
- Add URL to README.md
- Share on social media
- Submit to educational resource directories
- Share with churches and Bible study groups

## 📧 Support

For deployment issues, check:
- Vite documentation: https://vitejs.dev/
- Platform-specific docs
- GitHub Issues
