import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-[#e9e7ed] dark:bg-slate-900 border-t-0 pb-24 md:pb-0">
      <div className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
              <span className="text-white font-bold text-xs leading-none">
                P
              </span>
            </div>
            <div className="text-xl font-black text-[#14003c] font-headline">
              Pooled
            </div>
          </div>
          <p className="text-slate-500 font-body text-sm">
            © 2026 Pooled Technologies. Collaborative Finance.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            "Privacy Policy",
            "Terms of Service",
            "Security",
            "Help Center",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#14003c] dark:text-purple-400 font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="mt-8 md:mt-0 flex gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-highest transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-primary text-sm">
              language
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-highest transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-primary text-sm">
              alternate_email
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
