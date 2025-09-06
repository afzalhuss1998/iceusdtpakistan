document.addEventListener('DOMContentLoaded', () => {
  // --- Language switcher ---
  const translations = {
    en: {
      'nav.how': 'How to Register',
      'nav.benefits': 'Benefits',
      'nav.getStarted': 'Get Started',
      'hero.title': 'Play 500+ Games. Deposit in <span style="background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;color:transparent">USDT</span>. Withdraw Fast.',
      'hero.tagline': 'ICE USDT is an international gaming platform serving Pakistan and players worldwide—crypto-first deposits, quick payouts, and 24/7 access.',
      'kpi.games': 'Games available',
      'kpi.live': 'Live platform',
      'cta.start': 'Registered Now',
      'cta.whatsapp': 'Get ID on WhatsApp',
      'badge.hub': "Pakistan's Gaming Hub",
      'pill.optimized': 'Optimized for Pakistan',
      'pill.worldwide': 'Worldwide Access',
      'pill.multi': 'Multi-currency Support',
      'pill.usdt': 'USDT Deposits',
      'benefits.title': 'Why ICE USDT?',
      'benefits.points.fast': 'Fast deposits & withdrawals via USDT—streamlined from wallet to game.',
      'benefits.points.nofees': 'No hidden platform fees on deposits and withdrawals from our side.\nNetwork fees may apply.',
      'benefits.points.crypto': 'Crypto-native experience designed to minimize traditional banking friction.',
      'benefits.points.games': '500+ games across multiple genres—casual, cards, strategy, and more.',
      'benefits.points.intl': 'International platform with global access and multi-currency payments.',
      'security.title': 'Security & Reliability',
      'security.p1': 'Two-factor authentication (2FA) for account protection.',
      'security.p2': 'Wallet-to-wallet flows help reduce intermediaries.',
      'security.p3': 'Transparent status tracking for deposits & withdrawals.',
      'security.p4': 'Support team available for quick assistance.',
      'how.title': 'How to Register',
      'how.step1.title': 'Self-Registration',
      'how.step1.desc': 'Create your account on our website. Verify your email, enable 2FA, and set a strong password.',
      'how.step2.title': 'Get an ID via WhatsApp',
      'how.step2.desc': 'Prefer help? Message us on WhatsApp and we’ll set up your player ID for you.',
      'how.step2.btn': 'Chat on WhatsApp',
      'how.step3.title': 'Deposit with USDT',
      'how.step3.desc': 'Send USDT to your unique deposit address. Funds typically reflect within minutes after network confirmation.',
      'how.step4.title': 'Play 500+ Games',
      'how.step4.desc': 'Jump straight into your favorite titles. Track wins, bonuses, and balances in your dashboard.',
      'quick.title': 'Quick Highlights',
      'quick.p1': 'USDT deposits—no bank branch required',
      'quick.p2': 'Fast withdrawals with status tracking',
      'quick.p3': 'No extra platform charges (network fees may apply)',
      'quick.p4': 'Global access & multi-currency support',
      'quick.p5': '500+ games, new titles added regularly',
      'faq.title': 'FAQ',
      'faq.q1': 'Is ICE USDT available in Pakistan?',
      'faq.a1': 'Yes. The platform serves players in Pakistan and many other countries, subject to local laws.',
      'faq.q2': 'Are there any hidden charges?',
      'faq.a2': 'We don’t add extra platform fees on deposits/withdrawals. Standard blockchain/network fees may apply.',
      'faq.q3': 'How fast are withdrawals?',
      'faq.a3': 'Most withdrawals complete within minutes after approval and network confirmation.',
      'faq.q4': 'Do I need to consider taxes?',
      'faq.a4': 'Tax rules vary by country. Please consult a qualified advisor regarding your obligations.',
      'faq.disclaimer': 'Important: Use of the platform is subject to your local regulations. By using ICE USDT, you agree to follow all applicable laws. We do not guarantee outcomes, risk elimination, or regulatory determinations in any jurisdiction.',
      'cta.readyTitle': 'Ready to Play?',
      'cta.readyDesc': 'Create your account in minutes or message us for a WhatsApp-assisted setup.',
      'cta.create': 'Create Account',
      'footer.terms': 'Terms',
      'footer.privacy': 'Privacy',
      'footer.support': 'Support'
    },
    ur: {
      'nav.how': 'رجسٹر کیسے کریں',
      'nav.benefits': 'فوائد',
      'nav.getStarted': 'شروع کریں',
      'hero.title': '500+ گیمز کھیلیں۔ <span style="background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;color:transparent">USDT</span> میں جمع کریں۔ تیزی سے نکلوائیں۔',
      'hero.tagline': 'ICE USDT ایک بین الاقوامی گیمنگ پلیٹ فارم ہے جو پاکستان اور دنیا بھر کے کھلاڑیوں کو سروس دیتا ہے—کرپٹو ڈپازٹ، تیز ادائیگیاں، اور 24/7 رسائی۔',
      'kpi.games': 'دستیاب گیمز',
      'kpi.live': 'لائیو پلیٹ فارم',
      'cta.start': 'اب رجسٹر کریں',
      'cta.whatsapp': 'واٹس ایپ پر آئی ڈی حاصل کریں',
      'badge.hub': 'پاکستان کی گیمنگ ہب',
      'pill.optimized': 'پاکستان کے لیے موزوں',
      'pill.worldwide': 'دنیا بھر میں رسائی',
      'pill.multi': 'کثیر کرنسی سپورٹ',
      'pill.usdt': 'USDT ڈپازٹس',
      'benefits.title': 'ICE USDT کیوں؟',
      'benefits.points.fast': 'USDT کے ذریعے تیز ڈپازٹس اور ودڈرال — براہِ راست والیٹ سے گیم تک۔',
      'benefits.points.nofees': 'ہماری جانب سے ڈپازٹ/ودڈرال پر کوئی اضافی پلیٹ فارم فیس نہیں۔\nنیٹ ورک فیس لاگو ہوسکتی ہے۔',
      'benefits.points.crypto': 'کرپٹو نیٹو تجربہ جو روایتی بینکنگ رکاوٹوں کو کم کرتا ہے۔',
      'benefits.points.games': '500+ گیمز مختلف اصناف میں — کیژول، کارڈز، اسٹریٹیجی وغیرہ۔',
      'benefits.points.intl': 'بین الاقوامی پلیٹ فارم، عالمی رسائی اور کثیر کرنسی ادائیگیاں۔',
      'security.title': 'سیکیورٹی اور قابلِ اعتماد',
      'security.p1': 'ٹو فیکٹر آتھنٹیکیشن (2FA) سے اکاؤنٹ کی حفاظت۔',
      'security.p2': 'والیٹ ٹو والیٹ فلو سے درمیانی مراحل میں کمی۔',
      'security.p3': 'ڈپازٹس اور ودڈرالز کے لیے شفاف اسٹیٹس ٹریکنگ۔',
      'security.p4': 'فوری مدد کے لیے سپورٹ ٹیم دستیاب۔',
      'how.title': 'رجسٹر کرنے کا طریقہ',
      'how.step1.title': 'خود رجسٹریشن',
      'how.step1.desc': 'ویب سائٹ پر اکاؤنٹ بنائیں، ای میل ویری فائی کریں، 2FA فعال کریں اور مضبوط پاس ورڈ سیٹ کریں۔',
      'how.step2.title': 'واٹس ایپ کے ذریعے آئی ڈی حاصل کریں',
      'how.step2.desc': 'مدد درکار ہے؟ ہمیں واٹس ایپ پر میسیج کریں، ہم آپ کی پلیئر آئی ڈی بنا دیں گے۔',
      'how.step2.btn': 'واٹس ایپ پر چیٹ کریں',
      'how.step3.title': 'USDT سے ڈپازٹ کریں',
      'how.step3.desc': 'اپنے منفرد ڈپازٹ ایڈریس پر USDT بھیجیں۔ نیٹ ورک کنفرمیشن کے بعد چند منٹ میں رقم ظاہر ہو جاتی ہے۔',
      'how.step4.title': '500+ گیمز کھیلیں',
      'how.step4.desc': 'اپنی پسندیدہ ٹائٹلز میں فوراً کھیلیں۔ ڈیش بورڈ میں جیت، بونس اور بیلنس دیکھیں۔',
      'quick.title': 'اہم نمایاں خصوصیات',
      'quick.p1': 'USDT ڈپازٹ — بینک برانچ کی ضرورت نہیں',
      'quick.p2': 'اسٹیٹس ٹریکنگ کے ساتھ تیز ودڈرال',
      'quick.p3': 'کوئی اضافی پلیٹ فارم چارجز نہیں (نیٹ ورک فیس لاگو ہوسکتی ہے)',
      'quick.p4': 'عالمی رسائی اور کثیر کرنسی سپورٹ',
      'quick.p5': '500+ گیمز، باقاعدہ نئے ٹائٹلز شامل',
      'faq.title': 'اکثر پوچھے جانے والے سوالات',
      'faq.q1': 'کیا ICE USDT پاکستان میں دستیاب ہے؟',
      'faq.a1': 'جی ہاں، پلیٹ فارم پاکستان سمیت کئی ممالک میں قانون کے مطابق دستیاب ہے۔',
      'faq.q2': 'کیا کوئی خفیہ چارجز ہیں؟',
      'faq.a2': 'ہم ڈپازٹ/ودڈرال پر اضافی پلیٹ فارم فیس نہیں لیتے۔ معیاری بلاک چین/نیٹ ورک فیس لاگو ہوسکتی ہے۔',
      'faq.q3': 'ودڈرال کتنی جلدی ہوتا ہے؟',
      'faq.a3': 'منظوری اور نیٹ ورک کنفرمیشن کے بعد اکثر ودڈرال چند منٹ میں مکمل ہو جاتے ہیں۔',
      'faq.q4': 'کیا ٹیکس کا خیال رکھنا ہوگا؟',
      'faq.a4': 'ٹیکس قوانین ملک کے لحاظ سے مختلف ہوتے ہیں۔ براہِ کرم مستند مشیر سے رہنمائی حاصل کریں۔',
      'faq.disclaimer': 'اہم: پلیٹ فارم کا استعمال آپ کے مقامی قوانین کے تابع ہے۔ ICE USDT استعمال کر کے آپ متعلقہ قوانین پر عمل کرنے کے پابند ہیں۔ ہم کسی بھی نتائج، رسک کے خاتمے یا کسی دائرہ اختیار میں ریگولیٹری فیصلوں کی ضمانت نہیں دیتے۔',
      'cta.readyTitle': 'کھیلنے کے لیے تیار؟',
      'cta.readyDesc': 'اکاؤنٹ چند منٹ میں بنائیں یا واٹس ایپ پر رابطہ کریں تاکہ سیٹ اپ میں مدد مل سکے۔',
      'cta.create': 'اکاؤنٹ بنائیں',
      'footer.terms': 'شرائط',
      'footer.privacy': 'رازداری',
      'footer.support': 'سپورٹ'
    }
  };

  function setLang(lang) {
    const dict = translations[lang] || translations.en;
    // Plain text replacements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    // HTML replacements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) el.innerHTML = dict[key];
    });
    // Toggle active state on buttons
    const enBtn = document.getElementById('langEn');
    const urBtn = document.getElementById('langUr');
    if (enBtn && urBtn) {
      enBtn.classList.toggle('active', lang === 'en');
      urBtn.classList.toggle('active', lang === 'ur');
    }
    try { localStorage.setItem('lang', lang); } catch {}
    document.documentElement.setAttribute('lang', lang === 'ur' ? 'ur' : 'en');
    document.documentElement.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
  }

  // Init language
  let initialLang = 'ur';
  try { initialLang = localStorage.getItem('lang') || 'ur'; } catch {}
  setLang(initialLang);

  const enBtn = document.getElementById('langEn');
  const urBtn = document.getElementById('langUr');
  if (enBtn) enBtn.addEventListener('click', () => setLang('en'));
  if (urBtn) urBtn.addEventListener('click', () => setLang('ur'));
  // Mobile menu toggle
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const visible = mobileMenu.style.display === 'block';
      mobileMenu.style.display = visible ? 'none' : 'block';
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const open = item.classList.contains('open');
      // Close others
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  const onScroll = () => {
    if (!backToTop) return;
    const show = window.scrollY > 400;
    backToTop.classList.toggle('show', show);
  };

  // throttle with rAF
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Bonus countdown (24h rolling)
  const countdownEl = document.getElementById('bonusCountdown');
  if (countdownEl) {
    const startCountdown = (durationMs) => {
      const end = Date.now() + durationMs;
      const tick = () => {
        let diff = end - Date.now();
        if (diff <= 0) {
          // Restart countdown
          diff = 0;
        }
        const totalSeconds = Math.max(0, Math.floor(diff / 1000));
        const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        countdownEl.textContent = `${hrs}:${mins}:${secs}`;
        if (totalSeconds === 0) {
          // Restart from 24h
          startTime = Date.now();
          return startCountdown(24 * 60 * 60 * 1000);
        }
      };
      // Update every second
      clearInterval(window.__bonusTimer);
      window.__bonusTimer = setInterval(tick, 1000);
      tick();
    };
    let startTime = Date.now();
    startCountdown(24 * 60 * 60 * 1000);
  }
});
