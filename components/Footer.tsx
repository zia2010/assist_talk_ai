"use client";

import { useState } from "react";
import { LegalModal } from "@/components/LegalModal";
import { TermsContent } from "@/components/TermsContent";
import { PrivacyContent } from "@/components/PrivacyContent";

export function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="border-t border-slate-100 bg-white px-4 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 md:grid-cols-4">
        {/* Company info — spans 2 cols */}
        <div className="col-span-1 md:col-span-2">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              AssistTalk<span className="text-primary">.</span>
            </span>
          </div>
          <p className="mb-8 max-w-sm font-medium text-slate-500">
            Pioneering autonomous voice interfaces for the next generation of
            service-based businesses.
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="https://twitter.com/assisttalklabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-400 transition-colors hover:text-primary"
              aria-label="Follow us on Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/assisttalklabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-400 transition-colors hover:text-primary"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:hello@assisttalklabs.com"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-400 transition-colors hover:text-primary"
              aria-label="Email us"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>

        {/* Platform links */}
        <div>
          <h3 className="mb-6 text-sm font-extrabold uppercase tracking-widest text-slate-900">
            Platform
          </h3>
          <ul className="space-y-4 text-sm font-bold text-slate-500">
            <li>
              <a href="#features" className="transition-colors hover:text-primary">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="transition-colors hover:text-primary">
                How It Works
              </a>
            </li>
            <li>
              <a href="#pricing" className="transition-colors hover:text-primary">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="transition-colors hover:text-primary">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Support links */}
        <div>
          <h3 className="mb-6 text-sm font-extrabold uppercase tracking-widest text-slate-900">
            Company
          </h3>
          <ul className="space-y-4 text-sm font-bold text-slate-500">
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Security &amp; Compliance
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setShowPrivacy(true)}
                className="transition-colors hover:text-primary"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setShowTerms(true)}
                className="transition-colors hover:text-primary"
              >
                Terms of Service
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-xs font-bold text-slate-400 md:flex-row">
        <p>&copy; {new Date().getFullYear()} AssistTalk Labs. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setShowTerms(true)}
            className="transition-colors hover:text-slate-900"
          >
            Terms of Service
          </button>
          <button
            type="button"
            onClick={() => setShowPrivacy(true)}
            className="transition-colors hover:text-slate-900"
          >
            Privacy Policy
          </button>
        </div>
      </div>

      {/* Legal Modals */}
      <LegalModal open={showTerms} onClose={() => setShowTerms(false)} title="Terms of Service">
        <TermsContent />
      </LegalModal>
      <LegalModal open={showPrivacy} onClose={() => setShowPrivacy(false)} title="Privacy Policy">
        <PrivacyContent />
      </LegalModal>
    </footer>
  );
}
