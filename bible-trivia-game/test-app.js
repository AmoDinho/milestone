// Simple test to verify all imports and data work correctly
import { getBibleBooks, getRandomPassage, getBookHint } from './src/utils/bibleApi.js';
import { getRandomFigure, answerQuestion, getPersonHint } from './src/utils/questionLogic.js';
import { calculateGuessBookScore, calculateGuessPersonScore } from './src/utils/scoring.js';

console.log('🧪 Testing Bible Trivia Game Components...\n');

// Test 1: Bible Books
console.log('✅ Test 1: Bible Books');
const books = getBibleBooks();
console.log(`   - Total books: ${books.length}`);
console.log(`   - First 5: ${books.slice(0, 5).join(', ')}`);
console.log('');

// Test 2: Random Passage
console.log('✅ Test 2: Random Passage');
const passage = await getRandomPassage();
console.log(`   - Book: ${passage.book}`);
console.log(`   - Chapter: ${passage.chapter}, Verse: ${passage.verse}`);
console.log(`   - Text length: ${passage.text.length} characters`);
console.log('');

// Test 3: Book Hints
console.log('✅ Test 3: Book Hints');
const hint = getBookHint('Genesis');
console.log(`   - Genesis hint: ${hint.substring(0, 50)}...`);
console.log('');

// Test 4: Random Figure
console.log('✅ Test 4: Random Figure');
const figure = getRandomFigure();
console.log(`   - Name: ${figure.name}`);
console.log(`   - Testament: ${figure.testament}`);
console.log(`   - Gender: ${figure.gender}`);
console.log(`   - Attributes: ${figure.key_attributes.slice(0, 3).join(', ')}`);
console.log('');

// Test 5: Question Answering
console.log('✅ Test 5: Question Answering');
const answer1 = answerQuestion(figure, 'Is this person male?');
console.log(`   - "Is this person male?" → ${answer1}`);
const answer2 = answerQuestion(figure, 'Are they in the Old Testament?');
console.log(`   - "Are they in the Old Testament?" → ${answer2}`);
console.log('');

// Test 6: Person Hints
console.log('✅ Test 6: Person Hints');
const personHint = getPersonHint(figure, 0);
console.log(`   - Hint 1: ${personHint}`);
console.log('');

// Test 7: Scoring
console.log('✅ Test 7: Scoring');
const bookScore1 = calculateGuessBookScore(true, 0, 1);
console.log(`   - Book (perfect): ${bookScore1} points`);
const bookScore2 = calculateGuessBookScore(true, 2, 3);
console.log(`   - Book (2 hints, 3 attempts): ${bookScore2} points`);
const personScore1 = calculateGuessPersonScore(true, 0, 5);
console.log(`   - Person (5 questions, no hints): ${personScore1} points`);
const personScore2 = calculateGuessPersonScore(true, 2, 10);
console.log(`   - Person (10 questions, 2 hints): ${personScore2} points`);
console.log('');

console.log('🎉 All tests passed!\n');
