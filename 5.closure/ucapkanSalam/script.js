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
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

selamatPagi('Gunawan');
selamatMalam('Zakiah');