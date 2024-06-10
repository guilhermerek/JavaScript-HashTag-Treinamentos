function teste() {
  console.log('Testando se o script roda!');
}

function mudarCorTexto() {
  document.getElementById('mudarCorTextoVermelho').style.color = 'red';
}

function voltarCor() {
  document.getElementById('mudarCorTextoVermelho').style.color = 'black';
}

function botaoClicado() {
  alert('Botão clicado!!!');
}

function alterarImagem(imagem) {
  document.getElementById('alterarImagem').src = imagem;
}

/*function alterarImagemPadrao() {
  document.getElementById('alterarImagem').src = 'imagem1.png';
}*/

//onfocus="this.value='Campo em Foco'" onblur="this.value='Digite aqui'"
function campoEmFoco(elemento) {
  elemento.value = 'Campo em foco!!';
}

function campoForaFoco(elemento) {
  elemento.value = '';
}
