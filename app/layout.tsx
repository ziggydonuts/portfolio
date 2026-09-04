import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import content from "@/content.json";
import Nav from "./nav";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
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
    <html lang="en" className={mono.variable}>
      <body className="min-h-screen bg-bg text-ink font-mono antialiased">
        <div className="mx-auto max-w-prose px-6 py-12 sm:py-16">
          <Nav />
          <main className="mt-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
