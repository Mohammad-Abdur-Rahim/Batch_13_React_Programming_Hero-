console.log("Common Fn Work ");
// Common Fn id nia input value and text value debe------------

//01 Input Field
function getElementValue(id) {
  return document.getElementById(id).value;
}
//02 Tag Field
function getElementText(id) {
  return document.getElementById(id);
}
//03 Set Balance Fn
function setBalance(value){
const update_Balanace = document.getElementById('balance');
update_Balanace.innerText =value;
}
