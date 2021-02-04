const title = document.createElement('title');
const titletxt = document.createTextNode('Template Literal');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('HTML Fragments');
judul.appendChild(txt);
document.body.appendChild(judul);

// Template Literal / Template String
// HTML Fragments
const mhs = {
    nama: 'Gunawan',
    umur: 33,
    nrp: '154603',
    email: 'gunawanzakiahhalim@gmail.com'
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);