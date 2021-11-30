const raisinAlarm = function(cookie) {
  for (let choclateChip of cookie) {
    if (choclateChip === "🍇") {
      return "Raisin alert!";
    }
      
  }
  return "All good!";

  
};
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
