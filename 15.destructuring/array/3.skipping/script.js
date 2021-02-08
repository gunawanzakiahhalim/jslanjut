const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Skip');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Gunawan'];

// skipping items
const [salam, , , nama] = perkenalan;

console.log(nama);

const section = document.createElement('section');
section.innerHTML = nama;
document.body.appendChild(section);