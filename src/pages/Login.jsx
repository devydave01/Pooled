import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#faf8fe] dark:bg-slate-950 flex font-body">
      {/* Left side - Aesthetic Branding */}
      <div className="hidden lg:flex w-1/2 bg-[#14003c] relative overflow-hidden flex-col justify-start p-16">
        <div className="z-10 mb-24">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Pooled Logo"
              className="w-10 h-10 object-contain brightness-0 invert"
            />
            <span className="text-3xl font-black text-white font-headline tracking-tight">
              Pooled
            </span>
          </Link>
        </div>

        <div className="z-10 space-y-6">
          <motion.h1
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            className="text-7xl font-black text-white leading-tight font-headline"
          >
            Wealth is better <br />{" "}
            <span className="text-purple-400">shared.</span>
          </motion.h1>
          <p className="text-xl text-purple-200/60 max-w-sm font-medium">
            Manage your group's wealth with professional accuracy and the ease of a modern social network.
          </p>
        </div>

        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl -ml-48 -mb-48"></div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <motion.div
          initial={{opacity: 0, scale: 0.95}}
          animate={{opacity: 1, scale: 1}}
          className="w-full max-w-md space-y-8"
        >
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="Pooled Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-3xl font-black text-[#14003c] dark:text-purple-300 font-headline tracking-tight">
                Pooled
              </span>
            </Link>
          </div>

          <div>
            <h2 className="text-4xl font-black text-[#14003c] dark:text-white font-headline tracking-tight">
              Welcome back
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 text-lg">
              Sign in to manage your pools
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-xs font-black text-[#14003c] dark:text-purple-200 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-6 py-4 rounded-2xl bg-[#efedf3] dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/20 outline-none text-[#14003c] dark:text-white font-medium placeholder:opacity-30 transition-all font-body"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-black text-[#14003c] dark:text-purple-200 uppercase tracking-widest">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-bold text-primary hover:underline"
                >
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                required
                className="w-full px-6 py-4 rounded-2xl bg-[#efedf3] dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/20 outline-none text-[#14003c] dark:text-white font-medium placeholder:opacity-30 transition-all font-body"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center gap-3 px-1">
              <input
                type="checkbox"
                id="remember"
                className="w-5 h-5 rounded-lg border-slate-300 text-primary focus:ring-primary/20"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium text-slate-600 dark:text-slate-400"
              >
                Keep me signed in
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#14003c] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#2c046f] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-primary/20"
            >
              Sign In
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#faf8fe] dark:bg-slate-950 text-slate-400 font-bold uppercase tracking-widest">
                or
              </span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-4 py-4 px-6 border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-black text-[#14003c] dark:text-white hover:bg-white dark:hover:bg-slate-900 transition-all">
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            <span>Sign in with Google</span>
          </button>

          <p className="text-center text-slate-500 font-medium">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-black hover:underline"
            >
              Create one
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
