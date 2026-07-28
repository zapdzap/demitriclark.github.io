import type { Metadata } from "next";
import "./globals.css";

const bodyFont = {
  variable: "--font-body",
};

const displayFont = {
  variable: "--font-display",
};

const geistMono = {
  variable: "--font-geist-mono",
};

export const metadata: Metadata = {
  title: "Demitri Clark",
  description:
    "Software Engineering student at RIT and Software Engineer Intern building full-stack web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
