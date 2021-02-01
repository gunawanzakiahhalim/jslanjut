const title = document.createElement('title');
const titleText = document.createTextNode('Mahasiswa Arrow Function');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Mahasiswa Arrow Function');
judul.appendChild(text);
document.body.appendChild(judul);

let mahasiswa = ['Gunawan', 'Zakiah Halim', 'Ilayah'];

let jumlahHuruf = mahasiswa.map(nama => nama.length);

//console.log(jumlahHuruf);
console.log(jumlahHuruf);

const elNama = document.createElement('h2');
const textNama = document.createTextNode(jumlahHuruf);
elNama.appendChild(textNama);
document.body.appendChild(elNama);