const title = document.createElement('title');
const titleText = document.createTextNode('reduce');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('reduce');
judul.appendChild(text);
document.body.appendChild(judul);

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// reduce
// jumlahkan seluruh element pada array
// 0 + -1+ 8+ 9+ 1+ 4+ -5+ -4+ 3+ 2+ 9
const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(newAngka);

const elh2 = document.createElement('h2');
const txth2 = document.createTextNode(newAngka);
elh2.appendChild(txth2);
document.body.appendChild(elh2);