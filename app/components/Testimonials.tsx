import React from "react";

const Testimonials = () => {
  return (
    <section className="relative z-10 py-20 sm:py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-ruby-red uppercase tracking-[0.3em] text-xs font-bold mb-4">
          Case Studies
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Results from the <span className="text-pink-mist">V-4 Beta</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Testimonial 1 */}
          <div className="glass-panel p-8 border-l-4 border-l-ruby-red">
            <p className="text-sm sm:text-lg italic text-pink-mist/80 mb-6">
              {`"The V-4 engine's ability to extract high-impact video frames is a game changer. We saw a +620% surge in outbound clicks and sustained Tier-1 traffic within just 30 days."`}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-ruby-red">
                MS
              </div>
              <div>
                <p className="text-sm font-bold">E-commerce Founder</p>
                <p className="text-xs text-pink-mist/40">
                  Scaling US-based Shopify Store
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-panel p-8 border-l-4 border-l-ruby-red">
            <p className="text-sm sm:text-lg italic text-pink-mist/80 mb-6">
              {`"Finally, an autonomous suite that reasons like a marketer. The AI doesn't just post; it optimizes for regional peak hours, hitting our UK audience exactly when they shop."`}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-ruby-red">
                RK
              </div>
              <div>
                <p className="text-sm font-bold">Digital Strategist</p>
                <p className="text-xs text-pink-mist/40">
                  Managing Multi-Brand Portfolios
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
