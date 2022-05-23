let { filtered } = require('./words.js');

const mustNotInclude = ''.split('');
const mustInclude = ''.split('');
const start = '';
const end = '';
const notInPositionX = ['', '', '', '', ''];
const inPositionX = ['', '', '', '', ''];

filtered = filtered.map((x) =>
  x.normalize('NFD').replace(/\p{Diacritic}/gu, '')
).sort((a, b) => a.localeCompare(b));;

if (mustNotInclude.length > 0)
  filtered = filtered.filter(
    (word) => !mustNotInclude.some((x) => word.includes(x))
  );

if (mustInclude.length > 0)
  filtered = filtered.filter((word) =>
    mustInclude.every((x) => word.includes(x))
  );

if (start.length > 0)
  filtered = filtered.filter((x) => x && x.startsWith(start));

if (end.length > 0) filtered = filtered.filter((x) => x && x.endsWith(end));

for (let x = 0; x < 5; x++) {
  if (inPositionX[x] != '')
    filtered = filtered.filter((word) =>
      inPositionX[x].split('').every((chr) => word[x] == chr)
    );
  if (notInPositionX[x] != '')
    filtered = filtered.filter(
      (word) => !notInPositionX[x].split('').some((chr) => word[x] == chr)
    );
}

console.table(filtered);
