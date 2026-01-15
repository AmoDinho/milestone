import styles from '../styles/Menu.module.css';

const Menu = ({ onSelectMode, sessionScore }) => {
  return (
    <div className={styles.menu}>
      {sessionScore > 0 && (
        <div className={styles.sessionScore}>
          Session Score: {sessionScore} points
        </div>
      )}
      
      <h2 className={styles.menuTitle}>Choose Your Game Mode</h2>
      
      <div className={styles.modeButtons}>
        <button 
          className={styles.modeButton}
          onClick={() => onSelectMode('guessBook')}
        >
          📖 Guess the Book
          <div className={styles.description}>
            Read a Bible passage and guess which book it's from
          </div>
        </button>
        
        <button 
          className={styles.modeButton}
          onClick={() => onSelectMode('guessPerson')}
        >
          👤 Guess the Person
          <div className={styles.description}>
            Ask yes/no questions to identify a Biblical figure
          </div>
        </button>
      </div>
    </div>
  );
};

export default Menu;
