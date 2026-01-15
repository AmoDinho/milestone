import { useState, useEffect } from 'react';
import { getRandomFigure, answerQuestion, getPersonHint } from '../utils/questionLogic';
import { calculateGuessPersonScore } from '../utils/scoring';
import styles from '../styles/GameCard.module.css';

const GuessPerson = ({ onGameEnd, onBackToMenu }) => {
  const [figure, setFigure] = useState(null);
  const [question, setQuestion] = useState('');
  const [questionHistory, setQuestionHistory] = useState([]);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [maxHints] = useState(3);
  const [currentHints, setCurrentHints] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [showGuessInput, setShowGuessInput] = useState(false);

  useEffect(() => {
    const newFigure = getRandomFigure();
    setFigure(newFigure);
  }, []);

  const handleAskQuestion = () => {
    if (!question.trim()) {
      setFeedback({ type: 'error', message: 'Please enter a question' });
      return;
    }

    const answer = answerQuestion(figure, question);
    setQuestionHistory([...questionHistory, { question, answer }]);
    setQuestion('');
    setFeedback(null);
  };

  const handleGuess = () => {
    if (!guess.trim()) {
      setFeedback({ type: 'error', message: 'Please enter a name' });
      return;
    }

    const normalizedGuess = guess.trim().toLowerCase();
    const correctName = figure.name.toLowerCase();

    if (normalizedGuess === correctName) {
      const finalScore = calculateGuessPersonScore(true, hintsUsed, questionHistory.length);
      setScore(finalScore);
      setFeedback({ 
        type: 'success', 
        message: `🎉 Correct! It was ${figure.name}!`
      });
      setGameOver(true);
    } else {
      setFeedback({ 
        type: 'error', 
        message: `❌ Sorry, it was ${figure.name}, not ${guess}. Better luck next time!`
      });
      setScore(0);
      setGameOver(true);
    }
  };

  const handleHint = () => {
    if (hintsUsed < maxHints) {
      const hint = getPersonHint(figure, hintsUsed);
      setCurrentHints([...currentHints, hint]);
      setHintsUsed(hintsUsed + 1);
    }
  };

  const handlePlayAgain = () => {
    const newFigure = getRandomFigure();
    setFigure(newFigure);
    setQuestion('');
    setQuestionHistory([]);
    setGuess('');
    setFeedback(null);
    setHintsUsed(0);
    setCurrentHints([]);
    setGameOver(false);
    setScore(0);
    setShowGuessInput(false);
  };

  const handleFinish = () => {
    onGameEnd(score);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (showGuessInput && !gameOver) {
        handleGuess();
      } else if (!gameOver) {
        handleAskQuestion();
      }
    }
  };

  if (!figure) {
    return (
      <div className={styles.gameCard}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading...</p>
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
            {score >= 150 ? '🌟 Amazing!' : score >= 100 ? '👍 Well done!' : score > 0 ? '✅ Good try!' : '💪 Keep practicing!'}
          </div>
          <div className={styles.resultDetails}>
            <div className={styles.resultDetail}>Person: {figure.name}</div>
            <div className={styles.resultDetail}>Questions Asked: {questionHistory.length}</div>
            <div className={styles.resultDetail}>Hints Used: {hintsUsed}/{maxHints}</div>
            <div className={styles.resultDetail} style={{ marginTop: '15px', fontStyle: 'italic' }}>
              {figure.description}
            </div>
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
        <h2 className={styles.gameTitle}>👤 Guess the Person</h2>
        <div className={styles.hintsRemaining}>
          💡 Hints: {maxHints - hintsUsed} remaining
        </div>
      </div>

      <div className={styles.passageContainer}>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          I'm thinking of a Biblical figure. Ask yes/no questions to figure out who it is!
        </p>
        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
          Questions Asked: {questionHistory.length}
        </p>
      </div>

      {feedback && (
        <div className={`${styles.feedback} ${styles[feedback.type]}`}>
          {feedback.message}
        </div>
      )}

      {currentHints.length > 0 && (
        <div className={styles.hintDisplay}>
          <div className={styles.hintTitle}>💡 Hints:</div>
          {currentHints.map((hint, index) => (
            <div key={index} className={styles.hintText}>• {hint}</div>
          ))}
        </div>
      )}

      {questionHistory.length > 0 && (
        <div className={styles.questionHistory}>
          {questionHistory.map((item, index) => (
            <div key={index} className={styles.questionItem}>
              <div className={styles.question}>Q: {item.question}</div>
              <div className={styles.answer}>A: {item.answer}</div>
            </div>
          ))}
        </div>
      )}

      {!showGuessInput ? (
        <>
          <div className={styles.inputGroup}>
            <input
              type="text"
              className={styles.input}
              placeholder="Ask a yes/no question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className={`${styles.button} ${styles.primaryButton}`}
              onClick={handleAskQuestion}
            >
              Ask
            </button>
          </div>

          <div className={styles.buttons}>
            <button 
              className={`${styles.button} ${styles.primaryButton}`}
              onClick={() => setShowGuessInput(true)}
            >
              🎯 Ready to Guess!
            </button>
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
              💡 Suggested Questions
            </summary>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', lineHeight: '1.8' }}>
              • Is this person male?<br />
              • Are they in the Old Testament?<br />
              • Were they a king?<br />
              • Were they a prophet?<br />
              • Did they perform miracles?<br />
              • Were they related to Jesus?<br />
              • Did they write any books?<br />
              • Were they a leader?
            </div>
          </details>
        </>
      ) : (
        <>
          <div className={styles.inputGroup}>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter the person's name..."
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={handleKeyPress}
              autoFocus
            />
            <button 
              className={`${styles.button} ${styles.primaryButton}`}
              onClick={handleGuess}
            >
              Submit Guess
            </button>
          </div>

          <div className={styles.buttons}>
            <button 
              className={`${styles.button} ${styles.secondaryButton}`}
              onClick={() => setShowGuessInput(false)}
            >
              ← Ask More Questions
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GuessPerson;
