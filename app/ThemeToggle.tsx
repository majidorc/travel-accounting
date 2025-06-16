"use client";
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
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
      className="ml-auto px-3 py-1 rounded text-sm font-bold border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
} 