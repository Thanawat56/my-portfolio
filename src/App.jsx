import {useState, useEffect} from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  Download,
  ExternalLink,
  ChevronDown,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";

const GithubMark = ({size = 18}) => (
  <span style={{fontSize: size * 0.72, fontWeight: 700, lineHeight: 1}}>
    GH
  </span>
);
const LinkedinMark = ({size = 18}) => (
  <span style={{fontSize: size * 0.72, fontWeight: 700, lineHeight: 1}}>
    in
  </span>
);

/* ---------- theme tokens ---------- */
const bg = "#0B1220";
const surface = "#131B2E";
const surfaceAlt = "#1A2338";
const border = "rgba(255,255,255,0.08)";
const textPrimary = "#E8ECF4";
const textSecondary = "#8A93A6";
const amber = "#F2A93B";
const amberDark = "#241705";
const teal = "#4FD1C5";

const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');
    .font-display { font-family: 'Fraunces', serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    html { scroll-behavior: smooth; }
    @keyframes blink { 0%, 45% { opacity: 1 } 50%, 95% { opacity: 0 } 100% { opacity: 1 } }
    .cursor-blink { animation: blink 1.4s step-end infinite; }
    @media (prefers-reduced-motion: reduce) {
      .cursor-blink { animation: none; opacity: 1; }
    }
  `}</style>
);

/* ---------- data ---------- */
const navLinks = [
  {label: "ทักษะ", href: "#skills"},
  {label: "ผลงาน", href: "#projects"},
  {label: "ติดต่อ", href: "#contact"},
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {title: "Backend", items: ["Node.js", "Express", "Python", "FastAPI"]},
  {title: "Database", items: ["SQL", "MongoDB", "Supabase"]},
  {
    title: "Tools / DevOps",
    items: ["Git", "Docker", "Postman", "GitHub Actions"],
  },
];

const projects = [
  {
    id: "smart-weather",
    title: "Smart-Weather-Report",
    tagline: "ระบบรายงานสภาพอากาศและให้คำแนะนำด้านการเกษตรด้วย n8n และ AI",
    features: [
      "ดึงข้อมูลสภาพอากาศแบบเรียลไทม์ผ่าน OpenWeather API",
      "ใช้ n8n เชื่อมต่อ Webhook, API และ AI เพื่อประมวลผลข้อมูลอัตโนมัติ",
      "ใช้ AI ช่วยวิเคราะห์สภาพอากาศและสร้างคำแนะนำสำหรับเกษตรกร",
    ],
    stack: [
      "n8n",
      "OpenWeather API",
      "AI",
      "Webhook",
      "Google Sheets",
      "Discord",
    ],
    repoUrl: "https://github.com/Thanawat56/Smart-Weather-Report",
  },
  {
    id: "doclibrary",
    title: "DocLibrary — คลังหนังสือ",
    tagline: "เว็บแอปพลิเคชันสำหรับจัดเก็บ ค้นหา และจัดการข้อมูลหนังสือ",
    features: [
      "ระบบจัดการข้อมูลหนังสือและรายละเอียดของหนังสือ",
      "ค้นหาและเรียกดูหนังสือจากคลังข้อมูลได้อย่างสะดวก",
      "ออกแบบหน้าเว็บให้ใช้งานง่ายสำหรับการจัดการและค้นหาหนังสือ",
    ],
    stack: ["React", "JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/",
  },
  {
    id: "smart-plan-planting",
    title: "SMART-PLAN-PLANTING — Agricultural Chatbot",
    tagline: "แชทบอทให้ข้อมูลและคำแนะนำด้านการเกษตรด้วย AI และระบบ RAG",
    features: [
      "แชทบอทตอบคำถามเกี่ยวกับการเพาะปลูกและข้อมูลด้านการเกษตร",
      "ใช้ระบบ RAG เพื่อค้นหาข้อมูลจาก Knowledge Base ก่อนสร้างคำตอบ",
      "ประมวลผลข้อมูลเอกสารและใช้ AI สร้างคำตอบให้เหมาะกับคำถามของผู้ใช้",
    ],
    stack: ["Python", "Google Colab", "RAG", "AI", "FAISS", "OpenAI"],
    repoUrl: "https://github.com/Thanawat56/SMART-PLAN-PLANTING",
  },
];

/* ---------- small components ---------- */
const Badge = ({children}) => (
  <span
    className="text-xs px-2.5 py-1 rounded-md font-medium"
    style={{
      background: "rgba(79,209,197,0.12)",
      color: teal,
      border: `1px solid rgba(79,209,197,0.25)`,
    }}>
    {children}
  </span>
);

const CopyField = ({label, value, Icon}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg border transition-colors text-left"
      style={{background: surfaceAlt, borderColor: border}}>
      <span className="flex items-center gap-3 min-w-0">
        <Icon size={16} style={{color: amber}} className="shrink-0" />
        <span className="min-w-0">
          <span className="block text-xs" style={{color: textSecondary}}>
            {label}
          </span>
          <span className="block text-sm truncate" style={{color: textPrimary}}>
            {value}
          </span>
        </span>
      </span>
      {copied ? (
        <Check size={16} style={{color: teal}} />
      ) : (
        <Copy size={16} style={{color: textSecondary}} />
      )}
    </button>
  );
};

const ProjectCard = ({project}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{background: surface, borderColor: border}}>
      <div className="p-6">
        <h3 className="font-display text-xl" style={{color: textPrimary}}>
          {project.title}
        </h3>
        <p
          className="mt-2 text-sm"
          style={{color: textSecondary, lineHeight: 1.7}}>
          {project.tagline}
        </p>

        <ul className="mt-4 space-y-2">
          {project.features.map((f) => (
            <li
              key={f}
              className="flex gap-2 text-sm"
              style={{color: textSecondary}}>
              <span
                className="shrink-0 mt-2 w-1 h-1 rounded-full"
                style={{background: amber}}
              />
              <span style={{lineHeight: 1.7}}>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-5 flex items-center gap-1.5 text-sm w-full justify-between py-2 border-t"
          style={{color: teal, borderColor: border}}
          aria-expanded={open}>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium border"
              style={{borderColor: border, color: textPrimary}}>
              <GithubMark size={14} />
              Repo
            </a>
          </div>
        </button>
      </div>

      {open && (
        <div className="px-6 pb-6 -mt-2">
          <div
            className="rounded-lg p-4 text-sm"
            style={{
              background: surfaceAlt,
              color: textSecondary,
              lineHeight: 1.8,
            }}>
            {project.architecture}
          </div>
        </div>
      )}
    </div>
  );
};

/* ---------- main ---------- */
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
  };

  return (
    <div
      className="site-shell font-body min-h-screen"
      style={{background: bg, color: textPrimary}}>
      <FontStyles />

      {/* Nav */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          background: scrolled ? "rgba(11,18,32,0.88)" : "transparent",
          borderBottom: scrolled
            ? `1px solid ${border}`
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors"
                style={{color: textSecondary}}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = textPrimary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = textSecondary)
                }>
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md font-medium transition-opacity hover:opacity-90"
              style={{background: amber, color: amberDark}}>
              <Download size={14} />
              Download CV
            </a>
          </nav>

          <button
            className="md:hidden p-2 -mr-2"
            aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="md:hidden px-5 pb-6 flex flex-col gap-1"
            style={{background: bg, borderBottom: `1px solid ${border}`}}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base border-b"
                style={{borderColor: border}}>
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-4 inline-flex items-center justify-center gap-2 text-sm px-4 py-3 rounded-md font-medium"
              style={{background: amber, color: amberDark}}>
              <Download size={14} />
              Download CV
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="top"
        className="hero-section max-w-5xl mx-auto px-5 sm:px-8 pt-32 pb-16 sm:pt-44 sm:pb-20">
        <p className="eyebrow mb-6" style={{color: teal}}>
          กำลังหางาน Junior Full-Stack Developer
        </p>

        <h1
          className="font-display leading-tight"
          style={{fontSize: "clamp(2.2rem, 7vw, 3.8rem)"}}>
          สร้างระบบที่ใช้งานได้จริง
          <br />
          ตั้งแต่หน้าบ้านถึงฐานข้อมูล
          <span className="cursor-blink" style={{color: amber}}>
            _
          </span>
        </h1>

        <p
          className="mt-6 max-w-xl text-base sm:text-lg"
          style={{color: textSecondary, lineHeight: 1.75}}>
          นักศึกษาวิทยาการคอมพิวเตอร์ที่เน้นเขียนโค้ดสะอาดและแก้ปัญหาอย่างเป็นระบบ
          มีประสบการณ์ทำโปรเจกต์ Full-Stack ตั้งแต่ออกแบบฐานข้อมูล เขียน API
          ไปจนถึงดีพลอยใช้งานจริง
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{background: amber, color: amberDark}}>
            View Projects
            <ArrowRight size={16} />
          </a>
          {[
            {
              Icon: GithubMark,
              label: "GitHub",
              href: "https://github.com/Thanawat56",
            },
            {
              Icon: LinkedinMark,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/thanawat-nalongwongwatthana-51b321436/",
            },
          ].map(({Icon, label, href}) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="p-3 rounded-md border transition-colors"
              style={{borderColor: border, color: textSecondary}}
              onMouseEnter={(e) => (e.currentTarget.style.color = textPrimary)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = textSecondary)
              }>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-5 sm:px-8 py-16 border-t"
        style={{borderColor: border}}>
        <p className="section-kicker">01 / toolkit</p>
        <h2 className="font-display text-2xl sm:text-3xl">ทักษะทางเทคนิค</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border p-5"
              style={{background: surface, borderColor: border}}>
              <h3
                className="text-sm font-medium mb-3"
                style={{color: textSecondary}}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-md"
                    style={{
                      background: surfaceAlt,
                      color: textPrimary,
                      border: `1px solid ${border}`,
                    }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-5 sm:px-8 py-16 border-t"
        style={{borderColor: border}}>
        <p className="section-kicker">02 / selected work</p>
        <h2 className="font-display text-2xl sm:text-3xl">ผลงานเด่น</h2>
        <p className="mt-2 text-sm" style={{color: textSecondary}}>
          3 โปรเจกต์ Full-Stack ที่แสดงทักษะตั้งแต่ frontend, backend
          จนถึงการออกแบบระบบ
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* Contact / Footer */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-5 sm:px-8 py-16 border-t"
        style={{borderColor: border}}>
        <p className="section-kicker">03 / say hello</p>
        <h2 className="font-display text-2xl sm:text-3xl">ติดต่อ</h2>
        <p className="mt-2 text-sm" style={{color: textSecondary}}>
          สนใจร่วมงานหรือพูดคุยเพิ่มเติม ติดต่อได้ทุกช่องทางด้านล่าง
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <CopyField label="Email" value="nat.dev@example.com" Icon={Mail} />
            <CopyField label="Phone" value="+66 80 000 0000" Icon={Phone} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              required
              type="text"
              placeholder="ชื่อของคุณ"
              className="w-full px-4 py-3 rounded-lg text-sm outline-none border"
              style={{
                background: surfaceAlt,
                borderColor: border,
                color: textPrimary,
              }}
            />
            <input
              required
              type="email"
              placeholder="อีเมลของคุณ"
              className="w-full px-4 py-3 rounded-lg text-sm outline-none border"
              style={{
                background: surfaceAlt,
                borderColor: border,
                color: textPrimary,
              }}
            />
            <textarea
              required
              rows={3}
              placeholder="ข้อความ"
              className="w-full px-4 py-3 rounded-lg text-sm outline-none border resize-none"
              style={{
                background: surfaceAlt,
                borderColor: border,
                color: textPrimary,
              }}
            />
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-md text-sm font-medium transition-opacity hover:opacity-90"
              style={{background: amber, color: amberDark}}>
              {formSent ? "ส่งข้อความแล้ว" : "ส่งข้อความ"}
            </button>
          </form>
        </div>
      </section>

      <footer
        className="border-t py-8 text-center text-xs"
        style={{borderColor: border, color: textSecondary}}>
        © {new Date().getFullYear()} ณัฐ.dev — Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
