import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Accounts', path: '/accounts', icon: 'account_balance' },
    { name: 'Groups', path: '/groups', icon: 'group' },
    { name: 'Activity', path: '/activity', icon: 'history' },
  ];

  return (
    <div className="bg-[#faf8fe] text-[#1a1b1f] font-body min-h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col h-screen w-72 fixed left-0 top-0 bg-[#e9e7ed] py-8 px-6 z-40 border-r border-[#ccc4cf]/30">
        <div className="mb-12 px-2">
          <Link to="/" className="text-2xl font-extrabold tracking-tighter text-[#2E1A47] hover:opacity-80 transition-opacity">
            Pooled
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-[#4a454e] font-bold opacity-70">Collaborative Finance</p>
        </div>

        <nav className="flex-1 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-[#2E1A47] shadow-[0_4px_12px_rgba(46,26,71,0.08)]'
                    : 'text-[#4a454e] hover:bg-white/50'
                }`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-1">
          <div className="p-4 bg-[#2E1A47] rounded-2xl text-white mb-6">
            <p className="text-xs opacity-80 mb-1">Current Plan</p>
            <p className="font-bold mb-3 text-sm">Pro Collective</p>
            <button className="w-full bg-white/10 hover:bg-white/20 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors">
              Upgrade
            </button>
          </div>
          <Link to="/settings" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-[#4a454e] hover:text-[#2E1A47]">
            <span className="material-symbols-outlined text-xl">settings</span>
            <span>Settings</span>
          </Link>
          <Link to="/login" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-[#4a454e] hover:text-[#ba1a1a]">
            <span className="material-symbols-outlined text-xl">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-72 min-h-screen flex flex-col">
        {/* Mobile Top Navbar with Hamburger */}
        <div className="lg:hidden sticky top-0 z-50 bg-[#faf8fe]/90 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-[#ccc4cf]/30">
          <Link to="/" className="text-xl font-extrabold tracking-tighter text-[#2E1A47]">Pooled</Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-[#4a454e] p-2 hover:bg-[#e3e2e7] rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Enhanced Mobile Dropdown Menu (Web-like) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed top-[69px] left-0 w-full bg-[#faf8fe]/95 backdrop-blur-lg z-40 border-b border-[#ccc4cf]/30 shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col p-6 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname.startsWith(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all ${
                        isActive
                          ? 'bg-white text-[#2E1A47] shadow-[0_4px_12px_rgba(46,26,71,0.06)]'
                          : 'text-[#4a454e] hover:bg-white/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-2xl">{link.icon}</span>
                      <span className="text-lg">{link.name}</span>
                    </Link>
                  );
                })}
                <div className="h-px bg-[#ccc4cf]/30 my-4"></div>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/settings" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl font-bold text-[#4a454e] bg-white text-sm">
                    <span className="material-symbols-outlined text-xl">settings</span>
                    <span>Settings</span>
                  </Link>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl font-bold text-[#ba1a1a] bg-red-50 text-sm">
                    <span className="material-symbols-outlined text-xl">logout</span>
                    <span>Logout</span>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header from provided HTML */}
        <header className="sticky top-0 z-30 hidden lg:flex bg-[#faf8fe]/80 backdrop-blur-md px-8 py-5 items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#2E1A47]">Dashboard Overview</h2>
            <p className="text-xs text-[#4a454e]">Welcome back, Alex Rivera</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-[#efedf3] px-4 py-2 rounded-xl">
              <span className="material-symbols-outlined text-[#7b757f] text-xl">search</span>
              <input type="text" placeholder="Search..." className="bg-transparent border-none focus:ring-0 outline-none text-sm ml-2 w-48 text-[#1a1b1f]" />
            </div>
            <button className="material-symbols-outlined p-2 text-[#4a454e] hover:bg-[#efedf3] rounded-full transition-colors">notifications</button>
            <button 
              onClick={() => window.location.href = '/groups/create'}
              className="bg-[#2E1A47] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-[#2E1A47]/20 hover:scale-[1.02] transition-transform"
            >
              Create Group
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-grow">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
