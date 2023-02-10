let sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
  
  section.style.border = "2px solid steelblue";
  section.style.marginBottom = "5px";
  section.style.borderRadius = "15px";
  section.style.padding = "15px";
  section.style.backgroundColor = "lightgray";
}
const places = document.getElementById('places');
places.style.backgroundColor = "yellow";

const fruits = document.getElementsByClassName('fruits-container');
// console.log(fruits)
const element = fruits[0];
// console.log(element)
// element.style.backgroundColor = "yellowgreen"
element.classList.add('yellow-bg');
element.classList.remove('large-text');
// console.log(element.classList)

