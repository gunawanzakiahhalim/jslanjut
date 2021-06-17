const title = document.createElement("title");
const titletxt = document.createTextNode("Promise");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Method then and catch");
judul.appendChild(txt);
document.body.appendChild(judul);

// contoh 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji telah ditepati");
  } else {
    reject("Ingkar janji..");
  }
});

janji1
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
