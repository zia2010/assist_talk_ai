import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://assisttalklabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AI Receptionist for Businesses | AssistTalk Labs",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  description:
    "AssistTalk Labs provides AI receptionists that answer calls, book appointments, and handle customer inquiries automatically 24/7.",
  keywords: [
    "AI receptionist",
    "virtual receptionist",
    "AI phone answering",
    "automated appointment booking",
    "AI customer service",
    "24/7 call answering",
    "AssistTalk Labs",
  ],
  authors: [{ name: "AssistTalk Labs" }],
  creator: "AssistTalk Labs",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AssistTalk Labs",
    title: "AI Receptionist for Businesses | AssistTalk Labs",
    description:
      "AssistTalk Labs provides AI receptionists that answer calls, book appointments, and handle customer inquiries automatically 24/7.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AssistTalk Labs — AI Receptionist for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Receptionist for Businesses | AssistTalk Labs",
    description:
      "AssistTalk Labs provides AI receptionists that answer calls, book appointments, and handle customer inquiries automatically 24/7.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
