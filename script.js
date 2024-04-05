const openNav = document.querySelector(".menu-outline");
const closeNav = document.querySelector(".close-outline");
const header = document.querySelector(".primary-header");

openNav.addEventListener("click", function () {
  header.classList.add("open-nav");
});

closeNav.addEventListener("click", function () {
  header.classList.remove("open-nav");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    const href = link.getAttribute("href");
    if (href.length > 1) {
      document.querySelector(".primary-header").classList.remove("open-nav");
    }
  });
});

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("position");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("position");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHero);
