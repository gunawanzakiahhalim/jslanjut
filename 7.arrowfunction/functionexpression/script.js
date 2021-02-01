const title = document.createElement('title');
const titleText = document.createTextNode('Function Expression');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Function Expression');
judul.appendChild(text);
document.body.appendChild(judul);

let tampilPesan = function(nama) {
    alert('halo ' + nama);
}
tampilPesan('Gunawan');