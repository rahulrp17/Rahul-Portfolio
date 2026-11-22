import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

const SKILLS = [
  { name: "React", level: 90, icon: <FaReact />, color: "text-[#61DAFB]" },
  { name: "JavaScript", level: 88, icon: <FaJs />, color: "text-[#F7DF1E]" },
  { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
  { name: "HTML5", level: 95, icon: <FaHtml5 />, color: "text-[#E34F26]" },
  { name: "CSS3", level: 90, icon: <FaCss3Alt />, color: "text-[#1572B6]" },
  { name: "Node.js", level: 82, icon: <SiNodedotjs />, color: "text-[#5FA04E]" },
  { name: "Express", level: 80, icon: <SiExpress />, color: "text-white" },
  { name: "MongoDB", level: 80, icon: <SiMongodb />, color: "text-[#47A248]" },
  { name: "Redux", level: 78, icon: <SiRedux />, color: "text-[#764ABC]" },
  { name: "Framer Motion", level: 85, icon: <SiFramer />, color: "text-[#8B5CF6]" },
  { name: "GitHub", level: 86, icon: <FaGithub />, color: "text-white" },
];

const TOOLKIT = ["Figma", "Express", "REST APIs", "JWT", "Cloudinary", "Vite", "Git"];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/5 bg-[#0e0907] py-20 md:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[440px] w-[440px] rounded-full bg-ember/[0.06] blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-flame">
              <span className="h-px w-8 bg-flame" /> 02 / Skills
            </p>
            <h2 className="section-title mt-5 font-display uppercase leading-[0.88] tracking-tight">
              A sharp stack,
              <br />
              <span className="text-stroke">no filler</span>
            </h2>
          </div>
          <p
            className="reveal max-w-sm text-sm leading-relaxed text-white/50 lg:justify-self-end lg:pb-2"
            style={{ "--d": "120ms" }}
          >
            The tools I reach for when a project needs to look sharp, move smoothly and hold up
            in production. Depth over a long list.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.name}
              className="glow-card reveal group min-w-0 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] sm:p-5"
              style={{ "--d": `${(index % 5) * 60}ms` }}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-xl ${skill.color}`}
                >
                  {skill.icon}
                </span>
                <span className="font-display text-xs tracking-[0.12em] text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 truncate text-sm font-semibold text-white" title={skill.name}>
                {skill.name}
              </h3>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-flame to-ember"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-[9px] font-semibold text-white/40">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
            Also comfortable with
          </span>
          {TOOLKIT.map((tool) => (
            <span
              key={tool}
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
