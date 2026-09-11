import {useState, useEffect} from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  Download,
  ChevronDown,
  Copy,
  Check,
  ArrowRight,
  Code2,
  Server,
  Database,
  Wrench,
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
const bg = "#EEF3F7";
const surface = "#FFFFFF";
const surfaceAlt = "#EEF3F7";
const border = "rgba(15,31,52,0.12)";
const textPrimary = "#14243A";
const textSecondary = "#5A6A80";
const amber = "#D88A16";
const amberDark = "#281700";
const teal = "#087F78";

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
  {label: "เกี่ยวกับฉัน", href: "#about"},
  {label: "ทักษะ", href: "#skills"},
  {label: "ผลงาน", href: "#projects"},
  {label: "การศึกษา", href: "#education"},
  {label: "Vibe Coding", href: "#vibe-coding"},
  {label: "ติดต่อ", href: "#contact"},
];

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
  },
  {title: "Frameworks & API", icon: Server, items: ["REST API", "Entity Framework Core", "n8n"]},
  {title: "Database & AI", icon: Database, items: ["MySQL", "AI", "RAG"]},
  {
    title: "Tools & Workflow",
    icon: Wrench,
    items: ["Git", "GitHub", "Teamwork", "Problem Solving"],
  },
];

const projects = [
  {
    id: "smart-weather",
    title: "Smart-Weather-Report",
    tagline: "ระบบรายงานสภาพอากาศและให้คำแนะนำด้านการเกษตรด้วย n8n และ AI",
    problem: "เกษตรกรต้องใช้เวลารวบรวมข้อมูลสภาพอากาศและวิเคราะห์ผลกระทบต่อการเพาะปลูก",
    solution: "สร้าง workflow อัตโนมัติที่ดึงข้อมูลอากาศ วิเคราะห์ด้วย AI และส่งคำแนะนำผ่าน Discord",
    role: "ออกแบบ workflow เชื่อม API, Webhook, AI และ Google Sheets พร้อมทดสอบการทำงาน",
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
    repoUrl: "https://github.com/Thanawat56/Smart-Weather-Report-main.git",
  },
  {
    id: "doclibrary",
    title: "DocLibrary — คลังหนังสือ",
    tagline: "เว็บแอปพลิเคชันสำหรับจัดเก็บ ค้นหา และจัดการข้อมูลหนังสือ",
    problem: "การจัดเก็บข้อมูลหนังสือแบบเดิมทำให้ค้นหาและแก้ไขรายละเอียดได้ไม่สะดวก",
    solution: "พัฒนาเว็บแอปสำหรับจัดการข้อมูลหนังสือ ค้นหา และเรียกดูรายละเอียดจากคลังข้อมูล",
    role: "พัฒนา frontend ด้วย React และออกแบบหน้าจอสำหรับเพิ่ม ค้นหา และจัดการหนังสือ",
    features: [
      "ระบบจัดการข้อมูลหนังสือและรายละเอียดของหนังสือ",
      "ค้นหาและเรียกดูหนังสือจากคลังข้อมูลได้อย่างสะดวก",
      "ออกแบบหน้าเว็บให้ใช้งานง่ายสำหรับการจัดการและค้นหาหนังสือ",
    ],
    stack: ["React", "JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/Thanawat56/DocLibrary-ClientServer-Master-Thanawat.git",
  },
  {
    id: "smart-plan-planting",
    title: "SMART-PLAN-PLANTING — Agricultural Chatbot",
    tagline: "แชทบอทให้ข้อมูลและคำแนะนำด้านการเกษตรด้วย AI และระบบ RAG",
    problem: "ผู้ใช้งานต้องการคำแนะนำด้านการเพาะปลูกที่อ้างอิงจากข้อมูลเฉพาะทางและค้นหาได้รวดเร็ว",
    solution: "สร้างแชทบอทที่ค้นข้อมูลจาก Knowledge Base ด้วย RAG ก่อนให้ AI สร้างคำตอบ",
    role: "เตรียมเอกสาร สร้างระบบค้นหาด้วย FAISS และเชื่อมขั้นตอน RAG กับ OpenAI",
    features: [
      "แชทบอทตอบคำถามเกี่ยวกับการเพาะปลูกและข้อมูลด้านการเกษตร",
      "ใช้ระบบ RAG เพื่อค้นหาข้อมูลจาก Knowledge Base ก่อนสร้างคำตอบ",
      "ประมวลผลข้อมูลเอกสารและใช้ AI สร้างคำตอบให้เหมาะกับคำถามของผู้ใช้",
    ],
    stack: ["Python", "Google Colab", "RAG", "AI", "FAISS", "OpenAI"],
    repoUrl: "https://github.com/Thanawat56/SMART-PLAN-PLANTING",
  },
];

const vibeCodingSteps = [
  {
    number: "01",
    title: "เริ่มจากโจทย์และแบ่งงาน",
    tools: "VS Code + Copilot Chat",
    prompt:
      "ช่วยวิเคราะห์โจทย์นี้ แบ่งเป็นงานย่อยที่ทดสอบได้ และบอกไฟล์ที่ควรแก้ก่อนเริ่มเขียนโค้ด",
    detail:
      "ผมให้ AI ช่วยทำความเข้าใจ requirement และหา code path ที่เกี่ยวข้องก่อนลงมือ เพื่อให้แต่ละ prompt มีขอบเขตชัดและตรวจผลได้",
  },
  {
    number: "02",
    title: "สร้างทีละส่วนและให้บริบท",
    tools: "React + Vite + Tailwind CSS",
    prompt:
      "แก้เฉพาะ component นี้ รักษา style เดิม เพิ่ม responsive layout และอย่าเปลี่ยน public API ที่มีอยู่",
    detail:
      "ผมแนบไฟล์หรือ symbol ที่เกี่ยวข้อง ระบุข้อจำกัด และขอให้แก้แบบเล็กที่สุด ทำให้ review diff ได้ง่ายและลดผลกระทบกับส่วนอื่น",
  },
  {
    number: "03",
    title: "ตรวจผลและแก้จากหลักฐาน",
    tools: "npm run build + diagnostics + browser preview",
    prompt:
      "หลังแก้แล้ว ช่วยตรวจ compile error, responsive behavior และปุ่ม/ลิงก์ที่กดได้จริง พร้อมสรุปสิ่งที่ยังเสี่ยง",
    detail:
      "ปัญหาที่เจอคือ Tailwind ไม่ถูกโหลดและปุ่ม Architecture มีลิงก์ซ้อนอยู่ ผมใช้ build, diagnostics และ browser smoke check แยกสาเหตุ ก่อนแก้ที่ต้นเหตุ",
  },
  {
    number: "04",
    title: "รักษาความปลอดภัยก่อนส่งงาน",
    tools: "Environment variables + .gitignore",
    prompt:
      "ตรวจโค้ดว่ามี API key, password หรือ secret ฝังอยู่หรือไม่ และแนะนำวิธีเรียกผ่าน environment variable",
    detail:
      "ผมไม่ใส่ API Key หรือ Password ลงใน repository ใช้ไฟล์ .env.local ที่ไม่ commit และให้ backend หรือ server-side code เป็นผู้เรียก API ที่ต้องใช้ secret",
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

        <div className="mt-5 space-y-4">
          {[
            ["Problem", project.problem],
            ["Solution", project.solution],
            ["My Role", project.role],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{color: amber}}>
                {label}
              </p>
              <p className="mt-1 text-sm" style={{color: textSecondary, lineHeight: 1.7}}>
                {value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wide" style={{color: amber}}>
          Tech
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium border"
            style={{borderColor: border, color: textPrimary}}>
            <GithubMark size={14} />
            Demo
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-5 flex items-center gap-1.5 text-sm w-full justify-between py-2 border-t"
          style={{color: teal, borderColor: border}}
          aria-expanded={open}>
          <span>ดูรายละเอียดการทำงาน</span>
          <ChevronDown
            size={16}
            className="transition-transform"
            style={{transform: open ? "rotate(180deg)" : "rotate(0deg)"}}
          />
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
            {project.architecture || project.features.join(" ")}
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div
      className="site-shell font-body min-h-screen"
      style={{background: bg, color: textPrimary}}>
      <FontStyles />

      {/* Nav */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          background: scrolled ? "rgba(238,243,247,0.92)" : "transparent",
          borderBottom: scrolled
            ? `1px solid ${border}`
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg" style={{color: textPrimary}}>
            Thanawat.dev
          </a>

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
              href="/CV%20Thanawat.jpg"
              download="CV Thanawat.jpg"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md font-medium transition-opacity hover:opacity-90"
              style={{background: amber, color: amberDark}}>
              <Download size={14} />
              ขอ Resume
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
              href="/CV%20Thanawat.jpg"
              download="CV Thanawat.jpg"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 text-sm px-4 py-3 rounded-md font-medium"
              style={{background: amber, color: amberDark}}>
              <Download size={14} />
              ขอ Resume
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="top"
        className="hero-section max-w-5xl mx-auto px-5 sm:px-8 pt-32 pb-16 sm:pt-44 sm:pb-20">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_250px]">
          <div>
            <p className="eyebrow mb-6" style={{color: teal}}>
              ฝึกงานตำแหน่ง Full-Stack Developer
            </p>

            <h1
              className="font-display leading-tight"
              style={{fontSize: "clamp(2.2rem, 7vw, 3.8rem)"}}>
              ธนวัฒน์ ณรงค์วงศ์วัฒนา
              <br />
              <span style={{color: teal}}>Full-Stack Developer</span>
              <span className="cursor-blink" style={{color: amber}}>
                _
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl text-base sm:text-lg"
              style={{color: textSecondary, lineHeight: 1.75}}>
              นักศึกษาชั้นปีที่ 4 สาขาวิชาการคอมพิวเตอร์ มหาวิทยาลัยศรีปทุม
              มีพื้นฐานการเขียนโปรแกรม ออกแบบฐานข้อมูล และพัฒนาเว็บ/แอปพลิเคชัน
              พร้อมเรียนรู้เทคโนโลยีใหม่และทำงานเป็นทีม
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium transition-transform hover:-translate-y-0.5"
                style={{background: amber, color: amberDark}}>
                ดูผลงาน
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium border"
                style={{borderColor: border, color: textPrimary}}>
                ติดต่อผม
              </a>
              <a
                href="https://www.linkedin.com/in/thanawat-nalongwongwatthana-51b321436/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-md text-sm font-medium border"
                style={{borderColor: border, color: textSecondary}}>
                <LinkedinMark size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-62.5">
            <div className="absolute -inset-3 rounded-2xl border" style={{borderColor: "rgba(8,127,120,0.2)"}} />
            <img
              src="/CV%20Thanawat.jpg"
              alt="ธนวัฒน์ ณรงค์วงศ์วัฒนา"
              className="relative aspect-4/5 w-full rounded-xl object-cover object-top shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-5 sm:px-8 py-16 border-t"
        style={{borderColor: border}}>
        <p className="section-kicker">01 / about me</p>
        <h2 className="font-display text-2xl sm:text-3xl">เกี่ยวกับฉัน</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <p className="text-base" style={{color: textSecondary, lineHeight: 1.9}}>
            นักศึกษาชั้นปีที่ 4 สาขาวิชาการคอมพิวเตอร์ มหาวิทยาลัยศรีปทุม
            มีพื้นฐานการเขียนโปรแกรม การออกแบบฐานข้อมูล และการพัฒนาเว็บ/แอปพลิเคชัน
            ผ่านการทำโปรเจกต์ระบบคลังหนังสือและแอปบันทึกการออกกำลังกาย
            สนใจตำแหน่ง Full-Stack Developer หรือตำแหน่งใกล้เคียง
          </p>
          <div className="rounded-xl border p-5" style={{background: surface, borderColor: border}}>
            <p className="text-sm font-medium" style={{color: teal}}>จุดแข็งในการทำงาน</p>
            <p className="mt-3 text-sm" style={{color: textSecondary, lineHeight: 1.8}}>
              Teamwork · Leadership · Problem Solving · Communication · Time Management · Adaptability
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-5 sm:px-8 py-16 border-t"
        style={{borderColor: border}}>
        <p className="section-kicker">02 / toolkit</p>
        <h2 className="font-display text-2xl sm:text-3xl">ทักษะทางเทคนิค</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{background: surface, borderColor: border}}>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 group-hover:bg-teal-700 group-hover:text-white"
                  style={{background: "rgba(8,127,120,0.1)", color: teal}}>
                  <group.icon size={19} strokeWidth={1.8} />
                </span>
                <h3 className="text-sm font-medium" style={{color: textSecondary}}>
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-md transition duration-200 hover:-translate-y-0.5 hover:border-teal-600 hover:text-teal-700"
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
        <p className="section-kicker">03 / selected work</p>
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

      {/* Education */}
      <section
        id="education"
        className="max-w-5xl mx-auto px-5 sm:px-8 py-16 border-t"
        style={{borderColor: border}}>
        <p className="section-kicker">04 / education</p>
        <h2 className="font-display text-2xl sm:text-3xl">การศึกษาและภาษา</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border p-6" style={{background: surface, borderColor: border}}>
            <p className="text-sm" style={{color: amber}}>พ.ศ. 2566 - ปัจจุบัน</p>
            <h3 className="mt-3 font-display text-xl" style={{color: textPrimary}}>
              มหาวิทยาลัยศรีปทุม
            </h3>
            <p className="mt-2 text-sm" style={{color: textSecondary, lineHeight: 1.8}}>
              คณะเทคโนโลยีสารสนเทศ · สาขาวิชาการคอมพิวเตอร์
              <br />ระดับปริญญาตรี · เกรดเฉลี่ยสะสม 3.43
            </p>
            <p className="mt-4 text-xs font-medium" style={{color: teal}}>รายวิชาที่เกี่ยวข้อง</p>
            <p className="mt-2 text-sm" style={{color: textSecondary, lineHeight: 1.8}}>
              การพัฒนาเว็บและซอฟต์แวร์ · ระบบฐานข้อมูล · โครงสร้างข้อมูลและอัลกอริทึม · ปัญญาประดิษฐ์ · การเชื่อมต่อ Frontend และ Backend
            </p>
          </article>
          <article className="rounded-xl border p-6" style={{background: surface, borderColor: border}}>
            <p className="text-sm font-medium" style={{color: teal}}>ทักษะภาษา</p>
            <div className="mt-5 space-y-4">
              <div>
                <div className="flex justify-between text-sm" style={{color: textPrimary}}>
                  <span>ภาษาไทย</span><span style={{color: textSecondary}}>ดีเยี่ยม</span>
                </div>
                <div className="mt-2 h-2 rounded-full" style={{background: surfaceAlt}}>
                  <div className="h-2 w-full rounded-full" style={{background: teal}} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm" style={{color: textPrimary}}>
                  <span>ภาษาอังกฤษ</span><span style={{color: textSecondary}}>ดี</span>
                </div>
                <div className="mt-2 h-2 rounded-full" style={{background: surfaceAlt}}>
                  <div className="h-2 w-3/4 rounded-full" style={{background: amber}} />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Vibe Coding process */}
      <section
        id="vibe-coding"
        className="max-w-5xl mx-auto px-5 sm:px-8 py-16 border-t"
        style={{borderColor: border}}>
        <p className="section-kicker">05 / working with AI</p>
        <h2 className="font-display text-2xl sm:text-3xl">
          กระบวนการ Vibe Coding ของผม
        </h2>
        <p className="mt-2 max-w-2xl text-sm" style={{color: textSecondary, lineHeight: 1.8}}>
          ใช้ AI เป็นคู่คิดเพื่อสำรวจ ออกแบบ และตรวจงาน โดยยังเป็นคนตัดสินใจ ตรวจสอบ และรับผิดชอบคุณภาพของโค้ดทุกขั้นตอน
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {vibeCodingSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-xl border p-5"
              style={{background: surface, borderColor: border}}>
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-sm" style={{color: amber}}>
                  {step.number}
                </span>
                <span className="text-right text-xs" style={{color: teal}}>
                  {step.tools}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl" style={{color: textPrimary}}>
                {step.title}
              </h3>
              <div
                className="mt-4 rounded-lg border p-3 text-xs"
                style={{background: surfaceAlt, borderColor: border, color: teal, lineHeight: 1.7}}>
                “{step.prompt}”
              </div>
              <p className="mt-4 text-sm" style={{color: textSecondary, lineHeight: 1.8}}>
                {step.detail}
              </p>
            </article>
          ))}
        </div>

        <div
          className="mt-5 rounded-xl border p-5"
          style={{background: "rgba(242,169,59,0.08)", borderColor: "rgba(242,169,59,0.25)"}}>
          <h3 className="text-sm font-semibold" style={{color: amber}}>
            Non-negotiable: ความปลอดภัยและคุณภาพ
          </h3>
          <p className="mt-2 text-sm" style={{color: textSecondary, lineHeight: 1.8}}>
            รองรับ Desktop, Tablet และ Mobile ด้วย responsive layout, ตรวจปุ่มและลิงก์ทุกจุดก่อนส่งงาน, แก้ Critical Error จากหลักฐาน และห้ามฝัง API Key หรือ Password ลงใน Code Repository
          </p>
        </div>
      </section>

      {/* Contact / Footer */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-5 sm:px-8 py-16 border-t"
        style={{borderColor: border}}>
        <p className="section-kicker">06 / say hello</p>
        <h2 className="font-display text-2xl sm:text-3xl">ติดต่อ</h2>
        <p className="mt-2 text-sm" style={{color: textSecondary}}>
          สนใจร่วมงานหรือพูดคุยเพิ่มเติม ติดต่อได้ทุกช่องทางด้านล่าง
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <CopyField label="Email" value="dogop7@gmail.com" Icon={Mail} />
            <CopyField label="Phone" value="063-218-8850" Icon={Phone} />
          </div>
        </div>
      </section>

      <footer
        className="border-t py-8 text-center text-xs"
        style={{borderColor: border, color: textSecondary}}>
        © {new Date().getFullYear()} Thanawat — Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
