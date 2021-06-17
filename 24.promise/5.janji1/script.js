const title = document.createElement("title");
const titletxt = document.createTextNode("Promise");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Promise contoh janji1");
judul.appendChild(txt);
document.body.appendChild(judul);

// fetch("http://www.omdbapi.com/?apikey=6caddc47&s=avengers")
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     const cetak = response;
//     const section = document.createElement("section");
//     section.innerHTML = cetak;
//     document.body.appendChild(section);
//   });

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch )

// contoh 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji telah ditepati");
  } else {
    reject("Ingkar janji..");
  }
});

console.log(janji1);
const cetak = janji1;
const section = document.createElement("section");
section.innerHTML = cetak;
document.body.appendChild(section);
