import { EventEmitter } from 'node:events';

class Conversa extends EventEmitter {
  constructor() {
    super();
  }

  enviarMensagem(msg) {
    super.emit('mensagemEnviada', msg);
  }
}

const conversa = new Conversa();

conversa.on('mensagemEnviada', (msg) => {
  console.log(`${msg}`);
});

conversa.enviarMensagem('Este é o EX3');
