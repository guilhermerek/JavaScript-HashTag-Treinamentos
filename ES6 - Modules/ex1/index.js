//CommonJS

// const { add, subtract } = require('./mathOperations.js');

// console.log(add(3, 5));
// console.log(subtract(10, 9));

// outra forma de fazer:

// process.env.NODE_ENV = 'production';
process.env.NODE_ENV = 'development';

const exportWithCommonJS = require('./mathOperations.js');

console.log(exportWithCommonJS.add(3, 5));
console.log(exportWithCommonJS.subtract(10, 9));

if (exportWithCommonJS.mutiply) {
  console.log(exportWithCommonJS.mutiply(2, 7));
}
