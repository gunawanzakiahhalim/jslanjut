const title = document.createElement("title");
const titletxt = document.createTextNode("Async Await");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Async dan Await Uncaught");
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
  const coba = await cobaPromise();
  console.log(coba);
  const cetak = coba;
  const section = document.createElement("section");
  section.innerHTML = cetak;
  document.body.appendChild(section);
}

cobaAsync();
