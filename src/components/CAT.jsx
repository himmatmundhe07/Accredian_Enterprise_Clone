"use client";

import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Brain, 
  Users, 
  ChartNoAxesColumnIncreasing, 
  Settings, 
  Globe, 
  Banknote 
} from 'lucide-react';

const DOMAINS = [
  { icon: Lightbulb, title: "Product & Innovation Hub" },
  { icon: Brain, title: "Gen-AI Mastery" },
  { icon: Users, title: "Leadership Elevation" },
  { icon: ChartNoAxesColumnIncreasing, title: "Tech & Data Insights" },
  { icon: Settings, title: "Operations Excellence" },
  { icon: Globe, title: "Digital Enterprise" },
  { icon: Banknote, title: "Fintech Innovation Lab" },
];

export default function CAT() {
  return (
    <section id="cat" className="mt-16 md:mt-28 max-w-[85rem] mx-auto px-4 md:px-8 xl:px-12 w-full">
      {/* Header */}
      <motion.div 
        className="text-center mb-10 mx-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          Our <span className="text-[#1a73e8]">Domain Expertise</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-xl mx-auto">
          <span className="text-[#1a73e8]">Specialized Programs</span> Designed to Fuel Innovation
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
        {DOMAINS.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <motion.div 
              key={index}
              className="p-4 sm:p-6 w-[45%] sm:w-[30%] lg:w-[22%] flex flex-col justify-center items-center bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-blue-50 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 group-hover:bg-[#1a73e8] transition-colors duration-300">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#1a73e8] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-center text-slate-900 leading-tight">
                {domain.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
