const title = document.createElement('title');
const titleText = document.createTextNode('Tanpa Parameter');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Tanpa Parameter');
judul.appendChild(text);
document.body.appendChild(judul);

let tampilNama = () => `Hello World`;
console.log(tampilNama());

const elNama = document.createElement('h2');
const textNama = document.createTextNode(tampilNama());
elNama.appendChild(textNama);
document.body.appendChild(elNama);