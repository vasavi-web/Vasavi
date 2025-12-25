document.addEventListener("DOMContentLoaded", function () {

  const footerHTML = `
  <style>
    /* ================= FOOTER ================= */
    .footer {
      background: #091726;
      border-top: 1px solid rgba(255,255,255,0.06);
    }

    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 48px 20px 36px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 40px;
    }

    /* BRAND */
    .footer-brand {
      max-width: 420px;
    }

    .footer-brand h4 {
      font-size: 15px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .footer-brand p {
      font-size: 14px;
      line-height: 1.6;
      color: #94a3b8;
    }

    /* NAV */
    .footer-nav {
      display: flex;
      gap: 26px;
      flex-wrap: wrap;
    }

    .footer-nav a {
      font-size: 14px;
      color: #94a3b8;
      text-decoration: none;
      transition: color .25s ease;
    }

    .footer-nav a:hover {
      color: #ffffff;
    }

    /* BOTTOM */
    .footer-bottom {
      text-align: center;
      padding: 18px 20px;
      font-size: 12.5px;
      color: #64748b;
      border-top: 1px solid rgba(255,255,255,0.05);
    }

    /* ================= FLOATING SOCIALS ================= */
    .floating-socials {
      position: fixed;
      right: 18px;
      bottom: 18px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 9999;
    }

    .social-btn {
      width: 50px;
      height: 50px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      text-decoration: none;
      box-shadow: 0 10px 25px rgba(0,0,0,0.35);
      transition: transform .25s ease, opacity .25s ease;
    }

    .social-btn:hover {
      transform: translateY(-4px);
      opacity: 0.95;
    }

    .social-btn.whatsapp { background: #25D366; }
    .social-btn.instagram {
      background: linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045);
    }

    /* ================= MOBILE ================= */
    @media (max-width: 768px) {

      .footer-inner {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 28px;
      }

      .footer-brand {
        max-width: 100%;
      }

      .footer-nav {
        flex-direction: column;
        align-items: center;
        gap: 14px;
      }

      .floating-socials {
        right: 14px;
        bottom: 14px;
      }
    }
  </style>

  <footer class="footer">
    <div class="footer-inner">

      <div class="footer-brand">
        <h4>Vasavi</h4>
        <p>
          Designing clean, modern websites for portfolios, businesses,
          and e-commerce brands with clarity and usability in mind.
        </p>
      </div>

      <nav class="footer-nav">
        <a href="index.html">Home</a>
        <a href="service.html">Services</a>
        <a href="work.html">Work</a>
        <a href="case.html">Case Studies</a>
        <a href="process.html">Process</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>

    </div>

    <div class="footer-bottom">
      © <span id="footerYear"></span> Vasavi. All rights reserved.
    </div>
  </footer>

  <!-- FLOATING SOCIALS -->
  <div class="floating-socials">

    <!-- WhatsApp -->
    <a href="https://wa.me/919908500325" target="_blank"
       class="social-btn whatsapp" aria-label="WhatsApp">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 0C5.41 0 .04 5.37.04 12c0 2.11.55 4.17 1.6 5.99L0 24l6.17-1.62a11.96 11.96 0 005.87 1.5h.01c6.63 0 12-5.37 12-12S18.67 0 12.04 0zm6.54 17.45c-.27.76-1.6 1.48-2.24 1.56-.6.08-1.37.11-2.22-.13-.52-.15-1.18-.38-2.05-.75-3.61-1.56-5.97-5.14-6.15-5.39-.18-.25-1.47-1.96-1.47-3.75s.93-2.67 1.26-3.04c.33-.37.72-.46.96-.46h.69c.22 0 .53-.08.83.63.3.71 1.01 2.42 1.1 2.6.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.36.38-.16.74.2.36.89 1.52 1.9 2.46 1.3 1.22 2.4 1.6 2.75 1.78.35.18.56.16.77-.1.21-.26.87-1.01 1.1-1.36.23-.35.47-.29.79-.17.32.12 2.02.95 2.37 1.13.35.18.58.26.67.4.09.14.09.78-.18 1.54z"/>
      </svg>
    </a>

    <!-- Instagram -->
    <a href="https://instagram.com/vasavi0325" target="_blank"
       class="social-btn instagram" aria-label="Instagram">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.2.07 1.85.25 2.28.42.57.22.98.48 1.41.91.43.43.69.84.91 1.41.17.43.35 1.08.42 2.28.07 1.25.07 1.64.07 4.85s0 3.6-.07 4.85c-.07 1.2-.25 1.85-.42 2.28-.22.57-.48.98-.91 1.41-.43.43-.84.69-1.41.91-.43.17-1.08.35-2.28.42-1.25.07-1.64.07-4.85.07s-3.6 0-4.85-.07c-1.2-.07-1.85-.25-2.28-.42-.57-.22-.98-.48-1.41-.91-.43-.43-.69-.84-.91-1.41-.17-.43-.35-1.08-.42-2.28C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.07-1.2.25-1.85.42-2.28.22-.57.48-.98.91-1.41.43-.43.84-.69 1.41-.91.43-.17 1.08-.35 2.28-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.2a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 10.8a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.86-11.05a1.54 1.54 0 11-3.08 0 1.54 1.54 0 013.08 0z"/>
      </svg>
    </a>

  </div>
  `;

  document.getElementById("site-footer").innerHTML = footerHTML;
  document.getElementById("footerYear").textContent = new Date().getFullYear();

});
