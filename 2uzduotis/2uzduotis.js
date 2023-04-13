
function summation(number) {
  var sum = 0;
  if(number < 0){
    sum;
  }
  for (var i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(5));

