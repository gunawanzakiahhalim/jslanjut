const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Function');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Argument');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring

// Destructuring function arguments

const mhs1 = {
    nama : 'Gunawan',
    umur : '30',
    email : 'gunawanzakiahhalim@gmail.com'
}

function cetakMhs (nama,umur) {
    return `Halo, nama saya ${nama} dan saya berumur ${umur} tahun.`;
}

const cetak = cetakMhs(mhs1.nama, mhs1.umur);
console.log(cetak);

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
