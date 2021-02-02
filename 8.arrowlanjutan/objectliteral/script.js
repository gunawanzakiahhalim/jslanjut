const title = document.createElement('title');
const titleText = document.createTextNode('Object Literal');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Object Literal');
judul.appendChild(text);
document.body.appendChild(judul);

// konsep this pada Arrow Function
// Object Literal
const mhs1 = {
    nama: 'Gunawan',
    umur: 30,
    sayHello: function() {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }
}

const elh2 = document.createElement('h2');
const texth2 = document.createTextNode(mhs1.sayHello());
elh2.appendChild(texth2);
document.body.appendChild(elh2);