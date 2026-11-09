// document.getElementById("update-btn").addEventListener("click", function () {
//   // console.log('work');
//   const userIput = document.getElementById("input-value");
//   // console.log(userIput);
//   const name = userIput.value;
//   // console.log(name);

//   const showName = document.getElementById("user-name");
//   showName.innerText = name;
// });


// more event just replace the "click" = mouseenter,mousemove,mouseout,focus,blur

// document.getElementById('more-btn')
// .addEventListener("mousemove",function(){
//   console.log('working');
// });

// // keydown , keypress , keyup 
// document.getElementById('input-value')
// .addEventListener('keyup',function(e){
//   console.log('typing',e.target.value);
// });



document.getElementById('input-field')
.addEventListener('keyup',function(e){
  console.log('type :',e.target.value);

const eValueInput = e.target.value;

if(eValueInput === 'Remove Repo'){
  const delete_Btn = document.getElementById('delete-btn');
  delete_Btn.removeAttribute('disabled');
}

});
