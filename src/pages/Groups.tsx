import React from 'react';
import { useNavigate } from 'react-router-dom';

const Groups = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 pt-24 min-h-screen bg-[#faf8fe] dark:bg-slate-950">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black text-[#14003c] dark:text-purple-300 font-headline tracking-tight mb-2">
            Shared Pools
          </h1>
          <p className="text-slate-500 font-medium">Manage your collective finances with ease.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={() => navigate('/groups/join')}
            className="flex-1 md:flex-none bg-white text-[#14003c] px-6 py-3.5 rounded-2xl font-bold hover:bg-slate-50 transition-all border border-slate-200 shadow-sm flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">group_add</span>
            Join Pool
          </button>
          <button 
            onClick={() => navigate('/groups/create')}
            className="flex-1 md:flex-none bg-[#14003c] text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-[#2c046f] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create Pool
          </button>
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Summer Trip 25', members: 4, goal: '₦5k', current: '₦3.2k' },
          { name: 'Rent & Utilities', members: 3, goal: '₦2.5k', current: '₦2.5k' },
          { name: 'Startup Fund', members: 2, goal: '₦10k', current: '₦1.5k' }
        ].map((pool, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-[#14003c] dark:text-white">{pool.name}</h3>
                <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-full">
                  {pool.members} members
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-slate-500 dark:text-slate-400">Progress</span>
                <span className="text-[#14003c] dark:text-white">{pool.current} / {pool.goal}</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
