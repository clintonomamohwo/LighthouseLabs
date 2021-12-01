
process.stdout.write('hello from spinner2.js... \rheyyy');
let increment = 100;

let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ","\r|   ",];

for (const rotate of spinner) {
  setTimeout(() => {
    process.stdout.write(rotate);
  }, increment);
  increment += 200;
}