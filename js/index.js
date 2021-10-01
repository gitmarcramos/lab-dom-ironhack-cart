// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price = Number(product.querySelector('.price span').textContent);
  const quantity = Number(product.querySelector('.quantity input').value);
  let subtotal = product.querySelector('.subtotal span');

  subtotal.textContent = quantity * price;
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const multipleProducts = document.querySelectorAll('.product');
  multipleProducts.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  //===> monkey solution:
  let total = 0;

  const allSubtotals = document.querySelectorAll('.subtotal span');
  allSubtotals.forEach((subtotal) => {
    total += Number(subtotal.textContent);
  });

  const totalPrice = document.querySelector('#total-value span');
  totalPrice.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
