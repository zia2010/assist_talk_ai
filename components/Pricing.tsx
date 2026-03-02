const plans = [
  {
    name: "Starter",
    price: "$199",
    period: "/mo",
    setup: "Free Setup",
    setupNote: "Seasonal Offer",
    badge: null,
    highlighted: false,
    description: "Perfect for solo & small dental practices",
    features: [
      "100 AI Minutes / Month",
      "Appointment Scheduling",
      "Patient Intake Forms",
      "After-Hours Call Handling",
      "SMS Confirmations",
      "Email Notifications",
    ],
  },
  {
    name: "Growth",
    price: "$349",
    period: "/mo",
    setup: "$299 One-Time Setup",
    setupNote: null,
    badge: "Most Popular",
    highlighted: true,
    description: "For growing practices that need more automation",
    features: [
      "300 AI Minutes / Month",
      "Everything in Starter",
      "Insurance Verification",
      "2-Way SMS Conversations",
      "Google Calendar Sync",
      "CRM Integration (Dentrix, Eaglesoft)",
      "Priority Support",
    ],
  },
  {
    name: "Premium",
    price: "$549",
    period: "/mo",
    setup: "$399 One-Time Setup",
    setupNote: null,
    badge: null,
    highlighted: false,
    description: "For multi-location & high-volume practices",
    features: [
      "Unlimited AI Minutes",
      "Everything in Growth",
      "Multi-Location Support",
      "Custom AI Voice & Scripts",
      "HIPAA Compliance Package",
      "Dedicated Account Manager",
      "API Access",
      "SLA Guarantee",
    ],
  },
];

const comparisonFeatures = [
  { name: "AI Minutes", starter: "100 / mo", growth: "300 / mo", premium: "Unlimited" },
  { name: "Appointment Scheduling", starter: true, growth: true, premium: true },
  { name: "Patient Intake Forms", starter: true, growth: true, premium: true },
  { name: "After-Hours Handling", starter: true, growth: true, premium: true },
  { name: "SMS Confirmations", starter: true, growth: true, premium: true },
  { name: "Insurance Verification", starter: false, growth: true, premium: true },
  { name: "2-Way SMS Conversations", starter: false, growth: true, premium: true },
  { name: "Calendar Integration", starter: false, growth: true, premium: true },
  { name: "CRM Integration", starter: false, growth: true, premium: true },
  { name: "Multi-Location Support", starter: false, growth: false, premium: true },
  { name: "Custom AI Voice & Scripts", starter: false, growth: false, premium: true },
  { name: "HIPAA Compliance Package", starter: false, growth: false, premium: true },
  { name: "Dedicated Account Manager", starter: false, growth: false, premium: true },
  { name: "API Access", starter: false, growth: false, premium: true },
  { name: "SLA Guarantee", starter: false, growth: false, premium: true },
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-primary" aria-hidden="true">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-slate-300" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
    </svg>
  );
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <span className="text-sm font-semibold text-slate-700">{value}</span>;
  return <span className="inline-flex justify-center">{value ? <CheckIcon /> : <CrossIcon />}</span>;
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Seasonal Offer Banner */}
        <div className="mb-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-6 py-3">
            <span className="text-lg" aria-hidden="true">🎉</span>
            <span className="text-sm font-bold text-primary">
              March &amp; April Offer: Free setup for our valuable clients!
            </span>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h2 className="heading-tight mb-4 text-2xl font-extrabold sm:text-4xl">
            Simple, Transparent Pricing for Dental Clinics
          </h2>
          <p className="text-slate-500">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-3xl p-6 sm:rounded-[40px] sm:p-10 ${
                plan.highlighted
                  ? "border-2 border-primary bg-white shadow-2xl"
                  : "border border-slate-200 bg-white"
              }`}
            >
              {plan.badge && (
                <div className="absolute right-0 top-0 rounded-bl-3xl bg-primary px-6 py-2 text-[10px] font-black uppercase tracking-widest text-white">
                  {plan.badge}
                </div>
              )}

              <p
                className={`mb-2 text-xs font-black uppercase tracking-widest ${
                  plan.highlighted ? "text-primary" : "text-slate-400"
                }`}
              >
                {plan.name}
              </p>

              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="font-bold text-slate-400">{plan.period}</span>
              </div>

              <p className="mb-1 text-xs font-semibold text-slate-500">
                {plan.setup}
                {plan.setupNote && (
                  <span className="ml-2 inline-flex rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">
                    {plan.setupNote}
                  </span>
                )}
              </p>

              <p className="mb-8 text-sm text-slate-400">{plan.description}</p>

              <ul className="mb-10 space-y-4 text-sm font-semibold">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://forms.gle/PZpdebeizKwNxAga9"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center rounded-[18px] py-4 font-bold transition-all ${
                  plan.highlighted
                    ? "bg-primary text-white shadow-xl shadow-primary/30 hover:scale-105"
                    : "border-2 border-slate-900 hover:bg-slate-900 hover:text-white"
                }`}
              >
                Start Free 7-Day Trial
              </a>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-extrabold">
            Compare Plans
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-center">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-600">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-primary">Growth</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-600">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-6 py-3 text-left text-sm font-medium text-slate-700">{row.name}</td>
                    <td className="px-6 py-3 text-center"><CellValue value={row.starter} /></td>
                    <td className="px-6 py-3 text-center"><CellValue value={row.growth} /></td>
                    <td className="px-6 py-3 text-center"><CellValue value={row.premium} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
