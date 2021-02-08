const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Swap Items');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Destructuring Array
// Swap items
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

const section = document.createElement('section');
section.innerHTML = `${a}${b}`;
document.body.appendChild(section);