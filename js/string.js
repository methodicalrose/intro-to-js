// String data type
var str1 = 'It\'s Tuesday today!';
console.log(str1);
var str2 = "We are learning JavaScript today!";
console.log(str2);

console.log(str1, str2);

var firstName = "Andy"; // camelCase naming convention - main variables
console.log(firstName);
var last_name = "Callahan"; // snake naming convention - object key names
console.log(last_name);

// String concatination
var fullName = firstName + ' ' + last_name;
console.log(fullName);

var fullName = firstName.concat(' ', last_name);
console.log(fullName);

var fullName = firstName.concat(' ').concat(last_name);
console.log(fullName);
