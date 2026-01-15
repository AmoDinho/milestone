import { useState } from 'react';
import Menu from './components/Menu';
import GuessBook from './components/GuessBook';
import GuessPerson from './components/GuessPerson';
import styles from './styles/App.module.css';

function App() {
  const [currentMode, setCurrentMode] = useState(null);
  const [sessionScore, setSessionScore] = useState(0);

  const handleSelectMode = (mode) => {
    setCurrentMode(mode);
  };

  const handleGameEnd = (score) => {
    setSessionScore(prevScore => prevScore + score);
    setCurrentMode(null);
  };

  const handleBackToMenu = () => {
    setCurrentMode(null);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>⛪ Bible Trivia Game</h1>
          <div className={styles.scoreDisplay}>
            Session Score: {sessionScore} points
          </div>
        </header>

        {currentMode === null && (
          <Menu 
            onSelectMode={handleSelectMode} 
            sessionScore={sessionScore}
          />
        )}

        {currentMode === 'guessBook' && (
          <GuessBook 
            onGameEnd={handleGameEnd}
            onBackToMenu={handleBackToMenu}
          />
        )}

        {currentMode === 'guessPerson' && (
          <GuessPerson 
            onGameEnd={handleGameEnd}
            onBackToMenu={handleBackToMenu}
          />
        )}
      </div>
    </div>
  );
}

export default App;
