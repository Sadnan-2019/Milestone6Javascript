const players = {
  name: "sakib",
  job: "cricketter",
};

const people = new Object();
console.log(people);

const human = Object.create(players);
console.log(human.name);

class Students {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
}

const peop =new Students("ami",12)
console.log(peop)