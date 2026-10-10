const fs = require('fs');
const path = require('path');
const strip = require('strip-comments');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(file => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu;

walk('./src', (err, results) => {
  if (err) throw err;
  const files = results.filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
    
    content = strip(content);
    content = content.replace(emojiRegex, '');
    
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(file, content, 'utf8');
  });
  console.log('Cleaned', files.length, 'files');
});
