const listaDeNotas = [
  { nome: 'Guilherme', nota: 13 },
  { nome: 'Leticia', nota: 15 },
  { nome: 'Carlos', nota: 4 },
  { nome: 'Joana', nota: 5 },
  { nome: 'Claudia', nota: 6 },
  { nome: 'Jose', nota: 19 },
  { nome: 'Felipe', nota: 8 },
  { nome: 'Arnaldo', nota: 10 },
  { nome: 'Clara', nota: 12 },
  { nome: 'Dyennyfher', nota: 0 },
  { nome: 'Pão de Aio', nota: 0 },
  { nome: 'Farinha', nota: 20 },
];

//filter = metodo que gera outro array resultante do filtro aplicado
const alunosAprovados = listaDeNotas.filter(function (aluno) {
    return aluno.nota >= 12;
});

console.log(alunosAprovados);

//find 
const alunosQueTiraramZero = listaDeNotas.find(function (aluno) {
    return aluno.nota === 0;
});
console.log(alunosQueTiraramZero);
// o problema, neste caso só mostra o primeiro com a nota 0. Ai que entra o MAP

//map 

const listaNomesAlunosAprovados = alunosAprovados.map(function (aluno) {
    return aluno.nome;
});

console.log(listaNomesAlunosAprovados);