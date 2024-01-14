const nav = document.querySelector('header nav');
const closeNavBtn = document.querySelector('header nav .close-nav-btn');
const openNavBtn = document.querySelector('header .open-nav-btn');

closeNavBtn.addEventListener('click', () => {
  closeNav();
});

openNavBtn.addEventListener('click', () => {
  openNav();
});

function openNav() {
  nav.classList.add('open');
}

function closeNav() {
  nav.classList.remove('open');
}