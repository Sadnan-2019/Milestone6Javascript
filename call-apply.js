const kibria={

          id:1,
          name:"kibria",
          money:1000,


          treatDe:function(expences,boksis){

                    this.money = this.money -expences - boksis;
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

// kibria.treatDe(100)

kibria.treatDe.call(robi,100,100)
kibria.treatDe.call(normalrobi,100,500)

kibria.treatDe.apply(robi,[100,200])