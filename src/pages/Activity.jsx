import React from 'react';

const Activity = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 pt-24 min-h-screen bg-[#faf8fe] dark:bg-slate-950">
      <h1 className="text-4xl font-black text-[#14003c] dark:text-purple-300 font-headline mb-8 tracking-tight">
        Recent Activity
      </h1>
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="space-y-6">
          {[
            { title: 'Payment to Sarah', amount: '-$45.00', date: 'Today, 2:30 PM', type: 'out', icon: 'arrow_upward' },
            { title: 'Added to Summer Trip Pool', amount: '+$150.00', date: 'Yesterday', type: 'in', icon: 'arrow_downward' },
            { title: 'Monthly Salary', amount: '+$3,200.00', date: 'Mar 24', type: 'in', icon: 'account_balance' },
            { title: 'Coffee Shop', amount: '-$5.40', date: 'Mar 23', type: 'out', icon: 'local_cafe' }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center group cursor-pointer p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.type === 'in' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'}`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <div className="font-bold text-[#14003c] dark:text-white group-hover:text-primary transition-colors">{item.title}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{item.date}</div>
                </div>
              </div>
              <div className={`font-bold ${item.type === 'in' ? 'text-green-600 dark:text-green-400' : 'text-[#14003c] dark:text-white'}`}>
                {item.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
