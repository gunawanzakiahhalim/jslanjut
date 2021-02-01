const title = document.createElement('title');
const titleText = document.createTextNode('Object');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Object');
judul.appendChild(text);
document.body.appendChild(judul);

let mahasiswa = ['Gunawan', 'Zakiah Halim', 'Ilayah'];

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));

console.table(jumlahHuruf);

const elNama = document.createElement('h2');
const textNama = document.createTextNode(jumlahHuruf);
elNama.appendChild(textNama);
document.body.appendChild(elNama);