import Swiper from "swiper";
import { Navigation, Pagination, Grid } from "swiper/modules";

new Swiper(".slider--partners .swiper", {
  modules: [Navigation, Pagination, Grid],
  slidesPerView: 2,
  grid: {
    fill: "row",
    rows: 2,
  },
  spaceBetween: 8,
  breakpoints: {
    1180: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    890: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
  navigation: {
    prevEl: ".slider--partners .slider__prev",
    nextEl: ".slider--partners .slider__next",
  },
});
