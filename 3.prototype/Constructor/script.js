// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Constructor Function');

// simpan tulisan ke dalam paragraf 
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const btnmakan = document.createElement('button');
const txtbtmakan = document.createTextNode('makan');

// simpan tulisan kedalam button
btnmakan.appendChild(txtbtmakan);
sectionA.appendChild(btnmakan);


const btnmain = document.createElement('button');
const txtbtnmain = document.createTextNode('Main');
btnmain.appendChild(txtbtnmain);
sectionA.appendChild(btnmain);


// 2. Function Declaration
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
        alert(`Halo ${this.nama}, selamat makan`);
    }
    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
        alert(`Halo ${this.nama}, selamat bermain`);
    }
}
let gunawan = new Mahasiswa('Gunawan', 10)

btnmakan.addEventListener('click', function() {
    const inputporsi = prompt("Jumlah Porsi Makan");
    if (inputporsi == "") {
        const jmlporsi = 0;
        gunawan.makan(jmlporsi);
    } else {

        const jmlporsi = parseInt(inputporsi);
        gunawan.makan(jmlporsi);
    }
    for (const mhs in gunawan) {
        console.log(`${mhs}: ${gunawan[mhs]}`);
        alert(`${mhs}: ${gunawan[mhs]}`);
    }
});

btnmain.addEventListener('click', function() {
    const inputjam = prompt("Jam Main");
    if (inputjam == "") {
        const jmljam = 0;
        gunawan.main(jmljam);
    } else {

        const jmljam = parseInt(inputjam);
        gunawan.main(jmljam);
    }
    for (const mhs in gunawan) {
        console.log(`${mhs}: ${gunawan[mhs]}`);
        alert(`${mhs}: ${gunawan[mhs]}`);
    }
});