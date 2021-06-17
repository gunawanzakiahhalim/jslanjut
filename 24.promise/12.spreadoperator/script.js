const title = document.createElement("title");
const titletxt = document.createTextNode("Promise");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Spread Operator");
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

Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
  const cetak = film + cuaca;
  const section = document.createElement("section");
  section.innerHTML = cetak;
  document.body.appendChild(section);
});
