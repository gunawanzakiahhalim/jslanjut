const title = document.createElement('title');
const titleText = document.createTextNode('Caption');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Caption');
judul.appendChild(text);
document.body.appendChild(judul);

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        satu = temp
        satu = dua;
        dua = temp;
    }
    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
        //console.log(this);
    }, 600);
});