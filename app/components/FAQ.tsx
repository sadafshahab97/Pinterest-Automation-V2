import React from "react";

const FAQ = () => {
  return (
    <section className="relative z-10 max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl  font-bold mb-12 text-center">
        Frequently Asked <span className="text-ruby-red">Questions</span>
      </h2>
      <div className="space-y-4">
        {[
          {
            q: "Is my Pinterest account safe with this automation?",
            a: "Yes, 100%. Unlike basic bots, we use persistent session management and human-mimicking agentic workflows. Our V-2 engine operates within Pinterest's technical limits to ensure your account remains secure and shadow-ban free.",
          },
          {
            q: "What is the V-2 Analytical System for Pinterest?",
            a: "It's an advanced AI-driven engine that doesn't just post pins. It analyzes CSV data, identifies high-conversion trends, and generates SEO-optimized titles and descriptions specifically for the US market.",
          },
          {
            q: "How is this different from manual management?",
            a: "Speed and precision. Manual management takes hours and often lacks data backing. V-2 processes months of analytics in seconds to ensure every pin is scheduled at the peak engagement time for your specific niche.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="glass-panel p-3 sm:p-6 border border-white/5 hover:border-ruby-red/30 transition-all"
          >
            <h4 className="text-pink-mist font-semibold mb-2 flex justify-between items-center">
              {item.q}
            </h4>
            <p className="text-sm text-pink-mist/60 leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
