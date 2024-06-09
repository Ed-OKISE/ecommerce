// const btnEl = document.querySelector(".mobile-but");
// const menuxEl = document.querySelector(".menux");
// btnEl.addEventListener("click", function () {
//   menuxEl.classList.toggle("nav-close");
// });

const heroEl = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) document.body.classList.add("sticky");

    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);
obs.observe(heroEl);

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
