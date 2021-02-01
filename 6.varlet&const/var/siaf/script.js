const title = document.createElement('title');
const titleText = document.createTextNode('SIAF');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Self Invoking Anonymous Function');
judul.appendChild(text);
document.body.appendChild(judul);

(function() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}());
console.log(i);