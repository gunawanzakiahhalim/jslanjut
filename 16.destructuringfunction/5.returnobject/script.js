const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Function');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('return value object');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring

function kalkulasi(a,b){
    return {
        tambah : a + b,
        kurang : a - b,
        kali : a * b,
        bagi : a / b,
    }
}

const {bagi, tambah, kali, kurang} = kalkulasi(2,3);
console.log(kurang);

const section = document.createElement('section');
section.innerHTML = kurang;
document.body.appendChild(section);