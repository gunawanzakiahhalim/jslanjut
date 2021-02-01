const title = document.createElement('title');
const titleText = document.createTextNode('Private Method');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Private Method atau Private Variable');
judul.appendChild(text);
document.body.appendChild(judul);

let add = function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
}
let a = add();

console.log(a());
console.log(a());
console.log(a());