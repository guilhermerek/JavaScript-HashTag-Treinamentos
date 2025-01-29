import { EventEmitter } from 'node:events';

class Conversa extends EventEmitter {
  constructor() {
    super();
  }

  enviarMensagem(msg) {
    super.emit('mensagemEnviada', msg);
  }

  receberMensagem(msg) {
    console.log('Nova mensagem recebida!!');
    super.emit('mensagemRecebida', msg);
  }
}

const conversa = new Conversa();

conversa.on('mensagemEnviada', (msg) => {
  console.log(`${msg}`);
});

conversa.enviarMensagem('Este é o EX3');

conversa.on('mensagemRecebida', (msg) => {
  console.log(`${msg}`);
});

conversa.receberMensagem('Agora já não é mais o EX3, este é o EX4!');
