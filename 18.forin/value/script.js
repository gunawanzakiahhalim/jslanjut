const title = document.createElement('title');
const titletxt = document.createTextNode('for..of & for..in');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('for..in value');
judul.appendChild(txt);
document.body.appendChild(judul);

// for..in
const mhs = {
  nama: 'Gunawan',
  umur: 30,
  email: 'gunawanzakiahhalim@gmail.com',
};

let cetak = '';
for (m in mhs) {
  console.log(mhs[m]);
  cetak += mhs[m];
}

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
