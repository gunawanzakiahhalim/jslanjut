// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Object.Create()');

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

const btntidur = document.createElement('button');
const txtbtntidur = document.createTextNode('Tidur');
btntidur.appendChild(txtbtntidur);
sectionA.appendChild(btntidur);


// 2. Function Declaration
const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
        alert(`Halo ${this.nama}, selamat makan`);
    },
    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
        alert(`Halo ${this.nama}, selamat bermain`);
    },
    tidur: function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur`)
    }
}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}
let gunawan = Mahasiswa('Gunawan', 10);
let zakiah = Mahasiswa('Zakiah', 20);

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

btntidur.addEventListener('click', function() {
    const inputjam = prompt("Jam Tidur");
    if (inputjam == "") {
        const jmljam = 0;
        gunawan.tidur(jmljam);
    } else {

        const jmljam = parseInt(inputjam);
        gunawan.tidur(jmljam);
    }
    for (const mhs in gunawan) {
        console.log(`${mhs}: ${gunawan[mhs]}`);
        alert(`${mhs}: ${gunawan[mhs]}`);
    }
});