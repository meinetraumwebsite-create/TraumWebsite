/* ========================================
   TraumWebsite — Main JavaScript
   ======================================== */

// --- Translations ---
const translations = {
  en: {
    // Nav
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.why': 'Why Me',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Book a Call',

    // Hero
    'hero.badge': 'Freelance Web Designer & Conversion Specialist',
    'hero.title': 'Websites That <span class="highlight">Convert</span> Visitors Into Customers',
    'hero.sub': 'I design and build high-performing landing pages, websites, and conversion strategies that turn your traffic into revenue. No templates. No guesswork. Just results.',
    'hero.cta': 'Start Your Project',
    'hero.cta2': 'See My Work',
    'hero.stat1': 'Projects Delivered',
    'hero.stat2': 'Client Satisfaction',
    'hero.stat3': 'Avg. ROI Increase',
    'hero.stat4': 'Response Time',

    // Services
    'services.label': 'What I Do',
    'services.title': 'Services That <span class="highlight">Drive Growth</span>',
    'services.sub': 'Every service is designed with one goal in mind: growing your business. Here\'s how I can help.',
    'services.s1.title': 'Landing Pages',
    'services.s1.text': 'Custom-built landing pages engineered for one goal: converting your visitors into leads and customers. Every element is strategically placed to drive action.',
    'services.s2.title': 'Website Design',
    'services.s2.text': 'Stunning, professional websites that don\'t just look good — they work. Built with clean code, fast loading times, and your business goals in mind.',
    'services.s3.title': 'Conversion Optimization',
    'services.s3.text': 'Already have traffic but not enough sales? I analyze your funnel, identify friction points, and implement proven strategies to boost your conversion rate.',
    'services.s4.title': 'Copywriting',
    'services.s4.text': 'Words sell. I craft compelling, conversion-focused copy that speaks directly to your audience\'s pain points and moves them to take action.',

    // Portfolio
    'portfolio.label': 'My Work',
    'portfolio.title': 'Selected <span class="highlight">Projects</span>',
    'portfolio.sub': 'Real results for real businesses. Here are some of my recent projects.',
    'portfolio.p1.badge': 'E-Commerce',
    'portfolio.p1.text': 'Complete website overhaul for an organic skincare brand. New design and optimized copy increased online sales by 47% within the first 60 days.',
    'portfolio.p1.metric': 'Sales Increase',
    'portfolio.p2.badge': 'Landing Page',
    'portfolio.p2.text': 'High-converting landing page for a fitness studio chain. Generated 340+ qualified leads in the first month of launch through strategic design and copy.',
    'portfolio.p2.metric': 'Leads in 30 Days',
    'portfolio.p3.badge': 'Corporate Website',
    'portfolio.p3.text': 'Modern corporate website for a SaaS startup. Reduced bounce rate by 35% and increased demo requests by 62% with improved UX and messaging.',
    'portfolio.p3.metric': 'More Demo Requests',

    // Why Me
    'why.label': 'Why Me',
    'why.title': 'Why Businesses <span class="highlight">Choose Me</span>',
    'why.sub': 'I don\'t just build websites — I build growth engines. Here\'s what sets me apart.',
    'why.w1.title': 'Conversion-First Approach',
    'why.w1.text': 'Every design decision is backed by proven conversion principles. Your website won\'t just look good — it will perform.',
    'why.w2.title': 'Fast Delivery',
    'why.w2.text': 'No endless timelines. I deliver quality work within agreed-upon deadlines, every single time. Your project won\'t get stuck in limbo.',
    'why.w3.title': 'Clear Communication',
    'why.w3.text': 'You\'ll always know where your project stands. Regular updates, quick responses, and zero surprises from start to finish.',
    'why.w4.title': 'Measurable Results',
    'why.w4.text': 'I don\'t just build websites — I build business growth tools that deliver ROI you can measure. Data drives every decision.',

    // Testimonials
    'testimonials.label': 'Testimonials',
    'testimonials.title': 'What My Clients <span class="highlight">Say</span>',
    'testimonials.t1.text': '"Working with TraumWebsite was a game-changer for our business. Our new landing page generated more leads in one month than our old website did in six. Professional, fast, and incredibly talented."',
    'testimonials.t1.role': 'Founder, Bloom Botanics',
    'testimonials.t2.text': '"I was skeptical about investing in a new website, but the results speak for themselves. Our online reservations increased by 80% within weeks. Best investment we\'ve made this year."',
    'testimonials.t2.role': 'Owner, Bella Vista Restaurant',
    'testimonials.t3.text': '"The attention to detail is remarkable. Every element on our page has a purpose, and it shows in our numbers. Our conversion rate nearly doubled after the redesign. Highly recommended."',
    'testimonials.t3.role': 'CEO, FitSpace',

    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'Frequently Asked <span class="highlight">Questions</span>',
    'faq.q1.q': 'What does your process look like?',
    'faq.q1.a': 'Every project starts with a strategy call where I learn about your business, goals, and target audience. From there, I create a detailed plan, design the solution, and refine it based on your feedback. You\'re involved at every stage — no surprises.',
    'faq.q2.q': 'How long does a typical project take?',
    'faq.q2.a': 'Most landing pages are delivered within 5–7 business days. Full website projects typically take 2–4 weeks depending on scope and complexity. I\'ll give you a clear timeline upfront during our initial call.',
    'faq.q3.q': 'What are your rates?',
    'faq.q3.a': 'Pricing depends on the scope and complexity of your project. Landing pages start at €497, and full website projects start at €1,497. Book a free consultation to get a custom quote tailored to your needs.',
    'faq.q4.q': 'How many revisions are included?',
    'faq.q4.a': 'Every project includes 2 rounds of revisions at no extra cost. I work closely with you throughout the process to ensure the final result matches your vision — most clients are thrilled after the first draft.',
    'faq.q5.q': 'Can you work with my existing website?',
    'faq.q5.a': 'Absolutely. Whether you need a redesign, conversion optimization, or updated content — I can work with what you have and make it perform significantly better. No need to start from scratch.',
    'faq.q6.q': 'Do you offer ongoing support after launch?',
    'faq.q6.a': 'Yes! I offer optional monthly maintenance and optimization packages. After launch, I can handle updates, monitor performance, and continuously improve your conversion rates so your site keeps delivering results.',

    // CTA
    'cta.title': 'Ready to Transform Your <span class="highlight">Online Presence</span>?',
    'cta.text': 'Stop losing potential customers to a website that doesn\'t convert. Let\'s build something that actually grows your business.',
    'cta.button': 'Get Your Free Consultation',

    // Contact
    'contact.label': 'Get In Touch',
    'contact.title': 'Let\'s Start Your <span class="highlight">Project</span>',
    'contact.sub': 'Tell me about your project, and I\'ll get back to you within 24 hours with a tailored plan.',
    'contact.email.label': 'Email',
    'contact.location.label': 'Location',
    'contact.location.value': 'Remote — Worldwide',
    'contact.response.label': 'Response Time',
    'contact.response.value': 'Within 24 hours',
    'contact.availability': 'Currently accepting new projects',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.service': 'Select a Service',
    'contact.form.service1': 'Landing Page',
    'contact.form.service2': 'Website Design',
    'contact.form.service3': 'Conversion Optimization',
    'contact.form.service4': 'Copywriting',
    'contact.form.budget': 'Budget Range',
    'contact.form.message': 'Tell me about your project...',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Thanks! Your message has been sent successfully.',
    'contact.form.error': 'Something went wrong. Please try again.',

    // Footer
    'footer.tagline': 'Design. Convert. Grow.',
    'footer.nav': 'Navigation',
    'footer.services': 'Services',
    'footer.connect': 'Connect',
    'footer.copy': '&copy; 2026 TraumWebsite. All rights reserved.',
    'footer.privacy': 'Privacy Policy',

    // Legal pages
    'legal.back': 'Back to Homepage',
    'legal.updated': 'Last updated: April 2026',
    'impressum.sub': 'Information pursuant to §5 TMG',
    'privacy.title': 'Privacy Policy',
    'privacy.sub': 'Information on data protection pursuant to GDPR',
  },

  de: {
    // Nav
    'nav.services': 'Leistungen',
    'nav.portfolio': 'Portfolio',
    'nav.why': 'Warum ich',
    'nav.testimonials': 'Kundenstimmen',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Gespräch buchen',

    // Hero
    'hero.badge': 'Freelance Webdesigner & Conversion-Spezialist',
    'hero.title': 'Websites, die Besucher in <span class="highlight">Kunden verwandeln</span>',
    'hero.sub': 'Ich designe und entwickle leistungsstarke Landingpages, Websites und Conversion-Strategien, die Ihren Traffic in Umsatz verwandeln. Keine Templates. Kein Raten. Nur Ergebnisse.',
    'hero.cta': 'Projekt starten',
    'hero.cta2': 'Meine Arbeit ansehen',
    'hero.stat1': 'Projekte geliefert',
    'hero.stat2': 'Kundenzufriedenheit',
    'hero.stat3': 'Ø ROI-Steigerung',
    'hero.stat4': 'Antwortzeit',

    // Services
    'services.label': 'Meine Leistungen',
    'services.title': 'Services, die <span class="highlight">Wachstum treiben</span>',
    'services.sub': 'Jede Leistung ist auf ein Ziel ausgerichtet: Ihr Unternehmen wachsen zu lassen. So kann ich Ihnen helfen.',
    'services.s1.title': 'Landingpages',
    'services.s1.text': 'Maßgeschneiderte Landingpages mit einem Ziel: Ihre Besucher in Leads und Kunden zu verwandeln. Jedes Element ist strategisch platziert, um Aktionen auszulösen.',
    'services.s2.title': 'Webdesign',
    'services.s2.text': 'Beeindruckende, professionelle Websites, die nicht nur gut aussehen — sie funktionieren. Gebaut mit sauberem Code, schnellen Ladezeiten und Ihren Geschäftszielen im Fokus.',
    'services.s3.title': 'Conversion-Optimierung',
    'services.s3.text': 'Sie haben Traffic, aber zu wenig Verkäufe? Ich analysiere Ihren Funnel, identifiziere Reibungspunkte und setze bewährte Strategien um, um Ihre Conversion-Rate zu steigern.',
    'services.s4.title': 'Copywriting',
    'services.s4.text': 'Worte verkaufen. Ich schreibe überzeugende, conversion-fokussierte Texte, die direkt die Schmerzpunkte Ihrer Zielgruppe ansprechen und zum Handeln bewegen.',

    // Portfolio
    'portfolio.label': 'Meine Arbeit',
    'portfolio.title': 'Ausgewählte <span class="highlight">Projekte</span>',
    'portfolio.sub': 'Echte Ergebnisse für echte Unternehmen. Hier sind einige meiner letzten Projekte.',
    'portfolio.p1.badge': 'E-Commerce',
    'portfolio.p1.text': 'Kompletter Website-Relaunch für eine Bio-Hautpflegemarke. Das neue Design und optimierte Texte steigerten den Online-Umsatz innerhalb von 60 Tagen um 47%.',
    'portfolio.p1.metric': 'Umsatzsteigerung',
    'portfolio.p2.badge': 'Landingpage',
    'portfolio.p2.text': 'Hochkonvertierende Landingpage für eine Fitnessstudio-Kette. 340+ qualifizierte Leads im ersten Monat durch strategisches Design und überzeugende Texte.',
    'portfolio.p2.metric': 'Leads in 30 Tagen',
    'portfolio.p3.badge': 'Unternehmenswebsite',
    'portfolio.p3.text': 'Moderne Unternehmenswebsite für ein SaaS-Startup. Bounce-Rate um 35% reduziert und Demo-Anfragen um 62% gesteigert durch verbesserte UX und Messaging.',
    'portfolio.p3.metric': 'Mehr Demo-Anfragen',

    // Why Me
    'why.label': 'Warum ich',
    'why.title': 'Warum Unternehmen <span class="highlight">mich wählen</span>',
    'why.sub': 'Ich baue nicht nur Websites — ich baue Wachstumsmotoren. Das unterscheidet mich.',
    'why.w1.title': 'Conversion-First-Ansatz',
    'why.w1.text': 'Jede Designentscheidung basiert auf bewährten Conversion-Prinzipien. Ihre Website wird nicht nur gut aussehen — sie wird performen.',
    'why.w2.title': 'Schnelle Lieferung',
    'why.w2.text': 'Keine endlosen Zeitpläne. Ich liefere Qualitätsarbeit innerhalb vereinbarter Fristen, jedes einzelne Mal. Ihr Projekt bleibt nicht in der Schwebe.',
    'why.w3.title': 'Klare Kommunikation',
    'why.w3.text': 'Sie wissen immer, wo Ihr Projekt steht. Regelmäßige Updates, schnelle Antworten und null Überraschungen von Anfang bis Ende.',
    'why.w4.title': 'Messbare Ergebnisse',
    'why.w4.text': 'Ich baue nicht nur Websites — ich baue Wachstumswerkzeuge, die einen messbaren ROI liefern. Daten treiben jede Entscheidung.',

    // Testimonials
    'testimonials.label': 'Kundenstimmen',
    'testimonials.title': 'Was meine Kunden <span class="highlight">sagen</span>',
    'testimonials.t1.text': '„Die Zusammenarbeit mit TraumWebsite war ein Gamechanger für unser Geschäft. Unsere neue Landingpage hat in einem Monat mehr Leads generiert als unsere alte Website in sechs. Professionell, schnell und unglaublich talentiert."',
    'testimonials.t1.role': 'Gründerin, Bloom Botanics',
    'testimonials.t2.text': '„Ich war skeptisch, in eine neue Website zu investieren, aber die Ergebnisse sprechen für sich. Unsere Online-Reservierungen stiegen innerhalb von Wochen um 80%. Die beste Investition, die wir dieses Jahr getätigt haben."',
    'testimonials.t2.role': 'Inhaber, Bella Vista Restaurant',
    'testimonials.t3.text': '„Die Liebe zum Detail ist bemerkenswert. Jedes Element auf unserer Seite hat einen Zweck, und das zeigt sich in unseren Zahlen. Unsere Conversion-Rate hat sich nach dem Redesign fast verdoppelt. Sehr empfehlenswert."',
    'testimonials.t3.role': 'CEO, FitSpace',

    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'Häufig gestellte <span class="highlight">Fragen</span>',
    'faq.q1.q': 'Wie sieht Ihr Prozess aus?',
    'faq.q1.a': 'Jedes Projekt beginnt mit einem Strategiegespräch, in dem ich Ihr Unternehmen, Ihre Ziele und Ihre Zielgruppe kennenlerne. Danach erstelle ich einen detaillierten Plan, designe die Lösung und verfeinere sie basierend auf Ihrem Feedback. Sie sind in jeder Phase eingebunden — keine Überraschungen.',
    'faq.q2.q': 'Wie lange dauert ein typisches Projekt?',
    'faq.q2.a': 'Die meisten Landingpages werden innerhalb von 5–7 Werktagen geliefert. Komplette Website-Projekte dauern in der Regel 2–4 Wochen, je nach Umfang und Komplexität. Ich gebe Ihnen beim Erstgespräch einen klaren Zeitplan.',
    'faq.q3.q': 'Was sind Ihre Preise?',
    'faq.q3.a': 'Die Preise hängen vom Umfang und der Komplexität Ihres Projekts ab. Landingpages beginnen ab 497 €, komplette Website-Projekte ab 1.497 €. Buchen Sie eine kostenlose Beratung für ein individuelles Angebot.',
    'faq.q4.q': 'Wie viele Revisionen sind enthalten?',
    'faq.q4.a': 'Jedes Projekt beinhaltet 2 Revisionsrunden ohne Zusatzkosten. Ich arbeite eng mit Ihnen zusammen, um sicherzustellen, dass das Endergebnis Ihrer Vision entspricht — die meisten Kunden sind schon nach dem ersten Entwurf begeistert.',
    'faq.q5.q': 'Können Sie mit meiner bestehenden Website arbeiten?',
    'faq.q5.a': 'Absolut. Ob Redesign, Conversion-Optimierung oder aktualisierte Inhalte — ich kann mit dem arbeiten, was Sie haben, und es deutlich leistungsfähiger machen. Kein Neustart nötig.',
    'faq.q6.q': 'Bieten Sie nach dem Launch Support an?',
    'faq.q6.a': 'Ja! Ich biete optionale monatliche Wartungs- und Optimierungspakete an. Nach dem Launch kann ich Updates durchführen, die Performance überwachen und Ihre Conversion-Rates kontinuierlich verbessern.',

    // CTA
    'cta.title': 'Bereit, Ihre <span class="highlight">Online-Präsenz</span> zu transformieren?',
    'cta.text': 'Verlieren Sie keine potenziellen Kunden mehr durch eine Website, die nicht konvertiert. Lassen Sie uns etwas bauen, das Ihr Geschäft wirklich wachsen lässt.',
    'cta.button': 'Kostenlose Beratung sichern',

    // Contact
    'contact.label': 'Kontakt',
    'contact.title': 'Starten wir Ihr <span class="highlight">Projekt</span>',
    'contact.sub': 'Erzählen Sie mir von Ihrem Projekt, und ich melde mich innerhalb von 24 Stunden mit einem maßgeschneiderten Plan.',
    'contact.email.label': 'E-Mail',
    'contact.location.label': 'Standort',
    'contact.location.value': 'Remote — Weltweit',
    'contact.response.label': 'Antwortzeit',
    'contact.response.value': 'Innerhalb von 24 Stunden',
    'contact.availability': 'Aktuell nehme ich neue Projekte an',
    'contact.form.name': 'Ihr Name',
    'contact.form.email': 'Ihre E-Mail',
    'contact.form.service': 'Service auswählen',
    'contact.form.service1': 'Landingpage',
    'contact.form.service2': 'Webdesign',
    'contact.form.service3': 'Conversion-Optimierung',
    'contact.form.service4': 'Copywriting',
    'contact.form.budget': 'Budgetrahmen',
    'contact.form.message': 'Erzählen Sie mir von Ihrem Projekt...',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet...',
    'contact.form.success': 'Danke! Ihre Nachricht wurde erfolgreich gesendet.',
    'contact.form.error': 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',

    // Footer
    'footer.tagline': 'Design. Konvertierung. Wachstum.',
    'footer.nav': 'Navigation',
    'footer.services': 'Leistungen',
    'footer.connect': 'Kontakt',
    'footer.copy': '&copy; 2026 TraumWebsite. Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutzerklärung',

    // Legal pages
    'legal.back': 'Zurück zur Startseite',
    'legal.updated': 'Stand: April 2026',
    'impressum.sub': 'Angaben gemäß §5 TMG',
    'privacy.title': 'Datenschutzerklärung',
    'privacy.sub': 'Informationen zum Datenschutz gemäß DSGVO',
  }
};


// --- State ---
let currentLang = document.documentElement.lang || 'en';


// --- Language Toggle ---
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update HTML content (for elements with markup like <span>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update toggle UI
  const toggle = document.getElementById('langToggle');
  toggle.setAttribute('data-active', lang);
  toggle.querySelectorAll('.lang-toggle__option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  // Toggle legal page content blocks (DE/EN full-text versions)
  document.querySelectorAll('.legal-content[data-lang]').forEach(block => {
    block.style.display = block.getAttribute('data-lang') === lang ? '' : 'none';
  });

  // Update meta
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = lang === 'de'
      ? 'Ich designe hochkonvertierende Websites und Landingpages für Unternehmen, die echte Ergebnisse wollen. Webdesign, Conversion-Optimierung und Copywriting.'
      : 'I design high-converting websites and landing pages for businesses that want real results. Web design, conversion optimization, and copywriting.';
  }

  // Update page title
  document.title = lang === 'de'
    ? 'TraumWebsite — Webdesign & Conversion-Optimierung'
    : 'TraumWebsite — Web Design & Conversion Optimization';
}

// Set initial toggle state based on page language
const initToggle = document.getElementById('langToggle');
if (currentLang === 'de') {
  initToggle.setAttribute('data-active', 'de');
}

initToggle.addEventListener('click', (e) => {
  const option = e.target.closest('.lang-toggle__option');
  if (option) {
    const lang = option.getAttribute('data-lang');
    if (lang && lang !== currentLang) {
      setLanguage(lang);
    }
  }
});


// --- Mobile Menu ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});


// --- Sticky Nav ---
const nav = document.getElementById('nav');

function handleScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();


// --- Smooth Scroll ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = nav.offsetHeight + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


// --- Scroll Reveal ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});


// --- FAQ Accordion ---
document.querySelectorAll('.faq-item__question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const answer = item.querySelector('.faq-item__answer');
    const isActive = item.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.faq-item.active').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('active');
        openItem.querySelector('.faq-item__answer').style.maxHeight = null;
      }
    });

    // Toggle current
    item.classList.toggle('active', !isActive);
    answer.style.maxHeight = isActive ? null : answer.scrollHeight + 'px';
  });
});


// --- Contact Form (Formspree AJAX) ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const submitBtn = document.getElementById('formSubmitBtn');
  const successMsg = document.getElementById('formSuccess');
  const errorMsg = document.getElementById('formError');
  const emailField = document.getElementById('emailField');
  const replyToField = document.getElementById('replyToField');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Copy email value into the hidden _replyto field
    replyToField.value = emailField.value;

    // Store original button text and show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = translations[currentLang]['contact.form.sending'];
    submitBtn.disabled = true;
    submitBtn.classList.add('btn--loading');

    // Hide any previous messages
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Success
        contactForm.reset();
        successMsg.style.display = 'flex';
        errorMsg.style.display = 'none';

        // Auto-hide success message after 8 seconds
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 8000);
      } else {
        // Server returned an error
        errorMsg.style.display = 'flex';
        successMsg.style.display = 'none';
      }
    } catch (err) {
      // Network or fetch error
      errorMsg.style.display = 'flex';
      successMsg.style.display = 'none';
    }

    // Restore button state
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    submitBtn.classList.remove('btn--loading');
  });
}
