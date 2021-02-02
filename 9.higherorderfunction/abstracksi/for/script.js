const title = document.createElement('title');
const titleText = document.createTextNode('For');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Looping For');
judul.appendChild(text);
document.body.appendChild(judul);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const elh2 = document.createElement('h2');
const txth2 = document.createTextNode('Looping For');
elh2.appendChild(txth2);
document.body.appendChild(elh2);