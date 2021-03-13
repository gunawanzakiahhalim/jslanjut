const title = document.createElement('title');
const titletxt = document.createTextNode('for..of & for..in');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('for..of');
judul.appendChild(txt);
document.body.appendChild(judul);

// for..off

const mhs = ['Gunawan', 'Zakiah', 'Halim'];

let cetak = '';
for (const m of mhs) {
  console.log(m);
  cetak += m;
}

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
