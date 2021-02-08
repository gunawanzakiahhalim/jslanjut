const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Rest Parameter');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Memberi nilai default + assign ke variable baru
const mhs = {
    nama: 'Gunawan',
    umur: 33,
    email: 'gunawanzakiahhalim@gmail.com'
}
const { nama, ...value } = mhs;

console.log(nama);
console.log(value);

const section = document.createElement('section');
section.innerHTML = `${nama}${value}`;
document.body.appendChild(section);