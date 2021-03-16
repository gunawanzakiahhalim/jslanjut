const title = document.createElement('title');
const titletxt = document.createTextNode('Spread Operator');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('For');
judul.appendChild(txt);
document.body.appendChild(judul);

const liMhs = document.querySelectorAll('li');

const mhs = [];
for (let i = 0; i < liMhs.length; i++) {
    mhs.push(liMhs[i].textContent);
}
console.log(mhs)



const section = document.createElement('section');
section.innerHTML = mhs;
document.body.appendChild(section);