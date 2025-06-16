import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accounting",
  description: "Travel agency accounting dashboard",
};

const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/sell', label: 'Sell' },
  { href: '/expense', label: 'Expense' },
  { href: '/products', label: 'Product List' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream min-h-screen`}
      >
        <header className="sticky top-0 z-30 w-full flex items-center gap-4 px-6 py-4 bg-tropicalBlue shadow-lg">
          <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">Accounting</span>
        </header>
        <nav className="sticky top-[64px] z-20 w-full bg-white/90 backdrop-blur border-b border-tropicalBlue shadow-sm">
          <ul className="flex flex-wrap gap-2 w-full justify-center md:justify-start px-4 py-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-150 hover:bg-tropicalBlue/20 hover:text-tropicalBlue focus:bg-tropicalBlue/30 focus:text-tropicalBlue`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="max-w-7xl mx-auto w-full px-2 sm:px-6 py-6">{children}</main>
      </body>
    </html>
  );
}
