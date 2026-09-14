import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import portrait from '../myPhoto.png';

const resumeUrl = 'https://drive.google.com/file/d/1P6PexVC6MIq4473TwK33crijLTWUnJ8G/view?usp=sharing';

const phone = { display: '+91 62076 94270', tel: 'tel:+916207694270', whatsapp: 'https://wa.me/916207694270' };

const links = {
  github: 'https://github.com/yashkumarvaibhav',
  linkedin: 'https://www.linkedin.com/in/yashkumarvaibhav/',
  codeforces: 'https://codeforces.com/profile/yashkumarvaibhav',
  leetcode: 'https://leetcode.com/u/yashkumarvaibhav/',
  code360: 'https://www.naukri.com/code360/profile/yashkrvaibhav',
};

const heroLinks = [
  ['github', 'GitHub', links.github],
  ['linkedin', 'LinkedIn', links.linkedin],
  ['code', 'Codeforces', links.codeforces],
  ['brackets', 'LeetCode', links.leetcode],
  ['mail', 'Email', 'mailto:yashkumarvaibhav.official@gmail.com'],
  ['whatsapp', 'WhatsApp', phone.whatsapp],
];

const navItems = [
  ['work', 'Work'],
  ['experience', 'Experience'],
  ['about', 'About'],
  ['recognition', 'Recognition'],
];

const projects = [
  {
    index: '01',
    title: 'Sentinel',
    subtitle: 'Observability & reversible remediation platform',
    description:
      'A Python observability platform that separates what an event explains in a traffic surge from what it cannot, and acts only on what a deterministic verifier confirms. Measured on a lab testbed with real telemetry, injected faults and held-out replays; delivered through a spec-driven AI-agent workflow.',
    stats: ['16.8 s autonomous MTTR', '0 false actions', '1,000+ tests'],
    stack: ['Python', 'Kafka', 'ClickHouse', 'PostgreSQL', 'Kubernetes', 'OpenTelemetry'],
    live: 'https://sentinel.yashkumarvaibhav.me',
    date: 'Jul 2026 — Present',
  },
  {
    index: '02',
    title: 'GWiz',
    subtitle: 'Human-in-the-loop LLM assistant for Google Workspace',
    description:
      'A team-built LLM assistant that works inside a user’s own Google Workspace, where nothing that changes mail or calendar runs without explicit approval. I owned the FastAPI backend: LangGraph approval flows that pause until the user decides, OAuth 2.0 across ten Workspace APIs, and replayable LLM test tapes.',
    stats: ['100+ API routes', '750+ tests', '50 OAuth scopes'],
    stack: ['FastAPI', 'React', 'TypeScript', 'LangGraph', 'Gemini', 'OpenAI', 'Docker'],
    live: 'https://gwiz.yashkumarvaibhav.me',
    date: 'Mar 2026 — Jun 2026',
  },
  {
    index: '03',
    title: 'Job Pilot',
    subtitle: 'Multi-tenant job-search CRM & outreach engine',
    description:
      'A multi-tenant CRM that runs a job search end to end with deterministic automation, publicly deployed with open signup. Every automated Gmail send waits on per-message approval and a thread-proof stamp. I specified it as 50+ engineering tasks and delivered it through a spec-driven AI-agent workflow.',
    stats: ['880+ tests', '31 migrations', '60+ design decisions'],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'SQLite', 'Drizzle', 'Gmail API', 'Vitest'],
    live: 'https://jobpilot.yashkumarvaibhav.me',
    date: 'Aug 2026 — Present',
  },
  {
    index: '04',
    title: 'Setu',
    subtitle: 'Federated data integration over heterogeneous sources',
    description:
      'Answers “is this vehicle insured right now?” by querying five autonomous registries on synthetic data. A source that did not answer is a different type from one that answered nothing, so an outage never becomes a wrong verdict. A four-person IIIT-Delhi course project I led, delivered through a spec-driven AI-agent workflow.',
    stats: ['1,100+ tests', '5 sources, 4 storage engines', '53 ms vs 138 ms serial'],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'MariaDB', 'SQLite', 'asyncio'],
    live: 'https://setu.yashkumarvaibhav.me',
    date: 'Sep 2026',
  },
  {
    index: '05',
    title: 'Gut Microbiome Disease Prediction',
    subtitle: 'ELECTRA transformers trained from scratch',
    description:
      'Self-supervised ELECTRA transformers trained in PyTorch on a 16,721-sample, 129-study corpus, treating each species as a token, across a 15-configuration grid with 10-seed ensembles on an NVIDIA RTX A6000. A leave-one-study-out evaluation exposed the study batch effects that a within-study score hides.',
    stats: ['0.85 AUROC within-study', '0.63 on held-out studies', '16,721 samples'],
    stack: ['Python', 'PyTorch', 'Hugging Face', 'scikit-learn', 'Pandas'],
    source: 'https://github.com/yashkumarvaibhav/DL-HumanGutMicrobiome',
    date: 'Jan 2026 — May 2026',
  },
  {
    index: '06',
    title: 'VajraKavach',
    subtitle: 'Security-hardened professional networking platform',
    description:
      'A team course project for Foundations of Computer Security at IIIT-Delhi, then attacked by the rest of the class. Messages are end-to-end encrypted in the browser, so the server stores only ciphertext, behind Argon2id, revocable JWT sessions, mandatory TOTP 2FA, a hash-chained audit log and a hardened nginx edge.',
    stats: ['End-to-end encryption', 'TOTP 2FA', '3 VAPT rounds remediated'],
    stack: ['FastAPI', 'PostgreSQL', 'React', 'Nginx', 'Web Crypto API'],
    live: 'https://vajrakavach.yashkumarvaibhav.me',
    source: 'https://github.com/yashkumarvaibhav/VajraKavach',
    date: 'Feb 2026 — Apr 2026',
  },
  {
    index: '07',
    title: 'CoExist Alert',
    subtitle: 'Edge early-warning platform for human–wildlife conflict',
    description:
      'Team GitBoosters’ entry to the Code with Cisco 2026 Silver Flag CSR Challenge. The sensor field is simulated; Cisco Webex dispatch to the nearest guard is live. Unacknowledged alerts escalate responder tiers, and a dead sensor raises its own blind-spot alert. Delivered through a spec-driven AI-agent workflow.',
    stats: ['280 unit tests', '18 Playwright specs', 'Live Webex dispatch'],
    stack: ['Next.js', 'TypeScript', 'SQLite', 'Drizzle', 'Cisco Webex', 'Playwright'],
    live: 'https://coexist.yashkumarvaibhav.me',
    date: 'Jul 2026',
  },
  {
    index: '08',
    title: 'TradeVault',
    subtitle: 'Trading journal & risk workbench',
    description:
      'A multi-tenant trading journal whose Monte-Carlo engine resamples the trader’s own realised R-multiples with a seeded PRNG, so a seed and input give byte-identical output. Kelly sizing is computed two ways, and every result is labelled “historical scenario, not a forecast”. Delivered through a spec-driven AI-agent workflow.',
    stats: ['158 unit tests', '19 Playwright specs', '12 migrations'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Web Workers', 'Vitest'],
    live: 'https://tradevault.yashkumarvaibhav.me',
    date: 'Feb 2026 — Jun 2026',
  },
];

const experience = [
  {
    company: 'Scale AI (Outlier)',
    role: 'Software Engineer, AI Training · Freelance',
    date: 'Mar 2024 — Mar 2025',
    detail:
      'Evaluated model-generated code for correctness, repaired logic and functional mismatches, and delivered precise feedback to improve future model responses.',
  },
  {
    company: 'SivaTech Solutions',
    role: 'Software Engineer · Internship → Full-time Contract',
    date: 'Jan 2023 — Mar 2025',
    detail:
      'Joined as an intern, then continued on a full-time contract, building the C++ backend of a proprietary algorithmic trading platform: high-performance data structures and low-level optimizations for latency-critical order execution against live market-data feeds, across stocks, crypto and derivatives. Resolved race conditions in multithreaded components, optimized hot execution paths, debugged legacy systems, and developed signal-generation and order-execution logic.',
  },
];

const education = [
  {
    school: 'IIIT Delhi',
    degree: 'M.Tech, Computer Science & Engineering',
    date: '2025 — Present',
    score: 'CGPA 9.52',
  },
  {
    school: 'Thapar Institute of Engineering & Technology',
    degree: 'B.E., Computer Science & Engineering',
    date: '2019 — 2023',
  },
];

const skills = [
  ['Languages', 'Python, C++, TypeScript, C, Java, SQL'],
  ['Engineering', 'Backend and distributed systems, REST APIs, system design, algorithms'],
  ['Stack & tools', 'FastAPI, Kafka, PostgreSQL, Docker, Kubernetes, PyTorch, LangGraph, Git/GitHub, Linux, Google Cloud Platform'],
  ['AI-assisted engineering', 'Claude Code, Codex, GitHub Copilot — spec-driven agent workflows with test gates'],
];

const recognition = [
  {
    label: 'Competitive programming',
    items: ['Codeforces Expert · 1728 rating, top 5.2% of rated users', 'CodeChef · 4 star', '500+ problems across LeetCode and Code360', 'TON MaraTON Challenge · Rank 60'],
  },
  {
    label: 'Competitions & national ranks',
    items: [
      'Code with Cisco 2026 · Finalist, top 75 of ~30,000 · Gold Flag Challenge winner',
      'Amazon ML Summer School 2026 · Selected, top 3,000 of 134,421 registered',
      'Engineers’ Ring of Honour (Naukri) · Finalist, AIR 36',
      'JEE Advanced 2019 · AIR 7789, top 0.7% of JEE Main registrants',
      'JEE Main 2019 · AIR ~31k, top 2.8%',
    ],
  },
];

const certifications = [
  ['Data Structures & Algorithms in C++', 'https://students.codingninjas.com/verify/24529aa44f42e089'],
  ['Competitive Programming', 'https://students.codingninjas.com/verify/eb5cb0982588ac57'],
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const introName = 'yashkumarvaibhav';

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SocialIcon({ type }) {
  const paths = {
    github: <><path d="M15 22v-3.9c.04-1-.35-1.75-.8-2.2 2.65-.3 5.43-1.3 5.43-5.9a4.6 4.6 0 0 0-1.23-3.2 4.3 4.3 0 0 0-.12-3.16S17.3 3.32 15 4.87a11 11 0 0 0-6 0C6.7 3.32 5.72 3.64 5.72 3.64A4.3 4.3 0 0 0 5.6 6.8 4.6 4.6 0 0 0 4.37 10c0 4.6 2.78 5.6 5.43 5.9-.35.4-.66 1.03-.77 1.8-.69.31-2.43.85-3.5-1 0 0-.64-1.16-1.85-1.24"/><path d="M9 21c-5 1.5-5-2.5-7-3"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></>,
    mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    brackets: <><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3M9 12h6"/></>,
    whatsapp: <><path d="M3 21l1.7-3.9a8.5 8.5 0 1 1 3.3 2.9z"/><path d="M9 8.5c0 4 2.5 6.5 6.5 6.5.5 0 .9-.4.9-.9v-1l-2-.8-1 1a6 6 0 0 1-2.7-2.7l1-1-.8-2h-1c-.5 0-.9.4-.9.9z"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.8.4 1.6.7 2.3a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.7-1.3a2 2 0 0 1 2.1-.4c.7.3 1.5.6 2.3.7a2 2 0 0 1 1.8 2z"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

function CosmicCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 850px), (pointer: coarse)').matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let animationFrame;
    let isVisible = true;
    let particles = [];
    const pointer = { x: 0, y: 0, active: false };

    const createParticles = () => {
      const minimum = isMobile ? 28 : 55;
      const maximum = isMobile ? 55 : 120;
      const count = Math.min(maximum, Math.max(minimum, Math.floor((width * height) / 10500)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (index % 5 === 0 ? 0.34 : 0.16),
        vy: (Math.random() - 0.5) * (index % 5 === 0 ? 0.34 : 0.16),
        radius: index % 11 === 0 ? 1.8 : Math.random() * 1.1 + 0.35,
        alpha: Math.random() * 0.55 + 0.2,
        depth: Math.random() * 0.8 + 0.2,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const nextWidth = Math.round(rect.width);
      const nextHeight = Math.round(rect.height);
      if (nextWidth === width && nextHeight === height) return;

      const ratio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 2);
      width = nextWidth;
      height = nextHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createParticles();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      frame += reduceMotion || isMobile ? 0 : 1;

      particles.forEach((particle, index) => {
        if (!reduceMotion && !isMobile) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < -10) particle.x = width + 10;
          if (particle.x > width + 10) particle.x = -10;
          if (particle.y < -10) particle.y = height + 10;
          if (particle.y > height + 10) particle.y = -10;
        }

        const driftX = pointer.active ? (pointer.x - width / 2) * particle.depth * 0.018 : 0;
        const driftY = pointer.active ? (pointer.y - height / 2) * particle.depth * 0.018 : 0;
        const x = particle.x + driftX;
        const y = particle.y + driftY;

        context.beginPath();
        context.arc(x, y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = index % 7 === 0
          ? `rgba(63, 173, 168, ${particle.alpha + 0.2})`
          : `rgba(255, 255, 255, ${particle.alpha})`;
        context.fill();

        for (let next = index + 1; next < Math.min(index + 12, particles.length); next += 1) {
          const other = particles[next];
          const otherX = other.x + (pointer.active ? (pointer.x - width / 2) * other.depth * 0.018 : 0);
          const otherY = other.y + (pointer.active ? (pointer.y - height / 2) * other.depth * 0.018 : 0);
          const distance = Math.hypot(x - otherX, y - otherY);
          if (distance < 112) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(otherX, otherY);
            context.strokeStyle = `rgba(63, 173, 168, ${(1 - distance / 112) * 0.16})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      });

      const sweep = ((frame * 2.1) % (width + 520)) - 260;
      if (!reduceMotion && !isMobile) {
        context.beginPath();
        context.moveTo(sweep, height * 0.18);
        context.lineTo(sweep - 190, height * 0.38);
        context.strokeStyle = 'rgba(102, 220, 213, 0.5)';
        context.lineWidth = 1.2;
        context.stroke();
      }

      if (!reduceMotion && !isMobile && isVisible) animationFrame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => { pointer.active = false; };
    const onResize = () => {
      resize();
      if (reduceMotion || isMobile) draw();
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      cancelAnimationFrame(animationFrame);
      if (isVisible && !reduceMotion && !isMobile) draw();
    });

    resize();
    draw();
    visibilityObserver.observe(canvas);
    window.addEventListener('resize', onResize);
    if (!isMobile) {
      canvas.addEventListener('pointermove', onPointerMove);
      canvas.addEventListener('pointerleave', onPointerLeave);
    }
    return () => {
      cancelAnimationFrame(animationFrame);
      visibilityObserver.disconnect();
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="cosmic-canvas" aria-hidden="true" />;
}

function CosmicAchievements() {
  return (
    <div className="cosmic-achievements" aria-label="Career highlights">
      <div className="achievement-planet achievement-planet--problems">
        <div><strong>500+</strong><span>LeetCode + Code360</span><small>problems solved</small></div>
      </div>
      <div className="achievement-planet achievement-planet--rating">
        <div><strong>1728</strong><span>Codeforces</span><small>Expert rating</small></div>
      </div>
      <div className="achievement-planet achievement-planet--amazon">
        <div><strong>Top 2.3%</strong><span>Amazon MLSS</span><small>2026 selection</small></div>
      </div>
      <div className="achievement-planet achievement-planet--eroh">
        <div><strong>AIR 36</strong><span>Naukri EROH</span><small>national rank</small></div>
      </div>
      <div className="achievement-planet achievement-planet--cisco">
        <div><strong>Top 75</strong><span>Code with Cisco</span><small>2026 finalist</small></div>
      </div>
      <div className="achievement-planet achievement-planet--jee-advanced">
        <div><strong>AIR 7.8K</strong><span>JEE Advanced</span><small>2019</small></div>
      </div>
      <div className="achievement-planet achievement-planet--jee-main">
        <div><strong>AIR&nbsp;~31K</strong><span>JEE Main</span><small>2019</small></div>
      </div>
    </div>
  );
}

function CosmicObjects() {
  return (
    <div className="cosmic-objects" aria-hidden="true">
      <div className="galaxy"><i /><i /><i /></div>
      <div className="ringed-planet"><span /></div>
      <div className="crater-moon"><i /><i /><i /></div>
      <div className="asteroid-belt">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div>
      <div className="meteor meteor--one" />
      <div className="meteor meteor--two" />
    </div>
  );
}

function IntroLoader() {
  return (
    <motion.div
      className="intro-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-label="Loading Yash Kumar Vaibhav portfolio"
    >
      <div className="intro-loader__grid" aria-hidden="true" />
      <div className="intro-loader__stars" aria-hidden="true" />
      <div className="intro-loader__planet intro-loader__planet--large" aria-hidden="true" />
      <div className="intro-loader__planet intro-loader__planet--small" aria-hidden="true" />
      <div className="intro-loader__meteor intro-loader__meteor--one" aria-hidden="true" />
      <div className="intro-loader__meteor intro-loader__meteor--two" aria-hidden="true" />
      <div className="intro-loader__beam" aria-hidden="true" />
      <motion.div
        className="intro-loader__content"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="intro-loader__label">Portfolio loading</span>
        <div className="intro-loader__name-wrap">
          <span className="intro-loader__orbit" aria-hidden="true">
            <span />
          </span>
          <motion.p
            className="intro-loader__name"
            initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {introName}
          </motion.p>
        </div>
        <div className="intro-loader__track" aria-hidden="true">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionHeading({ label, title, intro }) {
  return (
    <motion.header className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
      <p className="eyebrow">{label}</p>
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </motion.header>
  );
}

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => setIntroComplete(true), prefersReducedMotion ? 3200 : 3800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('intro-lock', !introComplete);
    document.body.classList.toggle('intro-lock', !introComplete);
    return () => {
      document.documentElement.classList.remove('intro-lock');
      document.body.classList.remove('intro-lock');
    };
  }, [introComplete]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const visible = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
      setActiveSection(navItems.map(([id]) => id).find((id) => visible.get(id)) ?? '');
    }, { rootMargin: '-45% 0px -50% 0px' });
    navItems.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <>
    <AnimatePresence>
      {!introComplete && <IntroLoader />}
    </AnimatePresence>

    <motion.div
      className="site-shell"
      id="top"
      initial={false}
      animate={introComplete ? 'loaded' : 'loading'}
      variants={{
        loading: { opacity: 0, scale: 0.992 },
        loaded: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      aria-busy={!introComplete}
    >
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}${menuOpen ? ' site-header--open' : ''}`}>
        <a className="wordmark" href="#top" aria-label="Yash Kumar Vaibhav, home" onClick={() => setMenuOpen(false)}>
          yashkumarvaibhav
        </a>
        <nav id="primary-navigation" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a href={`#${id}`} key={id} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-contact" href="mailto:yashkumarvaibhav.official@gmail.com">
            Let’s talk <Arrow />
          </a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((open) => !open)}>
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <CosmicCanvas />
          <div className="cosmic-grid" aria-hidden="true" />
          <CosmicObjects />
          <motion.div className="hero-copy" initial="hidden" animate={introComplete ? 'visible' : 'hidden'} variants={reveal}>
            <p className="eyebrow"><span className="status-dot" /> New Delhi, India · Open to opportunities</p>
            <h1 id="hero-title">I build reliable software for difficult problems.</h1>
            <p className="hero-intro">
              I’m Yash, a software engineer and M.Tech CSE student at IIIT Delhi. I build backend and distributed systems, and I apply machine learning where its output can be checked.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="button button--quiet" href={resumeUrl} target="_blank" rel="noreferrer">Read résumé <Arrow /></a>
            </div>
            <div className="hero-socials" aria-label="Profile links">
              {heroLinks.map(([type, label, href]) => (
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} key={label} aria-label={label} title={label}>
                  <SocialIcon type={type} /><span>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div className="hero-identity" initial={{ opacity: 0, x: 40 }} animate={introComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }} transition={{ duration: .8, delay: .2, ease: [0.22, 1, 0.36, 1] }}>
            <div className="identity-orbit" aria-hidden="true"><span /><span /><span /></div>
            <div className="hero-portrait-wrap">
              <img src={portrait} alt="Yash Kumar Vaibhav" />
              <span className="portrait-scan" aria-hidden="true" />
            </div>
            <div className="identity-caption">
              <div><span>Yash Kumar Vaibhav</span><strong>Software Engineer</strong></div>
              <div><span>Currently</span><strong>M.Tech CSE · IIIT Delhi</strong></div>
            </div>
            <CosmicAchievements />
          </motion.div>
          <div className="hero-coordinate" aria-hidden="true">28.6139° N / 77.2090° E</div>
        </section>

        <section className="section" id="work">
          <SectionHeading label="01 / Selected work" title="Projects built end to end." intro="Backend and distributed systems, applied machine learning, and LLM systems with verification designed in." />
          <div className="project-list">
            {projects.map((project) => (
              <motion.article className="project-card" key={project.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="project-top">
                  <div className="project-meta"><span className="project-number">{project.index}</span><span>{project.date}</span></div>
                  <div className="project-links">
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <Arrow /></a>}
                    {project.source && <a href={project.source} target="_blank" rel="noreferrer">Source <Arrow /></a>}
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <div className="project-stats">
                    {project.stats.map((stat) => <span key={stat}>{stat}</span>)}
                  </div>
                  <div className="tag-row">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section section--soft" id="experience">
          <SectionHeading label="02 / Experience" title="C++ systems and AI training experience." />
          <div className="timeline">
            {experience.map((item) => (
              <motion.article className="timeline-item" key={`${item.company}-${item.date}`} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
                <p className="timeline-date">{item.date}</p>
                <div><h3>{item.company}</h3><p className="timeline-role">{item.role}</p></div>
                <p className="timeline-detail">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section credentials-grid" id="about">
          <div>
            <p className="eyebrow">Education</p>
            {education.map((item) => (
              <article className="education-item" key={item.school}>
                <div><h3>{item.school}</h3><p>{item.degree}</p></div>
                <div>{item.score && <strong>{item.score}</strong>}<span>{item.date}</span></div>
              </article>
            ))}
          </div>
          <div>
            <p className="eyebrow">Capabilities</p>
            <dl className="skills-list">
              {skills.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
            </dl>
          </div>
        </section>

        <section className="section recognition-section" id="recognition">
          <SectionHeading label="03 / Recognition" title="Signals beyond the project list." intro="Competitive programming, competitions and national ranks that reinforce the engineering work." />
          <div className="recognition-grid">
            {recognition.map((group) => (
              <motion.article key={group.label} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }}>
                <p className="eyebrow">{group.label}</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </motion.article>
            ))}
          </div>
          <div className="certification-row">
            <span>Certificates of Excellence</span>
            {certifications.map(([title, href]) => <a href={href} target="_blank" rel="noreferrer" key={title}>{title} <Arrow /></a>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Have a hard problem?</p>
          <h2>Let’s solve something difficult.</h2>
          <a href="mailto:yashkumarvaibhav.official@gmail.com">yashkumarvaibhav.official@gmail.com <Arrow /></a>
          <a href={phone.whatsapp} target="_blank" rel="noreferrer">WhatsApp {phone.display} <Arrow /></a>
          <a href={phone.tel}>Mobile {phone.display} <Arrow /></a>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Yash Kumar Vaibhav</span>
        <span>Designed and built with care.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </motion.div>
    </>
  );
}

export default App;
