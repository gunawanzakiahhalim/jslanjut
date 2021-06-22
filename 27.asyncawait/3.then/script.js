const title = document.createElement("title");
const titletxt = document.createTextNode("Async Await");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("then");
judul.appendChild(txt);
document.body.appendChild(judul);

const coba = new Promise((resolve) => {
  setTimeout(() => {
    resolve("selesai");
  }, 2000);
});
coba.then(() => {
  console.log(coba);
  const cetak = coba;
  const section = document.createElement("section");
  section.innerHTML = cetak;
  document.body.appendChild(section);
});
