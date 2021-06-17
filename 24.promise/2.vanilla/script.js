const title = document.createElement("title");
const titletxt = document.createTextNode("Promise");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Ajax dengan Vanilla JavaScript");
judul.appendChild(txt);
document.body.appendChild(judul);

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.status === 200) {
    if (xhr.readyState === 4) {
      console.log(JSON.parse(xhr.response));
      const cetak = JSON.parse(xhr.response);
      const section = document.createElement("section");
      section.innerHTML = cetak;
      document.body.appendChild(section);
    }
  } else {
    console.log(xhr.responseText);
  }
};
xhr.open("get", "http://www.omdbapi.com/?apikey=6caddc47&s=avengers");
xhr.send();
