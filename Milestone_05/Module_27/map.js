// Map Fn loop kore value dei ....

const nums = [11, 51, 54, 5, 68, 99, 100];

// for(const num of nums){
//     console.log(num);
// }
const doubleIt = (num) => num * 2;
const double = nums.map(doubleIt);
console.log(double);

const test = nums.map((num) => {
  console.log("Inside console : ", num);
  return num * 2;
});
console.log(test);



// Example .........

const prices = [500, 1000, 1500, 2000];

const updatedPrices = prices.map((price) => {
  console.log("Old Price:", price);

  return price + 100;
});

console.log("Updated Prices:", updatedPrices);
