function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// module.exports.add = add;
// module.exports.subtract = subtract;

module.exports = {
  add,
  subtract,
};

if (process.env.NODE_ENV === 'development') {
  function mutiply(a, b) {
    return a * b;
  }
  module.exports.mutiply = mutiply;
}
