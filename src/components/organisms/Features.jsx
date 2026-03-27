import React from "react";
import {motion} from "framer-motion";

const Features = () => {
  return (
    <section id="features" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="mb-16"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-primary mb-4">
            Engineered for Unity
          </h2>
          <p className="text-on-surface-variant font-medium text-lg">
            Three pillars of group financial success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Feature 1 */}
          <motion.div
            className="md:col-span-7 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between group hover:shadow-2xl transition-all duration-500"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.1}}
          >
            <div>
              <div className="w-14 h-14 bg-secondary-container/20 text-secondary rounded-2xl flex items-center justify-center mb-8 hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  add_business
                </span>
              </div>
              <h3 className="font-headline text-3xl font-bold text-primary mb-4">
                Create online without bank visits
              </h3>
              <p className="text-on-surface-variant leading-relaxed max-w-md">
                Ditch the paperwork. Set up your group vault in minutes with
                biometric identity verification and instant compliance checks.
              </p>
            </div>
            <div className="mt-12 rounded-2xl overflow-hidden h-48 relative">
              <img
                alt="Online Setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWRgwr0bwfjzdfMUXaRoLWCiJmaQgkObn8vrbwHrgGrHQgLdIPObFwnX80eZ6mnTabnlS8mhVBQ5HqUBGI1Ie2qb-MuRnT1LePHMGRe495v5qyRi2wlEwvqDmIFhRaaAq4bVwJKyV4Uf5o5JIYqzDF8V_5-JEJPmoK0jOBrRAjrboEoOU5ZHUkkhaZ5verifi-3CnwHeF2HutMExtipeUJlpvQ3u4H1S5-rMAALeAnFLMp_rSNmxLE5qpvO0xP9VgW_WS-vKvGf4aA"
              />
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="md:col-span-5 bg-primary text-white p-10 rounded-[2rem] flex flex-col justify-between"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.3}}
          >
            <div>
              <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  visibility
                </span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-4">
                Transparent contributions
              </h3>
              <p className="text-on-primary-container leading-relaxed">
                Real-time ledgers show every member's input. Automatic alerts
                keep everyone accountable without the awkward conversations.
              </p>
            </div>
            <div className="mt-8 bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm opacity-60">Recent Pool Activity</span>
                <span className="text-secondary-container font-bold">
                  #1000,000
                </span>
              </div>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-500"></div>
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-secondary-container flex items-center justify-center text-primary text-xs font-bold">
                  +12
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="md:col-span-12 bg-white p-10 rounded-[2rem] flex flex-col md:flex-row items-center gap-12 hover:shadow-2xl transition-all duration-500"
            initial={{opacity: 0, scale: 0.95}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.5}}
          >
            <div className="md:w-1/2">
              <div className="w-14 h-14 bg-error-container/20 text-error rounded-2xl flex items-center justify-center mb-8 hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  verified_user
                </span>
              </div>
              <h3 className="font-headline text-3xl font-bold text-primary mb-4">
                Multi-approval withdrawals
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                No single person can move funds. Every withdrawal requires a
                custom threshold of approvals from designated members, ensuring
                total security.
              </p>
              <a
                className="text-secondary font-bold flex items-center gap-2 group"
                href="#"
              >
                Learn about Governance
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[
                {
                  name: "David O.",
                  status: "Approved",
                  icon: "check_circle",
                  iconColor: "text-secondary",
                },
                {
                  name: "Tolu A.",
                  status: "Approved",
                  icon: "check_circle",
                  iconColor: "text-secondary",
                },
                {
                  name: "Jordan M.",
                  status: "Pending",
                  icon: "pending",
                  iconColor: "text-on-surface-variant",
                },
              ].map((user) => (
                <div
                  key={user.name}
                  className="bg-surface-container-low p-6 rounded-2xl flex flex-col items-center text-center hover:bg-surface-container-high transition-colors"
                >
                  <span
                    className={`material-symbols-outlined ${user.iconColor} mb-2`}
                  >
                    {user.icon}
                  </span>
                  <span className="text-xs uppercase tracking-widest font-bold opacity-40">
                    {user.status}
                  </span>
                  <p className="font-headline font-bold text-primary mt-2">
                    {user.name}
                  </p>
                </div>
              ))}
              <div className="bg-secondary-container p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                <p className="font-headline font-black text-primary text-2xl">
                  2/3
                </p>
                <p className="text-[10px] uppercase font-bold text-on-secondary-container">
                  Signatures
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
