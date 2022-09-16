/*// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');
const title = document.getElementById('main-title');
title.textContent = 'Hello Ck;';
title.style.color = 'olive';
title.style.backgroundColor = 'grey';

const list = document.querySelector('li:last-of-type');
list.textContent = list.textContent + ' Changed by Ck DOM';

for (const listItemElement of listItemElements) {
  // console.dir(listItemElement);
}

// ----------------------  Traversing Child Nodes
const ul = document.querySelector('ul');

// console.dir(ul.children[2]);
// console.dir(ul.childNodes);
// console.dir(ul.firstElementChild);
// console.dir(ul.lastElementChild); 

//-------------------------- Using parentNode and parentElement

const li = document.querySelector('li');

// console.log(li.parentNode);
// console.log(li.closest('body'));

// -------------Selecting Sibling Elements

console.log(ul.previousSibling);
console.log(ul.previousElementSibling);

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);*/

//--------------Styling DOM

// 1. Via style property
// 2. Via className
// 3. Via classList

// const section = document.querySelectorAll('section');
// const button = document.querySelector('button');
// section[1].style.backgroundColor = 'red';

// section[2].style.backgroundColor = 'yellow';
//section[2].className = '';
//button.addEventListener('click', () => {
/*if (section[0].className === 'visible') {
    section[0].className === 'invisible';
  } else {
    section[0].className = 'visible';
  }*/

// section[2].classList.toggle('visible');
// section[2].classList.toggle('invisible');
// section[2].classList.remove('visible');

//
// });

// -------------- Creating and inserting Elements

// const section = document.querySelectorAll('section');
// const ul = document.querySelector('ul');
// const div = document.querySelector('div');

// ul.innerHTML = ul.innerHTML + '<li>Hello Gagarin</li>';

// div.insertAdjacentHTML('beforeend', '<p>Something went wrong</p>');
//const newLi = document.createElement('li');
// const cretedNewLi = ul.appendChild(newLi);
// cretedNewLi.textContent = 'hello Erick';
// newLi.textContent = 'Hello';
// ul.prepend(newLi);
// ul.lastElementChild.before(newLi);

// const clonedLi = newLi.cloneNode(true);
// clonedLi.appendChild(newLi, clonedLi);

