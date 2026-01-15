# Bible Trivia Game - Demo Guide

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Game Walkthrough

### Main Menu
When you start the app, you'll see:
- Session score tracker at the top
- Two game mode buttons:
  - **📖 Guess the Book** - Identify Bible passages
  - **👤 Guess the Person** - Identify Biblical figures through Q&A

### Mode 1: Guess the Book

#### Gameplay
1. A Bible passage is displayed (from cached passages)
2. Enter the name of the book (e.g., "Genesis", "John", "1 Samuel")
3. Click "Submit Guess" or press Enter
4. Use hints if needed (costs 20 points each)
5. Multiple attempts allowed (costs 10 points per wrong attempt)

#### Scoring
- **Base**: 100 points
- **First Try Bonus**: +50 points
- **Hint Penalty**: -20 points per hint
- **Wrong Attempt**: -10 points per attempt
- **Minimum**: 10 points

#### Example Scores
- Perfect (first try, no hints): 150 points
- Good (first try, 1 hint): 130 points
- Fair (2 attempts, 2 hints): 60 points

#### Features
- 30+ pre-loaded Bible passages from various books
- Testament coverage: Old and New Testament
- Book variety: Genesis, Psalms, Gospels, Epistles, Prophets, etc.
- Helper: Expandable list of all 66 Bible books
- Hints provide context about the book's theme, author, or period

### Mode 2: Guess the Person

#### Gameplay
1. App selects a Biblical figure from 35+ characters
2. Ask yes/no questions to narrow down possibilities
3. Questions can be about:
   - Gender (male/female)
   - Testament (Old/New)
   - Role (king, prophet, apostle, judge)
   - Attributes (warrior, writer, miracle worker)
   - Events (betrayed, martyred, etc.)
4. Use hints for direct clues (costs 20 points each)
5. When ready, click "Ready to Guess!" and enter the name
6. One guess allowed - make it count!

#### Scoring
- **Base**: 150 points
- **Efficiency Bonus**: +10 points per question under 10
- **Hint Penalty**: -20 points per hint
- **Minimum**: 10 points (if correct), 0 points (if wrong)

#### Example Scores
- Excellent (5 questions, no hints): 200 points
- Good (8 questions, 1 hint): 150 points
- Fair (12 questions, 2 hints): 110 points

#### Supported Questions
The AI can answer questions about:
- **Gender**: "Is this person male/female?"
- **Testament**: "Are they in the Old/New Testament?"
- **Roles**: "Were they a king/prophet/apostle/judge?"
- **Attributes**: "Did they perform miracles?"
- **Actions**: "Did they write any books?"
- **Relationships**: "Were they related to Jesus?"
- **Events**: "Were they betrayed/martyred?"
- **Locations**: "Were they in Egypt?"

#### Example Question Flow
```
Q: Is this person male?
A: yes

Q: Are they in the Old Testament?
A: yes

Q: Were they a king?
A: yes

Q: Did they write psalms?
A: yes

Ready to guess: David
Result: Correct! +170 points
```

### Hint System

#### Guess the Book Hints
1. General context (time period, theme)
2. Author or key characters
3. Testament and book type

Example hint for Psalms:
> "Poetry and songs, many by David"

#### Guess the Person Hints
1. Testament information
2. Role/Description summary
3. Key attribute or event

Example hints for Moses:
1. "Testament: Old Testament"
2. "Role/Description: Led the Israelites out of Egypt..."
3. "Key attribute: prophet"

### Session Score Tracking

- Score accumulates across multiple rounds
- Displayed at the top of the screen
- Shows on menu between games
- Persists until page reload
- No backend - score resets on refresh

### Tips for High Scores

#### Guess the Book Mode
- Read passages carefully - look for names, places, themes
- Old Testament often has more narrative detail
- New Testament mentions Jesus, apostles, churches
- Psalms have poetic structure
- Prophets often mention judgment or restoration
- Try to identify before using hints

#### Guess the Person Mode
- Start with gender and testament to cut possibilities in half
- Ask about roles next (king, prophet, apostle)
- Use specific events (miracles, martyrdom, betrayal)
- Save hints for when truly stuck
- Aim for 6-8 questions before guessing
- Common figures: Moses, David, Peter, Paul, Mary, Abraham

## Biblical Figures Database

The game includes 35 prominent figures:

**Old Testament**
- Patriarchs: Abraham, Isaac, Jacob, Joseph
- Leaders: Moses, Joshua, Gideon, Deborah
- Kings: David, Solomon, Saul
- Prophets: Elijah, Elisha, Isaiah, Jeremiah, Daniel, Jonah
- Others: Samson, Job, Ruth, Esther, Noah, Adam, Eve

**New Testament**
- Jesus Christ
- Apostles: Peter, Paul, John, Matthew, Thomas
- Others: Mary, Joseph, John the Baptist, Judas Iscariot, Martha, Mary Magdalene, Lazarus, Stephen

Each figure has:
- Name
- Testament (Old/New/Both)
- Gender
- Description
- 3-8 key attributes
- Related figures
- Famous quote (if applicable)

## Technical Features

### Responsive Design
- **Mobile (320px+)**: Single column, touch-friendly buttons
- **Tablet (768px+)**: Optimized layout with better spacing
- **Desktop (1024px+)**: Full-width experience with max container

### Touch Targets
- All buttons minimum 44x44px
- Large input fields for easy typing
- Touch-action optimized for mobile

### Accessibility
- High contrast colors
- Readable font sizes
- Clear feedback messages
- Keyboard navigation (Enter key support)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS Modules for scoping

## Data Files

### passages.json
30+ Bible passages with:
- Full verse text
- Book name
- Chapter and verse numbers
- Translation (KJV)

### biblical_figures.json
35+ Biblical figures with:
- Biographical information
- Testament classification
- Role and attribute tags
- Related characters
- Famous quotes

## Future Enhancements

Possible additions:
- Live Bible API integration
- More figures (100+)
- Difficulty levels (Easy, Medium, Hard)
- Timer challenges
- Leaderboard with localStorage
- Sound effects
- Animations
- Multiplayer mode
- Daily challenges
- Achievement system

## Troubleshooting

### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Kill process on port 5173
kill -9 $(lsof -t -i:5173)
```

### JSON Parse Errors
- Check that all JSON files are valid
- Run through a JSON validator
- Ensure no trailing commas

## Contributing

To add new passages:
1. Edit `src/data/passages.json`
2. Follow the existing format
3. Ensure book names match the book list
4. Test in the game

To add new Biblical figures:
1. Edit `src/data/biblical_figures.json`
2. Include all required fields
3. Add relevant attributes for question answering
4. Test various questions

## License

MIT License - Free to use and modify
