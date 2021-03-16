const title = document.createElement('title');
const titletxt = document.createTextNode('Spread Operator');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Concat');
judul.appendChild(txt);
document.body.appendChild(judul);

// Menggabungkan 2 Array
// Concat

const mhs = ['Gunawan', 'Zakiah', 'Halim'];
const dosen = ['Ade', 'Hendra', 'Wanda'];
const orang = mhs.concat(dosen);
console.log(orang);


const section = document.createElement('section');
section.innerHTML = orang.join('-');
document.body.appendChild(section);