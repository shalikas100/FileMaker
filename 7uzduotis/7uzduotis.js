let names = ['Jonas', 'Petras', 'Jonas', 'Antanas', 'Kipras', 'Jonas'];

const uniqueNames = new Set(names);
const result = Array.from(uniqueNames);
console.log(result);