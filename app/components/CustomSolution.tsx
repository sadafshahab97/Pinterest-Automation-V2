import Link from "next/link";
import React from "react";

const CustomSolution = () => {
  return (
    <section className="relative z-10 py-16 px-6 max-w-5xl mx-auto">
      <div className="glass-panel p-8 md:p-12 border border-white/5 bg-linear-to-r from-ruby-red/10 to-transparent rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Scaling a Large Brand?
          </h3>
          <p className="text-pink-mist/60">
            {`If you need 500+ pins monthly or multi-account management, let's deploy a custom Multi-Agent architecture for your business.`}
          </p>
        </div>
        <Link
          href="https://wa.me/923402195735?text=Hi%20Sadaf,%20I%20need%20a%20custom%20high-volume%20Enterprise%20plan%20with%20Multi-Agent%20automation."
          target="_blank"
          className="px-8 py-4 rounded-full border border-ruby-red text-ruby-red hover:bg-ruby-red hover:text-white transition-all font-bold tracking-wide text-center"
        >
          Request Custom Build
        </Link>
      </div>
    </section>
  );
};

export default CustomSolution;
