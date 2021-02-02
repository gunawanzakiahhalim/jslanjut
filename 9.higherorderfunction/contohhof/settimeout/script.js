const title = document.createElement('title');
const titleText = document.createTextNode('setTimeout');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('setTimeout');
judul.appendChild(text);
document.body.appendChild(judul);

setTimeout(function() {
    console.log('Hello World')
}, 1000);

const elh2 = document.createElement('h2');
const txth2 = document.createTextNode('setTimeout');
elh2.appendChild(txth2);
document.body.appendChild(elh2);