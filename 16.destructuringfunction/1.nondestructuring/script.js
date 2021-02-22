const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Function');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Non Destructuring');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring

function penjumlahanPerkalian(a,b){
    return [a + b, a * b];
}

const jumlah = penjumlahanPerkalian(2,3)[0];
const kali = penjumlahanPerkalian(2,3)[1];

console.log(kali);

const section = document.createElement('section');
section.innerHTML = kali;
document.body.appendChild(section);