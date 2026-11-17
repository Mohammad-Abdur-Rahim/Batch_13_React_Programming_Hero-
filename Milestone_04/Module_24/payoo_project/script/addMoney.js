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

    // 01 History conatier Anbo add hole
    const history = document.getElementById("history_content");
    // 02 div create
    const newHistory = document.createElement("div");
    // 03 innertext set
    newHistory.innerHTML = `

    <div class="transaction_card shadow mb-2 p-5 rounded-xl border border-stone-300 bg-white">
    add money success form accont number <span class='font-bold text-2xl'> ${accountNumber}</span> at ${new Date()}
          </div>

    `;
    // ay div append korbo history te ...
    history.append(newHistory);
  } else {
    alert(" Invalid Pin");
    return;
  }
  console.log("Pin", add_pin);
});
