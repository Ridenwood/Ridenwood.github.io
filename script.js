const list = document.querySelector('.header__nav-box')
const listNav = document.querySelector('.header__nav-box nav')
const burger = document.querySelector('.header__burger')

burger.addEventListener('click', clickBurger)
list.addEventListener('click', clickBurger)
listNav.addEventListener('click', function(e) {
  e.stopPropagation()
})

  function clickBurger() {
    list.classList.toggle('active')
  }



  
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 35,
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 640px
        769: {
          slidesPerView: 2,
          spaceBetween: 35,
        },
    },
    // Navigation arrows
    navigation: {
    prevEl: '.feedback__button-prev-swap',
    nextEl: '.feedback__button-next-swap',
    },
  });