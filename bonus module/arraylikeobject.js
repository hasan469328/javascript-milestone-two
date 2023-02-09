function add(num1, num2){
  console.log(num1, num2);
  console.log(arguments);
  console.log(arguments[3]);
}
add(5,10, 15,20,25);

let arrayLikeObject = {
  '0': 5,
  '1': 10,
  '2': 15,
  '3': 20
}
console.log(arrayLikeObject);