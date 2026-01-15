import { useState, useEffect } from 'react';
import { getRandomPassage, getBibleBooks, getBookHint } from '../utils/bibleApi';
import { calculateGuessBookScore } from '../utils/scoring';
import styles from '../styles/GameCard.module.css';

const GuessBook = ({ onGameEnd, onBackToMenu }) => {
  const [passage, setPassage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [maxHints] = useState(3);
  const [currentHint, setCurrentHint] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    loadNewPassage();
  }, []);

  const loadNewPassage = async () => {
    setLoading(true);
    try {
      const newPassage = await getRandomPassage();
      setPassage(newPassage);
      setLoading(false);
    } catch (error) {
      setFeedback({ type: 'error', message: 'Failed to load passage. Please try again.' });
      setLoading(false);
    }
  };

  const handleGuess = () => {
    if (!userGuess.trim()) {
      setFeedback({ type: 'error', message: 'Please enter a book name' });
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    const normalizedGuess = userGuess.trim().toLowerCase();
    const correctBook = passage.book.toLowerCase();

    if (normalizedGuess === correctBook || 
        normalizedGuess === correctBook.replace(/\s+/g, '') ||
        normalizedGuess === correctBook.replace(/\d+\s*/g, '')) {
      const finalScore = calculateGuessBookScore(true, hintsUsed, newAttempts);
      setScore(finalScore);
      setFeedback({ 
        type: 'success', 
        message: `🎉 Correct! The passage is from ${passage.book}!`
      });
      setGameOver(true);
    } else {
      setFeedback({ 
        type: 'error', 
        message: `❌ Not quite. Try again! (Attempt ${newAttempts})`
      });
      setUserGuess('');
    }
  };

  const handleHint = () => {
    if (hintsUsed < maxHints && passage) {
      const hint = getBookHint(passage.book);
      setCurrentHint(hint);
      setHintsUsed(hintsUsed + 1);
    }
  };

  const handlePlayAgain = () => {
    setUserGuess('');
    setFeedback(null);
    setAttempts(0);
    setHintsUsed(0);
    setCurrentHint(null);
    setGameOver(false);
    setScore(0);
    loadNewPassage();
  };

  const handleFinish = () => {
    onGameEnd(score);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !gameOver) {
      handleGuess();
    }
  };

  if (loading) {
    return (
      <div className={styles.gameCard}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading passage...</p>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className={styles.gameCard}>
        <div className={styles.resultScreen}>
          <h2 className={styles.gameTitle}>Round Complete!</h2>
          <div className={styles.resultScore}>+{score} points</div>
          <div className={styles.resultMessage}>
            {score >= 140 ? '🌟 Excellent!' : score >= 100 ? '👍 Great job!' : '✅ Good effort!'}
          </div>
          <div className={styles.resultDetails}>
            <div className={styles.resultDetail}>Book: {passage.book}</div>
            <div className={styles.resultDetail}>Attempts: {attempts}</div>
            <div className={styles.resultDetail}>Hints Used: {hintsUsed}/{maxHints}</div>
          </div>
          <div className={styles.buttons}>
            <button 
              className={`${styles.button} ${styles.primaryButton}`}
              onClick={handlePlayAgain}
            >
              Play Again
            </button>
            <button 
              className={`${styles.button} ${styles.secondaryButton}`}
              onClick={handleFinish}
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.gameCard}>
      <div className={styles.gameHeader}>
        <h2 className={styles.gameTitle}>📖 Guess the Book</h2>
        <div className={styles.hintsRemaining}>
          💡 Hints: {maxHints - hintsUsed} remaining
        </div>
      </div>

      {feedback && (
        <div className={`${styles.feedback} ${styles[feedback.type]}`}>
          {feedback.message}
        </div>
      )}

      {currentHint && (
        <div className={styles.hintDisplay}>
          <div className={styles.hintTitle}>💡 Hint:</div>
          <div className={styles.hintText}>{currentHint}</div>
        </div>
      )}

      <div className={styles.passageContainer}>
        <p className={styles.passageText}>{passage.text}</p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
          Translation: {passage.translation}
        </p>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter the book name..."
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={gameOver}
        />
        <button 
          className={`${styles.button} ${styles.primaryButton}`}
          onClick={handleGuess}
          disabled={gameOver}
        >
          Submit Guess
        </button>
      </div>

      <div className={styles.buttons}>
        <button 
          className={`${styles.button} ${styles.hintButton}`}
          onClick={handleHint}
          disabled={hintsUsed >= maxHints}
        >
          💡 Get Hint ({hintsUsed}/{maxHints})
        </button>
        <button 
          className={`${styles.button} ${styles.backButton}`}
          onClick={onBackToMenu}
        >
          ← Back to Menu
        </button>
      </div>

      <details style={{ marginTop: '20px', padding: '10px', background: '#f9f9f9', borderRadius: '8px' }}>
        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          Need help? See all books
        </summary>
        <div style={{ marginTop: '10px', fontSize: '0.9rem', lineHeight: '1.8' }}>
          {getBibleBooks().join(', ')}
        </div>
      </details>
    </div>
  );
};

export default GuessBook;
