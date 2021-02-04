const title = document.createElement('title');
const titletxt = document.createTextNode('Template Literal');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Embedded Expression');
judul.appendChild(txt);
document.body.appendChild(judul);

// Template Literal / Template String
// Embedded Expression
const nama = 'Gunawan';
const umur = 30;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log(`${1+1}`);
// console.log(`${alert('halo!')}`);
const x = 10;
console.log(`${(x % 2 == 0 ) ? 'genap' : 'ganjil'}`);