let sumToOne = function(n) {
  let sum = 0;
  for (let i = n; i >= 1; i--) {
    sum += 1;
  }
  return sum;
};
console.log(sumToOne(4));