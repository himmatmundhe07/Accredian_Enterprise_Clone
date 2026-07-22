"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { COURSES, ASSET_BASE_URL } from '@/constants';
import { SectionHeader, Highlight } from './ui/SectionHeader';

export default function Courses() {
  return (
    <section className="mt-12 sm:mt-28 max-w-[85rem] mx-auto mb-10 bg-white text-center w-full px-4 md:px-8 xl:px-12">
      <SectionHeader 
        title={<>Tailored <Highlight>Course Segmentation</Highlight></>}
        subtitle={<>Explore <Highlight>Custom-fit Courses</Highlight> Designed to Address Every Professional Focus</>}
      />

      {/* Course Cards Grid / Snap Scroll */}
      <div className="mt-8 flex overflow-x-auto snap-x snap-mandatory no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pb-4 sm:pb-0">
        {COURSES.map((course, index) => (
          <motion.div 
            key={index}
            className="snap-center shrink-0 w-[85vw] max-w-[364px] sm:w-auto bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {/* Image Container */}
            <div className="relative w-full h-40 sm:h-48 overflow-hidden">
              <Image 
                src={`${ASSET_BASE_URL}/${course.image}`}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content Container */}
            <div className="p-6 flex flex-col flex-1 text-left">
              <h4 className="text-xl md:text-2xl font-bold text-primary sm:mb-3">
                {course.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed hidden sm:block">
                {course.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
