export const BASE_POINTS = {
  GUESS_BOOK_CORRECT: 100,
  GUESS_PERSON_CORRECT: 150,
  FIRST_TRY_BONUS: 50,
  QUESTION_EFFICIENCY_BONUS: 10,
};

export const PENALTIES = {
  WRONG_ATTEMPT: 10,
  HINT_USED: 20,
};

export const calculateGuessBookScore = (correct, hintsUsed, attempts) => {
  if (!correct) return 0;
  
  let score = BASE_POINTS.GUESS_BOOK_CORRECT;
  
  if (attempts === 1) {
    score += BASE_POINTS.FIRST_TRY_BONUS;
  }
  
  score -= hintsUsed * PENALTIES.HINT_USED;
  score -= (attempts - 1) * PENALTIES.WRONG_ATTEMPT;
  
  return Math.max(score, 10);
};

export const calculateGuessPersonScore = (correct, hintsUsed, questionsAsked) => {
  if (!correct) return 0;
  
  let score = BASE_POINTS.GUESS_PERSON_CORRECT;
  
  const efficiencyBonus = Math.max(0, (10 - questionsAsked) * BASE_POINTS.QUESTION_EFFICIENCY_BONUS);
  score += efficiencyBonus;
  
  score -= hintsUsed * PENALTIES.HINT_USED;
  
  return Math.max(score, 10);
};
