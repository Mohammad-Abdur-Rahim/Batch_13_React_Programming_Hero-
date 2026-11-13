document.getElementById("withdraw-btn").addEventListener("click", function () {
  // console.log('Withdarw ');
  // 01 get Agent Number And verify..............
  const agent_Number = document.getElementById("agent_Num").value;
  console.log(agent_Number);
  if (agent_Number.length != 11) {
    alert("Invalid Number");
    return;
  }
  // 02 get Withdraw Amount And verify...........
  const withdraw_Amount = document.getElementById("withdraw_Amount").value;
  console.log("withdraw", withdraw_Amount);

  // 03 get the Current Balance ...........
  const current_Balance = document.getElementById("balance");
  console.log("old Balance", current_Balance);
  // Calculate the Balanace Here
  const remain_Balance =
    Number(current_Balance.innerText) - Number(withdraw_Amount);
  // Amount validation
  if (remain_Balance < 0) {
    alert("Invalid");
    return;
  }
  //   console.log("Balance:", remain_Balance);

  // 04 get Pin Number And verify...........
  const withdraw_Pin = document.getElementById("withdraw_Pin").value;
  if (withdraw_Pin === "2580") {
    alert("Withdraw Successfully");
    console.log("Balance:", remain_Balance);
    current_Balance.innerText = remain_Balance;
  } else {
    alert(" Invalid Pin");
    return;
  }
  console.log("Pin", withdraw_Pin);
});
