const max = Math.max(2, 1, 4, 5, 8, 6, 55);
// console.log(max);

//Spread Operator ...
const number = [10, 22, 5, 6, 1, 5, 1, 55, 556];
const max2 = Math.max(...number);
// console.log(...number);

//Arrow FN...
const num = [12, 8, 80];
const sum = (x, y, z) => x + y + z;
const output = sum(...num);
// console.log(output);

// Reference ... Spread Operator

const array1 = [1, 2, 3];
const array2 = [...array1];

array2.push(55);
array2.push(200);

console.log(array1);
console.log(array2);
