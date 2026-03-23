/* ================================================
   Pumla Matokazi — Portfolio JavaScript (Improved)
   ================================================ */

/* ============================================================
   EMAILJS SETUP — Follow these 3 steps to activate the form:
   ---------------------------------------------------------------
   1. Go to https://www.emailjs.com and create a free account
   2. Add an Email Service (Gmail works great) → copy the Service ID
   3. Create an Email Template with these variables:
        {{from_name}}   {{from_email}}   {{message}}
      Copy the Template ID
   4. Go to Account → API Keys → copy your Public Key
   5. Replace the three placeholder strings below with your real IDs
   ============================================================ */
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';     // e.g. 'abc123XYZ'
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';     // e.g. 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // e.g. 'template_xxxxxxx'

// Initialise EmailJS
if (typeof emailjs !== 'undefined') {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

/* ---- Smooth scroll helper ---- */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ---- Nav: shrink on scroll + mobile toggle ---- */
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---- Scroll-to-top ---- */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});

/* ---- Typewriter effect in hero ---- */
const typedEl = document.querySelector('.typed-text');
const phrases = ['work & scale.', 'solve real problems.', 'run on the cloud.', 'matter.'];
let phraseIdx = 0, charIdx = 0, deleting = false;

function typeWriter() {
  if (!typedEl) return;
  const current = phrases[phraseIdx];

  if (!deleting) {
    typedEl.textContent = current.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeWriter, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeWriter, deleting ? 55 : 90);
}
typeWriter();

/* ---- Animate Skill Bars on Scroll ---- */
const skillSpans = document.querySelectorAll('.skill span');

function animateSkills() {
  const triggerPoint = window.innerHeight * 0.88;
  skillSpans.forEach(span => {
    if (span.getBoundingClientRect().top < triggerPoint) {
      span.style.width = '100%';
    }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

/* ---- Hover-play GIFs for Project Cards ---- */
document.querySelectorAll('.project-card').forEach(card => {
  const img = card.querySelector('.project-gif');
  if (!img) return;
  const gifSrc    = img.src;
  const staticSrc = img.dataset.static || '';
  if (staticSrc) img.src = staticSrc;
  card.addEventListener('mouseenter', () => { img.src = gifSrc; });
  card.addEventListener('mouseleave', () => { if (staticSrc) img.src = staticSrc; });
});

/* ---- Fade-in sections on scroll ---- */
const fadeEls = document.querySelectorAll(
  '.project-card, .timeline-item, .about-text, .skills-wrap, .contact-left, .contact-form-wrap'
);
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => { el.classList.add('fade-hidden'); fadeObserver.observe(el); });

/* ---- Toast helper ---- */
const toast = document.getElementById('toast');
function showToast(msg, type = 'success') {
  toast.textContent = msg;
  toast.className = `show ${type}`;
  setTimeout(() => { toast.className = type; }, 4000);
}

/* ---- Contact form with EmailJS ---- */
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const btnText     = document.getElementById('btnText');
const btnLoading  = document.getElementById('btnLoading');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // If keys aren't set yet, let the user know
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      showToast('⚠ EmailJS not configured yet — see main.js setup notes.', 'error');
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    btnText.style.display    = 'none';
    btnLoading.style.display = 'inline';

    const templateParams = {
      from_name:  document.getElementById('from_name').value.trim(),
      from_email: document.getElementById('from_email').value.trim(),
      message:    document.getElementById('message').value.trim(),
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      showToast('Message sent! I\'ll get back to you soon. ✓', 'success');
      contactForm.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      showToast('Something went wrong. Please email me directly. ✗', 'error');
    } finally {
      submitBtn.disabled = false;
      btnText.style.display    = 'inline';
      btnLoading.style.display = 'none';
    }
  });
}

/* ---- Smooth scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
