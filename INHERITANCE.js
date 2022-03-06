class TeamMember{
          name;
          designation = "support handeling";
          address = "BD";
          constructor(name, address,designation) {
            this.name = name;
            this.address = address;
            this.designation=designation;
          }


}



class Support extends TeamMember {
  SupportTime;
constructor(name,address,designation,time){
          super(name,address,designation)
          this.SupportTime =time;
}
  startSupport() {
    console.log(this.name, "start you class session");
  }
}
class StudentSupport extends TeamMember {
  /* name;
  designation = "support handeling";
  address = "BD";
  constructor(name, address,designation) {
    this.name = name;
    this.address = address;
    this.designation = designation;
  } */

  startRoutine() {
    console.log(this.name, "start you class support");
  }
}

class nepchunSupport {
  name;
  designation = "support nepchun";
  address = "nepchun";
  constructor(name, address,designation) {
    this.name = name;
    this.address = address;
    this.designation = designation;
  }

  startRelease() {
    console.log(this.name, "start you class app");
  }
}

const sabbin = new Support("sabbin", "pakistan","worker",10);
const sadnan = new Support("sadnan", "bangladesh");
const rohim = new StudentSupport("rohim", "dubai","acterss");
console.log(sabbin);
/* console.log(sadnan);
sabbin.startSupport();
sadnan.startSupport(); */
console.log(rohim);
