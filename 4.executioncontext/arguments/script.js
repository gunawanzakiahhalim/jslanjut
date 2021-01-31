// Buat Element Titile 
const  title = document.createElement('title');
const titleText = document.createTextNode('Latihan');
title.appendChild(titleText)
document.head.appendChild(title);

// Buat Element Judul
const judul = document.createElement('h1');
const text = document.createTextNode('Latihan');
judul.appendChild(text);
document.body.appendChild(judul);

// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// function membuat Local Execution Context
// yang di dalamanya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = 'Gunawan';
var username = '@gunawanzakiahhalim';

function cetakUrl(){
    console.log(arguments);
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

console.log(cetakUrl('@zakiahhalim', '@ilya'));


