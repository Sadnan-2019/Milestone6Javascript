const students = {
  id: 1,
  money:5000,
  name: "sakib",
  age: 29,
  job: "player",
  designation: "allrounder",

  friends: {
    id: 2,
    name: "mash",
    age: 28,
    job: "player",
    designation: "captain",
  },

  takeExam: function () {
    console.log(this.friends.name,"taking exam");
  },

  takeTreat: function (expence) {

          this.money=this.money - expence;
          return this.money;
//     console.log(this.name,"taking exam");

  },
};

// console.log(students)

students.takeExam();
const take= students.takeTreat(4000);
console.log(take);
