const buttons = document.querySelectorAll('button');
for(const button of buttons){
  button.style.padding = '15px';
  button.style.border = '0';
  button.style.borderRadius = '10px';
  button.style.fontSize = '1.2rem';
  button.style.fontWeight = 'bold';
}

const yellow = document.getElementById('yellow');
yellow.style.backgroundColor = 'yellow';

const red = document.getElementById('red');
red.style.backgroundColor = 'red';

const makeBlue = document.getElementById('makeBlue');
makeBlue.style.backgroundColor = 'blue';

const makePurple = document.getElementById('makePurple');
makePurple.style.backgroundColor = 'purple';

document.getElementById('makePink').style.backgroundColor = 'pink';

document.getElementById('makeGreen').style.backgroundColor = 'green';

document.getElementById('makeGoldnrod').style.backgroundColor = 'goldenrod';
// option 1
// <button onclick="document.body.style.backgroundColor = 'yellow'" id="yellow">Make Yellow</button>


// option 2 call function directly in html element
//  <button onclick="makeRed()" id="red">Make Red</button>

function makeRed(){
  document.body.style.backgroundColor = 'red';
}

// option 3 get the button by id, then set the value of id variable as a function
// <button id="makeBlue">Make Blue</button>

const blueButton = document.getElementById('makeBlue');

function makeBlueButton(){
  document.body.style.backgroundColor = 'blue';
}

blueButton.onclick = makeBlueButton;

// option 3 alternate 
// <button id="makePurple">Make Purple</button>

const purpleButton = document.getElementById('makePurple');

purpleButton.onclick = function() {
  document.body.style.backgroundColor = 'purple';
}

// option 4
const makePink = document.getElementById("makePink");

function pinkButton(){
  document.body.style.backgroundColor = 'pink';
}

makePink.addEventListener('click', pinkButton);

// option 4 another
const greenButton = document.getElementById('makeGreen');

greenButton.addEventListener('click', function(){
  document.body.style.backgroundColor = 'green';
});

// option 4 final
document.getElementById('makeGoldnrod').addEventListener('click', function(){
  document.body.style.backgroundColor = 'goldenrod';
})