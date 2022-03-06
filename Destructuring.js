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

const { work, framwork, language } = comapny.department;
const { name, sallary, food } = comapny.ceo;
const { first, second, thired } = comapny.department.tech;
console.log(work, framwork, language);
console.log(name, sallary, food);
console.log(first, second, thired, "tech");
