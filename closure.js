function stopWatch(){

          let couner =0;
          return function(){

                    couner++;
                    return couner;

          }
}

let sum =stopWatch();
console.log(sum());
console.log(sum());