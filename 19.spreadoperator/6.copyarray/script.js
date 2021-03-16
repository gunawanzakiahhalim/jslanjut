const title = document.createElement('title');
const titletxt = document.createTextNode('Spread Operator');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('meng-copy array');
judul.appendChild(txt);
document.body.appendChild(judul);

// meng-copy array

const mhs = ['Gunawan', 'Zakiah', 'Halim'];
const mhs1 = [...mhs];
mhs1[0] = 'Fajar';
console.log(mhs1);
console.log(mhs);


const section = document.createElement('section');
section.innerHTML = mhs1.join('-');
document.body.appendChild(section);