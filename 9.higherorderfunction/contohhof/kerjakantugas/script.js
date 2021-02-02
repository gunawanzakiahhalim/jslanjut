const title = document.createElement('title');
const titleText = document.createTextNode('Kerjakan Tugas');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Kerjakan Tugas');
judul.appendChild(text);
document.body.appendChild(judul);

// Higher Order Function
function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
    selesai();
}

// Callback
function selesai() {
    alert('Selesai mengerjakan tugas!');
}

kerjakanTugas('Pemrograman Web', selesai);

const elh2 = document.createElement('h2');
const txth2 = document.createTextNode('Kerjakan Tugas');
elh2.appendChild(txth2);
document.body.appendChild(elh2);