const title = document.createElement('title');
const titletxt = document.createTextNode('Callback');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Anonymous Function');
judul.appendChild(txt);
document.body.appendChild(judul);


// Synchronous Callback
// Anonymous Function

// function halo(nama){
//   alert(`Halo, ${nama}`);
//     const cetak = nama;
//     const section = document.createElement('section');
//     section.innerHTML = cetak;
//     document.body.appendChild(section);
// }

function tampilkanPesan(callback){
  const nama = prompt('Masukan Nama : ');
  callback(nama);
}

tampilkanPesan(nama => {
    alert(`Halo, ${nama}`);
    const cetak = nama;
    const section = document.createElement('section');
    section.innerHTML = cetak;
    document.body.appendChild(section);
});
