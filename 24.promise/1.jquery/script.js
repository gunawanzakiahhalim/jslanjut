const title = document.createElement("title");
const titletxt = document.createTextNode("Promise");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Ajax dengan jQuery");
judul.appendChild(txt);
document.body.appendChild(judul);

$.ajax({
  url: "http://www.omdbapi.com/?apikey=6caddc47&s=avengers",
  success: (movies) => {
    console.log(movies);
  },
});
