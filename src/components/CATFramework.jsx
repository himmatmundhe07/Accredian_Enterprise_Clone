"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CATFramework() {
  return (
    <section id="cat-framework" className="w-full mt-0 md:mt-24 pt-2 pb-8 md:py-20 flex flex-col items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-[85rem] mx-auto w-full px-4 md:px-8 xl:px-12 flex flex-col items-center">
        {/* Header */}
        <motion.div 
          className="text-center mx-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            The <span className="text-[#1a73e8]">CAT Framework</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-xl mx-auto">
            Our Proven Approach to <span className="text-[#1a73e8]">Learning Excellence</span>
          </p>
        </motion.div>

        {/* Image Container */}
        <motion.div 
          className="w-full flex justify-center mt-2 md:mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-[95%] sm:w-[80%] md:w-[70%] max-w-[1000px] aspect-[16/9]">
            <Image 
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg" 
              alt="The CAT Framework Diagram"
              fill
              className="object-contain drop-shadow-sm"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
