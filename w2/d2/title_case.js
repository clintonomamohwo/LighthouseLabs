const titleCase = function(text) {
  text = text.toLowerCase();
  // Create an array of words by splitting the texting at every ' ' "space"
  let arrayOfWords = text.split(' ');
  // Create an empty text variable to hold the modified (tittled) sentence
  let strTitleCase = '';

  // Loop through each word in arrayOfWords and change the first letter to uppercase
  arrayOfWords.forEach(element => {
    // create wordArray to hold each letter in the word
    let word = element.split('');
    // change the first letter to uppercase
    word[0] = word[0].toUpperCase();
    // Joing each letter in the word array and add a space to the word. Note this leaves a space a the end of the sentence (not good!)
    strTitleCase += word.join('').concat(' ');
  });

  console.log(strTitleCase);
  return strTitleCase;
};

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");