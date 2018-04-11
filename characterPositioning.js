function countLetters(str) {
  var letters = str.split("");
  // console.log(letters);
  var objectCount = {};

  for (var i = 0; i < str.length; i++) {
    if(objectCount[str[i]] === undefined) {
      objectCount[str[i]] = i;
      // console.log(objectCount[str[i]]);
    } else {
      objectCount[str[i]] = objectCount[str[i]] + ", " + i;
      // console.log(objectCount[str[i]++]);
    }
  }
  delete objectCount[" "];
  return objectCount;
}


console.log(countLetters("lighthouse labs in the house"));