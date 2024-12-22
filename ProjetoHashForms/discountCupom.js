function toggleDiscount() {
  const discountBody = document.getElementById('apply-discount-body');
  const icon = document.getElementById('toggle-icon');

  if (
    discountBody.style.display === 'none' ||
    discountBody.style.display === ''
  ) {
    discountBody.style.display = 'block';
    icon.classList.add('bxs-chevron-up');
    icon.classList.remove('bxs-chevron-down');
  } else {
    discountBody.style.display = 'none';
    icon.classList.add('bxs-chevron-down');
    icon.classList.remove('bxs-chevron-up');
  }
}

const cupons = {
  DESCONTO10: 0.1,
  DESCONTO20: 0.2,
  DESCONTO50: 0.5,
};

function applyDiscount() {
  const discountCode = document
    .getElementById('discount-code')
    .value.trim()
    .toUpperCase();
  const discountMessage = document.getElementById('discount-message');
  const total = document.getElementById('total-price');

  if (cupons[discountCode]) {
    const discount = cupons[discountCode];
    const originalPrice = 1200;
    const discountedPrice = originalPrice * (1 - discount);

    total.innerText = `Preço total: R$ ${discountedPrice.toFixed(2)}`;

    localStorage.setItem('discount', discountCode);

    discountMessage.style.color = 'green';
    discountMessage.innerText = `Desconto de ${discountCode} aplicado!`;

    document.getElementById('discount-code').value = '';
  } else {
    document.getElementById('discount-code').value = '';
    discountMessage.style.color = 'red';
    discountMessage.innerText = 'Cupom invalido!';
  }
}

function checkStoredDiscount() {
  const checkStoredDisc = localStorage.getItem('discount');
  const discountMessageElement = document.getElementById('discount-message');

  if (checkStoredDisc) {
    localStorage.removeItem('discount');
  }

  discountMessageElement.innerText = '';
}

window.onload = checkStoredDiscount;
