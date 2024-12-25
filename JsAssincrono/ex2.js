const fs = require('fs');
function lerArquivo(filename, callback) {
  //o método readFile lê o conteúdo de um arquivo identificado
  //por filename (coloque o nome do arquivo e o caminho dele,
  // ex: './textoExercicio2.txt' ) e entrega esse conteúdo dentro //do objeto "data"
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      console.log('Erro ao ler o arquivo', err.message);
      //Aqui escrevemos um tratamento para um erro na tentativa de leitura do aquivo
      return;
    }
    //Aqui escrevemos o que deve ser feito com o objeto "data"
    callback(data);
  });
}

lerArquivo(`./textoExercicio2.txt`, (conteudo) => {
  console.log(conteudo);
});
