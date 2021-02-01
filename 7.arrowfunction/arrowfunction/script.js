const title = document.createElement('title');
const titleText = document.createTextNode('Arrow Function');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Arrow Function');
judul.appendChild(text);
document.body.appendChild(judul);

let tampilPesan = (nama) => {
    alert('halo ' + nama);
}
tampilPesan('Gunawan');