const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

const transformedArray = array.map((item) => item === ' '? 'empty string': item);

console.log(transformedArray);
console.log(array);