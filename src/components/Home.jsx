"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { BENEFITS, ASSET_BASE_URL } from '@/constants';

export default function Home() {
  return (
    <section id="home" className="pt-32 pb-16 px-6 md:px-14 max-w-[85rem] mx-auto w-full">
      <div className="rounded-2xl md:rounded-3xl bg-blue-50/50 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 p-6 sm:p-10 lg:p-16 shadow-sm border border-blue-100">
        
        {/* Left Content */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-center md:text-left text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-900 capitalize">
            Next-Gen <span className="text-[#1a73e8]">Expertise</span> for Your <span className="text-[#1a73e8]">Enterprise</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 text-center md:text-left max-w-lg mx-auto md:mx-0">
            Cultivate high-performance teams through expert learning.
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto md:mx-0">
            {BENEFITS.map((benefit, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-3 text-slate-700 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              >
                <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                {benefit}
              </motion.li>
            ))}
          </ul>
          
          <div className="flex justify-center md:justify-start mt-2">
            <Button className="w-full sm:w-auto min-w-[200px] text-lg py-4">
              Enquire Now
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative w-full max-w-[550px] aspect-[5/4]">
            <Image 
              src={`${ASSET_BASE_URL}/corporate-big-hero-v4.webp`}
              alt="Corporate team working together"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
