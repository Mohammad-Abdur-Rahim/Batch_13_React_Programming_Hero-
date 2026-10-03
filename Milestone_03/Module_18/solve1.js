// Calculate odd number avereage array [] ....

function oddAverage(nums) {
  const odds = [];

  // 1st loop kore odd number gulo push korse..
  for (const num of nums) {
    if (num % 2 === 1) {
      odds.push(num);
    }
  }

  // 2nd a odds ke sum & length kore avg find
  let sum = 0;
  for (const number of odds) {
    sum += number;
  }
  const count = odds.length;
  const avg = sum / count;
  console.log(odds);
  return avg;
}

const nums = [2, 33, 5, 77, 32, 8, 11, 53, 2, 34, 99];
console.log(oddAverage(nums));
