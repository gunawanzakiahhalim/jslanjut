const title = document.createElement("title");
const titletxt = document.createTextNode("Async Await");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Try Catch");
judul.appendChild(txt);
document.body.appendChild(judul);

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan!");
    }
  });
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
    const cetak = coba;
    const section = document.createElement("section");
    section.innerHTML = cetak;
    document.body.appendChild(section);
  } catch (err) {
    console.error(err);
    const cetak = err;
    const section = document.createElement("section");
    section.innerHTML = cetak;
    document.body.appendChild(section);
  }
}

cobaAsync();
