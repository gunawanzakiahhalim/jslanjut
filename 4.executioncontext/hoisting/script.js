// Buat Element Judul
const judul = document.createElement('h1');
const text = document.createTextNode('Hoisting');
judul.appendChild(text);
document.body.appendChild(judul);

// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

console.log(nama);
var nama = 'Sandika'

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window


// execution phase
