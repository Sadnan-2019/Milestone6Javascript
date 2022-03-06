const kibria = {
  id: 1,
  name: "kibria",
  money: 5000,

  trEatnimu: (expences) => {
    // console.log(this)
    // trEatnimu();
    // console.log("kkkk",this);
    this.money = this.money - expences;

    return this.money;
  },

  TreatKhamu: function (expence1) {
    const myARR = (expence1) => {
      this.money = this.money - expence1;

      myARR();
      return this.money;
    };
  },

  treatDe: function (expences) {
    this.money = this.money - expences;
    // console.log("kkkk",this);
    return this.money;
  },
};

const robi = {
  id: 1,
  name: "robi",
  money: 1000,
};

function add() {
  console.log(this);
}

// console.log(this)

kibria.treatDe(20);
console.log(kibria.treatDe.call(robi, 10));
console.log("robiu",kibria.trEatnimu.call(robi,500))
// console.log("robiu", kibria.TreatKhamu.call(robi, 500));
