import Link from 'next/link';
import './globals.css';
import ThemeToggle from './ThemeToggle';

export const metadata = {
  title: 'Accounting',
  description: 'Travel agency accounting dashboard',
};

const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/sell', label: 'Sell' },
  { href: '/expense', label: 'Expense' },
  { href: '/products', label: 'Product List' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
