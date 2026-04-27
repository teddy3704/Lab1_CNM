import Link from "next/link";

import { ProjectBriefForm } from "@/components/project-brief-form";
import { HighlightCard } from "@/components/highlight-card";
import {
  capabilityCards,
  designPrinciples,
  goals,
  labLens,
  milestones,
  profile,
  quickFacts,
  readinessChecklist,
  skills,
  studioStats,
  workflow,
} from "@/data/profile";

const capabilityCardClasses = {
  orange:
    "border-[#d9a46f]/70 bg-[linear-gradient(180deg,rgba(255,244,231,0.96),rgba(255,252,247,0.92))]",
  sky:
    "border-[#98c7c1]/70 bg-[linear-gradient(180deg,rgba(231,246,244,0.96),rgba(255,252,247,0.92))]",
  slate:
    "border-slate-300/80 bg-[linear-gradient(180deg,rgba(241,243,244,0.96),rgba(255,252,247,0.92))]",
} as const;

const capabilityAccentClasses = {
  orange: "bg-[#d56c2f]",
  sky: "bg-[#155e63]",
  slate: "bg-slate-700",
} as const;

const lensAccentClasses = {
  orange: "border-[#d9a46f]/45 bg-[#fff3e4] text-[#8d481e]",
  sky: "border-[#98c7c1]/45 bg-[#e8f5f3] text-[#0f4f48]",
  slate: "border-slate-300/70 bg-slate-100 text-slate-700",
} as const;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-16 text-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-136 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_70%)]" />
        <div className="absolute left-[-8%] top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(213,108,47,0.28),transparent_68%)] animate-[float_14s_ease-in-out_infinite]" />
        <div className="absolute right-[-6%] top-36 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(21,94,99,0.16),transparent_68%)] animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 left-[22%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.42),transparent_70%)] animate-[float_12s_ease-in-out_infinite]" />
      </div>

      <div className="relative mx-auto max-w-360 px-6 py-6 sm:px-10 lg:px-16 lg:py-10">
        <header className="studio-panel animate-[reveal_700ms_ease-out] rounded-4xl px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-900/10 bg-[#132622] font-display text-xl text-white">
                PT
              </div>
              <div>
                <p className="section-eyebrow">CTK46 / interface studio</p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  Bai nop duoc dong goi nhu mot critique board: co hierarchy, co system,
                  va co mot lat cat fullstack that su de demo.
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
              <Link href="#architecture" className="transition hover:text-slate-950">
                Kien truc
              </Link>
              <Link href="#workflow" className="transition hover:text-slate-950">
                Quy trinh
              </Link>
              <Link href="#brief" className="transition hover:text-slate-950">
                Fullstack brief
              </Link>
              <span className="rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-700">
                lint + build ready
              </span>
            </nav>
          </div>
        </header>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
          <article className="studio-panel relative animate-[reveal_850ms_ease-out] rounded-[2.8rem] p-8 xl:p-12">
            <div className="pointer-events-none absolute -right-16 -top-8 h-48 w-48 rounded-full bg-[#4b8f87]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 left-[38%] h-40 w-40 rounded-full bg-[#d56c2f]/12 blur-3xl" />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="section-eyebrow">personal interface lab</span>
                <span className="rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-700">
                  Next 16 / React 19
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.8rem,8vw,6.8rem)] leading-[0.92] tracking-[-0.045em] text-slate-950">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700 sm:text-2xl sm:leading-9">
                {profile.tagline}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
                {profile.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
                <span className="rounded-full border border-slate-300/80 bg-white/80 px-4 py-2 font-medium">
                  MSSV {profile.studentId}
                </span>
                <span className="rounded-full border border-slate-300/80 bg-white/80 px-4 py-2 font-medium">
                  Lop {profile.className}
                </span>
                <span className="rounded-full border border-slate-300/80 bg-white/80 px-4 py-2 font-medium">
                  {profile.course}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`https://github.com/${profile.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#132622] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f1f1b]"
                >
                  GitHub ca nhan
                </Link>
                <Link
                  href="#brief"
                  className="rounded-full border border-[#d9a46f] bg-[#fff8f0] px-6 py-3 text-sm font-semibold text-[#8d481e] transition hover:bg-[#fff1df]"
                >
                  Mo brief generator
                </Link>
                <Link
                  href="#workflow"
                  className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white"
                >
                  Xem quy trinh
                </Link>
              </div>

              <div className="mt-10 grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-4xl bg-[#132622] p-6 text-[#f6efe4] shadow-[0_24px_60px_rgba(18,32,29,0.18)]">
                  <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#9fc0bb]">
                    critique thesis
                  </p>
                  <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.03em] text-white">
                    Bai nop nay duoc lam de nguoi xem thay ca tu duy va cach thuc thi.
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[#d6e6e2]">{profile.intro}</p>

                  <div className="mt-6 grid gap-4">
                    {quickFacts.slice(0, 3).map((fact) => (
                      <div
                        key={fact.label}
                        className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                      >
                        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#9fc0bb]">
                          {fact.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {studioStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.8rem] border border-slate-900/10 bg-white/78 p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]"
                    >
                      <p className="font-display text-5xl leading-none text-slate-950">
                        {stat.value}
                      </p>
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
                        {stat.label}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-700">{stat.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <aside className="grid gap-6">
            <article className="studio-panel animate-[reveal_950ms_ease-out] rounded-[2.4rem] p-7">
              <p className="section-eyebrow">critique board</p>
              <h2 className="mt-4 font-display text-[2.15rem] leading-tight tracking-[-0.035em] text-slate-950">
                Dep hon khi nguoi xem nhin thay ca logic lam bai, khong chi thay be mat.
              </h2>

              <div className="mt-6 grid gap-4">
                {labLens.map((lens) => (
                  <article
                    key={lens.title}
                    className="rounded-[1.6rem] border border-slate-900/8 bg-white/72 p-5"
                  >
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.24em] ${lensAccentClasses[lens.accent]}`}
                    >
                      {lens.title}
                    </span>
                    <p className="mt-4 text-sm leading-6 text-slate-700">{lens.description}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="studio-panel-dark animate-[reveal_1050ms_ease-out] rounded-[2.4rem] p-7 text-[#f6efe4]">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#c8ddd8]">
                stack palette
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6 h-px w-full bg-white/10" />
              <p className="mt-6 text-base leading-7 text-[#d6e6e2]">
                Muc tieu la tao cam giac mot bai nop duoc giai quyet nhu mot san
                pham that: co ngon ngu thi giac, co metadata, va co mot trai
                nghiem fullstack de nguoi xem khong chi doc ma con tuong tac.
              </p>
            </article>
          </aside>
        </section>

        <section
          id="architecture"
          className="mt-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr] animate-[reveal_1100ms_ease-out]"
        >
          <article className="studio-panel rounded-[2.4rem] p-8 xl:p-10">
            <p className="section-eyebrow">
              design principles
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight tracking-[-0.03em] text-slate-950">
              Hierarchy duoc dung nhu mot cong cu day noi dung, khong phai chi de trang tri.
            </h2>

            <div className="mt-8 space-y-6">
              {designPrinciples.map((principle, index) => (
                <div
                  key={principle.title}
                  className="rounded-[1.6rem] border border-slate-900/10 bg-white/72 p-5"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500">
                    0{index + 1} / {principle.title}
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="studio-panel rounded-[2.4rem] p-8 xl:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-eyebrow">capability matrix</p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-0.03em] text-slate-950">
                  Ba lop nang luc duoc xep chong len nhau de bai nop co trong luong hon.
                </h2>
              </div>

              <span className="rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-700">
                presentation + engineering
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {capabilityCards.map((card) => (
                <article
                  key={card.title}
                  className={`rounded-[1.8rem] border p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)] ${capabilityCardClasses[card.accent]}`}
                >
                  <div className={`h-1.5 w-16 rounded-full ${capabilityAccentClasses[card.accent]}`} />
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {goals.map((goal) => (
                <div
                  key={goal}
                  className="rounded-[1.7rem] border border-slate-900/10 bg-white/75 p-5"
                >
                  <div className="h-2 w-2 rounded-full bg-[#d56c2f]" />
                  <p className="mt-4 text-sm leading-6 text-slate-700">{goal}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-10 grid gap-6 xl:grid-cols-[1.02fr_0.98fr] animate-[reveal_1200ms_ease-out]">
          <article className="studio-panel rounded-[2.4rem] p-8 xl:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-eyebrow">build journey</p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-0.03em] text-slate-950">
                  Tien trinh duoc chia thanh nhung moc de moi buoc nang cap deu co du lieu de bao ve.
                </h2>
              </div>

              <span className="rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-700">
                4 milestones
              </span>
            </div>

            <div className="mt-8 space-y-6">
              {milestones.map((milestone, index) => (
                <div key={milestone.title} className="grid gap-4 md:grid-cols-[auto_1fr]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#132622] font-mono text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <div className="rounded-[1.7rem] border border-slate-900/10 bg-white/72 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
                    <h3 className="text-lg font-semibold text-slate-950">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-700">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article
            id="workflow"
            className="studio-panel rounded-[2.4rem] p-8 xl:p-10"
          >
            <p className="section-eyebrow">working method</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-0.03em] text-slate-950">
              Quy trinh lam bai duoc giu nhu mot vong iterate that, khong lam dep sau.
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <HighlightCard
                title="So thich"
                description={profile.hobbies}
                tone="orange"
              />
              <HighlightCard
                title="Dinh huong"
                description={profile.direction}
                tone="sky"
              />
            </div>

            <ol className="mt-8 space-y-4">
              {workflow.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-[1.6rem] border border-slate-900/10 bg-white/72 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#efe3d4] font-mono text-xs font-semibold text-[#8d481e]">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-base leading-7 text-slate-700">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] animate-[reveal_1250ms_ease-out]">
          <article className="studio-panel-dark rounded-[2.4rem] p-7 text-[#f6efe4]">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#c8ddd8]">
              submission readiness
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight tracking-[-0.03em] text-white">
              Moi diem check duoc trinh bay nhu mot deliverable, khong chi la checklist.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#d6e6e2]">
              {profile.direction}
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {readinessChecklist.map((item) => (
              <article key={item.label} className="studio-panel rounded-4xl p-5">
                <p className="section-eyebrow">{item.label}</p>
                <p className="mt-4 text-base leading-7 text-slate-700">{item.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 animate-[reveal_1300ms_ease-out]">
          <ProjectBriefForm />
        </section>

        <footer className="studio-panel mt-10 rounded-4xl px-6 py-6 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="section-eyebrow">closing note</p>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-700">
                Project nay duoc thiet ke theo huong server-first: giao dien lam cho de
                nho, metadata lam cho de trinh bay, va Server Action lam cho tinh than
                fullstack hien dien dung noi dung.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.6rem] border border-slate-900/10 bg-white/72 p-4">
                <p className="section-eyebrow">Server-first</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Form co validate, co pending state va co ket qua typed tu action.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-slate-900/10 bg-white/72 p-4">
                <p className="section-eyebrow">Metadata-ready</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Layout, robots, sitemap va not-found duoc chot de phu hop bai nop.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-slate-900/10 bg-white/72 p-4">
                <p className="section-eyebrow">Demo-ready</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Cau truc page va fullstack slice du de thuyet trinh tren lop hoac review.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
