const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Function');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Destructuring');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring

function penjumlahanPerkalian(a,b){
    return [a + b, a * b];
}

const [jumlah, kali] = penjumlahanPerkalian(2,3);
console.log(jumlah);
console.log(kali);

const section = document.createElement('section');
section.innerHTML = `hasil jumlah ${jumlah} dan hasil kali ${kali}`;
document.body.appendChild(section);