const title = document.createElement('title');
const titletxt = document.createTextNode('Spread Operator');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Menggabungkan 2 Array');
judul.appendChild(txt);
document.body.appendChild(judul);

// Menggabungkan 2 Array

const mhs = ['Gunawan', 'Zakiah', 'Halim'];
const dosen = ['Ade', 'Hendra', 'Wanda'];
const orang = [...mhs, ...dosen];

console.log(orang);


const section = document.createElement('section');
section.innerHTML = orang.join('-');
document.body.appendChild(section);