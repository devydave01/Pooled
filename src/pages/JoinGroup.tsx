import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const JoinGroup = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate joining
    console.log('Joining group with code:', code);
    navigate('/groups');
  };

  return (
    <div className="max-w-2xl mx-auto px-8 py-12 pt-24 min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-[#14003c] transition-colors mb-12 font-medium"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Groups
        </button>

        <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-2xl shadow-primary/10 border border-slate-100 dark:border-slate-800 text-center">
          <div className="w-20 h-20 bg-primary/5 text-primary dark:bg-purple-900/30 dark:text-purple-300 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-4xl">group_add</span>
          </div>
          
          <h1 className="text-4xl font-black text-[#14003c] dark:text-purple-300 font-headline mb-4 tracking-tight">
            Join a Pool
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-sm mx-auto">
            Enter the unique invite code shared by the pool administrator to join the collective.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                required
                type="text"
                placeholder="Enter Invite Code"
                className="w-full px-8 py-6 rounded-2xl bg-[#faf8fe] dark:bg-slate-950 border-2 border-transparent focus:border-primary/10 focus:ring-4 focus:ring-primary/5 outline-none text-[#14003c] dark:text-white font-black text-center text-3xl tracking-[0.2em] placeholder:text-lg placeholder:tracking-normal placeholder:opacity-20 transition-all uppercase"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#14003c] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#2c046f] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
            >
              Verify & Join
            </button>
          </form>

          <p className="mt-12 text-xs text-slate-400 font-bold uppercase tracking-widest">
            Don't have a code? <button onClick={() => navigate('/groups/create')} className="text-primary hover:underline">Create your own pool</button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default JoinGroup;
