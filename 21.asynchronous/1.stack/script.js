const title = document.createElement('title');
const titletxt = document.createTextNode('Asynchronous Javascript');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Stack');
judul.appendChild(txt);
document.body.appendChild(judul);

// Stack

console.log('satu');
console.log('dua');
console.log('tiga');


const cetak = 'stack';

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
