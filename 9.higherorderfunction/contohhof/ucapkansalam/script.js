const title = document.createElement('title');
const titleText = document.createTextNode('Ucapkan Salam');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Ucapkan Salam');
judul.appendChild(text);
document.body.appendChild(judul);

function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`)
    }
}

let selamatMalam = ucapkanSalam('Malam');
console.dir(selamatMalam('Gunawan'));

const elh2 = document.createElement('h2');
const txth2 = document.createTextNode(selamatMalam('Zakiah'));
elh2.appendChild(txth2);
document.body.appendChild(elh2);