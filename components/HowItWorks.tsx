const steps = [
  {
    number: "01",
    title: "Connect Your Number",
    description:
      "Port your existing number or use a dynamic forwarding mask. Compatible with any VOIP system — setup takes minutes.",
    highlighted: true,
  },
  {
    number: "02",
    title: "Define Your AI Persona",
    description:
      "Upload your SOPs, FAQs, and business rules. Our AI core internalizes your business logic and tone instantly.",
    highlighted: false,
  },
  {
    number: "03",
    title: "Go Live & Scale",
    description:
      "AI begins answering calls immediately. Leads flow into your CRM. Your team gets back their most valuable hours.",
    highlighted: false,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-2 my-8 rounded-3xl bg-slate-900 px-4 py-16 text-white sm:mx-4 sm:my-12 sm:rounded-[48px] sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-tight mb-12 text-center text-2xl font-extrabold sm:mb-20 sm:text-4xl">
          From Zero to Automated in 15 Minutes
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              <div
                className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-black ${
                  step.highlighted
                    ? "bg-primary shadow-lg shadow-primary/20"
                    : "border border-white/20 bg-white/10"
                }`}
              >
                {step.number}
              </div>
              <h3 className="mb-4 text-xl font-bold">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
