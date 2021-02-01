const title = document.createElement('title');
const titleText = document.createTextNode('Anonymous Function');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Anonymous Function');
judul.appendChild(text);
document.body.appendChild(judul);

function init() {
    return function(nama) {
        console.log(nama);
    }
}
let panggilNama = init();
panggilNama('Gunawan');
panggilNama('Zakiah');