const nav = document.getElementById('main-nav');
const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');
const navLinks = document.querySelectorAll('#main-nav a');

openNavBtn.addEventListener('click', () => {
  openNav();
});

closeNavBtn.addEventListener('click', () => {
  closeNav();
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeNav();
  });
});

function openNav() {
  nav.classList.add('show');
}

function closeNav() {
  nav.classList.remove('show');
}