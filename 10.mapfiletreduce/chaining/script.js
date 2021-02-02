const title = document.createElement('title');
const titleText = document.createTextNode('Method Chaining');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Method Chaining');
judul.appendChild(text);
document.body.appendChild(judul);

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Method Chaining
// cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka.filter(a => a > 5) // 8,9,9
    .map(a => a * 3) // 24, 27, 27
    .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);

const elh2 = document.createElement('h2');
const txth2 = document.createTextNode(hasil);
elh2.appendChild(txth2);
document.body.appendChild(elh2);