// call stack + Memory heap
const number = 610; // allocate memory for nr.
const string = 'some text'; // allocate memory for string
const human = { // allocate memory for an objext ... and it's values
  firstName: 'Erick',
  lastName: 'Gruber'
}

// Stack
function inception() {
  inception()
}

inception()

let array = [];
for (let i = 5; i > 1; i++) {
  array.push(i - 1);
}

//Memory leak

// Global leak
var a = 1;
var b = 1;
var b = 1;

// Event listeners
/*This happens a lot, especially if you go back and forth between single page applications where you're not removing the event listeners off the page.*/
let elemnt = document.getElementById('button');
element.addEventListener('click', onclick)

//setInterval
setInterval(() => {
  // refereing onjetcts
  /*You start referencing objects.And these objects in here are going to, well, never be collected by the garbage collector, because this set interval, unless we clear it and stop it, is going to keep running and running and running.*/
})
