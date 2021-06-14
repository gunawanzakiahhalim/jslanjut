const title = document.createElement('title');
const titletxt = document.createTextNode('Asynchronous Javascript');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Cetak Luas Kotak');
judul.appendChild(txt);
document.body.appendChild(judul);

// cetak luas kotak

function kalikan(a, b) {
    return a * b;
}

function hitungLuas(sisi) 
{
    return kalikan(sisi, sisi);
}

function cetakLuasKotak(sisi) {
    const luas = hitungLuas(sisi);
    console.log(luas);
    const cetak = luas;
    const section = document.createElement('section');
    section.innerHTML = cetak;
    document.body.appendChild(section);

    
}
cetakLuasKotak(5);
