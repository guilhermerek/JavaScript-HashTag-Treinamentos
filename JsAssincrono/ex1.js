function imprimirMensagem(callback) {
  callback('Menssagem');
}

imprimirMensagem(console.log);

const imprimirMensagem2 = (msg, callback) => {
  console.log(msg);
  callback();
};

imprimirMensagem2('Menssagem 2', () => {
  console.log('Menssagem 3');
});
