function insertDash(num) {
  var str = num.toString().split('');
  var newStr = [];
  newStr.push(str[0]);
  for (var i = 1; i < str.length; i++) {
    var currentNewStr = newStr.length;
    if ((parseInt(newStr[currentNewStr-1]) % 2 === 1) && (parseInt(str[i] % 2) === 1)) {
      newStr.push('-');
      newStr.push(str[i]);
    } else {
      newStr.push(str[i]);
    }
  }
  return newStr.join('');
}