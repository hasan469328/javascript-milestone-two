function recursion(i){
  if(i === 5){
    return 5;
  }
  return i + recursion(i + 1);
};
// let result = recursion(1);
// console.log(result);
function factorial(i){
  if(i === 1){
    return 1;
  }
  return i * factorial(i-1);
}
let result = factorial(5);
console.log(result);