let string1 = 'javascript é funny';
let string2 = 'Aprendendo Javascript';
let string3 = 'Aprendendo Python';
let string4 = 'cadeira, mesa, sofá, armário';

let test1 = string1.replace('javascript', 'javascript'.toUpperCase());
console.log(test1);

let test2 = string2.substring(0, 10).toLowerCase();

console.log(test2);

let test3 = string3.replace('Python', 'JavaScripto');
console.log(test3);

let test4 = string4.split(', ');
test4.splice(test4.indexOf('sofa', 1));
console.log(test4);
