const kibria={

          id:1,
          name:"kibria",
          money:1000,


          treatDe:function(expences){

                    this.money = this.money -expences;
                    console.log(this.money);
                    return this.money;
          }
}


const robi={
          id:1,
          name:"robi",
          money:1000,


}
const normalrobi={
          id:1,
          name:"normal",
          money:1000,


}

console.log('kibria',kibria.treatDe(100));
 const robiTreatDe =kibria.treatDe.bind(robi)
 const normalTreatDe =kibria.treatDe.bind(normalrobi)
 console.log('normal',normalTreatDe(100))
 console.log("robi",robiTreatDe(500));
 
 console.log('kibria',kibria.treatDe(500));
