const title = document.createElement('title');
const titletxt = document.createTextNode('for..of & for..in');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Looping String for..of');
judul.appendChild(txt);
document.body.appendChild(judul);

// string

const nama = 'Gunawan';

let cetak = '';
for (const n of nama) {
  console.log(n);
  cetak += n;
}

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
