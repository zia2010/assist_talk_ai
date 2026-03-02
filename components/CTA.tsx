export function CTA() {
  return (
    <section id="book-demo" className="px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl sm:rounded-[64px] bg-slate-900 px-6 py-12 sm:p-16 text-center text-white">
        {/* Decorative blurs */}
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative z-10">
          <h2 className="heading-tight mb-6 text-3xl font-extrabold sm:mb-8 sm:text-4xl md:text-6xl">
            Ready to Stop Losing
            <br />
            Patients to Voicemail?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-slate-400 sm:mb-12 sm:text-xl">
            Fill out a quick form and our team will contact you
            within 24 hours to get you started. No credit card required.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://forms.gle/PZpdebeizKwNxAga9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-primary px-8 text-lg font-black text-white shadow-2xl shadow-primary/30 transition-colors hover:bg-orange-500 sm:h-16 sm:w-auto sm:rounded-[20px] sm:px-12 sm:text-xl"
            >
              Start Free 7-Day Trial
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500 sm:mt-6 sm:text-sm">
            Questions?{" "}
            <a
              href="mailto:hello@assisttalklabs.com"
              className="font-semibold text-primary underline underline-offset-2 transition-colors hover:text-orange-400"
            >
              Email us at hello@assisttalklabs.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
