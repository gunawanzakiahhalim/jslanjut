const title = document.createElement('title');
const titleText = document.createTextNode('Hitung Angka');
title.appendChild(titleText)
document.head.appendChild(title);

const judul = document.createElement('h1');
const text = document.createTextNode('Menghitung Sebuah Angka');
judul.appendChild(text);
document.body.appendChild(judul);

let total = 0,
    count = 1;

while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

const elh2 = document.createElement('h2');
const txth2 = document.createTextNode(total);
elh2.appendChild(txth2);
document.body.appendChild(elh2);

console.log(sum(range(1, 10)));