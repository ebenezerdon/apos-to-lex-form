const wordDict = require('./wordDict');

const aposToLexForm = text => {
  const data = text.split(' ');
  data.forEach((word, index) => {
    Object.keys(wordDict).forEach(key => {
      if (key === word.toLowerCase()) {
        data[index] = wordDict[key]
      };
    });
  });

  return data.join(' ');
}

module.exports = aposToLexForm;
