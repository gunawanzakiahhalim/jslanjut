const title = document.createElement('title');
const titleText = document.createTextNode('IIFE');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Immediately invoked function expression');
judul.appendChild(text);
document.body.appendChild(judul);

let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());