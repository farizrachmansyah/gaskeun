const body = document.querySelector('body');
const burgerBtn = document.querySelector('.burger');
const mobileOverlay = document.querySelector('.overlay');
const mobileMenuItem = document.querySelectorAll('.mobile-menu-item a');

burgerBtn.addEventListener('click', () => {
  if (burgerBtn.classList.contains('show')) {
    burgerBtn.classList.remove('show');
    mobileOverlay.style.left = '-100%';
    body.style.overflow = 'auto';
  } else {
    burgerBtn.classList.add('show');
    mobileOverlay.style.left = '0';
    body.style.overflow = 'hidden';
  }
});

mobileMenuItem.forEach(item => {
  item.addEventListener('click', () => {
    burgerBtn.classList.remove('show');
    mobileOverlay.style.left = '-100%';
    body.style.overflow = 'auto';
  });
});