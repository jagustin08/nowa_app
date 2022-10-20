const navbarToggler = document.querySelector(".navbar-toggler");
const sidebar = document.querySelector(".main-sidebar");
const mainWrapper = document.querySelector(".main-wrapper");
const body = document.querySelector("body");

function toggleCollapsed() {
  navbarToggler.classList.toggle("collapsed");
  body.classList.toggle("collapsed");
}

navbarToggler.addEventListener("click", function () {
  toggleCollapsed();
});

window.addEventListener("load", myFunction);
window.addEventListener("resize", myFunction);
window.addEventListener("scroll", myFunction);

function myFunction() {
  if (window.innerWidth >= 768) {
    sidebar.addEventListener("mouseover", function () {
      if (body.classList.contains("collapsed")) {
        body.classList.remove("collapsed");
      }
    });

    sidebar.addEventListener("mouseout", function () {
      if (
        !body.classList.contains("collapsed") &&
        navbarToggler.classList.contains("collapsed")
      ) {
        body.classList.add("collapsed");
      }
    });
  }
}
