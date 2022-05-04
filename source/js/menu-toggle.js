let menuButton = document.querySelector('.main-header__menu-toggle');
let firstList = document.querySelector('.main-header__first-list');
let secondList = document.querySelector('.main-header__second-list');

menuButton.classList.remove('display-nope');
firstList.classList.add('display-nope');
secondList.classList.add('display-nope');



if (window.screen.width >= 768) {
  firstList.classList.remove('display-nope');
  secondList.classList.remove('display-nope');
} else {
  menuButton.onclick = function () {
    if (menuButton.classList.contains('main-header__menu-toggle--closed')) {
      menuButton.classList.remove('main-header__menu-toggle--closed');
      menuButton.classList.add('main-header__menu-toggle--open');
      firstList.classList.remove('display-nope');
      secondList.classList.remove('display-nope');
      firstList.classList.add('main-header__first-list--absolutly');
      secondList.classList.add('main-header__second-list--absolutly');
    }
    else {
      menuButton.classList.add('main-header__menu-toggle--closed');
      menuButton.classList.remove('main-header__menu-toggle--open');
      firstList.classList.add('display-nope');
      secondList.classList.add('display-nope');
    }
  };
}
