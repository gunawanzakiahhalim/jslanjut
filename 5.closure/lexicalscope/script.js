const title = document.createElement('title');
const titleText = document.createTextNode('Lexical Scope');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Lexical Scope');
judul.appendChild(text);
document.body.appendChild(judul);

function init() {
    let nama = 'Gunawan';
    let umur = 30;

    function tampilNama() {
        console.log(nama);
        console.log(umur);
    }
    console.dir(tampilNama);
}
init();