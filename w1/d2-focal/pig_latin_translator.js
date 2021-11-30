let originalWords = process.argv.slice(2);
let pigLatinWords = [];

//console.log("originalWords is", originalWords);
//console.log("pigLatinWords is", pigLatinWords);

let translateToPigLatin = function(word) {
  return word.slice(1, word.length) + word[0] + "ay";
};


for (let i = 0; i < originalWords.length; i++) {
  //console.log(translateToPigLatin(originalWords[i]));
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));




console.log(translateToPigLatin("Hello"));
