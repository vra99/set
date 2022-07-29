import {MySetImpl} from './types';

const set = new MySetImpl<number>([1, 2, 3, 4, 5]);

//add
set.add(6);
set.add(7);
set.add(8);
set.add(9);
console.log("Add", set.values);

set.remove(6);
console.log("Remove", set.has(6)); // returns false

set.intersection(new MySetImpl([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("Intersection", set.values);

const union = set.union(new MySetImpl([2, 4, 12, 13, 14, 15, 16, 17, 18, 19]));
console.log("Union", union.values);

const difference = set.difference(new MySetImpl([2, 40, 12, 13]));
console.log("Difference", difference.values);

console.log("Size", set.size());

console.log("ToString", set.toString());

console.log("Map", set.map(x => x * 2).values);

set.clear();

console.log("Clear", set.values);