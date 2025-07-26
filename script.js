const btnToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu-items');

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-blur');
  } else {
    navbar.classList.remove('navbar-blur');
  }
});

btnToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

const h1 = document.querySelector('h1')
// const window = document.querySelector('window')
window.addEventListener('DOMContentLoaded', () => {
  h1.classList.add('apparition')
})
