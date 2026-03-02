export function Hero() {
  return (
    <header className="relative px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-16 lg:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-1.5">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-primary">
              Built for SMEs and Sevice Businesses
            </span>
          </div>

          {/* H1 — only one on the page */}
          <h1 className="heading-tight text-3xl font-extrabold sm:text-5xl lg:text-7xl">
            AI Receptionist That Answers Every{" "}
            <span className="gradient-text">Client Call.</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Stop losing patients to voicemail. Our AI receptionist handles
            appointment scheduling, patient inquiries, and after-hours calls —
            in a natural human voice, 24/7.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://forms.gle/PZpdebeizKwNxAga9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-base font-bold text-white shadow-2xl shadow-primary/30 transition-transform hover:-translate-y-1 sm:h-14 sm:px-8 sm:text-lg"
            >
              Start Free Trial
            </a>
            <a
              href="#demo-conversation"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 text-base font-bold transition-colors hover:bg-slate-50 sm:h-14 sm:px-8 sm:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
              Check Conversation
            </a>
          </div>
        </div>

        {/* Right column — hero visual */}
        <div className="relative group">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 opacity-50 blur-2xl transition-opacity group-hover:opacity-100 sm:-inset-4 sm:rounded-[40px]" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-2 shadow-2xl sm:rounded-[32px] sm:p-3">
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-slate-50 sm:rounded-[24px]">
              {/* Background video — translucent */}
              <video
                src="/support_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

              {/* Center card — on top */}
              <div className="relative z-10 flex w-48 flex-col items-center gap-3 rounded-xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur sm:w-64 sm:gap-4 sm:rounded-2xl sm:p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 sm:h-16 sm:w-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 animate-bounce text-primary sm:h-8 sm:w-8"
                    aria-hidden="true"
                  >
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-primary">
                    Active AI Session
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    Processing Inquiry…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
