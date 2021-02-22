const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Function');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Argument Object');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring

// Destructuring function arguments

const mhs1 = {
    nama : 'Gunawan',
    umur : '30',
    email : 'gunawanzakiahhalim@gmail.com'
}

function cetakMhs (mhs) {
    return `Halo, nama saya ${mhs.nama} dan saya berumur ${mhs.umur} tahun.`;
}

const cetak = cetakMhs(mhs1);
console.log(cetak);

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
