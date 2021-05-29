const title = document.createElement('title');
const titletxt = document.createTextNode('Rest Parameter');
title.appendChild(titletxt);
document.head.appendChild(title);

const judul = document.createElement('h1');
const txt = document.createTextNode('Object Destructuring');
judul.appendChild(txt);
document.body.appendChild(judul);

// Object Destructuring

const team = {
  pm: 'Gunawan',
  frontEnd1: 'Zakiah',
  frontEnd2: 'Halim',
  backEnd: 'Rikaz',
  ux: 'Ilya',
  devOps: 'Rara',
};

const { pm, ...myTeam } = team;
console.log(myTeam);
const cetak = myTeam;

const section = document.createElement('section');
section.innerHTML = cetak;
document.body.appendChild(section);
