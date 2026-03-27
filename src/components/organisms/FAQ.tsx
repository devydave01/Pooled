import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is my money safe with Pooled?",
      answer: "Absolutely. Pooled uses bank-grade encryption and multi-signature security protocols. Funds are held in regulated partner banks, and no single person can withdraw without group approval."
    },
    {
      question: "How do group approvals work?",
      answer: "When you create a pool, you define an approval threshold (e.g., 2/3 of members). Any withdrawal request must be digitally signed by that number of members before it's processed."
    },
    {
      question: "What are the fees?",
      answer: "Setting up a pool is free. We charge a minimal platform fee on withdrawals to maintain our secure infrastructure and provide 24/7 support."
    },
    {
      question: "Can I use Pooled for my business?",
      answer: "Yes! Pooled is perfect for small businesses, investment clubs, and project teams managing shared budgets transparently."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-[#faf8fe] dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-[#14003c] dark:text-purple-300 mb-4">
            Common Questions
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Everything you need to know about collective banking.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <span className="font-bold text-[#14003c] dark:text-white text-lg pr-8">
                  {faq.question}
                </span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
