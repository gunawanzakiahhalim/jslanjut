const title = document.createElement('title');
const titletxt = document.createTextNode('for..of & for..in');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Looping Nodelist for..of');
judul.appendChild(txt);
document.body.appendChild(judul);
// nodelist
const liNama = document.querySelectorAll('.nama');

let cetak = '';

for (n of liNama) {
  console.log(n.innerHTML);
  cetak += n.innerHTML;
}

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
