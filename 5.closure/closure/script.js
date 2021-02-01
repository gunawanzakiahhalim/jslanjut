const title = document.createElement('title');
const titleText = document.createTextNode('Closure');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Closure');
judul.appendChild(text);
document.body.appendChild(judul);

function init() {
    let nama = 'Gunawan';

    function tampilNama() {
        console.log(nama);
    }
    return tampilNama;
}
let pangilNama = init();
pangilNama();