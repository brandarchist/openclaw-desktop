const menuToggle = document.getElementById("menu-toggle");
const appMenu = document.getElementById("app-menu");
const quitAction = document.getElementById("quit-action");

function closeMenu() {
  appMenu.classList.add("app-menu--hidden");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isHidden = appMenu.classList.toggle("app-menu--hidden");
  menuToggle.setAttribute("aria-expanded", String(!isHidden));
});

quitAction.addEventListener("click", () => {
  window.desktopShell.quitApp();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".menu-shell")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
