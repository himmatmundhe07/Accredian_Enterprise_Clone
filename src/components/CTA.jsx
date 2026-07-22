"use client";

import { motion } from 'framer-motion';
import { Headset, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

export default function CTA() {
  return (
    <section id="supportSection" className="w-full mt-16 sm:mt-24 xl:px-12 px-4 flex justify-center pb-16">
      <motion.div 
        className="w-full max-w-[85rem] py-10 md:py-16 md:px-12 px-6 bg-[#1a73e8] bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl flex items-center md:justify-between md:flex-row flex-col gap-8 shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="flex gap-6 md:gap-8 md:flex-row flex-col md:items-start items-center z-10">
          <div className="w-20 h-20 flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-2xl p-1.5 shadow-lg">
            <div className="w-full h-full bg-white rounded-xl p-3 flex items-center justify-center">
              <Headset className="w-full h-full text-[#1a73e8]" />
            </div>
          </div>
          <div className="md:text-left text-center flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Want to Learn More About Our Training Solutions?
            </h1>
            <h4 className="text-base sm:text-lg mt-3 text-blue-100 font-medium max-w-xl">
              Get Expert Guidance for Your Team’s Success!
            </h4>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center z-10">
          <Button variant="white" className="w-full sm:w-auto border-none shadow-xl text-lg py-4 px-8 min-w-[200px] flex items-center gap-2 group">
            Contact Us
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
