const title = document.createElement('title');
const titleText = document.createTextNode('Function Declaration');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Function Declaration');
judul.appendChild(text);
document.body.appendChild(judul);

function tampilPesan(nama) {
    alert('halo ' + nama);
}

tampilPesan("Gunawan");