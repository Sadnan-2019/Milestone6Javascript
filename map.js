 
 const doubleIt=number => number *2;
 
 
 
 const numbers =[2,4,5,10];
/* const output =[];

for (const number of numbers) {

       const   result = doubleIt(number);
       output.push(result);
       


          
} */
// console.log(output)

 
const output2=numbers.map(doubleIt);
console.log(output2);


const output3=numbers.map(number => number *2);
console.log(output3);

const output4=numbers.map(number => number *number);
console.log(output4);



