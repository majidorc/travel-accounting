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
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full flex items-center gap-4 px-6 py-4 bg-tropicalBlue shadow-md">
          <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">Accounting</span>
        </header>
        <nav className="w-full bg-deepBlue text-white flex flex-wrap items-center px-4 py-2">
          <ul className="flex flex-wrap gap-4 w-full justify-center md:justify-start">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded transition-colors font-semibold hover:bg-tropicalBlue/80 ${pathname === link.href ? 'bg-tropicalBlue text-white' : 'text-white'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
