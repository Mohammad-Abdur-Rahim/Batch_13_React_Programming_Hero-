
// 01 parent Node Where i Add.....
const mainContainer =document.getElementById('main-container');

// 02 Create Element new..  section
const newElementAdd = document.createElement('section');
//create h1
const h1 = document.createElement('h1');
h1.innerText = 'Wordpress To React Developer Work Life Balance';
newElementAdd.appendChild(h1);




const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Wordpress to React';
 ul.appendChild(li1);
 newElementAdd.appendChild(ul);





// 03 Append here just ..............
mainContainer.appendChild(newElementAdd);
