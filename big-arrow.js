const add = (num1, num2) => num1 * num2;
const number = add(20, 3);
console.log(number);


const add2 = (num1, num2, num3 = 0) => (num1 * num2 * num3);
const number2 = add2(20, 3, 2);
console.log(number2);



const FiveTimes = num => num *5;
const number3=FiveTimes(20);
console.log(number3);

const getText=()=>"ami vula jai tumi amr nooww";

const text = getText();
console.log(text);


const doMath =(x,y) => {

          const sum = x+y;
          const differ = x-y;
          const multi =sum * differ;
          const result = multi *5;
          return result;



}

const number5 =doMath(10,5);
console.log(number5);

const cars=['toyota', 'honda','mercedes']; const newCars= [...cars , 'ferrari'];
console.log(cars)


