const title = document.createElement('title');
const titletxt = document.createTextNode('Destructuring Variable');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Mengambil field pada object');
judul.appendChild(txt);
document.body.appendChild(judul);

// Destructuring Variable / Assignment

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Gunawan',
    umur: 33,
    email: 'gunawanzakiahhalim@gmail.com'
}

function getIdMhs({ id }) {
    return id;
}
console.log(getIdMhs(mhs));
const section = document.createElement('section');
section.innerHTML = getIdMhs(mhs);
document.body.appendChild(section);