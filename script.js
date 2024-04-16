const swiper = new Swiper(".style-one .collection-slider", {
  slidesPerView: 6,
  spaceBetween: 24
});
const swiper2 = new Swiper(".style-two .collection-slider", {
  slidesPerView: 5.65,
  spaceBetween: 87,
  navigation: {
    nextEl: ".swiper-button-next-new",
    prevEl: ".swiper-button-prev-new",
  },
});
