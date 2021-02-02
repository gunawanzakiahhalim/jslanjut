const title = document.createElement('title');
const titleText = document.createTextNode('for');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('for');
judul.appendChild(text);
document.body.appendChild(judul);

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >=3 
// for
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
}
console.log(newAngka)


const elh2 = document.createElement('h2');
const txth2 = document.createTextNode(newAngka);
elh2.appendChild(txth2);
document.body.appendChild(elh2);