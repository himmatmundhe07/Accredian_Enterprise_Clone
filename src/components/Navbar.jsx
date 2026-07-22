"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#stats', label: 'Stats' },
  { href: '#clients', label: 'Clients' },
  { href: '#accredianEdge', label: 'Accredian Edge' },
  { href: '#cat', label: 'CAT' },
  { href: '#howItWorks', label: 'How It Works' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#testimonials', label: 'Testimonials' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-6 px-6 md:px-14">
      <div className="max-w-[85rem] mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
            alt="Accredian Logo"
            width={124}
            height={32}
            className="w-[124px] h-[32px] object-contain"
            priority
          />
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-end items-center flex-1 space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="text-[16px] font-medium cursor-pointer text-slate-800 hover:text-blue-600 transition-colors">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-800 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-[88px] right-5 left-5 bg-white shadow-xl p-6 rounded-xl border border-slate-100">
              <ul className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="text-[16px] font-medium cursor-pointer text-slate-800 hover:text-blue-600">
                    <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
