const title = document.createElement('title');
const titletxt = document.createTextNode('Template Literal');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Multiline String');
judul.appendChild(txt);
document.body.appendChild(judul);

// Template Literal / Template String
// Mulit-line String
// Embedded Expression
// HTML Fragments
// Expression Interpolation
// Tagged Teimplate
console.log(`string 1
string 2`);

// Mulit-line String (HTML Fragments)(2)
const mhs = {
    nama: 'Gunawan',
    umur: 30,
    nrp: '154603',
    email: 'gunawanzakiahhalim@gmail.com'
};

let el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;
console.log(el);