const refs = {
  mobileMenu: document.querySelector("[data-menu]"),
  menuBtnOpen: document.querySelector("[data-menu-open]"),
  menuBtnClose: document.querySelector("[data-menu-close]"),
  menuList: document.querySelector("[data-menu-list]"),
};

refs.menuBtnOpen.addEventListener("click", toggleMenu);
refs.menuBtnClose.addEventListener("click", toggleMenu);
refs.menuList.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  const element = event.target;
  const hasMenuLink = element.closest("[data-menu-link]") || null;
  const hasMenuOpenBtn = element.closest("[data-menu-open]") || null;
  const hasMenuCloseBtn = element.closest("[data-menu-close]") || null;

  if (!hasMenuLink && !hasMenuOpenBtn && !hasMenuCloseBtn) {
    return;
  }

  refs.mobileMenu.classList.toggle("is-open");
}
