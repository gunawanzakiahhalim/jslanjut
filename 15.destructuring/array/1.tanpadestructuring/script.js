const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Tanpa Destructuring');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Destructuring Array

const perkenalan = ['Halo', 'nama', 'saya', 'Gunawan'];
const salam = perkenalan[0];
const nama = perkenalan[3];

console.log(nama);

const section = document.createElement('section');
section.innerHTML = nama;
document.body.appendChild(section);