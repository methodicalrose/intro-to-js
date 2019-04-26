var str1 = 'Hello World!';
console.log(str1);

// accessing words through arrays
var str2 = str1.split(' ');
console.log(str2);
console.log(str2[0]);
console.log(str2[1]);
console.log(str2[1].split('!')[0]);

// using slice
console.log(str1.slice(6, str1.length - 1));

// charAt
console.log(str1.charAt(0)); // returns value at 0-index
console.log(str1.charAt(str1.length - 1)); // returns value at last index

// substring
console.log(str1.substring(0, 5)); // returns only 'Hello' from str1 - displays index 0-4
console.log(str1.substring(6, str1.length - 1));

// substr
console.log(str1.substr(0));
console.log(str1.substr(0, 5)); // beginning index, length of output from that index
console.log(str1.substr(6, 5)); // 'World' begins at index 6, and includes 5 characters

// text transform to uppercase/lowercase
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());