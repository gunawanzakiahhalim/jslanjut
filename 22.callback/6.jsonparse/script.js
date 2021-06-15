const title = document.createElement("title");
const titletxt = document.createTextNode("Callback");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("JSON parse");
judul.appendChild(txt);
document.body.appendChild(judul);

// Asynchronous Callback
// JSON.parse
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

//function success() {}
//function error() {}

console.log("mulai");
getDataMahasiswa(
  "data/mahasiswa.json",
  (result) => {
    const mhs = JSON.parse(result);
    let cetaknama = "";
    mhs.forEach((m) => {
      console.log(m.nama);
      cetaknama += m.nama;
    });
    const cetak = cetaknama;
    const section = document.createElement("section");
    section.innerHTML = cetak;
    document.body.appendChild(section);
  },
  () => {}
);
console.log("selesai");
