/* ============================================================
   AAYUSH ADHIKARI — PORTFOLIO MAIN SCRIPT
   File: js/main.js
   ============================================================ */

/* ──────────────────────────────────────────
   EMAILJS CONFIGURATION
   ──────────────────────────────────────────
   HOW TO SET UP:
   1. Go to https://emailjs.com and sign up (free)
   2. Add a Gmail service → copy the Service ID
   3. Create an email template with these variables:
        {{from_name}}  {{reply_to}}  {{subject}}  {{message}}
      Copy the Template ID
   4. Go to Account → API Keys → copy your Public Key
   5. Replace the 3 values below
   ────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY  = '___JdSkoqsA_VMTIo';    // ← paste here
const EMAILJS_SERVICE_ID  = 'service_1o7t5bo';    // ← paste here
const EMAILJS_TEMPLATE_ID = 'template_94s0v9m';   // ← paste here

emailjs.init(EMAILJS_PUBLIC_KEY);

/* ──────────── SEND EMAIL ──────────── */
function sendEmail(e) {
  e.preventDefault();
  const btn    = document.getElementById('submitBtn');
  const status = document.getElementById('form-status');

  btn.textContent = 'Sending...';
  btn.disabled    = true;
  status.style.display = 'none';

  const params = {
    from_name: document.getElementById('from_name').value,
    reply_to:  document.getElementById('reply_to').value,
    subject:   document.getElementById('subject').value,
    message:   document.getElementById('message').value,
  };

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
    .then(() => {
      status.textContent  = '✓  Message sent! I\'ll get back to you soon.';
      status.className    = 'success';
      status.style.display = 'block';
      document.getElementById('contactForm').reset();
      btn.textContent = 'Send Message →';
      btn.disabled    = false;
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      status.textContent   = '✕  Something went wrong. Please email me directly.';
      status.className     = 'error';
      status.style.display = 'block';
      btn.textContent = 'Send Message →';
      btn.disabled    = false;
    });
}

/* ──────────── PHOTO CAROUSEL ──────────── */
let currentPhoto = 0;
const totalPhotos = 3;
let autoTimer;

function goToPhoto(index) {
  const frames = document.querySelectorAll('.photo-frame');
  const dots   = document.querySelectorAll('.photo-dot');
  frames[currentPhoto].style.opacity   = '0';
  frames[currentPhoto].style.transform = 'scale(0.97)';
  currentPhoto = index;
  frames[currentPhoto].style.opacity   = '1';
  frames[currentPhoto].style.transform = 'scale(1)';
  dots.forEach((d, i) => d.classList.toggle('active', i === currentPhoto));
}

function nextPhoto() {
  goToPhoto((currentPhoto + 1) % totalPhotos);
}

document.getElementById('photoCarousel').addEventListener('click', function (e) {
  if (!e.target.classList.contains('photo-dot')) {
    clearInterval(autoTimer);
    nextPhoto();
    autoTimer = setInterval(nextPhoto, 4000);
  }
});

autoTimer = setInterval(nextPhoto, 4000);

/* ──────────── SCROLL REVEAL ──────────── */
const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

/* ──────────── NAV SCROLL EFFECT ──────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ──────────── MOBILE MENU ──────────── */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* ──────────── HERO ENTRANCE ANIMATION ──────────── */
window.addEventListener('load', () => {
  const heroEls = document.querySelectorAll('.hero-tag, .hero-name, .hero-title, .hero-desc, .hero-btns');
  heroEls.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.7s ${i * 0.12}s ease, transform 0.7s ${i * 0.12}s ease`;
    setTimeout(() => {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });

  const visual = document.querySelector('.hero-visual');
  visual.style.opacity   = '0';
  visual.style.transform = 'translateX(20px)';
  visual.style.transition = 'opacity 0.9s 0.3s ease, transform 0.9s 0.3s ease';
  setTimeout(() => {
    visual.style.opacity   = '1';
    visual.style.transform = 'translateX(0)';
  }, 100);
});
