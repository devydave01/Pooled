import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create a Pool",
      description: "Start a group for your specific goal—be it a vacation, investment, or family savings.",
      icon: "add_circle"
    },
    {
      number: "02",
      title: "Invite Members",
      description: "Send secure links to friends or colleagues. Each member goes through a quick verification.",
      icon: "group_add"
    },
    {
      number: "03",
      title: "Contribute Together",
      description: "Set up automated or one-time contributions. Track everyone's progress in real-time.",
      icon: "account_balance_wallet"
    },
    {
      number: "04",
      title: "Secure Withdrawals",
      description: "Withdraw funds only when the group's custom approval threshold is met.",
      icon: "verified"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <motion.h2 
            className="font-headline text-4xl md:text-5xl font-extrabold text-[#14003c] dark:text-purple-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How it Works
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            From setup to secure withdrawals, we've simplified collective finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-3xl bg-[#faf8fe] dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-5xl font-black text-[#14003c]/10 dark:text-white/10 absolute top-4 right-8">
                {step.number}
              </div>
              <div className="w-12 h-12 bg-[#14003c] dark:bg-purple-600 text-white rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#14003c] dark:text-white mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
