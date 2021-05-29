const title = document.createElement('title');
const titletxt = document.createTextNode('Rest Parameter');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Filtering Boolean');
judul.appendChild(txt);
document.body.appendChild(judul);

// Filtering

function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

const filter = filterBy('boolean', 1, 2, 'Gunawan', false, 10, true, 'Zakiah');

console.log(filter);
const cetak = filter;

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
