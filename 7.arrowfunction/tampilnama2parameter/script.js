const title = document.createElement('title');
const titleText = document.createTextNode('Tampil Nama');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Tampil Nama Dua Parameter');
judul.appendChild(text);
document.body.appendChild(judul);

let tampilNama = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`;
}
console.log(tampilNama('Zakiah Halim', 'Malam'));

const elNama = document.createElement('h2');
const textNama = document.createTextNode(tampilNama('Zakiah Halim', 'Malam'));
elNama.appendChild(textNama);
document.body.appendChild(elNama);