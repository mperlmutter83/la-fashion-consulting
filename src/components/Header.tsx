'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/free-consultation', label: 'FREE Consultation' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#111111] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Los Angeles Fashion Consulting"
            width={56}
            height={56}
            className="rounded-full"
            priority
          />
          <span className="text-white font-semibold text-sm leading-tight hidden sm:block tracking-wide">
            Los Angeles
            <br />
            Fashion Consulting
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium hover:text-[#d96a4b] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+13105974142"
            className="text-white text-sm font-semibold hover:text-[#d96a4b] transition-colors"
          >
            (310) 597-4142
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#111111] border-t border-zinc-800 px-4 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-base font-medium hover:text-[#d96a4b] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+13105974142"
            className="text-[#d96a4b] text-base font-semibold"
          >
            (310) 597-4142
          </a>
        </nav>
      )}
    </header>
  );
}
