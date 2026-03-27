import React from 'react';

const Input = ({ id, className = '', ...props }) => {
  return (
    <input
      id={id}
      className={`appearance-none block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-[#2E1A47] focus:border-[#2E1A47] sm:text-sm bg-transparent dark:text-white ${className}`}
      {...props}
    />
  );
};

export default Input;
