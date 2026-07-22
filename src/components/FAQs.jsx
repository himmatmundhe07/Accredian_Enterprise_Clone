"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { FAQ_CATEGORIES, FAQ_DATA } from '@/constants';
import { SectionHeader, Highlight } from './ui/SectionHeader';

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0]);
  const [openIndex, setOpenIndex] = useState(0);

  const activeFaqs = FAQ_DATA[activeCategory];

  return (
    <section id="faqs" className="w-full flex justify-center mt-16 sm:mt-24 md:py-12 xl:px-12 px-4">
      <div className="w-full max-w-[85rem]">
        
        <SectionHeader 
          align="left"
          title={<>Frequently Asked <Highlight>Questions</Highlight></>}
        />

        <div className="flex gap-8 mt-4 md:flex-row flex-col">
          
          {/* Categories Sidebar */}
          <div className="w-full md:w-[30%] relative">
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto no-scrollbar pb-4 md:pb-0">
              {FAQ_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenIndex(null); // Reset accordion on tab change
                    }}
                    className={`w-full max-w-[280px] shrink-0 rounded-lg px-6 py-4 text-left transition-all duration-300 ${
                      isActive 
                        ? 'bg-white shadow-md border-l-4 border-l-[#1a73e8] border-y border-r border-slate-100 text-primary font-bold' 
                        : 'bg-transparent border-2 border-slate-200 text-slate-500 font-semibold hover:border-slate-300 hover:text-slate-700'
                    }`}
                  >
                    <span className="text-sm lg:text-base whitespace-nowrap">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FAQ Accordions */}
          <div className="w-full md:w-[70%] flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                {activeFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div 
                      key={index}
                      className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex justify-between items-center w-full px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
                      >
                        <h3 className={`text-base md:text-lg font-semibold pr-4 transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                          {faq.question}
                        </h3>
                        <div className={`p-1 rounded-full transition-colors duration-200 ${isOpen ? 'bg-blue-50 text-primary' : 'text-slate-400'}`}>
                          <ChevronDown 
                            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                          />
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-2 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-12">
          <Button className="w-[80%] sm:w-auto min-w-[200px]">
            Enquire Now
          </Button>
        </div>

      </div>
    </section>
  );
}
