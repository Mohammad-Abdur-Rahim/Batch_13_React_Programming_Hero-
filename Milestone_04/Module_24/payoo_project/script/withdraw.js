// document.getElementById("withdraw-btn").addEventListener("click", function () {
//   // console.log('Withdarw ');
//   // 01 get Agent Number And verify..............
//   const agent_Number = document.getElementById("agent_Num").value;
//   console.log(agent_Number);
//   if (agent_Number.length != 11) {
//     alert("Invalid Number");
//     return;
//   }
//   // 02 get Withdraw Amount And verify...........
//   const withdraw_Amount = document.getElementById("withdraw_Amount").value;
//   console.log("withdraw", withdraw_Amount);

//   // 03 get the Current Balance ...........
//   const current_Balance = document.getElementById("balance");
//   console.log("old Balance", current_Balance);
//   // Calculate the Balanace Here
//   const remain_Balance =
//     Number(current_Balance.innerText) - Number(withdraw_Amount);
//   // Amount validation
//   if (remain_Balance < 0) {
//     alert("Invalid");
//     return;
//   }
//   //   console.log("Balance:", remain_Balance);

//   // 04 get Pin Number And verify...........
//   const withdraw_Pin = document.getElementById("withdraw_Pin").value;
//   if (withdraw_Pin === "2580") {
//     alert("Withdraw Successfully");
//     console.log("Balance:", remain_Balance);
//     current_Balance.innerText = remain_Balance;
//   } else {
//     alert(" Invalid Pin");
//     return;
//   }
//   console.log("Pin", withdraw_Pin);
// });

//__________________ Use Common Function _________________

document.getElementById("withdraw-btn").addEventListener("click", function () {
  // 01 get Agent Num
  const agent_Number = getElementValue("agent_Num");
  console.log(agent_Number);
  if (agent_Number.length != 11) {
    alert("Invalid Number");
    return;
  }
  // 02 get Withdraw Amount
  const withdraw_Amount = getElementValue("withdraw_Amount");
  console.log(withdraw_Amount);

  // 03 get  Current Balance
  const current_Balance = getElementText("balance");
  // console.log(current_Balance);

  const remain_Balance = Number(current_Balance.innerText) - Number(withdraw_Amount);
  if (remain_Balance <= 0) {
    alert("Insufficiant Balance");
    return;
  }
  console.log(remain_Balance);

  // 04 get Pin Number
  const withdraw_Pin = getElementValue("withdraw_Pin");
  if (withdraw_Pin === "2580") {
    alert("Withdraw Successfully");
    console.log("Balance:", remain_Balance);
    setBalance(remain_Balance);
  } else {
    alert(" Invalid Pin");
    return;
  }
  console.log("Pin", withdraw_Pin);
});
