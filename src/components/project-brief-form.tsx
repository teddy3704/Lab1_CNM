"use client";

import { useActionState } from "react";

import { createProjectBrief } from "@/app/actions";
import type { ProjectBriefState } from "@/app/actions";
import { briefOptions } from "@/data/profile";

const initialState: ProjectBriefState = {
  status: "idle",
  message:
    "Dien mot brief ngan, server se bien no thanh mot creative blueprint co the dung de critique hoac trien khai tiep.",
  fieldErrors: {},
  blueprint: null,
};

const inputClassName =
  "mt-2 w-full rounded-[1.15rem] border border-white/14 bg-white/7 px-4 py-3 text-sm text-white placeholder:text-white/42 transition focus:border-[#d9a46f] focus:bg-white/10 focus:outline-none";

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm font-medium text-[#ffd0bf]">{message}</p>;
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-[#f6efe4] px-6 py-3 text-sm font-semibold text-[#132622] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Dang tong hop creative blueprint..." : "Sinh brief tu server"}
    </button>
  );
}

function ScoreCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-black/10 p-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9fc0bb]">
        {label}
      </p>
      <p className="mt-3 font-display text-3xl tracking-[-0.04em] text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[#d7e5e2]">{note}</p>
    </article>
  );
}

function PendingBlueprint() {
  return (
    <div className="mt-6 animate-pulse space-y-4">
      <div className="h-6 w-40 rounded-full bg-white/10" />
      <div className="h-14 rounded-3xl bg-white/8" />
      <div className="grid gap-3 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-32 rounded-3xl bg-white/8" />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-36 rounded-[1.6rem] bg-white/8" />
        <div className="h-36 rounded-[1.6rem] bg-white/8" />
      </div>
      <div className="h-52 rounded-[1.8rem] bg-white/8" />
    </div>
  );
}

function EmptyBlueprint() {
  return (
    <div className="mt-6 rounded-[1.8rem] border border-dashed border-white/14 bg-black/10 p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9fc0bb]">
        awaiting input
      </p>
      <h3 className="mt-4 max-w-xl font-display text-3xl tracking-[-0.03em] text-white sm:text-4xl">
        Cho server mot brief co ngu canh, nhan lai mot ban do thiet ke co the dem di critique.
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[#d7e5e2]">
        Output se gom scoring, content lanes, huong visual, sprint plan, risk watch
        va next step de bien mot y tuong mo ho thanh huong trien khai ro hon.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-white/7 p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9fc0bb]">
            01 / Scorecard
          </p>
          <p className="mt-3 text-sm leading-6 text-white">
            Danh gia muc do visual weight, system clarity va demo readiness.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/7 p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9fc0bb]">
            02 / Content lanes
          </p>
          <p className="mt-3 text-sm leading-6 text-white">
            Goi y bo cuc theo cac tang doc: hero, proof, interaction va handoff.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/7 p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9fc0bb]">
            03 / Delivery lens
          </p>
          <p className="mt-3 text-sm leading-6 text-white">
            Tra ve sprint plan, rui ro can canh giam va buoc tiep theo de chot scope.
          </p>
        </article>
      </div>
    </div>
  );
}

export function ProjectBriefForm() {
  const [state, formAction, pending] = useActionState(createProjectBrief, initialState);

  const statusClassName =
    state.status === "error"
      ? "text-[#ffd0bf]"
      : state.status === "success"
        ? "text-[#c9f3e8]"
        : "text-[#d7e5e2]";

  return (
    <section
      id="brief"
      className="relative overflow-hidden rounded-[2.8rem] border border-[#132622]/10 bg-[#132622] p-6 text-[#f7efe6] shadow-[0_32px_90px_rgba(18,32,29,0.28)] sm:p-8 xl:p-10"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_70%)]" />
        <div className="absolute -right-28 top-10 h-64 w-64 rounded-full bg-[#d56c2f]/12 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-[#4b8f87]/14 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#9fc0bb]">
              fullstack slice / server actions
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Server khong chi validate form. No bien brief thanh mot creative blueprint co the dung ngay.
            </h2>
          </div>

          <div className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-[#d7e5e2]">
            zod + typed return
          </div>
        </div>

        <form action={formAction} className="mt-8 grid gap-8 xl:grid-cols-[0.94fr_1.06fr]">
          <div>
            <p className="max-w-xl text-base leading-7 text-[#d7e5e2]">
              Day la phan cho thay bai nop nay da di qua muc landing page trinh bay.
              Form se lay ngu canh review, uu tien sang tao va timeline de tra ve mot ban do
              thiet ke co scoring, cac tang noi dung va goi y delivery tu server.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-[#d7e5e2]">Ten nguoi gui</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Phan Van Tien"
                    className={inputClassName}
                  />
                  <FieldError message={state.fieldErrors.name} />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-[#d7e5e2]">Email lien he</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="tien@example.com"
                    className={inputClassName}
                  />
                  <FieldError message={state.fieldErrors.email} />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <label className="block">
                  <span className="text-sm font-medium text-[#d7e5e2]">Loai project</span>
                  <select
                    name="projectType"
                    required
                    defaultValue=""
                    className={inputClassName}
                  >
                    <option value="" className="text-slate-900">
                      Chon project
                    </option>
                    {briefOptions.projectTypes.map((option) => (
                      <option key={option.value} value={option.value} className="text-slate-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <FieldError message={state.fieldErrors.projectType} />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-[#d7e5e2]">Huong thi giac</span>
                  <select name="vibe" required defaultValue="" className={inputClassName}>
                    <option value="" className="text-slate-900">
                      Chon visual direction
                    </option>
                    {briefOptions.vibes.map((option) => (
                      <option key={option.value} value={option.value} className="text-slate-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <FieldError message={state.fieldErrors.vibe} />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-[#d7e5e2]">Timeline</span>
                  <select
                    name="timeline"
                    required
                    defaultValue=""
                    className={inputClassName}
                  >
                    <option value="" className="text-slate-900">
                      Chon timeline
                    </option>
                    {briefOptions.timelines.map((option) => (
                      <option key={option.value} value={option.value} className="text-slate-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <FieldError message={state.fieldErrors.timeline} />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-[#d7e5e2]">Doi tuong review chinh</span>
                <select name="audience" required defaultValue="" className={inputClassName}>
                  <option value="" className="text-slate-900">
                    Chon audience lens
                  </option>
                  {briefOptions.audiences.map((option) => (
                    <option key={option.value} value={option.value} className="text-slate-900">
                      {option.label}
                    </option>
                  ))}
                </select>
                <FieldError message={state.fieldErrors.audience} />
              </label>

              <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-white">Creative priority</p>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-[#d7e5e2]">
                      Chon mot lens de server dat dung trong tam khi sap xep hierarchy va delivery.
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#9fc0bb]">
                    choose one
                  </span>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {briefOptions.priorities.map((option, index) => (
                    <label key={option.value} className="group block cursor-pointer">
                      <input
                        type="radio"
                        name="priority"
                        value={option.value}
                        required={index === 0}
                        className="peer sr-only"
                      />
                      <div className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 transition duration-200 group-hover:border-[#d9a46f]/45 group-hover:bg-white/10 peer-checked:border-[#d9a46f]/60 peer-checked:bg-[rgba(213,108,47,0.14)]">
                        <p className="text-sm font-semibold text-white">{option.label}</p>
                        <p className="mt-2 text-sm leading-6 text-[#d7e5e2]">
                          {option.description}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>

                <FieldError message={state.fieldErrors.priority} />
              </div>

              <label className="block">
                <span className="text-sm font-medium text-[#d7e5e2]">Ghi chu ngan</span>
                <textarea
                  name="note"
                  rows={4}
                  maxLength={260}
                  placeholder="Vi du: muon giao dien co tang process ro, hero biet ke chuyen va brief generator du chac de demo truoc giang vien."
                  className={`${inputClassName} rounded-[1.35rem]`}
                />
                <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-[#9fc0bb]">
                  <span>toi da 260 ky tu</span>
                  <span>noi ro muc tieu, nguoi xem va dieu ban muon nhan manh</span>
                </div>
                <FieldError message={state.fieldErrors.note} />
              </label>

              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <SubmitButton pending={pending} />
                <p aria-live="polite" className={`max-w-xl text-sm leading-6 ${statusClassName}`}>
                  {state.message}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(0,0,0,0.16))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#9fc0bb]">
                server output / creative blueprint
              </p>

              {state.blueprint ? (
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">
                    {state.blueprint.audience}
                  </span>
                  <span className="rounded-full border border-[#d9a46f]/30 bg-[rgba(213,108,47,0.12)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#ffd9b5]">
                    {state.blueprint.priority}
                  </span>
                </div>
              ) : (
                <span className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#9fc0bb]">
                  awaiting input
                </span>
              )}
            </div>

            {pending ? (
              <PendingBlueprint />
            ) : state.blueprint ? (
              <div className="mt-5">
                <h3 className="font-display text-3xl leading-tight tracking-[-0.03em] text-white sm:text-4xl">
                  {state.blueprint.headline}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-[#d7e5e2]">
                  {state.blueprint.summary}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {state.blueprint.scorecard.map((metric) => (
                    <ScoreCard
                      key={metric.label}
                      label={metric.label}
                      value={metric.value}
                      note={metric.note}
                    />
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <article className="rounded-[1.6rem] border border-white/10 bg-black/10 p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9fc0bb]">
                      Architecture
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white">
                      {state.blueprint.architecture}
                    </p>
                  </article>

                  <article className="rounded-[1.6rem] border border-white/10 bg-black/10 p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9fc0bb]">
                      Palette direction
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white">{state.blueprint.palette}</p>
                  </article>
                </div>

                <div className="mt-6 rounded-[1.8rem] border border-white/10 bg-black/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9fc0bb]">
                      Content lanes
                    </p>
                    <span className="rounded-full border border-white/10 bg-white/7 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#d7e5e2]">
                      4 blocks
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {state.blueprint.sections.map((section, index) => (
                      <div key={section.title} className="grid gap-3 sm:grid-cols-[auto_1fr]">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-sm font-semibold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{section.title}</p>
                          <p className="mt-2 text-sm leading-6 text-[#d7e5e2]">
                            {section.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {state.blueprint.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/14 bg-white/8 px-3 py-2 text-xs font-medium text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <article className="rounded-[1.6rem] border border-white/10 bg-black/10 p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9fc0bb]">
                      Sprint plan
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white">{state.blueprint.sprint}</p>
                  </article>

                  <article className="rounded-[1.6rem] border border-white/10 bg-black/10 p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9fc0bb]">
                      AI workflow
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white">
                      {state.blueprint.aiWorkflow}
                    </p>
                  </article>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                  <article className="rounded-[1.6rem] border border-white/10 bg-black/10 p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9fc0bb]">
                      Risk watch
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white">{state.blueprint.risk}</p>
                  </article>

                  <article className="rounded-[1.6rem] border border-[#d9a46f]/35 bg-[rgba(213,108,47,0.1)] p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#ffd9b5]">
                      Next step
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white">
                      {state.blueprint.nextStep}
                    </p>
                    <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-[#f6e8d7]">
                      {state.blueprint.cta}
                    </p>
                  </article>
                </div>
              </div>
            ) : (
              <EmptyBlueprint />
            )}
          </div>
        </form>
      </div>
    </section>
  );
}