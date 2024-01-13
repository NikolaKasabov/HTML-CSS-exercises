const nav = document.querySelector('header nav');
const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');

openNavBtn.addEventListener('click', () => {
  nav.classList.add('open');
});

closeNavBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});
