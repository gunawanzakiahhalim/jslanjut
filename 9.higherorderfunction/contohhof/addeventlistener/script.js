const title = document.createElement('title');
const titleText = document.createTextNode('addEventListener');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('addEventListener');
judul.appendChild(text);
document.body.appendChild(judul);

const tombol = document.createElement('button');
const txtbtn = document.createTextNode('click');
tombol.appendChild(txtbtn);
document.body.appendChild(tombol);

tombol.addEventListener('click', function() {
    console.log('tombol ditekan');
});

const elh2 = document.createElement('h2');
const txth2 = document.createTextNode('addEventListener');
elh2.appendChild(txth2);
document.body.appendChild(elh2);