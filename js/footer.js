// Footer
const footer = document.getElementById("footer");
if (footer) {
  footer.innerHTML = `
  <footer class="footer">
  <div class="footer-container">
  <div>
    <p>Copyright &copy; Pagoole &commat;2021-2025 <a href="https://www.pagoole.com">পাগল</a> || <a href="https://www.pagoole.com"><span class="pagoole"></span></a> All rights reserved.</p>
    </div>
    <div class="footer-top">
      <a href="#top" title="Back to Top">
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
    <div class="footer-social">
    <a class="" href="./privacy.html">Privacy Policy</a>||<a class="" href="./privacy.html">Terms of Use</a>||&nbsp;
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