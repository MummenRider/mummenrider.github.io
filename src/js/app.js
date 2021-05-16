/******************* Selectors *******************/
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const heroSection = document.querySelector(".hero-section");
const sliders = document.querySelectorAll(".slide-in");
const faders = document.querySelectorAll(".fade-in");

/******************* Methods *******************/
const burgerNav = () => {
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("line-effect");
};

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

/******************* Events/Obervers *******************/
burger.addEventListener("click", burgerNav, false);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
