# Troubleshooting Guide

## ✅ Verified Working

I've tested the application and confirmed:

1. **Build**: ✅ `npm run build` completes successfully
2. **Data**: ✅ All JSON files are valid
3. **Dev Server**: ✅ Starts on port 5173
4. **Dependencies**: ✅ All 67 packages installed

## 🔍 What Could Be "Not Working"?

Please specify which of these issues you're experiencing:

### 1. Installation Issues
```bash
# If dependencies aren't installing:
rm -rf node_modules package-lock.json
npm install
```

### 2. Build Errors
```bash
# Check for build errors:
npm run build
```
**Status**: ✅ Working (tested successfully)

### 3. Dev Server Not Starting
```bash
# Start the dev server:
npm run dev
```
**Status**: ✅ Working (server starts on http://localhost:5173)

### 4. Browser Display Issues

If the app loads but doesn't display correctly:

**Check Console Errors**:
1. Open browser dev tools (F12)
2. Go to Console tab
3. Look for red error messages

**Common Issues**:
- CSS not loading → Check if `dist/assets/*.css` exists
- JavaScript errors → Check browser console
- White screen → Check React error overlay

### 5. Game Functionality Issues

**Guess the Book Mode**:
- ✅ Passages loading from JSON
- ✅ 30 passages available
- ✅ Hint system implemented
- ✅ Scoring calculation working

**Guess the Person Mode**:
- ✅ 35 Biblical figures available
- ✅ Question answering logic implemented
- ✅ Hint system implemented
- ✅ Scoring calculation working

### 6. Specific Component Issues

If a specific component isn't working, check:

```bash
# Verify all components exist:
ls -la src/components/

# Should show:
# - Menu.jsx
# - GuessBook.jsx
# - GuessPerson.jsx
```

## 🐛 Debug Steps

### Step 1: Check Installation
```bash
cd bible-trivia-game
npm install
```

### Step 2: Verify Data Files
```bash
node verify-data.js
```
Expected output:
```
✅ passages.json is valid JSON
   - Contains 30 passages
✅ biblical_figures.json is valid JSON
   - Contains 35 Biblical figures
```

### Step 3: Test Build
```bash
npm run build
```
Expected: No errors, creates `dist/` folder

### Step 4: Run Dev Server
```bash
npm run dev
```
Expected: Server starts on http://localhost:5173

### Step 5: Open in Browser
Open http://localhost:5173 in your browser

## 📋 Checklist

- [ ] Node.js installed (v16+)
- [ ] In correct directory (`bible-trivia-game/`)
- [ ] Dependencies installed (`npm install`)
- [ ] No port conflicts (5173 available)
- [ ] Browser supports modern JavaScript
- [ ] No firewall blocking localhost

## 🔧 Quick Fixes

### Port Already in Use
```bash
# Kill process on port 5173:
kill -9 $(lsof -t -i:5173)
# Or use different port:
npm run dev -- --port 3000
```

### Clear Cache
```bash
rm -rf node_modules dist .vite
npm install
npm run build
```

### Module Not Found Errors
Check that all these files exist:
```bash
ls -R src/
```

Should include:
- src/App.jsx
- src/main.jsx
- src/components/ (3 files)
- src/utils/ (3 files)
- src/data/ (2 files)
- src/styles/ (3 files)

## 🆘 Still Not Working?

Please provide:
1. **Exact error message** (copy/paste from terminal or browser console)
2. **What command you ran** (e.g., `npm run dev`)
3. **What you expected** vs **what actually happened**
4. **Browser and version** (if browser issue)
5. **Node.js version** (`node --version`)

### Get System Info
```bash
node --version
npm --version
pwd
ls -la
```

## 💡 Common Solutions

### "Module not found"
→ Run `npm install` again

### "vite: not found"
→ Dependencies not installed, run `npm install`

### "Port 5173 already in use"
→ Kill existing process or use different port

### White screen in browser
→ Check browser console for errors

### CSS not loading
→ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### React errors in console
→ Check component import paths

## ✅ Verification Commands

Run these to verify everything:

```bash
# 1. Check if in right directory
pwd
# Should end with: /bible-trivia-game

# 2. Check Node version
node --version
# Should be v16+ or v18+

# 3. Check files exist
ls src/components/
# Should show: Menu.jsx GuessBook.jsx GuessPerson.jsx

# 4. Verify data
node verify-data.js
# Should show: ✅ All data files verified successfully!

# 5. Test build
npm run build
# Should show: ✓ built in X.XXs

# 6. Start dev server
npm run dev
# Should show: Local: http://localhost:5173/
```

If all these pass but it's still "not working", please describe exactly what isn't working!
