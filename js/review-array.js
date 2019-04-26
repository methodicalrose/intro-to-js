var fruits = ['apple', 'banana', 'orange'];
var fruitsNotArray = 'apple, banana, orange';
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.push('blueberry');
console.log(fruits);

fruits.unshift('pear');
console.log(fruits);

fruits.splice(2, 1, 'strawberry');
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

var copyOfFruits = fruits.slice();
console.log(copyOfFruits);

console.log(fruits.length);

console.log(Array.isArray(fruits));
console.log(Array.isArray(fruitsNotArray));