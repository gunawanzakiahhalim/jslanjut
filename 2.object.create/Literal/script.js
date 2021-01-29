// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Object Litelar');

// simpan tulisan ke dalam paragraf 
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const button1 = document.createElement('button');
const textbutton1 = document.createTextNode('makan');

// simpan tulisan kedalam button
button1.appendChild(textbutton1);
sectionA.appendChild(button1);



// 1. object Literal
// PROBLEM : tidak efektif untuk object yang banyak
let mahasiswa1 = {
    nama: 'Gunawan',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama} Selamat Makan`);
        alert(`Halo ${this.nama} Selamat Makan`);

    }
}
let mahasisw2 = {
    nama: 'Gunawan',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama} Selamat Makan`);
        alert(`Halo ${this.nama} Selamat Makan`);

    }
}

button1.addEventListener('click', function() {
    const inputporsi = prompt("Jumlah Porsi Makan");
    const jmlporsi = parseInt(inputporsi);
    mahasiswa1.makan(jmlporsi);
    for (const mhs in mahasiswa1) {
        console.log(`${mhs}: ${mahasiswa1[mhs]}`);
        alert(`${mhs}: ${mahasiswa1[mhs]}`);
    }
});