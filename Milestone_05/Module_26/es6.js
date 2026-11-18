function add(n1, n2) {
  const sum = n1 + n2;
  return sum;
}
const result = add(20, 80);
console.log(`sum of total result ${result} `);

//Arrow fn basic
const add2 = (n1, n2) => n1 + n2;  //single line a no need return
const result2 = add2(44, 68);
console.log("Basic Arrow Fn Sum :", result2);
