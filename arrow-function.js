
//function declaration
function add(num1, num2) {
  return num1 + num2;
}
//function expression

const add2 = function add2(num1, num2) {
  return num1 + num2;
};

//function expression (anonymouse)
const add3 = function (num1, num2) {
  return num1 + num2;
};

//arrow function
const add4 =(num1,num2)  => (num1 + num2);



const add5 =(num1)  => (num1/5);



const number = add(10, 15);
console.log(number, "number1");

const number2 = add2(20, 20);
console.log(number2, "number2");

const number3 = add3(30, 20);
console.log(number3, "number3");


const number4 = add3(40, 20);
console.log(number4, "number4");


const number5 = add5(40);
console.log(number5, "number5");
