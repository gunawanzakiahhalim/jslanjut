const title = document.createElement('title');
const titleText = document.createTextNode('Tampil Nama');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Tampil Nama');
judul.appendChild(text);
document.body.appendChild(judul);

let tampilNama = function(nama) {
    return `Halo ${nama}`;
}
console.log(tampilNama('Gunawan'));

const elNama = document.createElement('h2');
const textNama = document.createTextNode(tampilNama("Gunawan"));
elNama.appendChild(textNama);
document.body.appendChild(elNama);