
function displaySum() {
  let input = document.querySelector(".number");
  let number = input.value;
  let sum = summation(number);
  input.value = '';
  console.log(sum);
  
  document.querySelector(".sum").innerHTML = `Result: ${sum}`;
}

function summation(number) {
  
  let sum = 0;
  if(number < 0){
    sum;
  }
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

