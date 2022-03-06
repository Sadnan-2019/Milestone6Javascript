const first = {
  a: 1,
  b: 2,
  
};
const second = {
  a: 1,
  b: 2
  

};

const thired = first;

if (first === thired) {
  // console.log("both are equal")
} else {
  // console.log('not are qual')
}

function compareObject(first1, second2) {
  if (Object.keys(first1).length !== Object.keys(second2).length) {
    return false;
  }

  for (const porp in first1) {
    if (first1[porp] !== second2[porp]) {
      return false;
    }
  
  }
  return true;
}

const nwe = compareObject(first, second);
console.log(nwe);
