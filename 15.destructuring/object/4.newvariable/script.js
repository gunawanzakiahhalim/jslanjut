const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Assignment ke variable baru');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Assignment ke variable baru
const mhs = {
    nama: 'Gunawan',
    umur: 33
}
const { nama: n, umur: u } = mhs;

console.log(n);

const section = document.createElement('section');
section.innerHTML = n;
document.body.appendChild(section);