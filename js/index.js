// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const getSubtotal = price * quantity;
  const subtotal = product.querySelector('.subtotal span')
  return subtotal.innerHTML = getSubtotal;
  console.log({getSubtotal});
  return Number(getSubtotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  productsCost = 0;

  products.forEach(product => {
    productsCost += updateSubtotal(product);

  });




  // ITERATION 3

  const totalInv = document.getElementById('total-value');
  return totalInv.innerHTML = `$${productsCost.toFixed(2)}`;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
}

const remButton = document.getElementById('btn btn-remove');

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
