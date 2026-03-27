import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-surface text-center">
      <motion.div 
        className="max-w-4xl mx-auto px-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-primary mb-8">Ready to Pool?</h2>
        <p className="text-on-surface-variant text-xl mb-12">
          Join over 10,000 groups managing their collective future on Pooled.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.button 
            onClick={() => navigate('/signup')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-on-primary px-12 py-6 rounded-2xl font-headline font-bold text-xl hover:bg-primary-container transition-all shadow-xl shadow-primary/20"
          >
            Get Started for Free
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-surface-container-high text-on-surface px-12 py-6 rounded-2xl font-headline font-bold text-xl hover:bg-surface-container-highest transition-all"
          >
            Contact Sales
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
