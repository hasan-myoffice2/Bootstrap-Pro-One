const testimonialSwiper = new Swiper(".testimonialSwiper", {
   slidesPerView: 1,
   spaceBetween: 24,
   loop: true,

   pagination: {
      el: ".testimonial-pagination",
      clickable: true,
   },

   navigation: {
      nextEl: ".testimonial-next",
   },

   breakpoints: {
      576: {
         slidesPerView: 2,
      },

      992: {
         slidesPerView: 3,
      },
   },
});