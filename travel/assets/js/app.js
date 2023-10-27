const nav = document.querySelector('header nav');
const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');
const navLinks = document.querySelectorAll('header nav a');

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
  nav.classList.add('open');
}

function closeNav() {
  nav.classList.remove('open');
}
