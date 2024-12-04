document.addEventListener('DOMContentLoaded', function () {
  const formCalc = document.getElementById('calc-form');

  formCalc.addEventListener('submit', function (e) {
    e.preventDefault();
    validarDados();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoIMC = imcCalc(altura, peso).toFixed(2);
    categoriaIMC(resultadoIMC);

    //atualizar categoria - input
    document.getElementById('categoria').value = categoriaIMC(resultadoIMC);
    //FormData

    let dados = new FormData(formCalc);
    for (let [chave, valor] of dados.entries()) {
      console.log(chave + ':' + valor);
    }
  });
});

let isValid = true;

function validarDados() {
  const dados = document.getElementById('nome').value;
  const exibirErro = document.getElementById('nome-error');

  if (dados === '' || dados === null) {
    exibirErro.style.display = 'block';
    isValid = false;
  } else {
    exibirErro.style.display = 'none';
    isValid = true;
  }
  return isValid;
}

function imcCalc(altura, peso) {
  imc = peso / altura ** 2;

  return imc;
}

function categoriaIMC(imc) {
  const nome = document.getElementById('nome').value;
  const resultado = document.getElementById('resultado');
  let categoria;

  if (imc < 17) {
    categoria = 'Muito abaixo do peso';
    resultado.style.background = '#ff0000';
  } else if (imc >= 17 && imc <= 18.47) {
    categoria = 'Abaixo do peso';
    resultado.style.background = '#fff500';
  } else if (imc >= 18.5 && imc <= 24.99) {
    categoria = 'Peso normal';
    resultado.style.background = '#70ff00';
  } else if (imc >= 25 && imc <= 29.99) {
    categoria = 'Acima do peso';
    resultado.style.background = '#fff500';
  } else if (imc >= 30 && imc <= 34.99) {
    categoria = 'Obesidade I';
    resultado.style.background = '#ff7a00';
  } else if (imc >= 35 && imc <= 39.99) {
    categoria = 'Obesidade II (severa)';
    resultado.style.background = '#ff4e00';
  } else {
    categoria = 'Obesidade III (mórbida)';
    resultado.style.background = '#ff0000';
  }

  resultado.innerHTML = `<p>${nome}, seu resultado de IMC é: ${imc}.</p>
  <p>Sua categoria no IMC é: ${categoria}!</p>`;
  return categoria;
}
