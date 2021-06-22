const title = document.createElement("title");
const titletxt = document.createTextNode("Async Await");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("New Promise");
judul.appendChild(txt);
document.body.appendChild(judul);

const coba = new Promise((resolve) => resolve("selesai"));
console.log(coba);

const cetak = coba;
const section = document.createElement("section");
section.innerHTML = cetak;
document.body.appendChild(section);
