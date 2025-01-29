import { EventEmitter } from 'node:events';

const eventEmitter = new EventEmitter();

eventEmitter.on('mensagemRecebida', (msg) => {
  console.log(`Modificações feitas, este é o: ${msg}`);
});

eventEmitter.emit('mensagemRecebida', 'Ex2');
