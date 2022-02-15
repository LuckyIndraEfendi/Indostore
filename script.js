const navBar_BG = document.querySelector(".background-nav");
window.addEventListener("scroll", function () {
  navBar_BG.style.transition = "0.1s";
  if (window.pageYOffset > 50) {
    navBar_BG.classList.add("clr-nav", "shadow");
  } else {
    navBar_BG.classList.remove("clr-nav", "shadow");
  }
});
