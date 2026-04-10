import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TPP Breda — Tandprotheses op Maat",
  description:
    "Familiebedrijf gespecialiseerd in tandprotheses voor senioren in Breda. Klikgebitten, kunstgebitten en reparaties — volledig op maat.",
  metadataBase: new URL("https://tppbreda.nl"),
  openGraph: {
    title: "TPP Breda — Tandprotheses op Maat",
    description:
      "Familiebedrijf gespecialiseerd in tandprotheses voor senioren in Breda. Klikgebitten, kunstgebitten en reparaties — volledig op maat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[--background] text-[--foreground]">
        {/* Sla over naar hoofdinhoud — EAA / WCAG 2.4.1 */}
        <a href="#main-content" className="skip-link">
          Sla over naar hoofdinhoud
        </a>
        {children}
      </body>
    </html>
  );
}
