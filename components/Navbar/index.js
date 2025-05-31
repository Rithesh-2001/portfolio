'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';
import Navigation from '../Navigation';

export default function Navbar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav
      className="fixed top-0 p-2 left-0 w-full z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: `${theme.secondary}80`,
        borderColor: theme.primary,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold hover:opacity-80 transition-opacity"
            style={{ color: theme.primary }}
            onClick={() => setIsMenuOpen(false)}
          >
            Rithesh
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation links={navLinks} />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-opacity-10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: theme.primary }}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block px-4 py-2 rounded-md font-medium transition-all
                  hover:underline hover:underline-offset-4 hover:decoration-2"
                style={{ 
                  color: theme.tertiary80,
                  textDecorationColor: theme.primary
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}