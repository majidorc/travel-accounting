import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

function ThemeToggle() {
  const [theme, setTheme] = useState('system');
  useEffect(() => {
    const root = window.document.documentElement;
    const initial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(localStorage.theme || initial);
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && initial === 'dark')) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);
  const toggle = () => {
    const root = window.document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme('light');
    } else {
      root.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme('dark');
    }
  };
  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggle}
      className="ml-auto px-3 py-1 rounded text-sm font-bold border border-tropicalBlue dark:border-white bg-white dark:bg-tropicalBlue text-tropicalBlue dark:text-white shadow hover:bg-tropicalBlue/10 dark:hover:bg-white/10 transition"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-cream dark:bg-black min-h-screen transition-colors">
        <header className="sticky top-0 z-30 w-full flex items-center gap-4 px-6 py-4 bg-tropicalBlue dark:bg-black shadow-lg">
          <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">Accounting</span>
          <div className="ml-auto"><ThemeToggle /></div>
        </header>
        <nav className="sticky top-[64px] z-20 w-full bg-white/90 dark:bg-black/90 backdrop-blur border-b border-tropicalBlue dark:border-white shadow-sm">
          <ul className="flex flex-wrap gap-2 w-full justify-center md:justify-start px-4 py-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-lg font-semibold transition-all duration-150 text-tropicalBlue dark:text-brightYellow hover:bg-tropicalBlue/20 hover:text-tropicalBlue dark:hover:bg-white/10 dark:hover:text-white focus:bg-tropicalBlue/30 focus:text-tropicalBlue dark:focus:bg-white/10 dark:focus:text-white"
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
