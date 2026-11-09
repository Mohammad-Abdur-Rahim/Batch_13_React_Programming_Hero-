// 1st implement...
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
// 2nd implement...
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// 3rd implement...
const makeBlue = document.getElementById("btn-blue");
makeBlue.onclick = function makeBlueFn() {
  document.body.style.backgroundColor = "blue";
};

//   4 option mainly use everywhere -----------------

// 1st getElementById  (event type , FN)

document
  .getElementById("btn-green")
  .addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = "green";
  });
