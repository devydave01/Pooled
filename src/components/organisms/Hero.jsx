import React from "react";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative pt-14 pb-16 md:pt-24 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex justify-center">
          <motion.div
            className="max-w-3xl text-center flex flex-col items-center"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
            <h1 className="font-headline font-extrabold text-5xl md:text-[5rem] leading-[1.1] tracking-tight text-primary mb-8">
              Shared Banking for the{" "}
              <span className="text-secondary">Modern Group</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed mx-auto">
              Group banking, simplified. Total transparency with less bank
              visits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <motion.button
                onClick={() => navigate("/signup")}
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.95}}
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-5 rounded-xl font-headline font-bold text-lg shadow-xl shadow-primary/10 transition-all"
              >
                Start Pooling
              </motion.button>
              <button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({behavior: "smooth"})
                }
                className="bg-surface-container-highest text-on-surface px-10 py-5 rounded-xl font-headline font-bold text-lg hover:bg-surface-container-high transition-colors"
              >
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Abstract Background Element */}
      <motion.div
        className="absolute -right-20 top-20 w-1/2 h-full opacity-10 pointer-events-none"
        initial={{scale: 0.8, opacity: 0}}
        animate={{scale: 1, opacity: 0.1}}
        transition={{duration: 1.5, ease: "easeOut"}}
      >
        <div className="w-full h-full bg-primary rounded-full blur-[120px]"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
