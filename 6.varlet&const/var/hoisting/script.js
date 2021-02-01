const title = document.createElement('title');
const titleText = document.createTextNode('Hoisting');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Hoisting');
judul.appendChild(text);
document.body.appendChild(judul);

console.log(i);
var i = 10;