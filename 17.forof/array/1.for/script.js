const title = document.createElement('title');
const titletxt = document.createTextNode('for..of & for..in');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('For');
judul.appendChild(txt);
document.body.appendChild(judul);

// for..off

const mhs = ['Gunawan', 'Zakiah', 'Halim'];

let cetak = ""
for (let i = 0; i < mhs.length; i++) {
    console.log(mhs[i]);
    cetak += mhs[i]
}

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);