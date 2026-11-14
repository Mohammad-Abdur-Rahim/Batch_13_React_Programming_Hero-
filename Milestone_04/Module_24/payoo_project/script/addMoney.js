console.log("Add Fn");

document.getElementById("add_money_btn").addEventListener("click", function () {
  // 01 bank Name get
  const bankName = getElementValue("add_money_bank");
  if (bankName === "Select Bank") {
    alert("Please Select Bank Name :-");
    return;
  }
  console.log('Bank Name :',bankName);

 // 01 Bank account number get
 const accountNumber = getElementValue('add_money_account_num');
 if(accountNumber.length!=11){
    alert("Type 11 Digit Account Number :-");
    return ;
 }
console.log('Bank Number :',accountNumber);
});
