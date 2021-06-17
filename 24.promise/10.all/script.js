const title = document.createElement("title");
const titletxt = document.createTextNode("Promise");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Promise.all satu-satu");
judul.appendChild(txt);
document.body.appendChild(judul);

// Promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Gunawan",
        pemeran: "Rikaz",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

film.then((response) => {
  console.log(response);
  const cetak = response;
  const section = document.createElement("section");
  section.innerHTML = cetak;
  document.body.appendChild(section);
});
cuaca.then((response) => {
  console.log(response);
  const cetak = response;
  const section = document.createElement("section");
  section.innerHTML = cetak;
  document.body.appendChild(section);
});
