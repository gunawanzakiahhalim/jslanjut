const title = document.createElement('title');
const titletxt = document.createTextNode('Rest Parameter');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('MyFunc');
judul.appendChild(txt);
document.body.appendChild(judul);

// Rest Parameter

function myFunc(a,b) {
    return b;
    }

console.log(myFunc(1,2,3,4,5));
const cetak = myFunc(1,2,3,4,5);


const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);