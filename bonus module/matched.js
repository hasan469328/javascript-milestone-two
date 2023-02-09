let numbers = [1,5,10,15,20,25,30];
for(const number of numbers){
  // console.log(number);
}
let products = [
  {id:1, name: "lenevo Laptop v3", price: 1500000, origin: "USA"},
  {id:2, name: "hp Laptop probook", price: 1500000, origin: "USA"},
  {id:3, name: "hP Laptop notebook", price: 1500000, origin: "USA"},
  {id:4, name: "asus Laptop", price: 1500000, origin: "USA"},
  {id:5, name: "macbook pro Laptop", price: 1500000, origin: "USA"},
  {id:6, name: "lenevo Laptop v5", price: 1500000, origin: "USA"},
  {id:7, name: "lenevo laptop v7", price: 1500000, origin: "USA"},
  {id:8, name: "Hp pavillion laptop", price: 1500000, origin: "USA"},
  {id:9, name: "dell Laptop 45", price: 1500000, origin: "USA"},
  {id:10, name: "dell Laptop 22", price: 1500000, origin: "USA"},
];
function matchedProduct(products, search){
  let searchProduct = [];
  for(const product of products){
    
    if(product.name.toLowerCase().includes(search.toLowerCase())){
      searchProduct.push(product);
    }
  };
  return searchProduct;
}
let search = "hP"
let result = matchedProduct(products, search);
console.log(result);
console.log(2 / 0);