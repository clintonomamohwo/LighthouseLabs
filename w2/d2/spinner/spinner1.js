
//process.stdout.write('hello from spinner1.js... \rheyyy\n');
// let x = 200;

// for (let i = 0; i < 100; i++) {
//   setTimeout(() => {
//     process.stdout.write('\r |   ');
//   }, x + (i * 1000));
//   setTimeout(() => {
//     process.stdout.write('\r /   ');
//   }, 2 * x + (i * 1000));
//   setTimeout(() => {
//     process.stdout.write('\r -   ');
//   }, 3 * x + (i * 1000));
//   setTimeout(() => {
//     process.stdout.write('\r \\   ');
//   }, 4 * x + (i * 1000));
//   setTimeout(() => {
//     process.stdout.write('\r |   ');
//   }, 5 * x + (i * 1000));
// }

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
 process.stdout.write('\r\\   ');
}, 700);
setTimeout(() => {
  process.stdout.write('\r|  ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1500);
