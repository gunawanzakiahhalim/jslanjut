const title = document.createElement('title');
const titletxt = document.createTextNode('Spread Operator');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Spread Operator');
judul.appendChild(txt);
document.body.appendChild(judul);

// Spread Operator

// Memecah Iterables menjadi single element

const mhs = ['Gunawan', 'Zakiah', 'Halim'];

console.log(...mhs);


let cetak = (nama) => {
    return nama;
}
const cetakArray = cetak(...mhs);

const section = document.createElement('section');
section.innerHTML = cetakArray;
document.body.appendChild(section);