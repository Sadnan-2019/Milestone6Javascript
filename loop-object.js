const students = {
  name: "sakib",
  age: 25,
  designation: "player",
  IsFarmer: false,
};

// for(i=0;i<=100;i++)
// for (student of students) {
// } array

// for (student in students) {
// }object



  for(student in students){

          // console.log(students[student])
  }


  const keys =Object.keys(students);
// console.log(keys);

for (const key of keys) {

          // console.log(key,students[key]);
          
}

for(const [key,value] of Object.entries(students)){

          console.log(key,value);
}