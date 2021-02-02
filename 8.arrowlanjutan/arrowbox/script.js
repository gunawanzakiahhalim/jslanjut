const title = document.createElement('title');
const titleText = document.createTextNode('Arrow Box');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Arrow Box');
judul.appendChild(text);
document.body.appendChild(judul);

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
        //console.log(this);
    }, 600);
});