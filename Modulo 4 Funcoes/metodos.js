let casa = {
  cor: 'white',
  sala: 20,
  cozinha: 15,
  banheiro: 9,
  quarto: 25,
  calcularTamanhoCasa: function () {
    const tamanhoTotal = this.sala + this.cozinha + this.banheiro + this.quarto;
    console.log(`O tamanho total em metros quadrados é: ${tamanhoTotal} m²`);
    return tamanhoTotal;
  },
};

casa.calcularTamanhoCasa();

console.log('Metodos associados a tipos');

let x = 3.14159;

console.log(x);
console.log(x.toFixed(2)); //quantas casas decimais
console.log(x.toString()); //para string

let y = 'texto da aula sobre metodos';

console.log(y);
console.log(y.charAt(5));
console.log(y.charAt(6));
console.log(y.concat(', esses metodos associados são demais!'));
console.log(y.length);
console.log(y.split('aula'));
console.log(y.split(' '));

let z = '100';
console.log(Number.parseInt(z)); //converte para int
console.log(Number.isNaN(Number.parseInt(y))); //verifica se o resultado da
//conversao do texto é número ou not a number, true = not a number
