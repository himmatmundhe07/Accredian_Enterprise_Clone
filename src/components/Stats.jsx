"use client";

import { motion } from 'framer-motion';
import { STATS } from '@/constants';
import { SectionHeader, Highlight } from './ui/SectionHeader';

export default function Stats() {
  return (
    <section id="stats" className="w-full overflow-hidden flex flex-col items-center mt-12 sm:mt-28 px-4 sm:px-14 capitalize">
      <SectionHeader 
        title={<>Our <Highlight>Track Record</Highlight></>}
        subtitle={<>The Numbers Behind <Highlight>Our Success</Highlight></>}
      />

      {/* Stats Container */}
      <div className="w-full max-w-[85rem] flex justify-center p-4 text-center">
        
        {/* Desktop View */}
        <div className="hidden sm:flex justify-start p-4 gap-10 rounded-xl w-full">
          {STATS.map((stat, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col justify-start gap-4 items-center flex-1 ${index !== STATS.length - 1 ? 'border-r-2 border-slate-200 pr-4' : 'border-r-0 pr-4'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex justify-center items-center text-primary font-semibold w-24 h-24 bg-blue-50 p-2 rounded-full shrink-0 shadow-sm">
                <h2 className="text-2xl">{stat.value}</h2>
              </div>
              <div>
                <p className="text-slate-700 max-w-[300px] mx-auto leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="sm:hidden grid grid-cols-1 p-4 gap-10 rounded-xl w-full">
          {STATS.map((stat, index) => (
            <motion.div 
              key={index}
              className={`flex justify-start items-center text-left gap-4 pb-4 ${index !== STATS.length - 1 ? 'border-b-2 border-slate-200' : 'border-b-0 pr-4'}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex justify-center items-center text-primary font-semibold w-full max-w-[70px] aspect-square bg-blue-50 p-2 rounded-full shrink-0 shadow-sm">
                <h2 className="text-xl md:text-2xl">{stat.value}</h2>
              </div>
              <div>
                <p className="text-base md:text-2xl text-slate-700 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
