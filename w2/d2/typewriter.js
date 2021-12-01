const sentence = "hello there from lighthouse labs";
for (const index in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[index]);
   // console.log(sentence[index]);
  }, index * 200);
}

//Previous version
// const sentence = "hello there from lighthouse labs";

// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//   }, i * 100);
// }