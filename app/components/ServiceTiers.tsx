"use client";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const tiers = [
  {
    title: "V-4 Starter: Presence",
    price: "350",
    features: [
      "60 Optimized Pins (Scheduled for 30 Days)",
      "AI-Powered Niche & Board Selection",
      "SEO Profile Audit & Bio Optimization",
      "Automated Brand Tone Matching",
      "Regional Time-Zone Sync (Targeted)",
      "Weekly Growth Status Update",
      "Single Account Management", 
    ],
    buttonText: "Deploy Starter",
    highlight: false,
    waMessage:
      "Hi Sadaf, I'm interested in the V-4 Starter ($350). I need the 30-day automated presence setup.",
  },
  {
    title: "V-4 Growth: Intelligence",
    price: "750",
    features: [
      "150 Pins (30-Day Full Management)",
      "AI Video Pins (Up to 20-sec each)", 
      "US/UK Traffic Pulse Scheduling",
      "Automated UTM Link Tracking", 
      "Deep CSV Audience Data Training",
      "Bi-Weekly Performance Report",
      "Single Account Handling",
    ],
    buttonText: "Activate Engine",
    highlight: true,
    waMessage:
      "Hi Sadaf, I'm ready for the V-4 Growth Engine ($750). Let's scale my traffic for the next 30 days.",
  },
  {
    title: "V-4 Elite: Dominance",
    price: "1500",
    features: [
      "350 High-Volume Pins (20-Day Management)",
      "Unlimited 30-sec Video Pins", 
      "Competitor Gap & Trend Hijacking",
      "Viral Video Analysis & Optimization",
      "24/7 Priority DFY Growth Support",
      "Custom Growth Audit Reports",
      "Exclusive Single Account Focus", 
    ],
    buttonText: "Initialize Elite",
    highlight: false,
    waMessage:
      "Hi Sadaf, I need the V-4 Elite Dominance ($1500). Please manage my global market share.",
  },
];
const ServiceTiers = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Choose Your <span className="text-ruby-red">V-4 Growth Engine</span>
        </h2>
        <p className="text-pink-mist/60 text-lg max-w-3xl mx-auto">
          We handle everything. From AI video frame selection to regional
          {`time-zone optimization, our agents manage your brand's growth for a`}
          full 30-day cycle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`glass-panel p-8 flex flex-col relative transition-all duration-300 ${
              tier.highlight
                ? "border border-ruby-red glow-border transform md:-translate-y-4 shadow-[0_10px_40px_rgba(165,81,102,0.15)]"
                : "border-t-4 border-t-white/10 hover:border-t-white/30"
            }`}
          >
            {tier.highlight && (
              <div className="absolute top-0 right-0 bg-ruby-red text-white text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                Best For Scaling
              </div>
            )}

            <h3
              className={`text-xl uppercase tracking-widest mb-2 ${
                tier.highlight ? "text-ruby-red" : "text-white/90"
              }`}
            >
              {tier.title}
            </h3>

            <div
              className={`text-4xl font-bold mb-8 ${
                tier.highlight ? "text-white" : "text-pink-mist"
              }`}
            >
              ${tier.price}
              <span
                className={`text-sm font-normal ${
                  tier.highlight ? "text-white/50" : "text-pink-mist/50"
                }`}
              >
                /mo
              </span>
            </div>

            <ul
              className={`space-y-4 mb-10 grow text-sm ${
                tier.highlight ? "text-white/90" : "text-pink-mist/80"
              }`}
            >
              {tier.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ruby-red shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={`https://wa.me/923402195735?text=${encodeURIComponent(
                tier.waMessage,
              )}`}
              target="_blank"
              className={`w-full py-3 rounded-full text-center transition-all duration-300 uppercase tracking-widest text-sm font-semibold ${
                tier.highlight
                  ? "glow-btn bg-ruby-red text-white"
                  : "border border-white/20 hover:bg-white/5 text-white"
              }`}
            >
              {tier.buttonText}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceTiers;
