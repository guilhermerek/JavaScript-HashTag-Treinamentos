let x = 2;
let y = 'string de teste';

console.log(x > 1); //true
console.log(x > 3); //false

console.log(y === 'string de teste'); //true
console.log(y === 'string de'); //false
console.log(y !== 'string de'); //true

console.log(`comparação string e número ${10 === 10}`); //comparação rigida/rigorosa
console.log(`comparação string e número ${10 === '10'}`); //comparação rigida/rigorosa
console.log(`comparação string e número ${10 == 10}`); //comparação "fraca" - não é o indicado, propicio a erro
console.log(`comparação string e número ${10 == '10'}`); //comparação "fraca" - não é o indicado, propicio a erro
