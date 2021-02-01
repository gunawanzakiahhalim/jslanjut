const title = document.createElement('title');
const titleText = document.createTextNode('Mhs');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('mhs Object');
judul.appendChild(text);
document.body.appendChild(judul);

const mhs = {
    nama: "Gunawan",
    umur: 30
}

mhs.umur = 31;
console.log(mhs);