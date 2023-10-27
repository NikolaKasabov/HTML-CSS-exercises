const nav = document.getElementById('main-nav');
const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');


openNavBtn.addEventListener('click', () => {
  openNav();
});

closeNavBtn.addEventListener('click', () => {
  closeNav();
  close
});

function openNav() {
  nav.classList.add('open');
}

function closeNav() {
  nav.classList.remove('open');
}
