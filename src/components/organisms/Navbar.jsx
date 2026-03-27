import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf8fe]/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm'
            : 'bg-[#faf8fe] dark:bg-slate-950'
        }`}
      >
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Pooled Logo" className="w-8 h-8 object-contain" />
            <div className="text-2xl font-black text-[#14003c] dark:text-purple-300 font-headline tracking-tight">
              Pooled
            </div>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {['Features', 'How it Works', 'Testimonials', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-slate-500 dark:text-slate-400 font-medium font-headline hover:text-[#2c046f] dark:hover:text-purple-200 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="font-bold text-[#14003c] dark:text-purple-300 hover:opacity-80 transition-opacity">
              Log in
            </Link>
            <Link to="/signup" className="bg-[#14003c] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#2c046f] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#14003c]/20">
              Start Pooling
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-[#14003c] dark:text-white p-2"
            >
              <span className="material-symbols-outlined text-3xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full z-40 bg-[#faf8fe] dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col p-6 space-y-4">
            {['Features', 'How it Works', 'Testimonials', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold text-[#14003c] dark:text-white"
              >
                {item}
              </a>
            ))}
            <div className="h-px bg-slate-200 dark:bg-slate-800 my-4"></div>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-[#14003c] dark:text-purple-300">
              Log in
            </Link>
            <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="bg-[#14003c] text-center text-white px-6 py-4 rounded-full font-bold hover:bg-[#2c046f] transition-colors shadow-lg">
              Start Pooling
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
