"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS, ASSET_BASE_URL } from '@/constants';
import { SectionHeader, Highlight } from './ui/SectionHeader';

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full mt-16 sm:mt-24 pb-12 flex flex-col items-center">
      <div className="max-w-[85rem] mx-auto w-full px-4 md:px-8 xl:px-12">
        
        <SectionHeader 
          title={<>Testimonials from <Highlight>Our Partners</Highlight></>}
          subtitle={<>What <Highlight>Our Clients</Highlight> Are Saying</>}
        />

        {/* Testimonials Grid / Snap Scroll */}
        <div className="w-full">
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="snap-center shrink-0 w-[85vw] md:w-auto bg-white border border-slate-200 hover:border-blue-200 rounded-2xl p-8 flex flex-col items-start min-h-[280px] shadow-sm hover:shadow-xl transition-all duration-300 group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                <div className="h-16 mb-6 flex items-center">
                  <div className="relative w-20 h-16 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image 
                      src={`${ASSET_BASE_URL}/${testimonial.logo}`}
                      alt={testimonial.company}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>
                
                <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed italic z-10 flex-1">
                  "{testimonial.quote}"
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 w-full">
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
