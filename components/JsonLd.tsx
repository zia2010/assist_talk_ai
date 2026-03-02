export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AssistTalk Labs",
    url: "https://assisttalklabs.com",
    logo: "https://assisttalklabs.com/logo.png",
    description:
      "AssistTalk Labs provides AI receptionists that answer calls, book appointments, and handle customer inquiries automatically 24/7.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@assisttalklabs.com",
      contactType: "sales",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://twitter.com/assisttalklabs",
      "https://linkedin.com/company/assisttalklabs",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to set up?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most dental practices are live within 24 hours. We handle the entire setup — just share your practice info, hours, and services, and we configure everything for you. No technical expertise required.",
        },
      },
      {
        "@type": "Question",
        name: "Will patients know they're talking to AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI uses natural, conversational speech patterns that sound remarkably human. Most patients won't notice the difference. If asked directly, the AI identifies itself honestly while maintaining a professional, helpful tone throughout the call.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if the AI can't handle a call?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The AI gracefully transfers to your office team during business hours or takes a detailed message after hours. You'll receive instant notifications for urgent calls so nothing falls through the cracks.",
        },
      },
      {
        "@type": "Question",
        name: "Can I keep my existing phone number?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We can port your existing number or set up seamless call forwarding — no need to change anything on your marketing materials, website, or signage.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I go over my minutes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Additional minutes are billed at a competitive per-minute rate. We'll send automatic notifications when you're approaching your limit so there are no surprises. You can also upgrade your plan at any time.",
        },
      },
      {
        "@type": "Question",
        name: "Can I cancel anytime?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — there are no long-term contracts. You can cancel or change your plan at any time with no penalties. We believe our service should earn your business every month.",
        },
      },
      {
        "@type": "Question",
        name: "How is this different from a traditional answering service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike human answering services, our AI never puts patients on hold, can handle unlimited simultaneous calls, costs a fraction of the price, and integrates directly with your practice management software like Dentrix and Eaglesoft.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
