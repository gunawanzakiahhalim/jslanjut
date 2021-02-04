const title = document.createElement('title');
const titletxt = document.createTextNode('HTML Fragments');
title.appendChild(titletxt)
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Conditionals');
judul.appendChild(txt);
document.body.appendChild(judul);

// 2. Conditionals
// ternary
const lagu = {
    judul: 'Kau Adalah',
    penyanyi: 'Isyana Sarasvati',
    feat: 'Rayi Putra'
}

const el = `<div class="lagu">
<ul>
    <li>${lagu.penyanyi}</li>
    <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})`:''}</li>
</ul>
</div>`;




const section = document.createElement('section');
section.innerHTML = el;
document.body.appendChild(section);