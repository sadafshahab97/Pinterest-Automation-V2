import React from "react";

const Testimonials = () => {
  return (
    <section className="relative z-10 py-20 sm:py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-ruby-red uppercase tracking-[0.3em] text-xs font-bold mb-4">
          Social Proof
        </p>
        <h2 className="text-3xl md:text-5xl  font-bold mb-16">
          Trusted by E-commerce{" "}
          <span className="text-pink-mist">Beta Testers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="glass-panel p-8 border-l-4 border-l-ruby-red">
            <p className="text-sm sm:text-lg italic text-pink-mist/80 mb-6">
              {`"The outbound clicks growth was insane. We saw a +450% increase in
              Shopify traffic within the first month of deploying the V-2
              engine."`}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-ruby-red">
                JD
              </div>
              <div>
                <p className="text-sm font-bold">Jewelry Brand Owner</p>
                <p className="text-xs text-pink-mist/40">
                  US-based Etsy Seller
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 border-l-4 border-l-ruby-red">
            <p className="text-sm sm:text-lg italic text-pink-mist/80 mb-6">
              {`"Finally, an automation that actually understands SEO. My boards
              are now ranking for high-volume keywords I couldn't hit manually."`}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-ruby-red">
                AS
              </div>
              <div>
                <p className="text-sm font-bold">Home Decor Creator</p>
                <p className="text-xs text-pink-mist/40">
                  Digital Marketing Manager
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
