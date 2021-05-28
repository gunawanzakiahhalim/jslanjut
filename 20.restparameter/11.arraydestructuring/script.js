const title = document.createElement('title');
const titletxt = document.createTextNode('Rest Parameter');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Array Destructuring');
judul.appendChild(txt);
document.body.appendChild(judul);

// Array Destructuring

const kelompok1 = ['Gunawan', 'Zakiah', 'Halim', 'Rikaz', 'Ilya'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);
const cetak = anggota;

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
