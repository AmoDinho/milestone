# Bible Trivia Game - File Index

Complete list of all files in the project.

## 📄 Documentation (6 files)

1. **README.md** - Project overview and installation
2. **QUICKSTART.md** - Quick start guide
3. **DEMO.md** - Detailed gameplay walkthrough
4. **PROJECT_SUMMARY.md** - Comprehensive project summary
5. **ACCEPTANCE_CRITERIA.md** - Requirements verification
6. **DEPLOYMENT.md** - Deployment instructions
7. **FILE_INDEX.md** - This file

## ⚙️ Configuration (5 files)

1. **package.json** - NPM dependencies and scripts
2. **package-lock.json** - Locked dependency versions
3. **vite.config.js** - Vite build configuration
4. **index.html** - HTML entry point
5. **.gitignore** - Git ignore rules

## 🔧 Utilities (2 files)

1. **verify-data.js** - Data validation script
2. **test-app.js** - Component testing script

## 📁 Source Code (14 files)

### Components (3 files)
1. **src/components/Menu.jsx** - Main menu component
2. **src/components/GuessBook.jsx** - Guess the Book game mode
3. **src/components/GuessPerson.jsx** - Guess the Person game mode

### Utilities (3 files)
4. **src/utils/bibleApi.js** - Bible passages and book data
5. **src/utils/scoring.js** - Scoring calculation logic
6. **src/utils/questionLogic.js** - Question answering system

### Data (2 files)
7. **src/data/passages.json** - 30 Bible passages
8. **src/data/biblical_figures.json** - 35 Biblical figures

### Styles (4 files)
9. **src/styles/App.module.css** - App container styles
10. **src/styles/Menu.module.css** - Menu component styles
11. **src/styles/GameCard.module.css** - Game card styles
12. **src/index.css** - Global styles

### Core (2 files)
13. **src/App.jsx** - Main application component
14. **src/main.jsx** - React entry point

## 📊 Statistics

```
Total Files: 27
- Documentation: 7 files
- Configuration: 5 files
- Source Code: 14 files
- Utilities: 2 files

Lines of Code: ~1,700+
- JavaScript/JSX: ~1,200 lines
- CSS: ~400 lines
- JSON: ~650 lines
- Documentation: ~1,500 lines

Components: 3
Utility Functions: 3
Data Files: 2
Style Files: 4

Build Output:
- HTML: 0.46 kB
- CSS: 6.29 kB
- JS: 177.06 kB
- Total: 183.81 kB (58.78 kB gzipped)
```

## 🗂️ Directory Structure

```
bible-trivia-game/
│
├── 📄 Documentation
│   ├── README.md
│   ├── QUICKSTART.md
│   ├── DEMO.md
│   ├── PROJECT_SUMMARY.md
│   ├── ACCEPTANCE_CRITERIA.md
│   ├── DEPLOYMENT.md
│   └── FILE_INDEX.md
│
├── ⚙️ Configuration
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── index.html
│   └── .gitignore
│
├── 🔧 Utilities
│   ├── verify-data.js
│   └── test-app.js
│
├── 📁 src/
│   ├── 🎯 App.jsx
│   ├── 🎯 main.jsx
│   ├── 🎨 index.css
│   │
│   ├── components/
│   │   ├── Menu.jsx
│   │   ├── GuessBook.jsx
│   │   └── GuessPerson.jsx
│   │
│   ├── utils/
│   │   ├── bibleApi.js
│   │   ├── scoring.js
│   │   └── questionLogic.js
│   │
│   ├── data/
│   │   ├── passages.json (30 entries)
│   │   └── biblical_figures.json (35 entries)
│   │
│   └── styles/
│       ├── App.module.css
│       ├── Menu.module.css
│       └── GameCard.module.css
│
├── 📦 node_modules/ (66 packages)
│
├── 🏗️ dist/ (production build)
│   ├── index.html
│   └── assets/
│       ├── index-[hash].css
│       └── index-[hash].js
│
└── 📁 public/ (empty - ready for assets)
```

## 🎯 Key Files Explained

### App.jsx
Main application component. Manages routing between menu and game modes, tracks session score.

### Menu.jsx
Home screen with mode selection buttons and session score display.

### GuessBook.jsx
Game mode where players identify Bible books from passages. Includes hint system and scoring.

### GuessPerson.jsx
Game mode where players ask yes/no questions to identify Biblical figures.

### bibleApi.js
Handles Bible passage retrieval, book lists, and book hints.

### questionLogic.js
Intelligent question answering system for the Guess Person mode. Supports 20+ question types.

### scoring.js
Calculates points based on performance, hints used, and attempts made.

### passages.json
Cache of 30 Bible passages from 22 different books across Old and New Testament.

### biblical_figures.json
Database of 35 prominent Biblical figures with complete metadata for question answering.

## 📝 Usage

To understand the project:

1. **Start here:** README.md
2. **Quick play:** QUICKSTART.md
3. **Detailed guide:** DEMO.md
4. **Technical info:** PROJECT_SUMMARY.md
5. **Requirements:** ACCEPTANCE_CRITERIA.md
6. **Deploy:** DEPLOYMENT.md

## 🔍 Finding Things

**Need to modify game logic?**
- Scoring: `src/utils/scoring.js`
- Questions: `src/utils/questionLogic.js`
- Passages: `src/utils/bibleApi.js`

**Need to change UI?**
- Components: `src/components/`
- Styles: `src/styles/`

**Need to add data?**
- Bible passages: `src/data/passages.json`
- Biblical figures: `src/data/biblical_figures.json`

**Need to update config?**
- Dependencies: `package.json`
- Build: `vite.config.js`
- HTML: `index.html`

## ✅ Complete Project

All files are present and functional. The project is ready for:
- ✅ Development
- ✅ Testing
- ✅ Production build
- ✅ Deployment

Last updated: January 15, 2025
