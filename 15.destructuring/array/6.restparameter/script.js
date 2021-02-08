const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Rest Parameter');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Destructuring Array
// Rest Parameter
const [a, ...values] = [1, 2, 3, 4, 5];
console.log(a);
console.log(values);
const section = document.createElement('section');
section.innerHTML = `${a}${values}`;
document.body.appendChild(section);