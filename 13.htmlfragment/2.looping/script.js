const title = document.createElement('title');
const titletxt = document.createTextNode('HTML Fragments');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Looping HTML Fragments');
judul.appendChild(txt);
document.body.appendChild(judul);

// 2. Looping
const mhs = [{
        nama: 'Gunawan',
        email: 'gunawanzakiahhalim@gmail.com'
    },
    {
        nama: 'Zakiah Halim',
        email: 'zakiahhalim@gmail.com'
    },
    {
        nama: 'Rikaz',
        email: 'rikaz@gmail.com'
    }
];

const el = `<div class="mhs">
${mhs.map(m => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
</ul>`).join('')}
</div>`;



const section = document.createElement('section');
section.innerHTML = el;
document.body.appendChild(section);