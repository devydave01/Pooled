import React from "react";
import {motion} from "framer-motion";

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-primary">
      {/* Decorative Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-container opacity-90"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.span
            className="text-secondary-container font-headline font-bold tracking-widest uppercase text-sm block mb-6"
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
          >
            Testimonials
          </motion.span>

          <motion.h2
            className="text-white font-headline text-4xl md:text-6xl font-extrabold mb-16 leading-tight"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            "Pooled transformed how our investment club operates. No more
            chasing receipts or blind trust."
          </motion.h2>

          <motion.div
            className="flex items-center gap-6"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.4}}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary-container shadow-lg">
              <img
                alt="Marcus Chen"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnuwzXqZBlEmj83IFzPQTrY1F0a7MnnlZh_dn9DOLUK1bk0wQQk1B8mTkli_F6lOnFi2SiXWfPRwizZr3gRBqF3AZzQ6U4hzJh-1YSFNDgVd8pUaOl5DB2mDx6LSqJux8yEb77C--o6eMUCU0rOrefS3acgg06ePauz-TYxc0UTszaPzPFy9mGXJNgDYVNjW8GxDiA-_8kDRyXc2xcDZ4VGibeKnnkX0ymmASQBvSKH3JCtyI3h1gUVKfbAcqOo6RpQrmcikTlf9gN"
              />
            </div>
            <div>
              <p className="text-white font-headline font-bold text-xl">
                Thomas David
              </p>
              <p className="text-white/60 font-body">Founder, SoftwareBOX</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Abstract background shape */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary rounded-full blur-[150px] opacity-20"
        initial={{scale: 0.8}}
        whileInView={{scale: 1.2}}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>
    </section>
  );
};

export default Testimonial;
