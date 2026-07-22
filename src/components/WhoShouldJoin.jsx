"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AUDIENCES, ASSET_BASE_URL } from '@/constants';

export default function WhoShouldJoin() {
  return (
    <section className="mt-12 sm:mt-28 max-w-[85rem] mx-auto px-4 xl:px-6 w-full">
      <div className="bg-primary rounded-2xl md:rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-xl">
        
        {/* Left Content */}
        <div className="md:w-[45%] pt-10 px-8 md:pt-12 md:pl-12 lg:pl-16 text-white flex flex-col justify-between relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            <h4 className="text-lg sm:text-xl font-medium text-blue-100">
              Who Should Join?
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight capitalize mt-2 font-bold">
              Strategic Skill<br />Enhancement
            </h2>
          </motion.div>
          
          <motion.div 
            className="w-full max-w-[300px] mt-8 hidden md:block relative z-10 self-center md:self-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-square w-full">
              <Image 
                src={`${ASSET_BASE_URL}/imagehuman.png`}
                alt="Professional Illustration"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          
          {/* Subtle background decoration */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
        </div>

        {/* Right Content - Grid */}
        <div className="md:w-[55%] grid grid-cols-1 sm:grid-cols-2 p-8 md:p-12 lg:p-16 text-white gap-8 md:gap-10">
          {AUDIENCES.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div 
                key={index}
                className="flex gap-4 sm:gap-4 flex-row sm:flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              >
                <div className="bg-white/10 p-3 rounded-xl shrink-0 backdrop-blur-sm">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    {audience.title}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
