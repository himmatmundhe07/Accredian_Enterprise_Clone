"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AccredianEdge() {
  return (
    <section id="accredianEdge" className="mt-8 md:mt-24 px-4 md:px-8 xl:px-12 max-w-[85rem] mx-auto w-full">
      {/* Header */}
      <motion.div 
        className="text-center pb-8 mx-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          The <span className="text-[#1a73e8]">Accredian Edge</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-xl mx-auto">
          Key Aspects of <span className="text-[#1a73e8]">Our Strategic Training</span>
        </p>
      </motion.div>

      {/* Image Container with Scroll Reveal */}
      <motion.div 
        className="w-full flex justify-center items-center mb-8 relative"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Desktop Image */}
        <div className="hidden sm:block relative w-full max-w-[1200px] aspect-[16/6]">
          <Image 
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg" 
            alt="The Accredian Edge - Desktop" 
            fill
            className="object-contain drop-shadow-sm"
          />
        </div>

        {/* Mobile Image */}
        <div className="block sm:hidden w-full max-w-[500px]">
          <img 
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-mobile.svg" 
            alt="The Accredian Edge - Mobile" 
            className="w-full h-auto object-contain drop-shadow-sm"
          />
        </div>
      </motion.div>
    </section>
  );
}
