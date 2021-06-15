const title = document.createElement("title");
const titletxt = document.createTextNode("Callback");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Synchronous Callback");
judul.appendChild(txt);
document.body.appendChild(judul);

// Synchronous Callback

const mhs = [
  {
    nama: "Gunawan",
    nrp: "154603",
    email: "gunawanzakiahhalim@gmail.com",
    jurusan: "Teknik Informatika",
    idDosenWali: 1,
  },
  {
    nama: "Zakiah Halim",
    nrp: "154604",
    email: "zakiahhalimgunawan@gmail.com",
    jurusan: "Pendidikan Bahasa Inggris",
    idDosenWali: 2,
  },
  {
    nama: "Rikaz",
    nrp: "154605",
    email: "rikaz@gmail.com",
    jurusan: "Teknik Mesin",
    idDosenWali: 3,
  },
];

console.log("mulai");
let text = "";
mhs.forEach((m) => {
  text += m.nama;
  console.log(m.nama);
});

const cetak = text;
const section = document.createElement("section");
section.innerHTML = cetak;
document.body.appendChild(section);
console.log("selesai");
