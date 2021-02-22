const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Function');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Nilai Default Destructuring');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring

function kalkulasi(a,b){
    return [a + b, a - b, a * b, a / b];
}

const [tambah,kurang,kali,bagi = 'tidak ada'] = kalkulasi(2,3);
console.log(bagi);

const section = document.createElement('section');
section.innerHTML = bagi;
document.body.appendChild(section);