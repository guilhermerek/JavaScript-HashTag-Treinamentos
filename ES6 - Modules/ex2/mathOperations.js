function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// function multiply(a, b) {
//   return a * b;
// }

//export function.... ou

// export { add, subtract, multiply }; opcao 1

// export default { add, subtract, multiply }; opcao 2

const math = { add, subtract }; //opcao 3
export default math;

export function multiply(a, b) {
  if (process.env.NODE_ENV === 'development') {
    return a * b;
  } else {
    const error = 'Estamos fora do ambiente de desenvolvimento';
    return error;
  }
}
