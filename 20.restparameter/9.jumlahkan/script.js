const title = document.createElement('title');
const titletxt = document.createTextNode('Rest Parameter');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Jumlahkan');
judul.appendChild(txt);
document.body.appendChild(judul);

// Rest Parameter

function jumlahkan(...angka) {
  let total = 0;

  for (const a of angka) {
    total += a;
  }
  return total;
}

console.log(jumlahkan(1, 2, 3, 4, 5));
const cetak = jumlahkan(1, 2, 3, 4, 5);

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
