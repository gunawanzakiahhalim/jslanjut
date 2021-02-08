const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Memberikan Default Value');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Memberikan Default Value
const mhs = {
    nama: 'Gunawan',
    umur: 33,
    email: 'gunawanzakiahhalim@gmail.com'
}
const { nama, umur, email = 'email@default.com' } = mhs;

console.log(email);

const section = document.createElement('section');
section.innerHTML = email;
document.body.appendChild(section);