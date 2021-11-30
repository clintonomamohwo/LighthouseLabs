const args = process.argv;
let numbers = args.slice(2);


const diceRoller = function(numbers) {
  let total = [];
  for (let i = 1; i <= numbers; i++) {
    let generatedNumber = "" + (Math.ceil(Math.random() * 6) + 1);
    total.push(generatedNumber);
    //let output = total.join(" ,");

    
  }
  return total.join(", ");
  
  
};

console.log(`Rolled ` + numbers + ` dice: ${diceRoller(3)}`);
console.log();
