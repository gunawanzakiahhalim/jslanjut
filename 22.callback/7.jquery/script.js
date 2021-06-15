const title = document.createElement("title");
const titletxt = document.createTextNode("Callback");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("jQuery CDN");
judul.appendChild(txt);
document.body.appendChild(judul);

// Asynchronous Callback
// jQuery CDN

console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
