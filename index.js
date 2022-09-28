import persons from './persons.json' assert { type: "json" };

console.log('Person', persons);

//sort by Age
persons.sort((a, b) => {
  let x = a.age;
  let y = b.age;
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

//function group person by age
const groupPersonsByAge = persons.reduce((group, p, index) => {
  const { age } = p;
  group[age] = group[age] ?? [];
  group[age].push(p.name);
  return group;
}, {});

console.log('Person after Sort ', persons);
console.log('Person Group ', groupPersonsByAge);
