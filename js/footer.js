// Footer
const footer = document.getElementById("footer");
if (footer) {
  footer.outerHTML = `
  <footer class="footer">

  <div class="language-select">
  <a href="?lang=en">English</a> | 
  <a href="?lang=bn">বাংলা</a> | 
  <a href="?lang=fr">Français</a> | 
  <a href="?lang=es">Español</a> | 
  <a href="?lang=de">Deutsch</a> | 
  <a href="?lang=it">Italiano</a> | 
  <a href="?lang=ar">العربية</a> | 
  <a href="?lang=hi">हिन्दी</a> | 
  <a href="?lang=zh">中文</a> | 
  <a href="?lang=ja">日本語</a> | 
  <a href="?lang=ru">Русский</a>
  </div>
  <hr/>
  <div class="footer-container">
  <div>
    <p>Copyright &copy; <strong>Pagoole</strong> &commat;2021-2025 <a href="https://www.pagoole.com">পাগল</a> || <a href="https://www.pagoole.com"><span class="pagoole"></span></a> All rights reserved.</p>
    </div>
    <div class="footer-top">
      <a href="#top" title="Back to Top">
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
    <div class="footer-social">
    <a class="" href="https://www.pagoole.com/privacy.html">Privacy Policy</a>||<a class="" href="https://www.pagoole.com/privacy.html">Terms of Use</a>||&nbsp;
     <a class="social-button" href="https://www.facebook.com/ituhin2" title="Facebook" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a class="social-button" href="https://twitter.com/@shafiq_dacca" title="Twitter" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
      <a class="social-button" href="https://www.linkedin.com/in/shafiqbd" title="LinkedIn" target="_blank">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a class="social-button" href="https://github.com/shafiqdacca" title="GitHub" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>    
  </div>
</footer>
`;
}

if (typeof generateLogoTextByClass === "function") {
  generateLogoTextByClass('pagoole', 'Pagoole');
}

const translations = {
    en: {
      title: "Welcome",
      description: "This is a demo page."
    },
    bn: {
      title: "স্বাগতম",
      description: "এটি একটি ডেমো পৃষ্ঠা।"
    },
    fr: {
      title: "Bienvenue",
      description: "Ceci est une page de démonstration."
    },
    es: {
      title: "Bienvenido",
      description: "Esta es una página de demostración."
    }
  };

  // Change language
  function changeLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
      let key = el.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    // Save selected language in localStorage
    localStorage.setItem("siteLang", lang);
  }

  // Handle click on language links
  document.querySelectorAll(".language-select a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // stop link reload/submit
      const lang = link.getAttribute("data-lang");
      changeLanguage(lang);
    });
  });

  // Load saved language on page load
  const savedLang = localStorage.getItem("siteLang") || "en";
  changeLanguage(savedLang);