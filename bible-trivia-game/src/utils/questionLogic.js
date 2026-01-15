import biblicalFigures from '../data/biblical_figures.json';

export const getRandomFigure = () => {
  const randomIndex = Math.floor(Math.random() * biblicalFigures.length);
  return biblicalFigures[randomIndex];
};

export const answerQuestion = (figure, question) => {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('male') || lowerQuestion.includes('man')) {
    return figure.gender === 'male' ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('female') || lowerQuestion.includes('woman')) {
    return figure.gender === 'female' ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('old testament')) {
    return figure.testament === 'Old' || figure.testament === 'Both' ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('new testament')) {
    return figure.testament === 'New' || figure.testament === 'Both' ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('king')) {
    return figure.key_attributes.includes('king') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('prophet')) {
    return figure.key_attributes.includes('prophet') || figure.key_attributes.includes('prophetess') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('apostle')) {
    return figure.key_attributes.includes('apostle') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('leader')) {
    return figure.key_attributes.includes('leader') || figure.key_attributes.includes('king') || figure.key_attributes.includes('judge') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('warrior') || lowerQuestion.includes('fighter') || lowerQuestion.includes('battle')) {
    return figure.key_attributes.includes('warrior') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('miracle')) {
    return figure.key_attributes.includes('miracle_worker') || figure.key_attributes.includes('miracle') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('writer') || lowerQuestion.includes('wrote')) {
    return figure.key_attributes.includes('writer') || figure.key_attributes.includes('psalmist') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('betrayed') || lowerQuestion.includes('traitor')) {
    return figure.key_attributes.includes('betrayed') || figure.key_attributes.includes('betrayer') || figure.key_attributes.includes('traitor') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('died') || lowerQuestion.includes('killed') || lowerQuestion.includes('martyr')) {
    return figure.key_attributes.includes('martyr') || figure.key_attributes.includes('crucified') || figure.key_attributes.includes('stoned') || figure.key_attributes.includes('beheaded') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('mother')) {
    return figure.key_attributes.includes('mother') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('father') || lowerQuestion.includes('patriarch')) {
    return figure.key_attributes.includes('patriarch') || figure.key_attributes.includes('father') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('egypt')) {
    return figure.key_attributes.includes('egypt') || figure.key_attributes.includes('exodus') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('jesus')) {
    return figure.name === 'Jesus' || figure.related_figures?.includes('Jesus') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('disciple')) {
    return figure.key_attributes.includes('apostle') || figure.key_attributes.includes('follower') ? 'yes' : 'no';
  }
  
  if (lowerQuestion.includes('judge')) {
    return figure.key_attributes.includes('judge') ? 'yes' : 'no';
  }
  
  return "I'm not sure about that. Try asking a yes/no question about their gender, testament, role, or key characteristics.";
};

export const getPersonHint = (figure, hintNumber) => {
  const hints = [
    `Testament: ${figure.testament} Testament`,
    `Role/Description: ${figure.description.substring(0, 50)}...`,
    `Key attribute: ${figure.key_attributes[0] || 'Unknown'}`
  ];
  
  if (hintNumber >= 0 && hintNumber < hints.length) {
    return hints[hintNumber];
  }
  
  return hints[0];
};
