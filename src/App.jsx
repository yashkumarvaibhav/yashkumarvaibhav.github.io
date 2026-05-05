import { motion } from 'framer-motion';

import iiitdLogo from '../iiitd_logo.png';
import myPhoto from '../myPhoto.png';
import tietLogo from '../logo_tiet.png';
import cbseLogo from '../cbse_logo.png';
import jnvLogo from '../jnv_logo.jpg';
import linkedinIcon from '../linkedin.png';
import codeforcesIcon from '../codeforces.png';
import leetcodeIcon from '../leetcode.png';
import code360Icon from '../code360.png';
import githubIcon from '../GitHub-logo.jpg';
import gmailIcon from '../gmail_logo.jpg';
import phoneIcon from '../phone.png';
import whatsappIcon from '../whatsapp_logo.jpg';
import resumePdf from '../resume_YashKumarVaibhav.pdf';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const heroBadges = [
  'M.Tech (CSE) IIIT Delhi ’27',
  'Microbiome Informatics Lab',
  'Deep Learning on Human Gut Microbiome',
  'Codeforces Expert',
  'CodeChef 4★',
  'Naukri EROH AIR 36',
  'B.E. (CSE) TIET ’23',
  '500+ unique DSA problems solved',
];

const motionStrip = [
  'Deep Learning on Human Gut Microbiome',
  'Codeforces Expert · Rating 1718',
  '500+ unique DSA problems solved',
  'Naukri EROH AIR 36',
  'IIIT Delhi M.Tech CSE',
  'Software development',
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yashkumarvaibhav/',
    icon: linkedinIcon,
  },
  {
    label: 'Codeforces',
    href: 'https://codeforces.com/profile/yashkumarvaibhav',
    icon: codeforcesIcon,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/yashkumarvaibhav/',
    icon: leetcodeIcon,
  },
  {
    label: 'Code360',
    href: 'https://www.naukri.com/code360/profile/yashkrvaibhav',
    icon: code360Icon,
  },
];

const signalCards = [
  { label: 'Codeforces', value: 'Expert', detail: 'Rating 1718' },
  { label: 'CodeChef', value: '4★', detail: 'Global Rank 7627' },
  { label: 'Problem Solving', value: '500+', detail: 'LeetCode + Code360' },
  { label: 'Placement Track', value: 'AIR 36', detail: 'Naukri EROH' },
];

const storyHighlights = [
  { label: 'Primary languages', value: 'C++ · Java' },
  { label: 'Current research', value: 'Microbiome Informatics Lab' },
  { label: 'Competitive programming', value: 'Codeforces Expert' },
  { label: 'Core strength', value: 'Backend systems + DSA' },
];

const aboutParagraphs = [
  'I am currently pursuing M.Tech in Computer Science and Engineering at IIIT Delhi. My primary programming languages are C++ and Java. Previously, I completed B.E. in Computer Science and Engineering at Thapar Institute of Engineering and Technology, where I built a strong foundation in computer science fundamentals.',
  'With over 500 unique DSA problems solved on LeetCode and Naukri Code360 and ranked Expert on Codeforces, I have a solid grasp of data structures, algorithms, and competitive programming. I am also ranked 4-star on CodeChef.',
  'My journey reflects a strong commitment to learning and excellence, as shown by JEE Advanced 2019 (AIR 7.8K), JEE Main 2019, PGCAT 2025 (AIR 39), and CAT 2024. I am always excited to apply my skills to challenging, real-world problems and contribute meaningfully to the tech industry.',
];

const experienceBullets = [
  'Designed and optimized C/C++ services for high-throughput backends with predictable latency.',
  'Reduced system latency by 40% via custom data structures and algorithmic tuning.',
  'Refactored performance-critical paths to achieve up to 500k transactions per second with sub-millisecond response.',
  'Scaled data handling to nearly 5 TB per day using efficient concurrency and memory-conscious design.',
  'Diagnosed race conditions and production bottlenecks, reducing downtime by 35%.',
];

const impactCards = [
  { value: '40%', detail: 'Lower latency through systems and algorithmic optimization.' },
  { value: '500k/s', detail: 'Peak transaction throughput after refactoring critical code paths.' },
  { value: '35%', detail: 'Reduced downtime by resolving race conditions and bottlenecks.' },
];

const educationItems = [
  {
    institute: 'IIIT-Delhi',
    course: 'M.Tech · Computer Science and Engineering',
    meta: 'CGPA: 9.33 · New Delhi',
    years: '2025 – 2027',
    logo: iiitdLogo,
  },
  {
    institute: 'Thapar Institute of Engineering & Technology',
    course: 'B.E. · Computer Science and Engineering',
    meta: 'CGPA: 7.08 · Patiala, Punjab',
    years: '2019 – 2023',
    logo: tietLogo,
  },
  {
    institute: 'Red Rose School',
    course: 'Class XII · PCM',
    meta: 'Percentage: 72.4% · Deoghar, Jharkhand',
    years: '2017 – 2018',
    logo: cbseLogo,
  },
  {
    institute: 'Jawahar Navodaya Vidyalaya',
    course: 'Class X',
    meta: 'CGPA: 10 · Deoghar, Jharkhand',
    years: '2015 – 2016',
    logo: jnvLogo,
  },
];

const skillBlocks = [
  {
    title: 'Programming Languages',
    items: ['C', 'C++', 'Java', 'Python (elementary)'],
  },
  {
    title: 'Libraries / Frameworks',
    items: ['JavaScript'],
  },
  {
    title: 'Core CS',
    items: ['Data Structures', 'Algorithms'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'DBMS'],
  },
];

const certifications = [
  {
    org: 'Coding Ninjas',
    title: 'Data Structures and Algorithms in C++',
    detail: 'Certificate of Excellence',
    href: 'https://students.codingninjas.com/verify/24529aa44f42e089',
  },
  {
    org: 'Coding Ninjas',
    title: 'Competitive Programming',
    detail: 'Certificate of Excellence',
    href: 'https://students.codingninjas.com/verify/eb5cb0982588ac57',
  },
];

const achievementColumns = [
  {
    kicker: 'Competitive Programming',
    title: 'Ratings and ranks',
    items: [
      'Codeforces Expert · Rating 1718',
      'CodeChef 4★ · Global Rank 7627',
      'Winner, Mindscape 2021 hackathon (ACM Thapar)',
      'Naukri EROH · AIR 36',
    ],
  },
  {
    kicker: 'Academic Benchmarks',
    title: 'Exam and olympiad performance',
    items: [
      'JEE Advanced 2019 · AIR 7789',
      'JEE Main 2019 · AIR 31k',
      'NSO, IMO',
      'NSTSE Statewide 5th rank holder (Bihar)',
    ],
  },
];

const contactItems = [
  {
    label: 'Primary email',
    value: 'yashkumarvaibhav.official@gmail.com',
    href: 'mailto:yashkumarvaibhav.official@gmail.com',
    icon: gmailIcon,
  },
  {
    label: 'Institute email',
    value: 'yash25091@iiitd.ac.in',
    href: 'mailto:yash25091@iiitd.ac.in',
    icon: gmailIcon,
  },
  {
    label: 'Phone',
    value: '+91 62076 94270',
    href: 'tel:+916207694270',
    icon: phoneIcon,
  },
  {
    label: 'WhatsApp',
    value: 'Start a chat',
    href: 'https://wa.me/916207694270',
    icon: whatsappIcon,
  },
  {
    label: 'LinkedIn',
    value: 'Professional profile',
    href: 'https://www.linkedin.com/in/yashkumarvaibhav/',
    icon: linkedinIcon,
  },
  {
    label: 'GitHub',
    value: 'Code and projects',
    href: 'https://github.com/yashkumarvaibhav',
    icon: githubIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section-header">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function Card({ children, className = '' }) {
  return (
    <motion.article className={`glass-card ${className}`.trim()} variants={itemVariants}>
      {children}
    </motion.article>
  );
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand-lockup" href="#top">
        <img src={iiitdLogo} alt="IIIT Delhi logo" className="brand-lockup__logo" />
        <div>
          <span className="brand-lockup__eyebrow">IIIT-Delhi</span>
          <strong className="brand-lockup__name">Yash Kumar Vaibhav</strong>
        </div>
      </a>

      <nav className="nav-cluster" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="tracker-button"
        href="https://yashkumarvaibhav.me/Placement_Tracker/"
        target="_blank"
        rel="noreferrer"
      >
        IIIT Delhi Placement Tracker
      </a>
    </header>
  );
}

function MotionStrip() {
  return (
    <div className="motion-belt" aria-hidden="true">
      <div className="motion-track">
        {[...motionStrip, ...motionStrip].map((item, index) => (
          <span key={`${item}-${index}`} className="motion-pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialRow() {
  return (
    <div className="social-row">
      {socialLinks.map((social) => (
        <motion.a
          key={social.label}
          className="social-pill"
          href={social.href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -3 }}
        >
          <img src={social.icon} alt={social.label} />
          <span>{social.label}</span>
        </motion.a>
      ))}
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="skills-stack">
      <motion.article className="skills-hero-card" variants={itemVariants} whileHover={{ y: -4 }}>
        <div>
          <span className="card-eyebrow">Programming Languages</span>
          <h3>Strong systems-oriented programming foundation.</h3>
          <p>Comfortable with performance-sensitive implementation and problem-solving heavy workflows.</p>
        </div>

        <div className="skill-chip-row">
          {skillBlocks[0].items.map((item) => (
            <span key={item} className="skill-chip">{item}</span>
          ))}
        </div>
      </motion.article>

      <div className="skills-subgrid">
        {skillBlocks.slice(1).map((block) => (
          <motion.article key={block.title} className="skills-mini-card" variants={itemVariants} whileHover={{ y: -4 }}>
            <span className="card-eyebrow">{block.title}</span>
            <div className="skill-chip-row compact">
              {block.items.map((item) => (
                <span key={item} className="skill-chip compact">{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function CertificationsGrid() {
  return (
    <div className="split-grid">
      {certifications.map((item) => (
        <motion.article key={item.title} className="info-card" variants={itemVariants} whileHover={{ y: -4 }}>
          <span className="card-eyebrow">{item.org}</span>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
          <a href={item.href} target="_blank" rel="noreferrer">
            View credential
          </a>
        </motion.article>
      ))}
    </div>
  );
}

function AchievementsGrid() {
  return (
    <div className="split-grid">
      {achievementColumns.map((column) => (
        <motion.article key={column.title} className="info-card" variants={itemVariants} whileHover={{ y: -4 }}>
          <span className="card-eyebrow">{column.kicker}</span>
          <h3>{column.title}</h3>
          <ul className="detail-list compact-list">
            {column.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}

function ContactSection() {
  return (
    <div className="contact-layout">
      <motion.div className="contact-list" variants={containerVariants}>
        {contactItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <img src={item.icon} alt={item.label} />
            <div>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.aside className="contact-cta" variants={itemVariants} whileHover={{ y: -4 }}>
        <span className="card-eyebrow">Based in</span>
        <h3>New Delhi, India</h3>
        <p>Open to remote and on-site opportunities, research collaborations, and advanced systems work.</p>
        <a
          className="primary-button"
          href="https://yashkumarvaibhav.me/Placement_Tracker/"
          target="_blank"
          rel="noreferrer"
        >
          Open Placement Tracker
        </a>
      </motion.aside>
    </div>
  );
}

function HybridVersion() {
  return (
    <>
      <Header />

      <main className="page-layout">
        <section className="hero-panel hero-panel--hybrid" id="top">
          <div className="hero-copy hero-copy--hybrid">
            <span className="section-eyebrow">IIIT Delhi · M.Tech CSE</span>
            <h1>Hi, I'm Yash Kumar Vaibhav.</h1>
            <p className="hero-description">
              I am pursuing M.Tech in Computer Science and Engineering at IIIT Delhi. I enjoy competitive
              programming, problem solving, software development, and currently work on deep learning for the human
              gut microbiome at the Microbiome Informatics Lab.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#contact">Contact me</a>
              <a className="secondary-button" href={resumePdf} download>
                Download resume
              </a>
            </div>

            <MotionStrip />

            <div className="badge-cloud badge-cloud--hybrid">
              {heroBadges.slice(0, 4).map((badge) => (
                <span key={badge} className="badge-pill">{badge}</span>
              ))}
            </div>

            <SocialRow />
          </div>

          <div className="hero-dashboard">
            <motion.div className="portrait-card portrait-card--hybrid" whileHover={{ y: -6 }}>
              <div className="portrait-card__frame">
                <img src={myPhoto} alt="Yash Kumar Vaibhav" />
              </div>
            </motion.div>

            <motion.article className="hero-module hero-module--research" variants={itemVariants} whileHover={{ y: -4 }}>
              <div>
                <span className="card-eyebrow">Research Track</span>
                <h3>Deep Learning on Human Gut Microbiome</h3>
                <p>Microbiome Informatics Lab · Prof. Tarini Shankar Ghosh</p>
              </div>
              <div className="hero-module__meta">
                <span>Human gut microbiome</span>
                <span>Deep learning models</span>
                <span>IIIT Delhi</span>
              </div>
            </motion.article>

            <motion.article className="hero-module hero-module--tracker" variants={itemVariants} whileHover={{ y: -4 }}>
              <div>
                <span className="card-eyebrow">Live Product</span>
                <h3>IIIT Delhi Placement Tracker</h3>
                <p>A simple tool to follow company updates, deadlines, and role snapshots.</p>
              </div>
              <div className="tracker-preview tracker-preview--hero">
                <span>Company pipeline</span>
                <span>Deadlines and links</span>
                <span>Role snapshots</span>
              </div>
              <a
                className="secondary-button"
                href="https://yashkumarvaibhav.me/Placement_Tracker/"
                target="_blank"
                rel="noreferrer"
              >
                Open tracker
              </a>
            </motion.article>

            <motion.div className="signal-grid signal-grid--hybrid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              {signalCards.map((card) => (
                <motion.article key={card.label} className="signal-tile" variants={itemVariants} whileHover={{ y: -4 }}>
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                  <p>{card.detail}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <motion.section className="content-panel" id="about" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeader eyebrow="Profile" title="A cleaner story of backend engineering, research, and academic rigor." />

          <div className="story-layout">
            <motion.div className="story-copy" variants={itemVariants}>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div className="story-highlight-grid" variants={containerVariants}>
              {storyHighlights.map((item) => (
                <motion.article key={item.label} className="story-highlight" variants={itemVariants} whileHover={{ x: 4 }}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="content-panel" id="experience" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeader eyebrow="Experience" title="High-throughput backend work with concrete system impact." />

          <div className="experience-layout">
            <Card className="experience-card">
              <div className="experience-card__top">
                <div>
                  <span className="card-eyebrow">SivaTech Solutions</span>
                  <h3>Software Engineer</h3>
                </div>
                <span className="date-pill">Jan 2023 – Jun 2025 · Mumbai</span>
              </div>

              <ul className="detail-list">
                {experienceBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>

            <motion.div className="impact-column" variants={containerVariants}>
              {impactCards.map((item) => (
                <motion.article key={item.value} className="impact-card" variants={itemVariants} whileHover={{ y: -4 }}>
                  <strong>{item.value}</strong>
                  <p>{item.detail}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="content-panel" id="education" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeader eyebrow="Education" title="Structured academic growth across institutes and school years." />

          <div className="education-grid">
            {educationItems.map((item) => (
              <motion.article key={item.institute} className="education-card" variants={itemVariants} whileHover={{ y: -4 }}>
                <div>
                  <span className="card-eyebrow">{item.institute}</span>
                  <h3>{item.course}</h3>
                  <p>{item.meta}</p>
                </div>
                <div className="education-card__side">
                  <img src={item.logo} alt={item.institute} />
                  <span className="date-pill">{item.years}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="content-panel" id="skills" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeader eyebrow="Skills" title="A toolkit presented as a designed system rather than a generic tag dump." />
          <SkillsSection />
        </motion.section>

        <motion.section className="content-panel" id="certifications" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeader eyebrow="Certifications" title="Recognition that supports the competitive and academic side of the profile." />
          <CertificationsGrid />
        </motion.section>

        <motion.section className="content-panel" id="achievements" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeader eyebrow="Achievements" title="Competitive and academic markers placed in a cleaner, editorial layout." />
          <AchievementsGrid />
        </motion.section>

        <motion.section className="content-panel" id="contact" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeader eyebrow="Contact" title="Reach out for research, roles, backend systems work, or collaboration." />
          <ContactSection />
        </motion.section>
      </main>
    </>
  );
}

export default function App() {
  return (
    <div className="site-root">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <HybridVersion />
    </div>
  );
}
