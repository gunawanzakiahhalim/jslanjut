const title = document.createElement('title');
const titletxt = document.createTextNode('HTML Fragments');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Nested');
judul.appendChild(txt);
document.body.appendChild(judul);

// 2. Nested
// HTML Fragments bersarang
const mhs = {
    nama: 'Gunawan',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interactive',
        'Perancangan Sistem Berorientasi Object'
    ]
}

function cetakMatakuliah(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMatakuliah(mhs.mataKuliah)}
</div>`;


const section = document.createElement('section');
section.innerHTML = el;
document.body.appendChild(section);