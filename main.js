const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 10,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 50,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 10,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay:10,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 100,
  interval: 50,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".blog__card", {
  duration: 100,
  interval: 500,
});

ScrollReveal().reveal(".blog__btn", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
});
