const skills = ["Next.js", "TypeScript", "Tailwind CSS", "Git", "GitHub"];

const goals = [
  "Cung co quy trinh Git workflow voi commit message dung chuan Conventional Commits.",
  "Lam chu Next.js App Router de xay dung giao dien nhanh va de mo rong.",
  "Ung dung cong cu AI nhu GitHub Copilot va Gemini CLI vao quy trinh phat trien.",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(160deg,#f6efe3_0%,#f4f7fb_45%,#dce7f5_100%)] text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.2),transparent_36%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-14 sm:px-10 lg:px-16">
        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-700">
              CTK46 - Lab 01
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              PhanVanTIen
            </h1>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 sm:text-base">
              <p className="rounded-2xl bg-slate-900 px-4 py-3 font-medium text-white">
                MSSV: 2212472
              </p>
              <p className="rounded-2xl border border-slate-200 px-4 py-3 font-medium">
                Lop: CTK46PM
              </p>
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
              Toi la sinh vien CNTT dang tim hieu cac cong nghe moi trong phat
              trien phan mem. Muc tieu cua bai thuc hanh nay la xay dung nen
              tang lam viec voi Git, GitHub va Next.js, dong thoi dua AI vao
              quy trinh hoc tap mot cach thuc te.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-slate-50 shadow-[0_24px_80px_rgba(15,23,42,0.22)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Gioi thieu ngan
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Huong den quy trinh phat trien hien dai
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-300">
              Toi quan tam den phat trien web hien dai, tu dong hoa quy trinh va
              cach ket hop cong cu AI de tang toc do hoc va lam project.
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                GitHub
              </p>
              <p className="mt-3 text-2xl font-semibold">teddy3704</p>
              <p className="mt-2 text-sm text-slate-400">
                San sang tiep tuc day source code len repository sau khi hoan
                tat cac buoc xac thuc can thiet.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[2rem] border border-slate-200/70 bg-white/75 p-8 shadow-[0_18px_60px_rgba(148,163,184,0.18)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
              Muc tieu hoc tap
            </p>
            <ul className="mt-6 space-y-4 text-base leading-7 text-slate-700">
              {goals.map((goal) => (
                <li key={goal} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-slate-200/70 bg-white/75 p-8 shadow-[0_18px_60px_rgba(148,163,184,0.18)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
              So thich va dinh huong
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-orange-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-700">
                  So thich
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Xay dung giao dien web, tim hieu cong nghe moi va toi uu quy
                  trinh hoc lap trinh.
                </p>
              </div>
              <div className="rounded-3xl bg-sky-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-700">
                  Dinh huong
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Phat trien ky nang full-stack va van dung AI dung cach trong
                  qua trinh lam bai va lam du an thuc te.
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
