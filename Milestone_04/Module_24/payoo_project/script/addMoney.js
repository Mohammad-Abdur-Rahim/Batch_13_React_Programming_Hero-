console.log("Add Fn");

document.getElementById("add_money_btn").addEventListener("click", function () {
  // 01 bank Name get
  const bankName = getElementValue("add_money_bank");
  if (bankName === "Select Bank") {
    alert("Please Select Bank Name :-");
    return;
  }
  console.log("Bank Name :", bankName);

  // 02 Bank account number get
  const accountNumber = getElementValue("add_money_account_num");
  if (accountNumber.length != 11) {
    alert("Type 11 Digit Account Number :-");
    return;
  }
  console.log("Bank Number :", accountNumber);
  // 03 Add Money Amount get
  const addMoney = getElementValue("add_money_amount");
  const current_Balance = getElementText("balance");
  console.log("add_Money", addMoney);

  const remain_Balance = Number(current_Balance.innerText) + Number(addMoney);
  console.log("remain", remain_Balance);

  // 04 Add Pin Number
  const add_pin = getElementValue("add_money_pin");
  if (add_pin === "2580") {
    alert("Add Money Successfully");
    console.log("Balance:", remain_Balance);
    setBalance(remain_Balance);
  } else {
    alert(" Invalid Pin");
    return;
  }
  console.log("Pin", add_pin);
});
