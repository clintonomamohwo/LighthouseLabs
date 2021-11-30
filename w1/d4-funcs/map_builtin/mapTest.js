
/*
const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];
const arr = [6,2,3,4,9,6,1,0,5];
/*
// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
let charNum = lighthouses.map(function(index) {
  let count=index.length;
 return count;
});
console.log(charNum);



//CONVERT TO ARROW FUNCTION
let charNum = lighthouses.map(index=>index.length);
console.log(charNum);

let Num = arr.map(index=>index.length);
console.count(arr.length);
*/
/*
let arr = [6,2,3,4,9,6,1,0,5];
const sum = function(arr) {
  let total = 0;
  for (let index = 0; index < arr.length; index++) {

    total = total + (arr[index]);
    

    
  }
  console.log(total);
  return total;
  
  IMPLEMENT ME 
};

console.log(sum([6,2,3,4,9,6,1,0,5]));
*/
const min = function(arr) {
  let mini=Number(Math.max.apply(null,arr));
  return mini;
  /* IMPLEMENT ME */
};
console.log(min([6,2,3,4,9,6,1,0,5]));
