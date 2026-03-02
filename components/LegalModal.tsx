"use client";

import { useEffect, useRef } from "react";

interface LegalModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function LegalModal({ open, onClose, title, children }: LegalModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-[100] m-0 flex h-full w-full max-w-none max-h-none items-center justify-center bg-black/50 p-4 backdrop:bg-black/50 open:flex"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      aria-label={title}
    >
      <div
        className="relative mx-auto max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl sm:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close dialog"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none text-slate-600 prose-headings:text-slate-900 prose-h3:text-lg prose-h3:font-bold prose-p:leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-slate-100 pt-6 text-center">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-900 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary"
          >
            I Understand
          </button>
        </div>
      </div>
    </dialog>
  );
}
