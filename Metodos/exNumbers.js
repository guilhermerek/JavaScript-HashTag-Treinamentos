let numb1 = '150.50';
let numb2 = '200px';
let numb3 = 'rélou';

console.log(Number.parseFloat(numb1));
console.log(Number.parseFloat(numb2));
console.log(Number.parseFloat(numb3));

let soma1 = '10';
let soma2 = '20.5';
console.log(Number.parseFloat(soma1) + Number.parseFloat(soma2));

let valor = 1234.56789;
console.log(Number.parseFloat(valor).toFixed(2));

let precisao = 12345.6789;
console.log(Number.parseFloat(precisao).toPrecision(4));

let entradaValida = '123abc';
console.log(Number.isInteger(entradaValida));

let infinito = 'abc';
console.log(Number.isFinite(infinito));
