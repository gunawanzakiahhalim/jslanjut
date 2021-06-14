const title = document.createElement('title');
const titletxt = document.createTextNode('Asynchronous Javascript');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Asynchronous Callback');
judul.appendChild(txt);
document.body.appendChild(judul);

// Asynchronous callback

console.log('satu');
setTimeout(() => {
  console.log('dua');
}, 5000);

console.log('tiga')

