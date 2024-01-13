const nav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('header nav a');
const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');

function openNav() {
  nav.classList.add('open');
}

function closeNav() {
  nav.classList.remove('open');
}

navLinks.forEach(link => {
  link.addEventListener('click', closeNav);
});

openNavBtn.addEventListener('click', () => {
  openNav();
});

closeNavBtn.addEventListener('click', () => {
  closeNav();
});
