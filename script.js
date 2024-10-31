const Navlink = document.querySelectorAll('.nav-menu .nav-link');
const openMenu = document.getElementById('menu-open-button');
const closeMenu = document.getElementById('menu-close-button');

openMenu.addEventListener('click', () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle('show-mobile-menu');
});
// close Menu when the close button is clicked
closeMenu.addEventListener('click', () => openMenu.click());
// close Menu when the Nav Link is clicked
Navlink.forEach(link => {
  link.addEventListener('click', () => openMenu.click());
});
// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoint
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
