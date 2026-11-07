(() => {
  const cfg = window.SAIXORA_CONFIG || {};
  const path = window.location.pathname.split("/").pop() || "index.html";
  const page = document.body.dataset.page || path.replace(/\.html$/, "") || "home";

  const icons = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 20 6v5c0 5.1-3.4 8.6-8 10-4.6-1.4-8-4.9-8-10V6l8-3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m8.5 12 2.2 2.2 4.8-5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 21h8m-4-4v4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2.5" stroke="currentColor" stroke-width="1.7"/><path d="M10 18.5h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" stroke="currentColor" stroke-width="1.5"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-11-4 14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 17v3h16v-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6L12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" fill="currentColor"/></svg>'
  };

  const navItems = [
    ["Home", "index.html", "home"],
    ["Product", "product.html", "product"],
    ["Benefits", "benefits.html", "benefits"],
    ["Downloads", "downloads.html", "downloads"],
    ["Company", "about.html", "about"]
  ];
  const navLink = ([label, url, key]) => `<a href="${url}" ${page === key ? 'aria-current="page"' : ""}>${label}</a>`;

  const header = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="announcement"><strong>SAIXORA Shield</strong> · A connected product family from SAIXORA Technology</div>
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="SAIXORA Technology home">
          <span class="brand-mark"><img src="assets/favicon.png" alt="" width="38" height="38"></span>
          <span class="brand-copy"><span class="brand-name">SAIXORA</span><span class="brand-sub">Technology</span></span>
        </a>
        <nav class="nav-links" aria-label="Main navigation">
          ${navItems.map(navLink).join("")}
          <a href="contact.html" ${page === "contact" ? 'aria-current="page"' : ""}>Contact</a>
          <a class="nav-cta" href="downloads.html">Get the apps ${icons.arrow}</a>
        </nav>
        <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-navigation"><span></span><span></span></button>
      </div>
      <nav class="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
        <div class="mobile-nav-inner">
          ${navItems.map(navLink).join("")}
          <a href="owner.html">Owner / Founder</a>
          <a href="contact.html">Contact</a>
          <a href="downloads.html">Download SAIXORA Shield ${icons.arrow}</a>
        </div>
      </nav>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a class="brand" href="index.html">
              <span class="brand-mark"><img src="assets/favicon.png" alt="" width="38" height="38"></span>
              <span class="brand-copy"><span class="brand-name">SAIXORA</span><span class="brand-sub">Technology</span></span>
            </a>
            <p>Thoughtfully built software experiences. SAIXORA Shield is the product ecosystem from SAIXORA Technology.</p>
            <span class="pill">${cfg.tagline || "You Think. I Build."}</span>
          </div>
          <div class="footer-col"><h3>Explore</h3><a href="product.html">SAIXORA Shield</a><a href="benefits.html">Product Benefits</a><a href="downloads.html">Downloads</a><a href="about.html">About the Company</a></div>
          <div class="footer-col"><h3>Company</h3><a href="owner.html">Owner / Founder</a><a href="contact.html">Contact</a><a href="about.html#vision">Vision & Mission</a><a href="${cfg.ownerPortfolio || "https://remonislam1927-art.github.io/portfolio-website/"}" target="_blank" rel="noopener noreferrer">Founder Portfolio ↗</a></div>
          <div class="footer-col"><h3>Legal</h3><a href="terms.html">Terms & Conditions</a><a href="privacy.html">Privacy Policy</a><a href="license.html">Software License</a><a href="copyright.html">Copyright & Notices</a></div>
        </div>
        <div class="footer-bottom">
          <span>© <span data-year></span> SAIXORA Technology. All rights reserved.</span>
          <div class="footer-legal"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="copyright.html">Copyright</a></div>
        </div>
      </div>
    </footer>
    <div class="toast" role="status" aria-live="polite"></div>`;

  const headerMount = document.querySelector("[data-site-header]");
  const footerMount = document.querySelector("[data-site-footer]");
  if (headerMount) headerMount.innerHTML = header;
  if (footerMount) footerMount.innerHTML = footer;

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  
  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });
    mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(el => observer.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add("visible"));
  }

  const toast = document.querySelector(".toast");
  let toastTimer;
  const showToast = message => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 5000);
  };

  
  document.querySelectorAll("[data-download]").forEach(button => {
    const key = button.dataset.download;
    const release = cfg.releases && cfg.releases[key];
    if (!release) return;
    if (release.version && release.version !== "Add version") {
      const versionTarget = document.querySelector(`[data-version="${key}"]`);
      if (versionTarget) versionTarget.textContent = release.version;
    }
    button.addEventListener("click", event => {
      if (!release.ready) {
        event.preventDefault();
        showToast(`${release.label || "This release"} is listed as available, but its package link is not configured yet. Add the genuine file and update js/config.js to enable this download.`);
      }
    });
    if (release.url) button.setAttribute("href", release.url);
    if (release.ready) button.removeAttribute("aria-disabled");
    else button.setAttribute("aria-disabled", "true");
  });

  
  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      const email = (cfg.supportEmail || "").trim();
      if (!email) {
        showToast("Contact email is not configured yet. Add your official address in js/config.js before publishing.");
        return;
      }
      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const sender = String(formData.get("email") || "").trim();
      const subject = String(formData.get("subject") || "Website enquiry").trim();
      const message = String(formData.get("message") || "").trim();
      const body = `Name: ${name}\nReply email: ${sender}\n\n${message}`;
      window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }


  if (cfg.websiteUrl) {
    const baseUrl = cfg.websiteUrl.endsWith("/") ? cfg.websiteUrl : cfg.websiteUrl + "/";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = new URL(path, baseUrl).href;
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = canonical.href;
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.content = new URL(ogImage.content, baseUrl).href;
  }
})();
