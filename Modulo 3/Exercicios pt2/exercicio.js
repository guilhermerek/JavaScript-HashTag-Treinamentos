console.log('Exercicio 1');

const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(`O valor do elemento 2 da minha lista é ${lista[2]}`);

console.log('Exercicio 2');

const pokemon = {
  nome: 'Pikachu',
  estamina: 100,
  defesa: 15,
  ataque: 60,
  habilidade: 'Choque do Trovão',
};

console.log(`Meu objeto pokemon possui Nome ${pokemon.nome}`);
console.log(`Meu objeto pokemon possui estamina de ${pokemon.estamina}`);
console.log(`Meu objeto pokemon possui defesa de ${pokemon.defesa}`);
console.log(`Meu objeto pokemon possui ataque de ${pokemon.ataque}`);
console.log(`Meu objeto pokemon possui a habilidade ${pokemon.habilidade}`);

console.log('Exercicio 3');

let primeiroNumero = 7;
let segundoNumero = 13;

console.log(`A soma é: `, primeiroNumero + segundoNumero);
console.log('A subtração é: ', segundoNumero - primeiroNumero);

let terceiroNumero = primeiroNumero + segundoNumero + 18;
let resultado;
resultado = terceiroNumero / segundoNumero;
console.log(`A divisão é: ${resultado}`);
const mult = terceiroNumero * primeiroNumero;
console.log(`Multiplicação: ${mult}`);

console.log('Exercicio 4');

primeiroNumero = 48;
segundoNumero = 354;
console.log(primeiroNumero > segundoNumero);
console.log(primeiroNumero < segundoNumero);
console.log(primeiroNumero === segundoNumero); //boa pratica de comparação

primeiroNumero = '123';
segundoNumero = 123;
console.log(primeiroNumero == segundoNumero); //nao é uma boa pratica, pois compara apaenas o valor e não o tipo.
