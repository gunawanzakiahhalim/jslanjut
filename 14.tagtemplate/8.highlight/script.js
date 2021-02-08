const title = document.createElement('title');
const titletxt = document.createTextNode('Tagged Template');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Highlight');
judul.appendChild(txt);
document.body.appendChild(judul);

// Tagged Templates
const nama = 'Gunawan';
const umur = 30;
const email = 'gunawanzakiahhalim@gmail.com';

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}

const str = highlight `Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`

const section = document.createElement('section');
section.innerHTML = str;
document.body.appendChild(section);