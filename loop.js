// 1.Print odds 1-20
function odds(){
  for(i=1; i<=20; i+=2){
    console.log(i)
  }
};
odds()
// 2.Decreasing Multiples of 3
function multiplesofThree(){
  for(i=100; i>=0; i--){
    if(i%3 === 0)
    console.log(i)
  }
};
multiplesofThree()
// 3.Print the sequence
var arr =[-4, 2.5, 1, -0.5, -2, -3.5]
function printArray(){
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  };
};
printArray(arr)
// 4.Sigma
function sum() {
  var sum = 0;
  for (i = 0; i <= 100; i++) {
    sum += i;
  }
  return sum;
};
console.log(sum())
// 5.Factorial
function factorial(){
  var fact = 1;
  for (i = 1; i <= 12; i++) {
    fact *= i;
  }
  return fact;
};
console.log(factorial())