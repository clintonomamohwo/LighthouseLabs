
// const titleCase = function(text) {
//   text = text.toLowerCase();
//   let arrayOfWords = text.split(' ');
//   let strTitleCase = '';
//   arrayOfWords.forEach(element => {
//     let word = element.split('');
//     word[0] = word[0].toUpperCase();
//     strTitleCase += word.join('').concat(' ');
//   });
//   console.log(strTitleCase);
//   return strTitleCase;
// };

const titleCase = function(text) {
  text = text.toLowerCase().split(' ');
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
  }
  return text.join(' ');
};