// Number data type
var a = 10;
console.log(a);
var b = 100;
console.log(b);
var a = 20;
console.log(a);
var c = 0x1E; // hex value of 30
console.log(c);
var d = 0.5;
console.log(d);

// Addition
var sum = a + b;
console.log(sum);

// Subtraction
var diff = d - c;
console.log(diff);

// Multiplication
var mult = a * d;
console.log(mult);

// Division
var div = b / a;
console.log(div);

// Modulus (Remainder)
var mod = b % a;
console.log(mod);
var mod = b % c;
console.log(mod);

var e = '20'; // not a number; is a string
console.log(typeof e); // returns the type of variable e

console.log(a === e); // Strict comparison - false
console.log(a == e); // Loose comaprison - truthy