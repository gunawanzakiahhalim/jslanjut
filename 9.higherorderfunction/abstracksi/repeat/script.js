const title = document.createElement('title');
const titleText = document.createTextNode('repeat');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('repeat');
judul.appendChild(text);
document.body.appendChild(judul);

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(10, console.log);
repeat(3, alert);

const elh2 = document.createElement('h2');
const txth2 = document.createTextNode('repeat');
elh2.appendChild(txth2);
document.body.appendChild(elh2);