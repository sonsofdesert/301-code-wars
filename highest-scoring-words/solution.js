function high(sentence) {
  let words = [];
  let wordSum = 0;
  let highestScore = 0;
  let winningWord = '';
  const alphaBet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  words = sentence.split(' ');
  words.forEach(function (word) {
    wordSum = 0;
    //console.log(word);
    for (var i = 0; i < word.length; i++) {
      var singleLetter = word[i];
      var singleLetterValue = alphaBet.indexOf(singleLetter) + 1;
      wordSum += singleLetterValue;
      //console.log(wordSum);
    }

    if (wordSum > highestScore) {
      highestScore = wordSum;
      winningWord = word;
      console.log(winningWord + '!');
    }
  });
  console.log(winningWord + ' for real');
  return winningWord;
}