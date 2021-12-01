
const times = process.argv.slice(2); // takes args from command line

const timer = function(times) {
  for (const val of times) { // loops over times array
    if (val === undefined) { // if time is undefined skip, & continue loop
      continue;
    }
  
    if (isNaN(val)) { // if time is NaN skip, & continue loop
      continue;
    }
  
    if (val < 0) { // if time < 0, skip & continue loop
      continue;
    }

    setTimeout(() => {  // setTimeout that will beep at each valid time (in secs)
      process.stdout.write('\x07');
    }, 1000 * val);
  }
};

console.log(timer(times));


// const inputArgs = process.argv
//   .slice(2)
//   .filter(time => !isNaN(time))
//   .filter(time => time >= 0);

// inputArgs.forEach((time) => {
//   setTimeout(() => {
//     process.stdout.write('\x07');
//   }, time * 1000);
// });