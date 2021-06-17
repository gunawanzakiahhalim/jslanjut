const title = document.createElement("title");
const titletxt = document.createTextNode("Promise");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Ajax menggunakan fetch");
judul.appendChild(txt);
document.body.appendChild(judul);

const movies = fetch("http://www.omdbapi.com/?apikey=6caddc47&s=avengers");
console.log(movies);

const cetak = movies;
const section = document.createElement("section");
section.innerHTML = cetak;
document.body.appendChild(section);
