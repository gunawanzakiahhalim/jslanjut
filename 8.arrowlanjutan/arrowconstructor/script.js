const title = document.createElement('title');
const titleText = document.createTextNode('Arrow Constructor');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Arrow Function Constructor');
judul.appendChild(text);
document.body.appendChild(judul);

// konsep this pada Arrow Function
// Constructor Function
const Mahasiswa = function() {
    this.nama = 'Gunawan';
    this.umur = '30';
    this.sayHello = () => {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }
}

const gunawan = new Mahasiswa();


const elNama = document.createElement('h2');
const textNama = document.createTextNode(gunawan);
elNama.appendChild(textNama);
document.body.appendChild(elNama);