const title = document.createElement('title');
const titleText = document.createTextNode('Looping');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Looping');
judul.appendChild(text);
document.body.appendChild(judul);

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);