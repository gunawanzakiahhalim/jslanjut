const title = document.createElement('title');
const titletxt = document.createTextNode('for..of & for..in');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Foreach Index');
judul.appendChild(txt);
document.body.appendChild(judul);

// for..off

const mhs = ['Gunawan', 'Zakiah', 'Halim'];

let cetak = '';
mhs.forEach((m, i) => {
  console.log(`${m} adalah Mahasiswa ke-${i + 1}`);
  cetak += `${m} adalah Mahasiswa ke-${i + 1}<br>`;
});

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
