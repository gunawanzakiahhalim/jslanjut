const title = document.createElement("title");
const titletxt = document.createTextNode("Promise");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Ajax menggunakan fetch.then");
judul.appendChild(txt);
document.body.appendChild(judul);

fetch("http://www.omdbapi.com/?apikey=6caddc47&s=avengers")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    const cetak = response;
    const section = document.createElement("section");
    section.innerHTML = cetak;
    document.body.appendChild(section);
  });
