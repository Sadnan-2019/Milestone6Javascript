const numbers =[20,56,19,80,60,67,88,5,9,3]

const bigNumbers = numbers.filter(number => number >20);
console.log(bigNumbers,'filter bignumbers');
const smallNumbers = numbers.filter(number => number <10);
console.log(smallNumbers,'filter ,smallNumbers');


const FindBigNumbers=numbers.find(number => number>60)
console.log(FindBigNumbers,"using findFunction")



const products = [
          {
            name: "car",
            price: 25000,
            color: "black",
            version: "new",
          },
          {
            name: "bike",
            price: 5000,
            color: "pink",
            version: "new",
          },
          {
            name: "water-bolltel",
            price: 5000,
            color: "red",
            version: "oldnew",
          },
          {
            name: "water-bolltel",
            price: 50,
            color: "red",
            version: "oldnew",
          },
        ];


        const productPrice =products.filter(products => products.price <100);
        const productRed = products.filter(product =>product.color =="red");
        console.log(productRed,'amr color')
//         console.log(productPrice);

const FindproductRed = products.find(product =>product.color =="red");
console.log(FindproductRed,"iusing gind method")



