const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Assignment tanpa deklarasi object');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Assignment tanpa deklarasi object
({ nama, umur } = { nama: 'Gunawan', umur: 33 });

console.log(nama);

const section = document.createElement('section');
section.innerHTML = nama;
document.body.appendChild(section);