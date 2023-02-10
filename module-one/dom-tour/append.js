
const placesList = document.getElementById('places-list');


const newLi = document.createElement('li');
newLi.innerText = 'pahartoli bon';

placesList.appendChild(newLi);

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Dresses"
section.appendChild(h1);
console.log(section);

const ul = document.createElement('ul');

const liOne = document.createElement('li');
liOne.innerText = "lungi";
ul.appendChild(liOne);

const liTwo = document.createElement('li');
liTwo.innerText = "t-shirt";
ul.appendChild(liTwo);

const liThree = document.createElement('li');
liThree.innerText = "sando ganji";
ul.appendChild(liThree);

section.appendChild(ul);
mainContainer.appendChild(section);

const foodSection = document.createElement('section');

foodSection.innerHTML = `
<h1>My Food Section</h1>
<ul>
  <li>Biriyani</li>
  <li>Borhani</li>
  <li>Salad</li>
</ul>
`
mainContainer.appendChild(foodSection);