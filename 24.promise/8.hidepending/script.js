const title = document.createElement("title");
const titletxt = document.createTextNode("Promise");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Promise Janji2.then hide pending");
judul.appendChild(txt);
document.body.appendChild(judul);

// contoh 2
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Ditepati setelah beberapa waktu!");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Tidak ditepati setelah beberapa waktu!");
    }, 2000);
  }
});

console.log("mulai");
janji2
  .then((response) => {
    console.log("OK : " + response);
    const cetak = "OK : " + response;
    const section = document.createElement("section");
    section.innerHTML = cetak;
    document.body.appendChild(section);
  })
  .catch((response) => {
    console.log("NOT OK! : " + response);
    const cetak = "NOT OK! : " + response;
    const section = document.createElement("section");
    section.innerHTML = cetak;
    document.body.appendChild(section);
  });

console.log("selesai");
