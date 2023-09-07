const $menu = document.querySelector(".menu");
if ($menu) {
  const $header = document.querySelector(".header");
  const $menuToggle = $menu.querySelector(".menu__toggle");
  $menuToggle.addEventListener("click", () => toggleMenu($menu, $header));

  $menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu__link")) {
      closeMenu($menu, $header);
    }
  });
}

function toggleMenu($menu, $header) {
  $menu.classList.toggle("menu--active");
  document.body.classList.toggle("body--lock");
  $header.classList.toggle("header--menu-open");
}

function closeMenu($menu, $header) {
  $menu.classList.remove("menu--active");
  document.body.classList.remove("body--lock");
  $header.classList.remove("header--menu-open");
}
