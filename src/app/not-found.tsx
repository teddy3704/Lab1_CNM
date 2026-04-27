import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(160deg,#f6efe3_0%,#f4f7fb_45%,#dce7f5_100%)] px-6 py-12 text-slate-900">
      <div className="w-full max-w-2xl rounded-4xl border border-white/80 bg-white/85 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Khong tim thay trang ban dang mo.
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg">
          Duong dan nay khong ton tai trong project. Ban co the quay lai trang
          chu de xem thong tin bai lab va giao dien gioi thieu.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Quay ve trang chu
          </Link>
          <p className="text-sm font-medium text-slate-500">
            Neu ban di tu mot lien ket cu, hay mo lai tu trang chu.
          </p>
        </div>
      </div>
    </main>
  );
}