const faqs = [
  {
    question: "How long does it take to set up?",
    answer:
      "Most businesses are live within 24 hours. We handle the entire setup — just share your business info, hours, and services, and we configure everything for you. No technical expertise required.",
  },
  {
    question: "Will customers know they're talking to AI?",
    answer:
      "Our AI uses natural, conversational speech patterns that sound remarkably human. Most customers won't notice the difference. If asked directly, the AI identifies itself honestly while maintaining a professional, helpful tone throughout the call.",
  },
  {
    question: "What happens if the AI can't handle a call?",
    answer:
      "The AI gracefully transfers to your office team during business hours or takes a detailed message after hours. You'll receive instant notifications for urgent calls so nothing falls through the cracks. You can also set custom routing rules.",
  },
  {
    question: "Can I keep my existing phone number?",
    answer:
      "Absolutely. We can port your existing number or set up seamless call forwarding — no need to change anything on your marketing materials, website, or signage.",
  },
  {
    question: "What happens if I go over my minutes?",
    answer:
      "Additional minutes are billed at a competitive per-minute rate. We'll send automatic notifications when you're approaching your limit so there are no surprises. You can also upgrade your plan at any time.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes — there are no long-term contracts. You can cancel or change your plan at any time with no penalties. We believe our service should earn your business every month.",
  },
  {
    question: "How is this different from a traditional answering service?",
    answer:
      "Unlike human answering services, our AI never puts callers on hold, can handle unlimited simultaneous calls, costs a fraction of the price, and integrates directly with your existing business software and CRMs.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="heading-tight mb-10 text-center text-2xl font-extrabold sm:mb-16 sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white transition-all open:shadow-lg"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-left text-sm font-bold text-slate-900 sm:px-8 sm:py-6 sm:text-base">
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="faq-chevron h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </summary>
              <div className="px-5 pb-4 sm:px-8 sm:pb-6">
                <p className="text-sm leading-relaxed text-slate-500">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
