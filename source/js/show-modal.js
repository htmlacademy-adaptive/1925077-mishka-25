let windowModal = document.querySelector('.modal-window__outer');
let orderButton = document.querySelector('.product-of-week__button');
orderButton.removeAttribute('href');

orderButton.onclick = function () {
  windowModal.classList.remove('modal-window__outer--none');
};

windowModal.onclick = function () {
  windowModal.classList.add('modal-window__outer--none');
};
