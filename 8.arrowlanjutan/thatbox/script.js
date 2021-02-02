const title = document.createElement('title');
const titleText = document.createTextNode('That Box');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('That Box');
judul.appendChild(text);
document.body.appendChild(judul);

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let that = this;
    this.classList.toggle('size');
    setTimeout(function() {
        //this.classList.toggle('çaption');
        console.log(that);
    }, 600);
});