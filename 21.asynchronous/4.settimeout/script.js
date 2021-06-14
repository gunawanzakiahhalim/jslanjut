const title = document.createElement('title');
const titletxt = document.createTextNode('Asynchronous Javascript');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('setTimeout');
judul.appendChild(txt);
document.body.appendChild(judul);

// setTimeout
// Asynchronous callback
function prosesYangSuperKompleks(data) {

    var text = "";
    var i;
    for (i = 1; i <= data; i++) {
        text += "The number is " + i + "<br>";
      }
    console.log(text);
    const cetak = text;
    const section = document.createElement('section');
    section.innerHTML = cetak;
    document.body.appendChild(section);
}

console.log('satu');
setTimeout(() => {
  prosesYangSuperKompleks(1000000);
}, 5000);

console.log('tiga')

