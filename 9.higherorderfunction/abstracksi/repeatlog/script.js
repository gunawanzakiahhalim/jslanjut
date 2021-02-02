const title = document.createElement('title');
const titleText = document.createTextNode('ReapeatLog');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('ReapeatLog');
judul.appendChild(text);
document.body.appendChild(judul);

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

repeatLog(10);
const elh2 = document.createElement('h2');
const txth2 = document.createTextNode(repeatLog(5));
elh2.appendChild(txth2);
document.body.appendChild(elh2);