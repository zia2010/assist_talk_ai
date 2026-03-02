const messages = [
  {
    role: "customer" as const,
    text: "I need to reschedule my consultation for tomorrow at 2pm. Is that possible?",
  },
  {
    role: "ai" as const,
    text: 'Searching records… I see your appointment. We are fully booked at 2pm tomorrow, but I can move you to 4pm, or Friday morning at 9am. Which works better for you?',
  },
  {
    role: "customer" as const,
    text: "Friday at 9am sounds great. Please update it.",
  },
  {
    role: "ai-success" as const,
    text: "Done. Your calendar is updated and I've sent a new confirmation email to you. Anything else?",
  },
];

export function DemoConversation() {
  return (
    <section id="demo-conversation" className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="heading-tight mb-8 text-center text-2xl font-extrabold sm:mb-12 sm:text-4xl">
          See the AI in Action
        </h2>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl sm:rounded-[40px]">
          {/* Header bar */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576L1.323 12.77a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 006.745 7.94l.813-2.846A.75.75 0 019 4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold">AssistTalk AI Agent</p>
                <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Analyzing Voice Stream
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-slate-200" />
              <div className="h-2 w-2 rounded-full bg-slate-200" />
              <div className="h-2 w-2 rounded-full bg-slate-200" />
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4 p-4 sm:space-y-6 sm:p-10" role="log" aria-label="Demo conversation between a customer and AI receptionist">
            {messages.map((msg, i) => {
              if (msg.role === "customer") {
                return (
                  <div key={i} className="flex justify-end">
                    <div className="max-w-[90%] rounded-2xl rounded-tr-none bg-slate-900 p-4 text-white shadow-lg sm:max-w-[80%] sm:rounded-[24px] sm:p-5">
                      <p className="text-sm font-medium">
                        &ldquo;{msg.text}&rdquo;
                      </p>
                    </div>
                  </div>
                );
              }

              const isSuccess = msg.role === "ai-success";
              return (
                <div key={i} className="flex justify-start">
                  <div
                    className={`max-w-[90%] rounded-2xl rounded-tl-none p-4 shadow-sm sm:max-w-[80%] sm:rounded-[24px] sm:p-5 ${
                      isSuccess
                        ? "border border-orange-100 bg-orange-50"
                        : "border border-slate-200 bg-white"
                    }`}
                  >
                    <p
                      className={`text-sm leading-relaxed ${
                        isSuccess
                          ? "font-bold text-primary"
                          : "italic text-slate-700"
                      }`}
                    >
                      &ldquo;{msg.text}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
