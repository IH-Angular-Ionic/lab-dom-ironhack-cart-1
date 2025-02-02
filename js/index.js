// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity').firstElementChild.value;
  let subTotal = Number(price * quantity);
  let subTotalInHtml = product.querySelector(".subtotal span");
  subTotalInHtml.innerHTML = subTotal.toFixed(2);
  return subTotal;
}

function calculateAll() {
  // debugger
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const arrayProducts = document.querySelectorAll('.product');
  // ITERATION 3
  //... your code goes here /*  aqui recoremos el array de rows y lo sumamos por medio del subtotal */
  let total = 0;
  arrayProducts.forEach((eachRowElement) => {
    total += updateSubtotal(eachRowElement)
  })
  let totalInHtml = document.querySelector('#total-value span');
  totalInHtml.innerHTML = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const rowTarget = target.parentNode.parentNode;
  rowTarget.remove();
  calculateAll();
}

// ITERATION 5
function createProduct() {
  let inputCreate = document.querySelector('.create-product')
  let productName = inputCreate.querySelector('td:nth-child(1) input');
  // let productName = inputCreate.querySelector('input[type=text]').value;
  let productPrice = inputCreate.querySelector('td:nth-child(2) input');
  // let productPrice = inputCreate.querySelector('input[type=number]').value;
  const tBodyHtml = document.querySelector("tbody")
  if (!productName.value || !productPrice.value) {
    alert("Please fill both input price, and product name");
  } else {
    console.log(tBodyHtml);
    tBodyHtml.innerHTML +=
      (` <tr class="product">
        <td class="name"> <span>${productName.value}</span></td>
        <td class="price">$<span>${productPrice.value}</span></td>
        <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
        <td class="subtotal">$<span id="subtot">0</span></td>
        <td class="action"><button class="btn btn-remove">Remove</button></td>
        </tr>
      `);
  }

  const removeProducts = document.querySelectorAll(".btn-remove")
  removeProducts.forEach(row => {
    row.addEventListener("click", removeProduct)
  })

  productName = "";
  productPrice = 0

}

window.addEventListener('load', () => {
  /* --------- calculate -------- */
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  /* -------- remove -------- */
  const removeProducts = document.querySelectorAll('.btn-remove');
  // const removeProducts = [...document.getElementsByClassName('btn-remove')];
  removeProducts.forEach((row) => {
    row.addEventListener("click", removeProduct)
  })
  /* ---- create -------- */
  const createbtn = document.querySelector('#create');
  createbtn.addEventListener('click', createProduct)

});
