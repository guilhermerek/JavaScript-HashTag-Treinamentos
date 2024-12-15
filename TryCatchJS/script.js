// Exercício 1: Tratamento de Erro em Variável Não Definida

function tratarErroVariavelNaoDefinida() {
  try {
    console.log(variavelNaoDefinida);
  } catch (error) {
    console.error('Variavel não definida.' + error);
  }
}

tratarErroVariavelNaoDefinida();

// Exercício 2: Exercício: Tratamento de Erro em Chamada de Função Inexistente
function tratarErroFuncaoInexistente() {
  try {
    funcaoInexistente();
  } catch (error) {
    console.error('Função indefinida.' + error);
  }
}

tratarErroFuncaoInexistente();

// Exercício 3: Tratamento de Erro ao Acessar Propriedade de null

function tratarErroAcessarPropriedadeNull() {
  let objeto = null;
  try {
    let objetoNovo = objeto.propriedades;
    console.log(objetoNovo);
  } catch (error) {
    console.error('Houve um erro. ' + error);
  }
}

tratarErroAcessarPropriedadeNull();

// Exercício 4: Tratamento de Erro em Acesso a Propriedade Inexistente

function tratarErroPropriedadeInexistente() {
  const objeto = {};
  try {
    console.log(objeto.chave.valor);
  } catch (error) {
    console.error(
      'Ocorreu um erro ao acessar um objeto. Objeto vazio! ' + error
    );
  }
}

tratarErroPropriedadeInexistente();

// Exercício 5: Tratamento de Erro em Conversão de Tipos

function tratarErroConversaoTipo() {
  let num = 'A';
  let resultadoConversao = parseInt(num);
  try {
    if (isNaN(resultadoConversao)) {
      throw new Error('Não foi possivel converter em número.');
    }
    console.log(resultadoConversao);
  } catch (error) {
    console.error(error.message);
  }
}

tratarErroConversaoTipo();

// Exercício 6: Tratamento de Erro em Divisão por Zero

function tratarErroDivisaoPorZero() {
  const dividendo = 2;
  const divisor = 0;

  try {
    if (divisor === 0) {
      throw new Error('Impossivel realizar divisão por 0!');
    }
    const result = dividendo / divisor;
    console.log(result);
  } catch (error) {
    console.error(error.message);
    //console.error(error); desta forma mostra um erro mais completo junto com a mensagem
  }
}

tratarErroDivisaoPorZero();

// Exercício 7: Manipulação de Arquivo com Try, Catch e Finally
const fs = require('fs');
function lerArquivo() {
  try {
    const conteudo = fs.readFileSync('arquivo.txt', 'utf-8');
    console.log('Lendo arquivo.txt.......' + conteudo);
  } catch (error) {
    console.error(
      'Não foi encontrado nenhum arquivo ou esta corrompido!',
      error.message
    );
  } finally {
    console.log('Fechando arquivo!');
  }
}

lerArquivo();

// Exercício 8: Conexão com Banco de Dados com Try, Catch e Finally

function conectarBancoDeDados() {
  try {
    console.log('conectando ao DB...' + openDB());
  } catch (error) {
    console.error('Não foi possivel se conectar ao DB.', error.message);
  } finally {
    console.log('Fechando conexao');
  }
}

conectarBancoDeDados();
