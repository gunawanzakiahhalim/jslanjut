const title = document.createElement("title");
const titletxt = document.createTextNode("Callback");
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement("h1");
const txt = document.createTextNode("Asynchronous Callback");
judul.appendChild(txt);
document.body.appendChild(judul);

// Asynchronous Callback
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
getDataMahasiswa(
  "data/mahasiswa.json",
  (result) => {
    console.log(JSON.parse(result));
    const cetak = JSON.parse(result);
    const section = document.createElement("section");
    section.innerHTML = cetak;
    document.body.appendChild(section);
  },
  () => {}
);
