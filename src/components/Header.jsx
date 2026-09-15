import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages with light backgrounds where transparent header needs dark text initially
  const isLightPage = ['/stay', '/experiences', '/wellness', '/dining', '/gallery', '/story', '/destination', '/book', '/contact'].includes(location.pathname) || location.pathname.startsWith('/stay/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'STAY', href: '/stay' },
    { name: 'EXPERIENCES', href: '/experiences' },
    { name: 'DINING', href: '/dining' },
    { name: 'WELLNESS', href: '/wellness' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'OUR STORY', href: '/story' },
  ];

  // Colors based on scroll & page type
  const isDarkText = isScrolled || isLightPage;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-4 border-b border-[#EAE3D9]/60 shadow-xs'
            : 'bg-gradient-to-b from-black/40 via-black/15 to-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex flex-col">
            <span
              className={`font-serif text-2xl lg:text-3xl tracking-[0.2em] font-light transition-colors duration-300 ${
                isDarkText ? 'text-[#1C1C1A]' : 'text-white'
              }`}
            >
              {RESORT_INFO.brand}
            </span>
            <span
              className={`text-[9px] tracking-[0.35em] uppercase font-medium transition-colors duration-300 ${
                isDarkText ? 'text-[#8C867D]' : 'text-white/70'
              }`}
            >
              RESORT & SPA
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs tracking-[0.2em] font-medium transition-colors duration-300 relative py-1 ${
                    isDarkText
                      ? isActive
                        ? 'text-[#C5A880]'
                        : 'text-[#1C1C1A] hover:text-[#C5A880]'
                      : isActive
                      ? 'text-[#C5A880]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A880]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              to="/book"
              data-cursor="book"
              className={`hidden sm:inline-flex items-center space-x-2 text-xs tracking-[0.2em] font-medium px-5 py-2.5 rounded-none transition-all duration-300 ${
                isDarkText
                  ? 'bg-[#1C1C1A] text-white hover:bg-[#C5A880] hover:text-[#1C1C1A]'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-[#1C1C1A]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK YOUR STAY</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isDarkText ? 'text-[#1C1C1A] hover:bg-[#EAE3D9]' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#1C1C1A] text-[#FAF8F5] flex flex-col justify-between p-8 pt-28 overflow-y-auto"
          >
            <div className="max-w-md mx-auto w-full flex flex-col space-y-6">
              <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase">
                AURELIA RESORT & SPA · GOA
              </span>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="group flex items-center justify-between font-serif text-3xl tracking-wider text-white hover:text-[#C5A880] transition-colors py-2 border-b border-white/10"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  to="/book"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#C5A880] text-[#1C1C1A] text-xs font-semibold tracking-[0.2em] uppercase py-4 hover:bg-white transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK YOUR STAY</span>
                </Link>
              </div>
            </div>

            <div className="max-w-md mx-auto w-full pt-8 border-t border-white/10 text-xs text-[#8C867D] flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <p className="text-white font-medium">Reservations</p>
                <p>{RESORT_INFO.phone}</p>
                <p>{RESORT_INFO.email}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-white font-medium">Location</p>
                <p>Morjim Beach Coast, North Goa</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
