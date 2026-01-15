# Bible Trivia Game

A responsive React application for playing Bible trivia with two exciting game modes.

## Features

### Game Modes

1. **Guess the Book** 📖
   - Read a Bible passage and identify which book it's from
   - Get hints about the book's context, author, or theme
   - Score points based on accuracy and efficiency

2. **Guess the Person** 👤
   - Think of a Biblical figure and ask yes/no questions
   - Narrow down possibilities through intelligent questioning
   - Guess the person's identity to win points

### Scoring System
- Base points for correct answers
- Bonus points for first-try success
- Efficiency bonuses for fewer questions
- Penalties for wrong attempts and hint usage

### Hints System
- Up to 3 hints per game
- Contextual hints based on game mode
- Point deductions for hint usage

## Tech Stack

- React 18
- Vite
- CSS Modules
- Vanilla JavaScript

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
bible-trivia-game/
├── src/
│   ├── components/       # React components
│   │   ├── Menu.jsx
│   │   ├── GuessBook.jsx
│   │   └── GuessPerson.jsx
│   ├── data/            # JSON data files
│   │   ├── biblical_figures.json
│   │   └── passages.json
│   ├── styles/          # CSS modules
│   │   ├── App.module.css
│   │   ├── Menu.module.css
│   │   └── GameCard.module.css
│   ├── utils/           # Helper functions
│   │   ├── bibleApi.js
│   │   ├── scoring.js
│   │   └── questionLogic.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Game Rules

### Guess the Book Mode
- Read the displayed Bible passage
- Enter the name of the book (e.g., "Genesis", "John")
- Use hints if needed (costs points)
- Multiple attempts allowed (costs points)

### Guess the Person Mode
- Ask yes/no questions about the Biblical figure
- Questions can be about gender, testament, role, or attributes
- Use hints for additional clues
- Make your final guess when ready

## Data Files

### biblical_figures.json
Contains 35+ prominent Biblical figures with:
- Name
- Testament (Old/New/Both)
- Gender
- Description
- Key attributes
- Related figures
- Famous quotes

### passages.json
Contains 20+ Bible passages with:
- Text content
- Book name
- Chapter and verse
- Translation

## Responsive Design

The app is fully responsive with breakpoints for:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

Touch targets are sized appropriately (minimum 44x44px) for mobile devices.

## Future Enhancements

- Bible API integration for live passage fetching
- More Biblical figures (100+)
- Additional difficulty levels
- Sound effects and animations
- Leaderboard system
- Multiplayer mode

## License

MIT
