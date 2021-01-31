const  title = document.createElement('title');
const titleText = document.createTextNode('Latihan');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Latihan');
judul.appendChild(text);
document.body.appendChild(judul);

// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

function satu(){
    var nama = 'Gunawan';
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama = 'Zakiah';
satu();
dua('Ilya');
console.log(nama);