import React from "react";

const FAQ = () => {
  return (
    <section className="relative z-10 max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Engineered for <span className="text-ruby-red">Growth: FAQ</span>
      </h2>
      <div className="space-y-4">
        {[
          {
            q: "How does the V-4 Multi-Agent Logic protect my account?",
            a: "Unlike basic scripts, V-4 uses an 'Agentic Workflow.' It uses persistent session-state management and human-mimicking reasoning. One agent researches, another writes, and a third schedules, ensuring the system operates naturally within Pinterest's safety limits.",
          },
          {
            q: "What is AI Video Frame Extraction?",
            a: "This is a core V-4 feature. Our system scans every second of your videos to identify the 'Hero Frame'—the exact moment with the highest visual impact. It then automatically sets this as the thumbnail to maximize CTR and outbound clicks.",
          },
          {
            q: "How does 'Regional Traffic Pulse' work for US/UK markets?",
            a: "The engine analyzes audience insights from Tier-1 markets. It identifies peak engagement hours in regions like the USA and UK, then automatically converts and schedules your content for those 'pulses' to ensure maximum global reach.",
          },
          {
            q: "Can the system really handle CSV and SEO data autonomously?",
            a: "Yes. The V-4 Engine is built for data-driven marketing. It trains on your CSV product data and niche analytics to generate high-converting, SEO-optimized titles and descriptions that resonate with your specific target audience.",
          },
          {
            q: "Is this a 'Set & Forget' 30-day service?",
            a: "Exactly. Our DFY (Done-For-You) model means we handle the research, creative optimization, and scheduling for a full 30-day cycle. You get consistent, high-volume growth without ever having to log in or post manually.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="glass-panel p-3 sm:p-6 border border-white/5 hover:border-ruby-red/30 transition-all"
          >
            <h4 className="text-pink-mist font-semibold mb-2 flex justify-between items-center text-base sm:text-lg">
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
