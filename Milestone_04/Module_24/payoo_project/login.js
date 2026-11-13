document.getElementById("login-btn").addEventListener("click", function () {
  // 01 Get the mobile number  ...

  const mobile_Num = document.getElementById("mobile_Num").value;
  console.log(mobile_Num);
  // 02 Get the Pin number  ...
  const pin_Num = document.getElementById("pin_Num").value;
  console.log(pin_Num);
  // 03 Match Number==Pin  ...
  if (mobile_Num === "01560023030" && pin_Num === "2580") {
    alert("Login Successfull");
    // window.location.replace('./home.html'); backbutton not work here
    window.location.assign("./home.html");
  } else {
    alert("Invalid Credential");
  }
});
