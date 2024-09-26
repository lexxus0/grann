const refs = {
  openMenuButton: document.querySelector('.js-open-menu'),
  closeMenuButton: document.querySelector('.js-close-menu'),
  mobileMenu: document.querySelector('.js-mobile-menu'),
  body: document.body,
};

refs.openMenuButton.addEventListener('click', handleOpenMenu);

function handleOpenMenu() {
  const menu = document.querySelector('.js-mobile-menu');
  menu.style.transition = 'transform 250ms linear';

  refs.openMenuButton.removeEventListener('click', handleOpenMenu);

  refs.closeMenuButton.addEventListener('click', handleCloseMenu);

  refs.mobileMenu.classList.add('js-is-opened');

  refs.mobileMenu.classList.remove('js-is-closed');

  refs.body.classList.add('no-scroll');
}

function handleCloseMenu() {
  refs.mobileMenu.classList.add('js-is-closed');

  refs.mobileMenu.classList.remove('js-is-opened');

  refs.openMenuButton.addEventListener('click', handleOpenMenu);

  refs.openMenuButton.removeEventListener('click', handleCloseMenu);

  refs.body.classList.remove('no-scroll');
}
