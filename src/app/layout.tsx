import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoFlow — AI-Powered Outreach Agent That Feels Personal",
  description:
    "AutoFlow writes unique, personalized outreach messages for every prospect, follows up on email and LinkedIn at the right time, and alerts your team the moment someone is interested. Start your 8-day pilot today.",
  keywords: [
    "AutoFlow",
    "AI outreach agent",
    "automated cold email",
    "LinkedIn outreach automation",
    "sales automation",
    "B2B lead generation",
    "outreach AI",
    "digital marketing agency tools",
    "SaaS sales tools",
  ],
  authors: [{ name: "AutoFlow" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "AutoFlow — AI-Powered Outreach Agent",
    description:
      "AI writes unique messages, follows up on email and LinkedIn, and alerts you when prospects reply. 8-day pilot with money-back guarantee.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoFlow — AI Outreach Agent",
    description:
      "AI-powered outreach on email and LinkedIn. Every message unique. Smart follow-up. Instant lead alerts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
