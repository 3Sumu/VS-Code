// Scroll Section
const scrollUp = document.getElementById("scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Navbar Section
document.getElementById("burger-menu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".navigation").classList.remove("show");
  });
});
