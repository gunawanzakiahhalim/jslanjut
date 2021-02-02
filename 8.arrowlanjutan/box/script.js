const title = document.createElement('title');
const titleText = document.createTextNode('Box');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Box');
judul.appendChild(text);
document.body.appendChild(judul);

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    this.classList.toggle('size');
    setTimeout(function() {
        this.classList.toggle('çaption');
    }, 600);
});