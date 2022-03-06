const students ={

          name:"sakib",
          age:25,
          designation:"player",
          IsFarmer:false

}


const keys =Object.keys(students);
const keys1 =Object.values(students);
const keys2 =Object.entries(students);

// console.log(keys)
// console.log(keys1)
console.log(keys2)

// Object.seal(students)
Object.freeze(students)
students.age =100;
delete students.IsFarmer;
console.log(students)