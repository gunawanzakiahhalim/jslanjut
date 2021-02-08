const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Memberikan Default Value + assign');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Memberi nilai default + assign ke variable baru
const mhs = {
    nama: 'Gunawan',
    umur: 33,
    email: 'gunawanzakiahhalim@gmail.com'
}
const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;

console.log(e);

const section = document.createElement('section');
section.innerHTML = e;
document.body.appendChild(section);