function isValidName(string) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (
      !(
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        char === ' '
      )
    ) {
      return false;
    }
  }
  return true;
}

function isValidCPF(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}

function isValidPhoneNum(num) {
  return num.length === 11 && !isNaN(num);
}

function isValidCEP(cep) {
  return cep.length === 8 && !isNaN(cep);
}

function isValidState(state) {
  return (
    state.length === 2 &&
    state[0] >= 'A' &&
    state[0] <= 'Z' &&
    state[1] >= 'A' &&
    state[1] <= 'Z'
  );
}

function isValidForm(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const rua = document.getElementById('rua').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const complemento = document.getElementById('complemento').value.trim();
  const bairro = document.getElementById('bairro').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const estado = document.getElementById('estado').value.trim();

  if (
    !nome ||
    !cpf ||
    !telefone ||
    !rua ||
    !numero ||
    !complemento ||
    !bairro ||
    !cidade ||
    !estado
  ) {
    alert('Preencha todos os campos!');
    return;
  }

  if (!isValidName(nome)) {
    alert('O nome deve contar apenas letras e espaços!');
    return;
  }

  if (!isValidCPF(cpf)) {
    alert('O CPF deve conter 11 digitos numericos!');
    return;
  }

  if (!isValidPhoneNum(numero)) {
    alert('O Telefone deve conter 11 digitos numericos!');
    return;
  }

  if (!isValidCEP(cep)) {
    alert('O CEP deve conter 8 digitos numericos!');
    return;
  }

  if (!isValidState(estado)) {
    alert('O Estado deve ser uma siga de letras maiusculas!');
  }

  const dadosForm = {
    nome,
    cpf,
    telefone,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };

  localStorage.setItem('dadosForm', JSON.stringify(dadosForm));
  formulario.reset();
  alert('Os dados foram salvos!');
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', isValidForm);
