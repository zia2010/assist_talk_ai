const problems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
      </svg>
    ),
    iconColor: "text-red-500",
    title: "Leaking Revenue",
    description:
      "60% of customers won't leave a voicemail. Each missed call is a $500+ opportunity lost to a faster competitor.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconColor: "text-orange-500",
    title: "Wasted Talent",
    description:
      "Your high-value team members shouldn't be filtering spam or booking simple appointments. Automate the noise.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
    iconColor: "text-slate-500",
    title: "Zero Elasticity",
    description:
      "Human staff can't handle 20 calls at once. AI manages peak volume and after-hours spikes with zero degradation.",
  },
];

export function Problem() {
  return (
    <section className="border-y border-slate-100 bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <h2 className="heading-tight mb-4 text-3xl font-extrabold sm:mb-6 sm:text-4xl">
            Traditional Reception Doesn&apos;t Scale
          </h2>
          <p className="text-lg text-slate-500">
            Manual call handling is the #1 bottleneck for growing businesses. If
            you&apos;re not answering, you&apos;re not winning.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group rounded-[32px] border border-transparent bg-slate-50 p-8 transition-all duration-300 hover:border-slate-200 hover:bg-white"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                <span className={`${problem.iconColor} group-hover:text-white`}>
                  {problem.icon}
                </span>
              </div>
              <h3 className="mb-4 text-xl font-bold">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
