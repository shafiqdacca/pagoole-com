// Header
const header = document.getElementById("header");
if (header) {
  header.innerHTML = `
  <header>
  <div style="visibility: hidden;" id="top"></div>
    <nav class="container">
   <a href="/">
<img src="https://pagoole.com/assets/images/navbar-logo-64x64.png" 
     alt="পাগল বিডি Pagol BD"
     width="50"
     height="50"
     style="vertical-align: middle;
            border-radius: 50%;
            background-color: #0000ff5c;">  
  <span class="logo-text">
      পাগল বিডি Pagoole BD
  </span>
</a>
      <div class="toggle">☰</div>
      <ul id="pagoole-menu">
        <li><a href="index.html"><i class="fas fa-home" style="color: blue;"></i> Home</a></li>
        <li><a href="about.html"><i class="fas fa-user" style="color: #e67e22;"></i> About</a></li>
        <li><a href="portfolio.html"><i class="fas fa-briefcase" style="color: #2ecc71;"></i> Portfolio</a></li>
        <li><a href="services.html"><i class="fas fa-cog" style="color: #9b59b6;"></i> Services</a></li>
        <li><a href="contact.html"><i class="fas fa-envelope" style="color: #e74c3c;"></i> Contact</a></li>
      </ul>
    </nav>    
  </header>
`;
}

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