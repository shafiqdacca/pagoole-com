document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".toggle");
  const navMenu = document.getElementById("pagoole-menu");

  if (toggle && navMenu) {
    // Toggle menu
    toggle.addEventListener("click", (e) => {
      navMenu.classList.toggle("menu-active");
      e.stopPropagation(); // prevent immediate close
    });

    // Close menu if clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
        navMenu.classList.remove("menu-active");
      }
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("menu-active");
      });
    });
  }

  // Scroll reveal
  const items = document.querySelectorAll(".scroll-reveal");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(i => obs.observe(i));
});
