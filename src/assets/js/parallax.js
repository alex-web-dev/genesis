import Parallax from 'parallax-js'

window.addEventListener("load", () => {
  const $parallaxElems = document.querySelectorAll(".js-parallax");
  $parallaxElems.forEach(($elem) => {
    new Parallax($elem);
  });
});
