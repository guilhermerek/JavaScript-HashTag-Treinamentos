// Módulo 5
// Exercícios - Métodos nativos Array

// Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
// remova o primeiro item e exiba o carrinho atualizado.
// Exemplo de Saída: // ['Produto B', 'Produto C']
// Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
// e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos
// disponíveis.
// Exemplo de Saída: // ['Produto X', 'Produto Y', 'Produto Z', 'Produto A', 'Produto B']
// Exercício 3: Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e
// 'Agenda' estão presentes no estoque.
// Exemplo de Saída: // true
// // false
// Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
// que 7.
// Exemplo de Saída: // true
// Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
// Exemplo de Saída: // false

let array1 = ['Produto A', 'Produto B'];

array1.push('Produto C');
array1.shift();
console.log(array1);

let array2 = ['Produto X', 'Produto Y'];
array2.push('Produto Z');
console.log(array2);

let novoArray = array2.concat(array1);
console.log(novoArray);

let array3 = ['Caderno', 'Lápis', 'Estojo'];
console.log(array3.includes('Lápis'));
console.log(array3.includes('Agenda'));

let array4 = [2, 5, 8, 1];
console.log(
  array4.find(function (arrayy) {
    if (arrayy > 7) {
      return arrayy;
    }
  })
);

let array5 = [4, 6, 8, 2];
console.log(array5.every((num) => num > 3));
