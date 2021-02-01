const title = document.createElement('title');
const titleText = document.createTextNode('Function Scope');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Function Scope');
judul.appendChild(text);
document.body.appendChild(judul);

function tes() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}
tes();
console.log(i);