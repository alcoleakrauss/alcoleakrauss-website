// Alcolea + Krauss — Shared components

function getNav(activePage, lang) {
  const pages = {
    es: { inicio: 'es/index.html', arte: 'es/arte.html', decoracion: 'es/decoracion.html', antiguedades: 'es/antiguedades.html', contacto: 'es/contacto.html' },
    en: { inicio: 'en/index.html', arte: 'en/art.html', decoracion: 'en/decoration.html', antiguedades: 'en/antiques.html', contacto: 'en/contact.html' }
  };
  const labels = {
    es: ['Inicio', 'Arte', 'Decoración', 'Antigüedades', 'Contacto'],
    en: ['Home', 'Art', 'Decoration', 'Antiques', 'Contact']
  };
  const keys = ['inicio', 'arte', 'decoracion', 'antiguedades', 'contacto'];
  const otherLang = lang === 'es' ? 'en' : 'es';
  const otherPage = pages[otherLang][activePage] || pages[otherLang].inicio;

  return `<nav>
  <a href="../${lang}/index.html" class="logo"><span>A+K</span></a>
  <ul class="nav-links">
    ${keys.map((k, i) => `<li><a href="../${pages[lang][k]}"${k === activePage ? ' class="active"' : ''}>${labels[lang][i]}</a></li>`).join('\n    ')}
  </ul>
  <div class="lang-toggle">
    <a href="#" class="${lang === 'es' ? 'active' : ''}">ES</a>
    <a href="../${otherPage}" class="${lang === 'en' ? 'active' : ''}">EN</a>
  </div>
</nav>`;
}

function getFooter(lang) {
  if (lang === 'en') return `<footer>
  <div class="footer-grid">
    <div class="footer-col"><span class="footer-label">Visit us</span><p class="footer-text">Av. Cap de Cavalleria, 5<br>Industrial Estate<br>07714 Mahón, Menorca<br><br>Mon–Fri 10:00–14:00 · 17:00–20:00</p></div>
    <div class="footer-col"><span class="footer-label">Contact</span><p class="footer-text">+34 871 024 018<br>+34 673 847 899<br><br>alcoleakraussmenorca@gmail.com</p></div>
    <div class="footer-col"><span class="footer-label">Flea Market</span><p class="footer-text">C/ Son Cremat (behind Binipreu)<br>Industrial Estate, Mahón<br><br>Saturdays 10:00–14:00</p></div>
  </div>
  <div class="footer-bottom">
    <span class="footer-bottom-text">© 2026 Alcolea + Krauss — Mahón, Menorca</span>
    <a href="../en/index.html" class="footer-logo"><span>A+K</span></a>
  </div>
</footer>`;

  return `<footer>
  <div class="footer-grid">
    <div class="footer-col"><span class="footer-label">Visítanos</span><p class="footer-text">Av. Cap de Cavalleria, 5<br>Polígono Industrial<br>07714 Mahón, Menorca<br><br>Lun–Vie 10:00–14:00 · 17:00–20:00</p></div>
    <div class="footer-col"><span class="footer-label">Contacto</span><p class="footer-text">+34 871 024 018<br>+34 673 847 899<br><br>alcoleakraussmenorca@gmail.com</p></div>
    <div class="footer-col"><span class="footer-label">Flea Market</span><p class="footer-text">C/ Son Cremat (detrás de Binipreu)<br>Polígono Industrial de Mahón<br><br>Sábados 10:00–14:00</p></div>
  </div>
  <div class="footer-bottom">
    <span class="footer-bottom-text">© 2026 Alcolea + Krauss — Mahón, Menorca</span>
    <a href="../es/index.html" class="footer-logo"><span>A+K</span></a>
  </div>
</footer>`;
}
