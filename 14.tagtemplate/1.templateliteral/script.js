const title = document.createElement('title');
const titletxt = document.createTextNode('Tagged Template');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Template Literal Biasa');
judul.appendChild(txt);
document.body.appendChild(judul);

// Tagged Templates
const nama = 'Gunawan';
const umur = 30;

const str = `Halo, nama saya ${nama}, saya ${umur} tahun.`

const section = document.createElement('section');
section.innerHTML = str;
document.body.appendChild(section);