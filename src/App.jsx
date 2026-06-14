import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import portrait from '../myPhoto.png';

const resumeUrl = 'https://drive.google.com/file/d/1tcMk7e5Wb2hNuMk0wINL136-hengflT1/view?usp=sharing';

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
];

const projects = [
  {
    index: '01',
    title: 'GWiz',
    subtitle: 'Agentic AI assistant for Google Workspace',
    description:
      'A full-stack assistant spanning Gmail, Calendar, Drive, Docs, Tasks, People, and Classroom, with reviewable human-in-the-loop actions and a multi-provider LLM layer.',
    stats: ['70+ API routes', '668 test cases', '50+ OAuth scopes'],
    stack: ['FastAPI', 'React', 'TypeScript', 'LangGraph', 'Gemini', 'OpenAI', 'Docker'],
    live: 'https://gwiz.yashkumarvaibhav.me',
    date: 'May 2026 — Present',
  },
  {
    index: '02',
    title: 'Gut Microbiome Disease Prediction',
    subtitle: 'ELECTRA transformer trained on microbial abundance sequences',
    description:
      'A three-stage PyTorch pipeline for disease-vs-control classification over a 16,721-sample corpus, including generator pretraining, discriminator pretraining, and supervised fine-tuning.',
    stats: ['0.85 AUROC', '129 studies', '16,721 samples'],
    stack: ['Python', 'PyTorch', 'Hugging Face', 'scikit-learn', 'Pandas'],
    source: 'https://github.com/yashkumarvaibhav/DL-HumanGutMicrobiome',
    date: 'Jan 2026 — May 2026',
  },
  {
    index: '03',
    title: 'IIIT Delhi Placement Tracker',
    subtitle: 'Multi-batch placement analytics for IIIT Delhi students',
    description:
      'A full-stack platform that tracks companies, students, and multiple offers across placement batches, with program-level filters, CTC and stipend statistics, placement percentages, spreadsheet-backed imports, and authenticated administration.',
    stats: ['Multi-batch data', 'Program-level analytics', 'Live deployment'],
    stack: ['React', 'Express', 'PostgreSQL', 'Supabase', 'Google OAuth'],
    live: 'https://yashkumarvaibhav.me/Placement_Tracker/',
    date: '2025 — Present',
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
    role: 'Software Engineer · Intern → Contract',
    date: 'Jan 2023 — Mar 2025',
    detail:
      'Joined as an intern and continued on contract, owning development of a proprietary C++ algorithmic-trading backend. Built performance-critical data structures, signal and order-execution logic, resolved legacy defects, and optimized low-latency paths for reliability and throughput.',
  },
];

const education = [
  {
    school: 'IIIT Delhi',
    degree: 'M.Tech, Computer Science & Engineering',
    date: '2025 — Present',
    score: 'CGPA 9.41',
  },
  {
    school: 'Thapar Institute of Engineering & Technology',
    degree: 'B.E., Computer Science & Engineering',
    date: '2019 — 2023',
    score: 'CGPA 7.08',
  },
  {
    school: 'Red Rose School, Deoghar',
    degree: 'Class XII · PCM · CBSE',
    date: '2018',
    score: '72.4%',
  },
  {
    school: 'Jawahar Navodaya Vidyalaya, Deoghar',
    degree: 'Class X · CBSE',
    date: '2016',
    score: 'CGPA 10',
  },
];

const skills = [
  ['Languages', 'C, C++, Java, Python, SQL'],
  ['Engineering', 'Backend development, algorithms, REST APIs, system design'],
  ['Tools', 'Git/GitHub, Linux, Docker, Google Cloud Platform'],
  ['AI workflow', 'Claude Code, Codex, GitHub Copilot'],
];

const recognition = [
  {
    label: 'Competitive programming',
    items: ['Codeforces Expert · 1728 rating', 'CodeChef · 4 star', '500+ problems across LeetCode and Code360', 'TON MaraTON Challenge · Rank 60'],
  },
  {
    label: 'Academic & national ranks',
    items: ['IIIT Delhi Dean’s List · upcoming recipient', 'JEE Advanced 2019 · AIR 7789', 'Engineers’ Ring of Honour · AIR 36'],
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
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

function CosmicCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let animationFrame;
    let particles = [];
    const pointer = { x: 0, y: 0, active: false };

    const createParticles = () => {
      const count = Math.min(120, Math.max(55, Math.floor((width * height) / 10500)));
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
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createParticles();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      frame += reduceMotion ? 0 : 1;

      particles.forEach((particle, index) => {
        if (!reduceMotion) {
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
      if (!reduceMotion) {
        context.beginPath();
        context.moveTo(sweep, height * 0.18);
        context.lineTo(sweep - 190, height * 0.38);
        context.strokeStyle = 'rgba(102, 220, 213, 0.5)';
        context.lineWidth = 1.2;
        context.stroke();
      }

      if (!reduceMotion) animationFrame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => { pointer.active = false; };

    resize();
    draw();
    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
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
      <div className="achievement-planet achievement-planet--dean">
        <div><strong>Dean’s List</strong><span>IIIT Delhi</span><small>upcoming recipient</small></div>
      </div>
      <div className="achievement-planet achievement-planet--eroh">
        <div><strong>AIR 36</strong><span>Naukri EROH</span><small>national rank</small></div>
      </div>
      <div className="achievement-planet achievement-planet--codechef">
        <div><strong>4★</strong><span>CodeChef</span><small>competitive programming</small></div>
      </div>
      <div className="achievement-planet achievement-planet--jee-advanced">
        <div><strong>AIR 7.8K</strong><span>JEE Advanced</span><small>2019</small></div>
      </div>
      <div className="achievement-planet achievement-planet--jee-main">
        <div><strong>Qualified</strong><span>JEE Main</span><small>2019</small></div>
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
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Yash Kumar Vaibhav, home">
          YKV<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:yashkumarvaibhav.official@gmail.com">
          Let’s talk <Arrow />
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <CosmicCanvas />
          <div className="cosmic-grid" aria-hidden="true" />
          <CosmicObjects />
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
            <p className="eyebrow"><span className="status-dot" /> New Delhi, India · Open to opportunities</p>
            <h1 id="hero-title">I build reliable software for difficult problems.</h1>
            <p className="hero-intro">
              I’m Yash, a software engineer and M.Tech CSE student at IIIT Delhi. My work spans C++ backend systems, full-stack applications, applied deep learning, and algorithms.
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
          <motion.div className="hero-identity" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .2, ease: [0.22, 1, 0.36, 1] }}>
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
          <SectionHeading label="01 / Selected work" title="Projects built end to end." intro="Backend software, applied deep learning, and a full-stack campus placement platform." />
          <div className="project-list">
            {projects.map((project) => (
              <motion.article className="project-card" key={project.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="project-number">{project.index}</div>
                <div className="project-main">
                  <div className="project-meta"><span>{project.date}</span><span>Featured project</span></div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stats">
                    {project.stats.map((stat) => <span key={stat}>{stat}</span>)}
                  </div>
                  <div className="tag-row">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <div className="project-links">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <Arrow /></a>}
                  {project.source && <a href={project.source} target="_blank" rel="noreferrer">Source <Arrow /></a>}
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
                <div><strong>{item.score}</strong><span>{item.date}</span></div>
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
          <SectionHeading label="03 / Recognition" title="Signals beyond the project list." intro="Competitive programming and academic performance that reinforce the engineering work." />
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
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Yash Kumar Vaibhav</span>
        <span>Designed and built with care.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
