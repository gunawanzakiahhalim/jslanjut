const title = document.createElement("title");
const titletxt = document.createTextNode("Async Await");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Promise Pending");
judul.appendChild(txt);
document.body.appendChild(judul);

function cobaPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("selesai");
    }, 2000);
  });
}

function cobaAsync() {
  const coba = cobaPromise();
  console.log(coba);
  const cetak = coba;
  const section = document.createElement("section");
  section.innerHTML = cetak;
  document.body.appendChild(section);
}

cobaAsync();
