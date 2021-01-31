// Buat Element Judul
const  title = document.createElement('title');
const titleText = document.createTextNode('Execution Stack');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Execution Stack');
judul.appendChild(text);
document.body.appendChild(judul);

// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// function membuat Local Execution Context
// yang di dalamanya terdapat creation dan execution phase
// window
// arguments
// hoisting

function a(){
    console.log('ini a');
    function b(){
        console.log('ini b');
        function c(){
            console.log('ini c');
        }
        c();
    }
    b();
}
a();


