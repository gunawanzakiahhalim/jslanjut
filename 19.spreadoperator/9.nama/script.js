const title = document.createElement('title');
const titletxt = document.createTextNode('Spread Operator');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Span');
judul.appendChild(txt);
document.body.appendChild(judul);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;


console.log(huruf);

const section = document.createElement('section');
section.innerHTML = huruf;
document.body.appendChild(section);