//ES6 - module

// opcao 1
// import { add, subtract, multiply } from './mathOperations.js';

// ou import * as algumNome from './mathOperations.js'; - ira utilizar o algumNome.add etc

// console.log(add(3, 5));
// console.log(subtract(10, 9));

// console.log(multiply(2, 7));

// opcao 2 para usar com export default {add, ...}

// import * as mathOp from './mathOperations.js';
// console.log(mathOp.default.add(3, 5));
// console.log(mathOp.default.subtract(10, 9));

// console.log(mathOp.default.multiply(2, 7));

//opcao 3
// process.env.NODE_ENV = 'development';
process.env.NODE_ENV = 'test';

import { multiply } from './mathOperations.js';

import math from './mathOperations.js';
console.log(math.add(3, 5));
console.log(math.subtract(10, 9));
console.log(multiply(2, 7));
