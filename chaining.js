//array distucturing
const [p, q] = ["ami p", "ami q"];
console.log(p, q);
const [a, v] = [20, 50, 20];
console.log(a, v);

const comapny = {
  name: "GP",
  ceo: {
    name: "kolom",
    sallary: 120000,
    food: "kola",
  },
  department: {
    work: "web-site-development",
    framwork: "react",
    language: "javascript",

    tech: {
      first: "html",
      second: "css",
      thired: "js",
    },
  },
};

console.log(comapny?.department?.tech?.first);
console.log(comapny?.web?.department?.tech?.first);

// same usinh in array distructuring
