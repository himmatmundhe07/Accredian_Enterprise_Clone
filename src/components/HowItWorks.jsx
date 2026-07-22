"use client";

import { motion } from 'framer-motion';
import { STEPS } from '@/constants';
import { SectionHeader, Highlight } from './ui/SectionHeader';

export default function HowItWorks() {
  return (
    <section id="howItWorks" className="mt-16 md:mt-24 px-4 max-w-[85rem] mx-auto w-full">
      <SectionHeader 
        title={<>How We <Highlight>Deliver Results</Highlight> That Matter?</>}
        subtitle={<>A Structured Three-Step Approach to <Highlight>Skill Development</Highlight></>}
      />

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-4 mt-8">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div 
              key={index}
              className="relative bg-white border border-blue-100 hover:border-blue-300 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col items-center text-center max-w-[20rem] w-full group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Decorative Edge Lines */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-16 sm:h-24 bg-primary rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-16 sm:h-24 bg-primary rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 border-4 border-white bg-primary text-white rounded-full flex justify-center items-center font-bold text-lg shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              
              {/* Icon Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white rounded-full mb-6 transition-colors duration-300">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              
              {/* Text Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed hidden sm:block">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
