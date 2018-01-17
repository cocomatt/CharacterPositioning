var string = 'lighthouse in the house';
var letterCount = {};

var countLetters = function (string) {
  var stringArray = string.toLowerCase().split(" ").join("").split("");
  stringArray.forEach(function (letter, i) {
    if (letterCount.hasOwnProperty(letter)) {
      letterCount[letter].push(i);
    } else {
      letterCount[letter] = [i];
    }
  });
  return letterCount;
};

console.log(countLetters(string));
