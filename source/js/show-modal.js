let windowModal = document.querySelector('.modal-window-wrapper');
let orderButton = document.querySelector('.product-of-week__button');
orderButton.removeAttribute('href');

orderButton.onclick = function () {
  windowModal.classList.remove('modal-window-wrapper--none');
};

windowModal.onclick = function () {
  windowModal.classList.add('modal-window-wrapper--none');
};
