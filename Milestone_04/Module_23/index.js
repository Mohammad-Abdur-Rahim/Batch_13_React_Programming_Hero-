document.getElementById("update-btn").addEventListener("click", function () {
  // console.log('work');
  const userIput = document.getElementById("input-value");
  // console.log(userIput);
  const name = userIput.value;
  // console.log(name);

  const showName = document.getElementById("user-name");
  showName.innerText = name;
});
