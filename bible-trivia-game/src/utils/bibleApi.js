import passagesData from '../data/passages.json';

const BIBLE_BOOKS = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
  '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
  'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs',
  'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations',
  'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
  'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk',
  'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
  'Matthew', 'Mark', 'Luke', 'John', 'Acts',
  'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians',
  'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
  '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews',
  'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John',
  'Jude', 'Revelation'
];

export const getBibleBooks = () => BIBLE_BOOKS;

export const getRandomPassage = async () => {
  try {
    const randomIndex = Math.floor(Math.random() * passagesData.length);
    return passagesData[randomIndex];
  } catch (error) {
    console.error('Error fetching passage:', error);
    return {
      text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      book: "John",
      chapter: 3,
      verse: 16,
      translation: "KJV"
    };
  }
};

export const getBookHint = (book) => {
  const hints = {
    'Genesis': 'The first book of the Bible, contains creation and patriarchs',
    'Exodus': 'Moses leads Israel out of Egypt',
    'Leviticus': 'Laws and priestly regulations',
    'Numbers': 'Census and wilderness wanderings',
    'Deuteronomy': 'Moses\' final speeches before entering Canaan',
    'Joshua': 'Conquest of the Promised Land',
    'Judges': 'Period of judges before kings',
    'Ruth': 'Story of loyalty and redemption',
    '1 Samuel': 'Samuel, Saul, and David\'s early life',
    '2 Samuel': 'David\'s reign as king',
    '1 Kings': 'Solomon\'s reign and kingdom division',
    '2 Kings': 'Kings of Israel and Judah until exile',
    '1 Chronicles': 'Genealogies and David\'s reign',
    '2 Chronicles': 'Solomon through the exile',
    'Ezra': 'Return from exile and temple rebuilding',
    'Nehemiah': 'Rebuilding Jerusalem\'s walls',
    'Esther': 'Jewish queen saves her people',
    'Job': 'Suffering and faith',
    'Psalms': 'Poetry and songs, many by David',
    'Proverbs': 'Wisdom sayings, mostly by Solomon',
    'Ecclesiastes': 'Philosophical reflections on life',
    'Song of Solomon': 'Love poetry',
    'Isaiah': 'Major prophet, Messianic prophecies',
    'Jeremiah': 'Weeping prophet warns of judgment',
    'Lamentations': 'Mourning Jerusalem\'s fall',
    'Ezekiel': 'Visions and prophecies in exile',
    'Daniel': 'Dreams, visions, and lion\'s den',
    'Hosea': 'God\'s faithful love despite unfaithfulness',
    'Joel': 'Locust plague and Day of the Lord',
    'Amos': 'Justice and judgment',
    'Obadiah': 'Judgment on Edom',
    'Jonah': 'Reluctant prophet and great fish',
    'Micah': 'Justice, mercy, and humility',
    'Nahum': 'Judgment on Nineveh',
    'Habakkuk': 'Wrestling with God\'s justice',
    'Zephaniah': 'Day of the Lord',
    'Haggai': 'Rebuild the temple',
    'Zechariah': 'Visions and Messianic prophecies',
    'Malachi': 'Final Old Testament prophet',
    'Matthew': 'Jesus as Messiah and King',
    'Mark': 'Jesus as servant and miracle worker',
    'Luke': 'Jesus as Son of Man, detailed account',
    'John': 'Jesus as Son of God, theological gospel',
    'Acts': 'Early church history and missions',
    'Romans': 'Paul\'s theological masterpiece on salvation',
    '1 Corinthians': 'Church problems and spiritual gifts',
    '2 Corinthians': 'Paul\'s ministry and suffering',
    'Galatians': 'Freedom in Christ vs. law',
    'Ephesians': 'Unity in Christ and spiritual warfare',
    'Philippians': 'Joy in Christ despite circumstances',
    'Colossians': 'Supremacy of Christ',
    '1 Thessalonians': 'Christ\'s return',
    '2 Thessalonians': 'More on Christ\'s return',
    '1 Timothy': 'Church leadership and doctrine',
    '2 Timothy': 'Paul\'s final letter',
    'Titus': 'Church organization in Crete',
    'Philemon': 'Personal letter about a runaway slave',
    'Hebrews': 'Superiority of Christ',
    'James': 'Practical faith and works',
    '1 Peter': 'Suffering and hope',
    '2 Peter': 'False teachers warning',
    '1 John': 'Love and fellowship',
    '2 John': 'Truth and love',
    '3 John': 'Supporting missionaries',
    'Jude': 'Contend for the faith',
    'Revelation': 'Apocalyptic visions and end times'
  };
  
  return hints[book] || 'A book in the Bible';
};
