console.log('Dom Connected');

// Dom Value Find and loop . 1 collect tag name 2. loop tag value
// const liCollection = document.getElementsByClassName('skill');
// console.log(liCollection);
const liCollection = document.getElementById('skill');
console.log(liCollection.innerText);
liCollection.innerText = "Perfect to work Dom";
console.log(liCollection.innerText)

// for(const li of liCollection){
//     console.log(skill.innerText);
// }