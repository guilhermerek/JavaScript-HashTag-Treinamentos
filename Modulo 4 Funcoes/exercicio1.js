console.log('Exercicio 1');
function mediaAritmetica(nota1, nota2, nota3) {
    const notaFinal = (nota1 + nota2 + nota3)/3;
    console.log(`A media final do aluno é: ${notaFinal}`);
    return notaFinal;
};

const notaFinal = mediaAritmetica(7, 8, 6);


console.log('exercicio 2');
function mediaFinal(media, nota4) {
    const novaNota = (media + nota4)/2;
    console.log(`A media final é: ${novaNota}`);

};

mediaFinal(notaFinal, 9);

console.log('exericio 3');

function conversaoDeCelsiusParaFarenheit(temperatura) {
    const conversao = ((9/5) * temperatura) + 32;
    console.log(`A temperatura: ${temperatura} celsius fica em Farenheit: ${conversao}`);
};

conversaoDeCelsiusParaFarenheit(10);

console.log('exercicio 4');

function calculoDeImpostoDoProduto(valor) {
    const valorDoImposto = (valor * 8.875) / 100;
    const valorTotal = valor + valorDoImposto;
    console.log(`Valor do imposto é: ${valorDoImposto} e o valor total: ${valorTotal}`);

};

calculoDeImpostoDoProduto(20);