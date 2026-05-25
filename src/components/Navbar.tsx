/**
 * @copyright Copyright (c) 2026 Nihal Jaiswal
 * @author    Nihal Jaiswal
 * @license   MIT
 */

import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Teachers', href: '#teachers' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'navbar-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center glow-blue transition-all duration-300 group-hover:scale-110">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div className="relative">
              <span className="text-2xl md:text-3xl font-black tracking-wide logo-brand-text">Vyombotics</span>
              <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-expand-line" />
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-blue-400 font-medium text-sm transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#courses"
              className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg border border-blue-500 animate-pulse-glow"
            >
              <Rocket className="w-4 h-4" />
              Start Learning
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-blue-900/30 menu-slide-down">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-300 hover:text-blue-400 font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#courses"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center mt-3 px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg border border-blue-500"
            >
              Start Learning
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
