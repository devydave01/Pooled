import React from 'react';

const Accounts = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 pt-24 min-h-screen bg-[#faf8fe] dark:bg-slate-950">
      <header className="flex justify-between items-end mb-8">
        <h1 className="text-4xl font-black text-[#14003c] dark:text-purple-300 font-headline tracking-tight">
          Accounts
        </h1>
        <button className="bg-[#14003c] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2c046f] transition-colors shadow-lg shadow-primary/20 flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Add Account
        </button>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: 'Primary Checking', balance: '₦4,250.00', number: '**** 8392' },
          { name: 'Savings Vault', balance: '₦8,200.00', number: '**** 1120' }
        ].map((acc, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <h3 className="text-lg font-bold text-[#14003c] dark:text-white">{acc.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{acc.number}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#14003c]/10 text-[#14003c] dark:bg-purple-900/30 dark:text-purple-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">account_balance</span>
              </div>
            </div>
            <div className="text-3xl font-black text-[#14003c] dark:text-purple-300 relative z-10">{acc.balance}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounts;
