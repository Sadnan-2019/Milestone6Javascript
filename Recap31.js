const name ="harun";
const lastname="khan";
const total=`${name} ${lastname} is motherchud`;
console.log(total)
//teamplate string



const doMath = x => x*x;

const number = doMath(5);
console.log(number)

// arrow function

// /default paramerter
// spread parameters
function MaxNumber(numbers){

          const max = Math.max(...numbers)
          return max;
}
// const new = [20,25,50];
const array = MaxNumber([20,25,50]);
console.log(array);

