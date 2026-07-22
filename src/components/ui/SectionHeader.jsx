"use client";

import { motion } from 'framer-motion';


export function SectionHeader({
  title,
  subtitle,
  className = '',
  align = 'center'
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left mx-2';

  return (
    <motion.div 
      className={`mb-8 md:mb-10 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-sm sm:text-base md:text-lg text-slate-600 mt-3 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function Highlight({ children }) {
  return <span className="text-primary">{children}</span>;
}
