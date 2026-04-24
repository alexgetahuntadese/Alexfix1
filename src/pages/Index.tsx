import { motion, memo } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Zap } from "lucide-react";

const Index = () => {
  const menuItems = [
    { title: "Grades", route: "/grades" },
    { title: "Notes", route: "/notes" },
    { title: "Matric", route: "/matric" },
    { title: "2018 Predicted Matric", route: "/predicted-matric" },
    { title: "Career", route: "/career-simulator" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="px-4 py-12 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/logo.svg" alt="Simple Road" className="w-12 h-12 md:w-16 md:h-16" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
            Simple Road
          </h1>
          <img src="/logo.svg" alt="Simple Road" className="w-12 h-12 md:w-16 md:h-16" />
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <p className="text-xl md:text-2xl text-amber-200 font-semibold">
            Elite Education Platform
          </p>
          <Sparkles className="w-5 h-5 text-amber-300" />
        </div>
      </motion.div>

      {/* Menu Cards Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative px-4 py-12"
      >
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <Link
                  to={item.route}
                  className="block relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <h3 className="text-xl font-bold text-amber-100 group-hover:text-amber-200 transition-colors text-center">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="relative px-4 py-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-amber-400/20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-amber-100/80 text-sm mb-2">
                Created by <span className="text-amber-300 font-semibold">Milkesa Comm.</span> <span className="text-amber-300 font-semibold">Getahun Tadese in Eastern Ethiopia and Addis Ababa</span>
              </p>
              <p className="text-amber-100/60 text-xs mb-2">
                © 2026 Simple Road. All rights reserved.
              </p>
              <div className="flex flex-col gap-2 text-amber-100/60 text-xs">
                <p className="flex items-center gap-2">
                  <span className="text-amber-400">📱</span>
                  <span>Alexander Getahun: 0992010092 / 0950502881</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-amber-400">📱</span>
                  <span>Fenet Adem: 0914546032</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-amber-400">✉️</span>
                  <span>alexgetahuntadese@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Simple Road" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default memo(Index);
