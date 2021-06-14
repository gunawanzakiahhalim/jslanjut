const title = document.createElement('title');
const titletxt = document.createTextNode('Asynchronous Javascript');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Blocking');
judul.appendChild(txt);
document.body.appendChild(judul);

// Blocking

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
prosesYangSuperKompleks(1000000);
console.log('tiga')

