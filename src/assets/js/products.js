import { moveElement } from "./helpers";
import Swiper from "swiper";
import { Navigation, Pagination, Grid } from "swiper/modules";

const $productsSwipers = document.querySelectorAll(".slider--products");
$productsSwipers.forEach(($slider) => {
  const $swiper = $slider.querySelector(".swiper");
  const $prev = $slider.querySelector(".slider__prev");
  const $next = $slider.querySelector(".slider__next");
  new Swiper($swiper, {
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
        spaceBetween: 24,
        grid: {
          fill: "row",
          rows: 1,
        },
      },
      890: {
        slidesPerView: 3,
        spaceBetween: 24,
        grid: {
          fill: "row",
          rows: 1,
        },
      },
    },
    navigation: {
      prevEl: $prev,
      nextEl: $next,
    },
  });
});

moveProductsBtn();
window.addEventListener("resize", moveProductsBtn);

function moveProductsBtn() {
  moveElement({
    element: ".products__controls-right-btn",
    from: ".products__controls",
    to: ".products__footer",
    width: 890,
  });
}
