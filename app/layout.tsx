import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyYahtzee: Yahtzee with friends, no paper needed.",
  description:
    "Roll on your phone or use real dice: MyYahtzee keeps score either way. Free, offline, no account.",
  openGraph: {
    title: "MyYahtzee",
    description:
      "Roll on your phone or use real dice: MyYahtzee keeps score either way. Free, offline, no account.",
    type: "website",
    url: "https://myyahtzee.myellelab.com",
  },
  metadataBase: new URL("https://myyahtzee.myellelab.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="min-h-screen bg-background text-navy font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
