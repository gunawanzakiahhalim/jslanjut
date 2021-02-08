const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Return value pada function');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Destructuring Array
// return value pada function
function coba() {
    return [1, 2];
}

const [a, b] = coba()
const section = document.createElement('section');
section.innerHTML = `${a}${b}`;
document.body.appendChild(section);