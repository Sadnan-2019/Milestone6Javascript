class Support {
  name;
  Designation = "support handeling";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  startSupport(){

          console.log(this.name,'start you class session')
  }
}

const sabbin = new Support("sabbin", "pakistan");
const sadnan = new Support("sadnan", "bangladesh");
console.log(sabbin);
console.log(sadnan);
sabbin.startSupport();
sadnan.startSupport();
