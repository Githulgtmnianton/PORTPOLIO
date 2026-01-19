document.addEventListener("DOMContentLoaded", () => {

  // HEADER SCROLL EFFECT
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });

  // ACTIVE NAV LINK
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) { // use window.scrollY
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    });
  });

  // PORTFOLIO ANIMATION
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  portfolioItems.forEach(item => observer.observe(item));
});
