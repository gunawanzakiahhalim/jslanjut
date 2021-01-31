// Buat Element Judul
const judul = document.createElement('h1');
const text = document.createTextNode('Global Execution Context');
judul.appendChild(text);
document.body.appendChild(judul);

// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

var nama = "Gunawan"
var umur = 30;
console.log(sayHello());

function sayHello()
{
    return `Helo, nama saya ${nama}, saya ${umur} tahun.`;
}

// function membuat Local Execution Context
// yang di dalamanya terdapat creation dan execution phase
// window
// arguments
// hoisting
