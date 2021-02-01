const title = document.createElement('title');
const titleText = document.createTextNode('Implisit Return');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Implisit Return');
judul.appendChild(text);
document.body.appendChild(judul);

let tampilNama = nama => `Halo ${nama}`;
console.log(tampilNama('Zakiah Halim'));

const elNama = document.createElement('h2');
const textNama = document.createTextNode(tampilNama("Zakiah Halim"));
elNama.appendChild(textNama);
document.body.appendChild(elNama);