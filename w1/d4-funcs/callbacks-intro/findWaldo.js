// Pass results via callback functions
// Callback function, argument index
// The second argument is expected to be a (callback) function
// Output = "Found Waldo at index 2!"
//EXCERCISE 1
/*
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    // let name = names[i];
    if (names[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
};
const actionWhenFound = function(i) {
  console.log("Found Waldo at index " + i + "!");
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
*/

//-----------------------------------------------------------------------------

//EXCERCISE 2
// Refactor the function findWaldo to use the forEach() method instead of a for loop.
const findWaldo = (names, found) => {
  names.forEach(function(item, index) {
    if (item === "Waldo") {
      found(index); // execute callback
    }
  });
};
const actionWhenFound = i => {
  console.log("Found Waldo at index " + i + "!");
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//------------------------------------------------------------------------------

/*
findWaldo = (names, found) => {
  names.forEach((item, index) => {
    if (item === "Waldo") {
      found(index); // execute callback
    }
  });
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => {
  console.log("Found Waldo at index " + index + "!");
});
*/