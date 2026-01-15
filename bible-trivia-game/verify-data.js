// Simple verification script for data files
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Verifying Bible Trivia Game Data...\n');

// Verify passages.json
try {
  const passagesPath = path.join(__dirname, 'src', 'data', 'passages.json');
  const passagesData = JSON.parse(fs.readFileSync(passagesPath, 'utf8'));
  
  console.log('✅ passages.json is valid JSON');
  console.log(`   - Contains ${passagesData.length} passages`);
  
  const books = [...new Set(passagesData.map(p => p.book))];
  console.log(`   - Covers ${books.length} different books`);
  console.log(`   - Books: ${books.slice(0, 5).join(', ')}...`);
  
  const missingFields = passagesData.filter(p => 
    !p.text || !p.book || !p.chapter || !p.verse || !p.translation
  );
  
  if (missingFields.length > 0) {
    console.log(`   ⚠️  Warning: ${missingFields.length} passages have missing fields`);
  }
  
  console.log('');
} catch (error) {
  console.error('❌ Error with passages.json:', error.message);
  process.exit(1);
}

// Verify biblical_figures.json
try {
  const figuresPath = path.join(__dirname, 'src', 'data', 'biblical_figures.json');
  const figuresData = JSON.parse(fs.readFileSync(figuresPath, 'utf8'));
  
  console.log('✅ biblical_figures.json is valid JSON');
  console.log(`   - Contains ${figuresData.length} Biblical figures`);
  
  const oldTestament = figuresData.filter(f => f.testament === 'Old');
  const newTestament = figuresData.filter(f => f.testament === 'New');
  const both = figuresData.filter(f => f.testament === 'Both');
  
  console.log(`   - Old Testament: ${oldTestament.length}`);
  console.log(`   - New Testament: ${newTestament.length}`);
  console.log(`   - Both: ${both.length}`);
  
  const males = figuresData.filter(f => f.gender === 'male').length;
  const females = figuresData.filter(f => f.gender === 'female').length;
  
  console.log(`   - Males: ${males}`);
  console.log(`   - Females: ${females}`);
  
  const missingFields = figuresData.filter(f => 
    !f.name || !f.testament || !f.gender || !f.description || !f.key_attributes
  );
  
  if (missingFields.length > 0) {
    console.log(`   ⚠️  Warning: ${missingFields.length} figures have missing fields`);
  }
  
  console.log('');
} catch (error) {
  console.error('❌ Error with biblical_figures.json:', error.message);
  process.exit(1);
}

console.log('✅ All data files verified successfully!\n');
