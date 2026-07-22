"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CLIENTS, ASSET_BASE_URL } from '@/constants';
import { SectionHeader, Highlight } from './ui/SectionHeader';

export default function Clients() {
  // We duplicate the array for the continuous marquee effect
  const marqueeClients = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="mt-12 sm:mt-28 xl:px-12 px-4 text-center max-w-[85rem] mx-auto w-full">
      <SectionHeader 
        title={<>Our Proven <Highlight>Partnerships</Highlight></>}
        subtitle={<>Successful Collaborations With the <Highlight>Industry’s Best</Highlight></>}
      />

      {/* Desktop Grid (Static) */}
      <div className="hidden sm:flex justify-center items-center mt-2 w-full">
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 xl:gap-12 w-full">
          {CLIENTS.map((client, index) => (
            <motion.li 
              key={index} 
              className="flex justify-center items-center p-4 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0">
                <Image 
                  src={`${ASSET_BASE_URL}/${client.src}`}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Marquee (Scrolling) */}
      <div className="sm:hidden overflow-hidden relative w-full mt-4">
        {/* Left/Right Fade Masks for smoother scrolling edges */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeClients.map((client, index) => (
            <div key={index} className="flex justify-center items-center px-8 shrink-0">
              <div className="relative w-14 h-14">
                <Image 
                  src={`${ASSET_BASE_URL}/${client.src}`}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
