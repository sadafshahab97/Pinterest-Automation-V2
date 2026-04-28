"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BarChart3, Shield } from "lucide-react";

// Updated with real growth trajectory from your reports
const chartData = [
  { name: "Week 1", audience: 1200 },
  { name: "Week 2", audience: 2100 },
  { name: "Week 3", audience: 4500 }, // Explosive growth phase
  { name: "Week 4", audience: 6666 }, // Matching Audit Report impressions
  { name: "Week 5", audience: 15000 },
  { name: "Week 6", audience: 27000 }, // Scaling to 331% surge [cite: 29]
];

const ProofSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const mount = () => {
      setIsMounted(true);
    };
    mount();
  }, []);

  return (
    <section className="relative z-10 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Using the +7.62% Performance Yield from your Audit  */}
            <h2 className="text-6xl md:text-8xl  font-bold text-white/90 leading-none text-glow">
              +7.62%
            </h2>
            <p className="text-2xl md:text-3xl  uppercase tracking-widest text-ruby-red">
              Performance Yield
            </p>
            <p className="text-xl text-pink-mist/60 font-light border-l-2 border-ruby-red pl-4 italic max-w-md mx-auto lg:mx-0">
              {`"Growth driven by seasonal momentum & niche intelligence."`}
            </p>
          </motion.div>

          {/* Right Chart Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <BarChart3 className="w-32 h-32 text-ruby-red" />
            </div>

            <h3 className="text-lg uppercase tracking-widest text-pink-mist/70 mb-2 ">
              Aggregate Impressions Surge
            </h3>

            {/* Reflecting the +331.1% explosive growth from your Strategic Analysis  */}
            <div className="text-4xl  font-bold text-ruby-red mb-8 flex items-end gap-2">
              +331.1%{" "}
              <span className="text-sm pb-1 text-pink-mist/50  font-normal uppercase tracking-wider">
                Explosive Growth Phase
              </span>
            </div>

            {/* CHART FIX: Only render when mounted */}
            <div className="h-48 w-full min-w-0" style={{ minHeight: "192px" }}>
              {isMounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorAudience"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#A55166"
                          stopOpacity={0.6}
                        />
                        <stop
                          offset="95%"
                          stopColor="#A55166"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#000",
                        borderColor: "rgba(165,81,102,0.3)",
                        color: "#fff",
                        borderRadius: "12px",
                      }}
                      itemStyle={{ color: "#E2D1D5" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="audience"
                      stroke="#A55166"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorAudience)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="w-full h-full bg-white/5 animate-pulse rounded-xl" />
              )}
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-pink-mist/40 uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3" /> Growth Verified
              </span>
              <span>Pinterest Analytics Reports</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
