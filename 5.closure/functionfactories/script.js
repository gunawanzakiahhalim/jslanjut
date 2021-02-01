const title = document.createElement('title');
const titleText = document.createTextNode('Function Factory');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Function Factory');
judul.appendChild(text);
document.body.appendChild(judul);

function init() {
    //let nama = 'Gunawan';

    function tampilNama(nama) {
        console.log(nama);
    }
    return tampilNama;
}
let pangilNama = init();
pangilNama('Gunawan');