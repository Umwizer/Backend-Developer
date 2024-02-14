let sentence = "I love JavaScript JavaScript is awesome!";
let wordCount = sentence.split(" ").reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(wordCount);