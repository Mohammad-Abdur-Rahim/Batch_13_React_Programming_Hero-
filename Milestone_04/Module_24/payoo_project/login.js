document.getElementById('login-btn').addEventListener('click',function(){
// 01 Get the mobile number  ...

const mobile_Num = document.getElementById('mobile_Num').value;
console.log(mobile_Num);
// 02 Get the Pin number  ...
const pin_Num = document.getElementById('pin_Num').value;
console.log(pin_Num);
// 03 Match Number==Pin  ...
if(mobile_Num ==='01995516880' && pin_Num ==='2580' ){
    alert('Login Successfull');
}else{
   alert('Invalid Credential');
}
//1-3 True >> Alert & Homepage
//1-3 False >> Alert Return



});


