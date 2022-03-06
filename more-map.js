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
];


const productsName =products.map(product => product.name);
console.log(productsName);
const productPrice=products.map(product => product.price);
console.log(productPrice)
products.forEach(product => console.log(product));
// console.log(productColor)

products.map(product=>console.log(product));
console.log(products);


const friends =['abid','rahman','kobior','komol'];
const ffriends = friends.map(friend=>friend.length)
console.log(ffriends,'my friend')
