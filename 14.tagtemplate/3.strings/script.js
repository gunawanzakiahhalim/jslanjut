const title = document.createElement('title');
const titletxt = document.createTextNode('Tagged Template');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Strings');
judul.appendChild(txt);
document.body.appendChild(judul);

// Tagged Templates
const nama = 'Gunawan';
const umur = 30;

function coba(strings) {
    return strings;
}

const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun.`
console.log(str);

const section = document.createElement('section');
section.innerHTML = str;
document.body.appendChild(section);