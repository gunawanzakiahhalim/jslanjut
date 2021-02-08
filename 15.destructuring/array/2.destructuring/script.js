const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Destructuring');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Gunawan'];

const [salam, satu, dua, nama] = perkenalan;

console.log(salam);

const section = document.createElement('section');
section.innerHTML = salam;
document.body.appendChild(section);