const title = document.createElement('title');
const titletxt = document.createTextNode('for..of & for..in');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Looping Arguments for..of');
judul.appendChild(txt);
document.body.appendChild(judul);

// arguments
function jumlahkanAngka() {
  // return.reduce((a,i) => a + i);
  // argument.forEach(a => jumlah +a);
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }

  return jumlah;
}

cetak = jumlahkanAngka(1, 2, 3, 4, 5);
console.log(cetak);

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
