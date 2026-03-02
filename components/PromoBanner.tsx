"use client";

import { useEffect, useState } from "react";

export function PromoBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15_000);

    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="March and April seasonal offer"
    >
      <div className="relative max-h-[90vh] w-full max-w-lg animate-[scaleIn_0.3s_ease-out] overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close promotional banner"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-500 backdrop-blur transition-colors hover:bg-slate-100 hover:text-slate-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Top accent bar */}
        <div className="bg-gradient-to-r from-primary to-accent px-4 py-3 text-center sm:px-6 sm:py-4">
          <p className="text-xs font-black uppercase tracking-widest text-white sm:text-sm">
            March &amp; April Seasonal Offer
          </p>
        </div>

        {/* Content */}
        <div className="px-5 py-6 text-center sm:px-8 sm:py-8">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-50">
            <span className="text-3xl" aria-hidden="true">🎉</span>
          </div>

          <h3 className="mb-2 text-xl font-extrabold text-slate-900 sm:mb-3 sm:text-2xl">
            Free Setup for Your AI Receptionist!
          </h3>

          <p className="mb-4 text-xs leading-relaxed text-slate-500 sm:mb-6 sm:text-sm">
            Get started with your AI receptionist this season with <strong className="text-slate-700">zero setup fees</strong>.
            Plus, get a <strong className="text-slate-700">free 7-day trial</strong> on
            any plan — no credit card required.
          </p>

          {/* Offer highlights */}
          <div className="mb-5 flex flex-col gap-2 text-left sm:mb-8 sm:gap-3">
            <div className="flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-green-800">Free setup (save up to $399)</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-green-800">7-day free trial — no credit card</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-green-800">Plans starting at just $199/mo</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://forms.gle/PZpdebeizKwNxAga9"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary text-base font-bold text-white shadow-xl shadow-primary/30 transition-transform hover:-translate-y-0.5 hover:bg-orange-500 sm:h-14 sm:rounded-2xl sm:text-lg"
          >
            Claim Your Free Setup
          </a>

          <p className="mt-4 text-xs text-slate-400">
            Only a few spots left. Offer ends soon.
          </p>
        </div>
      </div>
    </div>
  );
}
