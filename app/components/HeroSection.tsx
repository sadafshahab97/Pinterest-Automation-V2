import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
const HeroSection = () => {
  return (
    <section className="relative z-10 px-6 pt-24 sm:pt-32 pb-24 md:pt-48 md:pb-32 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center shadow-[0_0_20px_rgba(74,222,128,0.1)] p-4 rounded-2xl border border-green-500/10 mb-6"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-green-400/80 font-bold">
            System Status: V-2 Engine Online & Processing Data
          </span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="text-[40px] md:text-7xl  font-bold leading-[1.1] mb-6 max-w-4xl tracking-tight"
      >
        Scale Your Sales While You Sleep with{" "}
        <span className="text-ruby-red text-glow">AI-Powered</span> Pinterest
        Automation.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-sm sm:text-lg md:text-xl text-pink-mist/70 max-w-2xl mb-12 font-light leading-relaxed tracking-wide"
      >
        Moving beyond simple scripts. Introducing Pinterest Studio V-2: A
        strategic engine that leverages CSV analytics and audience insights to
        dominate the US market.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <Link
          href="https://www.upwork.com/services/product/marketing-data-driven-pinterest-automation-and-seo-growth-using-ai-2043684649752480421?ref=project_share"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto flex items-center justify-center gap-2 glow-btn hover:bg-ruby-red/90 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Get Started on Upwork
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="https://wa.me/923402195735?text=Hi%20Sadaf,%20I'm%20interested%20in%20a%20custom%20high-volume%20Pinterest%20plan."
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold  border border-white/20 hover:border-color-ruby-red text-pink-mist hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(165,81,102,0.6)]"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
