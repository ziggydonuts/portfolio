import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import content from "@/content.json";
import Nav from "./nav";

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: content.site.name,
  description: content.site.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={serif.variable}>
      <body className="min-h-screen bg-bg text-ink font-serif text-lg leading-8 antialiased">
        <div className="mx-auto max-w-prose px-6 py-16 sm:py-24">
          <Nav />
          <main className="mt-14">{children}</main>
        </div>
      </body>
    </html>
  );
}
