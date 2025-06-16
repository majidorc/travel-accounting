"use client";
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const root = window.document.documentElement;
    const initial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const saved = localStorage.theme || initial;
    setTheme(saved);
    if (saved === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else if (theme === 'light') {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [theme]);

  const toggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggle}
      className="ml-auto px-3 py-1 rounded text-sm font-bold border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
} 