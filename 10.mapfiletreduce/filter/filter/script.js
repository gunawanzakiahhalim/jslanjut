const title = document.createElement('title');
const titleText = document.createTextNode('Arrow Function filter');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Arrow Function filter');
judul.appendChild(text);
document.body.appendChild(judul);

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >=3 
// filter dengan arrow function
const newAngka = angka.filter(a => a >= 3);

console.log(newAngka);

const elh2 = document.createElement('h2');
const txth2 = document.createTextNode(newAngka);
elh2.appendChild(txth2);
document.body.appendChild(elh2);