import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-[#2E1A47]/20 text-sm font-bold text-white bg-[#2E1A47] hover:bg-[#4A2D70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E1A47] transition-all active:scale-[0.98] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
