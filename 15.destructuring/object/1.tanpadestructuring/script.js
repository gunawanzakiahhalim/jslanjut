const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Tanpa Destructuring');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Destructuring Object
const mhs = {
    nama: 'Gunawan',
    umur: 33
}
const nama = mhs.nama;

const section = document.createElement('section');
section.innerHTML = nama;
document.body.appendChild(section);