function cubeOdd(arr) {
  let oddNumbersArray = [];
  let finalNumber = 0;
  arr.map(ele => {

    let cubedNumber = ele * ele * ele;
    if (cubedNumber % 2 !== 0) {
      oddNumbersArray.push(cubedNumber);
    }
  });
  oddNumbersArray.map(ele => {
    finalNumber += ele;
  });

  if (isNaN(finalNumber)) {
    return undefined;
  } else {

    return finalNumber;
  }
}