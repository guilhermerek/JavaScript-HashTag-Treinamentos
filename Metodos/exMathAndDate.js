// Exercício 1: Você precisa criar uma função que receba um número decimal e o arredonde de
// três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
// resultado de cada arredondamento no console.
// Exemplo Entrada: // 7.89
// Exemplo Saída: // Arredondado para baixo: 7
// Arredondado para cima: 8
// Arredondado para o valor mais próximo: 8

let num = 7.89;
console.log('arredondando pra baixo: ' + Math.floor(num));
console.log('arredondar para o int mais proximo: ' + Math.round(num));
console.log('Arredonda para cima: ' + Math.ceil(num));

// Exercício 2: Crie uma função que receba uma lista de números e retorne o valor máximo e o
// valor mínimo dessa lista.
// Exemplo Entrada: // 10, 5, 20, 40, 1, 7
// Exemplo Saída: // Valor mínimo: 1
// Valor máximo: 40

let lista = [10, 5, 20, 40, 1, 7];
console.log(Math.max(...lista));
console.log(Math.min(...lista));

// Exercício 3: Você deve criar uma função que gere três tipos de números aleatórios: um entre 0
// e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os
// resultados no console.
// Exemplo Entrada: // 50, 100
// Exemplo Saída: // Aleatório entre 0 e 1: 0.8629821531529918
// Aleatório entre 0 e 100: 42.48780566605361
// Aleatório entre 50 e 100: 63.70589822740784

function geraNum(primeiro, segundo) {
  console.log(Math.random());
  console.log(Math.random() * 100);
  let aux = Math.random() * segundo;
  //daria para fazer: Math.random() * (max-min) + min;
  if (aux < primeiro) {
    while (aux < primeiro) {
      aux = Math.random() * segundo;
    }
    console.log(aux);
  } else {
    console.log(aux);
  }
}

geraNum(50, 100);

// Exercício 4: Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
// Exiba o resultado no console.
// Exemplo Entrada: // 2024-01-01, 2024-10-07
// Exemplo Saída: // Diferença em dias entre 2024-01-01 e 2024-10-07: 280

function calculaData(data1, data2) {
  let millis = new Date(data2) - new Date(data1);
  let difEmDias = millis / (1000 * 60 * 60 * 24);
  //1000 millisegundos = 1 segundo
  //60 segundos = 1 minuto
  //60 minutos = 1 hora
  //24 horas = 1 dia
  console.log('diferença de: ' + difEmDias + ' dias');
}

calculaData('2024-01-01', '2024-10-07');

// Exercício 5: Crie uma função que receba uma data e extraia o ano, mês e dia dessa data.
// Exiba as informações no console.
// Exemplo Entrada: // 2024-10-07
// Exemplo Saída: // Ano: 2024, Mês: 10, Dia: 6

let ex5 = new Date('2024-12-02T00:00:00'); //para aparecer dia 25 precia colocar horario T00:00:00
console.log(ex5.getFullYear());
console.log(ex5.getMonth() + 1);
console.log(ex5.getDate());

// Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
// idade com base na data atual. Exiba a idade no console.
// Exemplo Entrada: // 1990-05-15
// Exemplo Saída: // Idade: 34

function calcularIdade(dataNasc) {
  let nasc = new Date(dataNasc);
  let hoje = new Date();

  let idade = hoje.getFullYear() - nasc.getFullYear(); //calcula idade com base pela diferenca de anos

  //criar a data do aniversario atual no ano
  let aniversarioAtual = new Date(
    hoje.getFullYear(),
    nasc.getMonth(),
    nasc.getDate()
  );

  //calcular diferenca em millissegundos e converter para dias
  let difDias = (hoje - aniversarioAtual) / (1000 * 60 * 60 * 24);

  //ajuste de idade
  let ajuste = (difDias < 0) * 1; //boolean transformado em numero
  idade = idade - ajuste; //se n fez aniversario ainda no ano é (ano atual - ano nascimento) - 1
  console.log('idade: ' + idade);
}

calcularIdade('1996-12-16');

// Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
// Exiba o resultado no console.
// Exemplo Entrada: // 2024-10-07
// Exemplo Saída: // Data formatada no padrão brasileiro: 07/10/2024
let desafio = new Date();
console.log(desafio.toLocaleDateString('pt-BR'));
