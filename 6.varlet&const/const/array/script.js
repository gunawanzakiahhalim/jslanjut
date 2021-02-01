const title = document.createElement('title');
const titleText = document.createTextNode('Array');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Array');
judul.appendChild(text);
document.body.appendChild(judul);

const i = [1, 2, 3];
i.push(4);
console.log(i);