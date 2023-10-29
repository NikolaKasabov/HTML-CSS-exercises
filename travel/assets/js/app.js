const nav = document.querySelector('header nav');
const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');
const navLinks = document.querySelectorAll('header nav a');
const accordionItems = document.querySelectorAll('.section-6 .left .item');
const toggleAccordionButtons = document.querySelectorAll('.section-6 .left .toggle-btn');

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

toggleAccordionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const isAccordionOpen = btn.closest('.item.active');

    if (isAccordionOpen) {
      closeAllAccordionItems();
    } else {
      closeAllAccordionItems();
      btn.closest('.item').classList.add('active');
    }
  });
});

function closeAllAccordionItems() {
  accordionItems.forEach(item => item.classList.remove('active'));
}
