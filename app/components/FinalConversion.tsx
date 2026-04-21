"use client";

import { MessageCircle, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
const FinalConversion = () => {
  return (
    <section className="relative z-10 border-t border-white/5 py-32 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-ruby-red/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl  font-bold mb-6 tracking-tight"
        >
          Ready to <span className="text-ruby-red">Automate</span> Your Success?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-pink-mist/70 mb-12 max-w-2xl mx-auto font-light"
        >
          Join the elite{" "}
          <span className="font-semibold text-white">1% of brands</span>{" "}
          utilizing agentic workflows to capture the Pinterest market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="https://www.upwork.com/services/product/marketing-data-driven-pinterest-automation-and-seo-growth-using-ai-2043684649752480421?ref=project_share"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 glow-btn hover:bg-ruby-red/90 px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(165,81,102,0.6)] animate-[pulse_3s_ease-in-out_infinite]"
          >
            Get Started on Upwork
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="https://wa.me/923402195735?text=Hi%20Sadaf,%20I'm%20interested%20in%20a%20custom%20high-volume%20Pinterest%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 rounded-full font-semibold  border border-white/20 hover:border-ruby-red) text-pink-mist hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(165,81,102,0.6)] bg-black/50"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalConversion;
