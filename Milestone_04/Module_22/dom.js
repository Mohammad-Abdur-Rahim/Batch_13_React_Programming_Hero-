console.log('Dom Connected');

// Dom Value Find and loop . 1 collect tag name 2. loop tag value
// const liCollection = document.getElementsByClassName('skill');
// console.log(liCollection);
// const liCollection = document.getElementById('skill');
// console.log(liCollection.innerText);
// liCollection.innerText = "Perfect to work Dom";
// console.log(liCollection.innerText)
const collectionh2 =document.getElementsByClassName('wp_skill');
 console.log(collectionh2);
for(const element of collectionh2){
    console.log(element.innerText);
}