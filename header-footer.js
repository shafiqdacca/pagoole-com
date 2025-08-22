// Header
const header = document.getElementById("header");
if (header) {
  header.innerHTML = `
  <header>
    <nav class="container">
   <a href="/">
<img src="https://pagoole.com/assets/img/navbar-logo-64x64.png" 
     alt="পাগল বিডি Pagol BD"
     width="50"
     height="50"
     style="vertical-align: middle;
            border-radius: 50%;
            background-color: #0000ff5c;">
  <!--<span style="
    font-weight: bold;
    font-size: 1.8rem;
    background: linear-gradient(
      90deg,
      rgb(4, 145, 11),
      #00ffaa,
      rgb(255, 0, 0),
      #8855ff,
      #ff5599
    );
    vertical-align: middle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  ">
    পাগল বিডি Pagoole BD
  </span>-->
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

// Footer
const footer = document.getElementById("footer");
if (footer) {
  footer.innerHTML = `
  <footer class="footer">
  <div class="footer-container">
    <p>&copy; 2025 <a href="https://www.pagoole.com.bd">পাগল বিডি</a> || <a href="https://www.pagoole.com.bd">Pagoole BD</a> All rights reserved.</p>
    <div class="footer-top">
      <a href="#top" title="Back to Top">
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
    <div class="footer-social">
      <a href="https://www.facebook.com/ituhin2" title="Facebook" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com/@shafiq_dacca" title="Twitter" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/in/shafiqbd" title="LinkedIn" target="_blank">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="https://github.com/shafiqdacca" title="GitHub" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>    
  </div>
</footer>
`;
}

//const navMenu = document.querySelector("nav ul");
const navMenu = document.getElementById('pagoole-menu');

// Mobile Nav Toggle (optional)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".toggle");
  //const navMenu = document.querySelector("nav ul");
  //const navMenu = document.getElementById('pagoole-menu');

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      //console.log(navMenu.className);
      navMenu.classList.toggle(".menu-active");
    });
  }
});

// Close menu if clicking outside
document.addEventListener("click", (e) => {
  //console.log(e.target);
  if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
    navMenu.classList.remove("menu-active");
  }
});

  // Mobile nav toggle
  const toggle = document.querySelector('.toggle'),
        nav = document.querySelector('nav ul');
  toggle.addEventListener('click', () => nav.classList.toggle('menu-active'));

  // Scroll reveal
  const items = document.querySelectorAll('.scroll-reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(i => obs.observe(i));