const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Function');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Destructuring Argument Bersarang');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring

// Destructuring function arguments

const mhs1 = {
    nama : 'Gunawan',
    umur : '30',
    email : 'gunawanzakiahhalim@gmail.com',
    nilai : {
        tugas : 80,
        uts : 85,
        uas : 75
    }
}

function cetakMhs ({nama,umur,nilai:{tugas, uts, uas}}) {
    return `Halo, nama saya ${nama} dan saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

const cetak = cetakMhs(mhs1);
console.log(cetak);

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
