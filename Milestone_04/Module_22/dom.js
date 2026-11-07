console.log('Dom Connected');

// Dom Value Find and loop . 1 collect tag name 2. loop tag value
const liCollection = document.getElementsByTagName('li');
console.log(liCollection);

for(const li of liCollection){
    console.log(li.innerText);
}