function oddOrEven(array) {
 let result = array.reduce((acc, curr) => acc + curr, 0);
 let value;
if (result % 2 != 0) {
  value = 'odd'
} else {
  value = 'even'
}
 return value;
}

console.log(oddOrEven([1,5]))