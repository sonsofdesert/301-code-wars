function formatWords(words){
  var newString = "";
  if(words){
    for(var i = words.length - 1; i >= 0; i--) {
      if(words[i] === '') {
        words.splice(i, 1);
      }
    }
    if (words.length === 1) {
      newString = words[0];
    } else if (words.length === 2) {
      newString = words.join(' and ');
    } else if (words.length > 2) {
      newString = words.slice(0, -1).join(', ') + ' and ' + words.slice(-1);
    }
    return newString;
  }else {
    newString =''
    return newString;
  }
}