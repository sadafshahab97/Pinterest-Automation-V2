"use client";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const tiers = [
  {
    title: "Analytical AI Starter",
    price: "200",
    features: [
      "30 Pins/Month",
      "AI Image Analysis",
      "Brand Tone Sync",
      "Basic SEO Board Setup",
    ],
    buttonText: "Deploy Starter",
    highlight: false,
    waMessage:
      "Hi Sadaf, I'm interested in the Analytical AI Starter ($200) plan.",
  },
  {
    title: "V-2 Growth Engine",
    price: "400",
    features: [
      "50 Pins/Month",
      "CSV Analytics Integration",
      "Insight-Based SEO",
      "AI Metadata Generation",
    ],
    buttonText: "Activate Engine",
    highlight: true,
    waMessage: "Hi Sadaf, I'm interested in the V-2 Growth Engine ($400) plan.",
  },
  {
    title: "Analytical Scale Elite",
    price: "800",
    features: [
      "150 Pins/Month",
      "Full CSV Data Training",
      "Niche-Specific AI Persona",
      "24/7 Priority Management",
    ],
    buttonText: "Initialize Elite",
    highlight: false,
    waMessage:
      "Hi Sadaf, I'm interested in the Analytical Scale Elite ($800) plan.",
  },
];

const ServiceTiers = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl  font-bold mb-4">
          Select Your <span className="text-ruby-red">Engine</span>
        </h2>
        <p className="text-pink-mist/60 text-lg">
          Agentic workflows designed for scale.
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
                Most Popular
              </div>
            )}

            <h3
              className={`text-xl  uppercase tracking-widest mb-2 ${tier.highlight ? "text-ruby-red" : "text-white/90"}`}
            >
              {tier.title}
            </h3>

            <div
              className={`text-4xl font-bold  mb-8 ${tier.highlight ? "text-white" : "text-pink-mist"}`}
            >
              ${tier.price}
              <span
                className={`text-sm  font-normal ${tier.highlight ? "text-white/50" : "text-pink-mist/50"}`}
              >
                /mo
              </span>
            </div>

            <ul
              className={`space-y-4 mb-10 grow text-sm ${tier.highlight ? "text-white/90" : "text-pink-mist/80"}`}
            >
              {tier.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ruby-red shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={`https://wa.me/923402195735?text=${encodeURIComponent(tier.waMessage)}`}
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
