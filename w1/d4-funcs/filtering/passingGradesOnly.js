const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

let passGrade = [];

//Convert to ARROW FUNCTION

let updateGrade = grades.filter(num =>{
  if (num >= 70) {
 
    passGrade = num;
    return passGrade;
  }
});

console.log(updateGrade);


/*
let updateGrade = grades.filter(function(num) {
  if (num >= 70) {
 
    passGrade = num;
    return passGrade;
  }
});

console.log(updateGrade);
*/