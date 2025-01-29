import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();

eventEmitter.on('mensagemRecebida', () => {
  console.log('Mensagem Recebida com Sucesso!');
});

eventEmitter.emit('mensagemRecebida');
