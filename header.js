document.addEventListener("DOMContentLoaded", function () {

  const headerHTML = `
  <style>
    html, body {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
      margin: 0;
    }

    /* ================= HEADER ================= */
    .header {
      position: sticky;
      top: 0;
      z-index: 9999;
      background: rgba(11, 28, 45, 0.96);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* ================= LOGO ================= */
    .logo {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #ffffff;
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    .logo-dot {
      color: #3b82f6;
      margin-left: 2px;
      font-weight: 700;
    }

    /* ================= NAV ================= */
    .nav {
      display: flex;
      align-items: center;
      gap: 26px;
    }

    .nav a {
      font-size: 14.5px;
      font-weight: 500;
      letter-spacing: 0.02em;
      color: #b9c7d6;
      text-decoration: none;
      position: relative;
      transition: color .25s ease;
    }

    .nav a:hover {
      color: #ffffff;
    }

    /* subtle underline on hover */
    .nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 0;
      height: 2px;
      background: #3b82f6;
      transition: width .25s ease;
    }

    .nav a:hover::after {
      width: 100%;
    }

    /* CTA */
    .nav a.cta {
      padding: 9px 16px;
      border-radius: 8px;
      background: #3b82f6;
      color: #ffffff;
      font-size: 13.5px;
      letter-spacing: 0.04em;
    }

    .nav a.cta::after {
      display: none;
    }

    .nav a.cta:hover {
      background: #2563eb;
    }

    /* ================= TOGGLE ================= */
    .toggle {
      display: none;
      font-size: 26px;
      background: none;
      border: none;
      color: #ffffff;
      cursor: pointer;
    }

    /* ================= MOBILE ================= */
    @media (max-width: 768px) {

      .toggle {
        display: block;
      }

      .nav {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #0b1c2d;
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        display: none;
      }

      .nav.show {
        display: flex;
      }

      .nav a {
        width: 100%;
        padding: 18px 20px;
        border-top: 1px solid rgba(255,255,255,0.08);
      }

      .nav a::after {
        display: none;
      }

      .nav a.cta {
        margin: 16px 20px;
        width: calc(100% - 40px);
        text-align: center;
      }
    }
  </style>

  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="logo">
        Vasavi<span class="logo-dot">.</span>
      </a>

      <nav class="nav" id="navMenu">
        <a href="index.html">Home</a>
        <a href="service.html">Services</a>
        <a href="work.html">Work</a>
        <a href="case.html">Case Studies</a>
        <a href="process.html">Process</a>
        <a href="about.html">About</a>
        <a href="contact.html" class="cta">Contact</a>
      </nav>

      <button class="toggle" id="menuToggle">☰</button>
    </div>
  </header>
  `;

  document.getElementById("site-header").innerHTML = headerHTML;

  document.getElementById("menuToggle").onclick = function () {
    document.getElementById("navMenu").classList.toggle("show");
  };

});
