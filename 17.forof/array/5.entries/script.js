const title = document.createElement('title');
const titletxt = document.createTextNode('for..of & for..in');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Intries for..of');
judul.appendChild(txt);
document.body.appendChild(judul);

// for..off

const mhs = ['Gunawan', 'Zakiah', 'Halim'];

let cetak = '';
for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah Mahasiswa ke-${i + 1}`);
  cetak += `${m} adalah Mahasiswa ke-${i + 1}<br>`;
}

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
