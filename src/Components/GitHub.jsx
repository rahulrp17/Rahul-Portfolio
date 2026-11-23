import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SOCIALS } from "../Data/siteData";

const USERNAME = "rahulrp17";
const PROFILE_URL = SOCIALS.github;
const API = "https://api.github.com";

/* Repos that are not worth showing in the "recent" grid (profile README, etc.) */
const SKIP = new Set(["rahulrp17", "Rahul"]);

const REPO_COPY = {
  "Rahul-Portfolio": "Animated portfolio built with React, Vite, Tailwind CSS and Framer Motion.",
  "Food-Delivery": "Responsive food delivery experience with a clean ordering flow and a modern UI.",
  AureliaStay: "Hotel booking platform with customer dashboard, admin tools and secure auth.",
  Authify: "Authentication system with secure signup, login and session handling.",
  "Weather-App": "Real-time weather app with location search and a clean, responsive layout.",
  Todo_Applicaton: "Task manager with add, edit, filter and delete flows in vanilla JavaScript.",
  Todo_Application: "Task manager with add, edit, filter and delete flows in vanilla JavaScript.",
  GenZRides: "Vehicle rental landing experience with a bold, responsive layout.",
  CraftAI: "E-commerce platform for artisans with AI recommendations and WhatsApp ordering.",
  "ThreeJs-Portfolio": "3D portfolio experiment built with Three.js.",
  "User-Management": "CRUD user management app with a Node, Express and MongoDB backend.",
};

const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#8b5cf6",
  Java: "#b07219",
  Python: "#3572a5",
  SCSS: "#c6538c",
  Shell: "#89e051",
};

const FALLBACK = {
  stats: { repos: 13, commits: 448, languages: 4, since: 2025, lastPush: "Nov 2026" },
  repos: [
    {
      name: "Rahul-Portfolio",
      description: REPO_COPY["Rahul-Portfolio"],
      language: "JavaScript",
      updated: "Nov 22, 2026",
      url: `${PROFILE_URL}/Rahul-Portfolio`,
    },
    {
      name: "Food-Delivery",
      description: REPO_COPY["Food-Delivery"],
      language: "JavaScript",
      updated: "Nov 18, 2026",
      url: `${PROFILE_URL}/Food-Delivery`,
    },
    {
      name: "Todo_Applicaton",
      description: REPO_COPY.Todo_Applicaton,
      language: "CSS",
      updated: "Oct 31, 2026",
      url: `${PROFILE_URL}/Todo_Applicaton`,
    },
    {
      name: "Weather-App",
      description: REPO_COPY["Weather-App"],
      language: "JavaScript",
      updated: "Oct 31, 2026",
      url: `${PROFILE_URL}/Weather-App`,
    },
  ],
};

const formatDate = (iso) => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

const monthYear = (iso) => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

function Icon({ children, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const STAT_ICONS = {
  repos: (
    <>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
      <path d="M4 17.5h16" />
      <path d="M9 7h7" />
    </>
  ),
  languages: (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </>
  ),
  commits: (
    <>
      <circle cx="7" cy="5" r="2" fill="currentColor" stroke="none" />
      <circle cx="7" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="7" cy="19" r="2" fill="currentColor" stroke="none" />
      <path d="M11 5h6.5M11 12h6.5M11 19h6.5" />
    </>
  ),
  since: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M8 2v4M16 2v4M3 10h18" />
    </>
  ),
};

export default function GitHub() {
  const [live, setLive] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      try {
        const getJson = (url, init) =>
          fetch(url, { ...init, signal: controller.signal })
            .then((response) => (response.ok ? response.json() : null))
            .catch(() => null);

        const [profile, repos, commitSearch] = await Promise.all([
          getJson(`${API}/users/${USERNAME}`),
          getJson(`${API}/users/${USERNAME}/repos?per_page=100&sort=pushed`),
          getJson(`${API}/search/commits?q=author:${USERNAME}&per_page=1`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
        ]);

        if (cancelled || !profile || !Array.isArray(repos)) return;

        const owned = repos.filter((repo) => !repo.fork);
        const languages = new Set(owned.map((repo) => repo.language).filter(Boolean));
        const sorted = [...owned].sort(
          (a, b) => new Date(b.pushed_at || 0) - new Date(a.pushed_at || 0)
        );
        const recent = sorted.filter((repo) => !SKIP.has(repo.name)).slice(0, 4);

        setLive({
          stats: {
            repos: profile.public_repos ?? owned.length,
            commits: commitSearch?.total_count ?? FALLBACK.stats.commits,
            languages: languages.size || FALLBACK.stats.languages,
            since: new Date(profile.created_at || Date.now()).getFullYear(),
            lastPush: sorted[0]?.pushed_at
              ? monthYear(sorted[0].pushed_at)
              : FALLBACK.stats.lastPush,
          },
          repos: recent.map((repo) => ({
            name: repo.name,
            description:
              REPO_COPY[repo.name] ||
              repo.description ||
              "A public repository from my GitHub profile.",
            language: repo.language || "Code",
            updated: formatDate(repo.pushed_at),
            url: repo.html_url,
          })),
        });
      } catch {
        // Offline or rate limited — the curated fallback stays on screen.
      }
    }

    load();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  const stats = live?.stats ?? FALLBACK.stats;
  const repos = live?.repos?.length ? live.repos : FALLBACK.repos;

  const statCards = [
    { key: "repos", label: "Public repositories", value: String(stats.repos) },
    { key: "commits", label: "Total commits", value: String(stats.commits) },
    {
      key: "languages",
      label: "Primary languages",
      value: String(stats.languages).padStart(2, "0"),
    },
    { key: "since", label: "On GitHub since", value: String(stats.since) },
  ];

  return (
    <section
      id="github"
      className="relative overflow-hidden border-t border-white/5 bg-[#0b0706] py-20 md:py-28 lg:py-32"
    >
      <div
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-[0.14]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-flame/[0.08] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-flame">
              <span className="h-px w-8 bg-flame" /> 05 / Open source
            </p>
            <h2 className="section-title mt-5 font-display uppercase leading-[0.88] tracking-tight">
              Building in
              <br />
              <span className="text-stroke">public</span>
            </h2>
          </div>
          <p
            className="reveal max-w-sm text-sm leading-relaxed text-white/50 lg:justify-self-end lg:pb-2"
            style={{ "--d": "120ms" }}
          >
            A live look at the repositories behind the work. I use GitHub to ship projects,
            document decisions and keep improving the details.
          </p>
        </div>

        <div className="reveal mt-8 flex flex-wrap items-center justify-between gap-3 sm:mt-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/45">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-flame" />
            </span>
            Live from GitHub
          </span>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:border-flame hover:bg-flame hover:text-white"
          >
            <FaGithub className="h-3 w-3" aria-hidden="true" />
            <span className="truncate">@{USERNAME}</span>
            <Icon className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </Icon>
          </a>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {statCards.map((stat, index) => (
            <article
              key={stat.key}
              className="glow-card feature-card reveal flex min-w-0 flex-col rounded-[22px] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[24px] sm:p-5"
              style={{ "--d": `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="icon-tile grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white sm:h-10 sm:w-10">
                  <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]">
                    {STAT_ICONS[stat.key]}
                  </Icon>
                </span>
                <span className="font-display text-[11px] tracking-widest text-white/30">
                  0{index + 1}
                </span>
              </div>

              <p className="mt-4 truncate font-display text-[clamp(1.5rem,3.4vw,2.3rem)] uppercase leading-none text-white sm:mt-5">
                {stat.value}
              </p>
              <p className="mt-2 text-[7.5px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-white/40 sm:text-[8px]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-3 sm:mt-16">
          <h3 className="font-display text-xl uppercase tracking-wide text-white sm:text-2xl">
            Recent repositories
          </h3>
          <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/30">
            Sorted by latest push
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {repos.map((repo, index) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="glow-card feature-card reveal group flex min-w-0 flex-col rounded-[22px] border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-flame/40 sm:rounded-[24px] sm:p-5"
              style={{ "--d": `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="min-w-0 truncate font-display text-lg uppercase tracking-wide text-white sm:text-xl">
                  {repo.name}
                </h4>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-white/45 transition-all duration-300 group-hover:border-flame group-hover:bg-flame group-hover:text-white">
                  <Icon className="h-3 w-3">
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </Icon>
                </span>
              </div>

              <p className="mt-2.5 line-clamp-2 flex-1 text-[11.5px] leading-relaxed text-white/50 sm:text-[13px]">
                {repo.description}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-[7.5px] font-semibold uppercase tracking-[0.14em] text-white/35 sm:text-[8px] sm:tracking-[0.16em]">
                <span className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: LANG_COLORS[repo.language] || "#fd2601" }}
                  />
                  <span className="truncate">{repo.language}</span>
                </span>
                <span className="shrink-0">Updated {repo.updated}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/30">
            Last push · {stats.lastPush}
          </p>
          <a
            href={`${PROFILE_URL}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-flame to-ember px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_40px_rgba(253,38,1,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(253,38,1,0.38)] sm:w-auto sm:py-3"
          >
            View all repositories
            <Icon className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </Icon>
          </a>
        </div>
      </div>
    </section>
  );
}
