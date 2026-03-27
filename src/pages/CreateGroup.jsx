import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CreateGroup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    goal: '',
    threshold: '75'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate creation
    console.log('Creating group:', formData);
    navigate('/groups');
  };

  return (
    <div className="max-w-3xl mx-auto px-8 py-12 pt-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-[#14003c] transition-colors mb-8 font-medium"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Groups
        </button>

        <h1 className="text-4xl font-black text-[#14003c] dark:text-purple-300 font-headline mb-2 tracking-tight">
          Create a New Pool
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-12">
          Set up a collaborative vault for your group goals.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-slate-100 dark:border-slate-800">
          <div className="space-y-2">
            <label className="text-sm font-black text-[#14003c] dark:text-purple-200 uppercase tracking-widest ml-1">
              Pool Name
            </label>
            <input
              required
              type="text"
              placeholder="e.g. Summer Vacation 2026"
              className="w-full px-6 py-4 rounded-2xl bg-[#faf8fe] dark:bg-slate-950 border-none focus:ring-2 focus:ring-primary/20 outline-none text-[#14003c] dark:text-white font-medium placeholder:opacity-30 transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black text-[#14003c] dark:text-purple-200 uppercase tracking-widest ml-1">
              Description
            </label>
            <textarea
              placeholder="What is this pool for?"
              rows="3"
              className="w-full px-6 py-4 rounded-2xl bg-[#faf8fe] dark:bg-slate-950 border-none focus:ring-2 focus:ring-primary/20 outline-none text-[#14003c] dark:text-white font-medium placeholder:opacity-30 transition-all resize-none"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-black text-[#14003c] dark:text-purple-200 uppercase tracking-widest ml-1">
                Goal Amount (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#14003c] dark:text-purple-300 font-bold">₦</span>
                <input
                  type="text"
                  placeholder="0.00"
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-[#faf8fe] dark:bg-slate-950 border-none focus:ring-2 focus:ring-primary/20 outline-none text-[#14003c] dark:text-white font-medium placeholder:opacity-30 transition-all"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-black text-[#14003c] dark:text-purple-200 uppercase tracking-widest ml-1">
                Approval Threshold
              </label>
              <select
                className="w-full px-6 py-4 rounded-2xl bg-[#faf8fe] dark:bg-slate-950 border-none focus:ring-2 focus:ring-primary/20 outline-none text-[#14003c] dark:text-white font-bold transition-all appearance-none cursor-pointer"
                value={formData.threshold}
                onChange={(e) => setFormData({ ...formData, threshold: e.target.value })}
              >
                <option value="50">50% (Simple Majority)</option>
                <option value="66">66% (Two-Thirds)</option>
                <option value="75">75% (Super Majority)</option>
                <option value="100">100% (Unanimous)</option>
              </select>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#14003c] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#2c046f] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined font-bold">rocket_launch</span>
              Launch Pool
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateGroup;
