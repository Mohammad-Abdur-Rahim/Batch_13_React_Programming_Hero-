// Map Fn loop kore value dei ....

const nums = [11,51,54,5,68,99,100];

// for(const num of nums){
//     console.log(num);
// }
const doubleIt = (num)=> num*2 ;
const double = nums.map(doubleIt);
console.log(double);