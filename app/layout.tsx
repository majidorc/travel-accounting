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
      <body className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors">
        <header className="sticky top-0 z-30 w-full flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 shadow">
          <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">Accounting</span>
          <div className="ml-auto"><ThemeToggle /></div>
        </header>
        <nav className="sticky top-[64px] z-20 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <ul className="flex flex-wrap gap-2 w-full justify-center md:justify-start px-4 py-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-lg font-semibold transition-all duration-150 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-300 dark:focus:bg-gray-600"
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
