// Array data type
var arr1 = []; // Empty array
var arr2 = [1, 2]; // 2 elements
console.log(arr2); // displays whole array
console.log(arr2[1]); // targets index 1 of arr2

var arr3 = ['hi', 'hello', 'there'];
console.log(arr3);
console.log(arr3[2]);
console.log(arr3.length);
console.log(arr3[arr3.length - 1]); // displays the last element of arr3

arr3.push('welcome'); // inserts 'welcome' to the end of arr3
console.log(arr3);
console.log(arr3[arr3.length - 1]);

arr3.unshift('greeting'); // inserts 'greeting' to the beginning of arr3
console.log(arr3);

arr3.splice(2, 1, 'Andy'); // removes index 2 of arr3, inserts 'Andy' in its place
arr3.splice(2, 2, 'Andy', 'Callahan'); // removes 2 items starting at index 2 of arr3, replaces with new items
arr3.splice(2, 0, 'hola'); // removes nothing, adds a new index at position 2
console.log(arr3);

var arr4 = [10, 40, 'abc', 'xyz', true]; // not recommended to mix data types
console.log(arr4);

arr4.pop(); // removes last item of arr4
console.log(arr4);
arr4.shift(); // removes first item of arr4
console.log(arr4);

var arr5 = arr4.slice(); // returns a copy of arr4
console.log(arr5);
var arr6 = arr4; // Not a copy - exact value 

arr4.push(false);
console.log(arr4);
console.log(arr5);
console.log(arr6);

var arr7 = arr4.slice(1, 3); // returns the portion of arr4 starting at index 1 and ending at index 3
// This does not include the value of index 3, only captures values before the end point
console.log(arr7);