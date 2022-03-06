// Es6 default parameter pass


function addNumber(num1, num2=0) {
  let total = 0;
  total = num1 + num2;
  return total;
}

const numbers = addNumber(10,30);
console.log(numbers);
