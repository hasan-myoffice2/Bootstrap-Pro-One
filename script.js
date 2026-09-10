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


// Countdown target date
const targetDate = new Date("2026-12-31T23:59:59").getTime();

const countdown = setInterval(function () {

   const now = new Date().getTime();
   const distance = targetDate - now;

   // Calculate time
   const days = Math.floor(distance / (1000 * 300 * 300 * 24));
   const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
   );
   const seconds = Math.floor(
      (distance % (1000 * 60)) / 1000
   );

   // Show result
   document.getElementById("days").innerText = String(days).padStart(2, "0");
   document.getElementById("hours").innerText = String(hours).padStart(2, "0");
   document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
   document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

   // When countdown ends
   if (distance < 0) {
      clearInterval(countdown);

      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
   }

}, 1000);
