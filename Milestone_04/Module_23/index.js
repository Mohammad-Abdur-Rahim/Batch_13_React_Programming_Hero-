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


    // 5 option 1. addevent add korae hoice and 2. ar sataha onno title id dore id value change koare hoice ......
    document.getElementById('title-btn-update')
    .addEventListener('click',function(){
        // console.log('ok');
        const changeTitle = document.getElementById('wp-title');
        changeTitle.innerText='React + Worpress Both Developer'
    })