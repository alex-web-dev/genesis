/* Header */
const $header = document.querySelector(".header");
if ($header) {
  toggleHeader($header);
  window.addEventListener("scroll", () => toggleHeader($header));
}

function toggleHeader($header) {
  const offset = window.innerWidth > 767 ? 40 : 15;
  if (window.scrollY >= offset && !$header.classList.contains("header--fixed")) {
    $header.classList.add("header--fixed");
  } else if (window.scrollY < offset && $header.classList.contains("header--fixed")) {
    $header.classList.remove("header--fixed");
  }
}
