"use client";
import { BrainCircuit, Database, Rocket } from "lucide-react";
import { motion } from "motion/react";

const ProcessSection = () => {
  return (
    <section className="relative z-10 bg-linear-to-b from-transparent to-[#050505] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            V-4 <span className="text-ruby-red">Autonomous</span> Flow
          </h2>
          <p className="text-pink-mist/60 text-lg uppercase tracking-widest">
            The Neural Engine Behind Your Growth
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-10 right-10 h-px bg-white/10 z-0">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-ruby-red to-transparent opacity-50" />
          </div>

          {[
            {
              num: "01",
              title: "Context Injection",
              desc: "System syncs your assets with CSV analytics and real-time US/UK audience insights.",
              icon: Database,
            },
            {
              num: "02",
              title: "Agentic Reasoning",
              desc: "V-4 agents analyze videos for 'Hook Frames' and craft psychology-based native titles.",
              icon: BrainCircuit,
            },
            {
              num: "03",
              title: "Regional Deployment",
              desc: "Autonomous 30-day scheduling optimized for Tier-1 traffic pulses and viral saves.",
              icon: Rocket,
            },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex-1 relative z-10 text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-cinematic-black border border-ruby-red glow-border flex items-center justify-center mb-6 text-ruby-red">
                <step.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-white/10 mb-2 absolute top-0 right-1/2 translate-x-12 -translate-y-4 select-none pointer-events-none">
                {step.num}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                {step.title}
              </h3>
              <p className="text-pink-mist/60 text-sm leading-relaxed max-w-70">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
