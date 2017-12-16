function capitalize(s) {
  var string1 = s.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
  var string2 = s.split('').map((v,i) => i % 2 ? v.toUpperCase(): v.toLowerCase()).join('');
  return [string1,string2];
}