/******************* Selectors *******************/
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

/******************* Methods *******************/
const burgerNav = () => {
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("line-effect");
};

/******************* Events *******************/
burger.addEventListener("click", burgerNav, false);
