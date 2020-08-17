const arr = [];
for (let i = 0; i < 10000000; i++ ) {
  arr.push(i);
}
console.time('a');
const found1 = arr.find(item => item === 4435223);
console.log(found1);
console.timeEnd('a');

console.time('b');
const setA = new Set([...arr]);
console.timeEnd('b');
console.time('c');
console.log(setA.has(4435223));
console.timeEnd('c');
