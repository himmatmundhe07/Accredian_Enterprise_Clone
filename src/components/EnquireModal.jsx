"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Loader2 } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone required"),
  company: z.string().optional(),
  courseDomain: z.string().optional(),
  candidates: z.string().optional(),
  mode: z.string().optional(),
  location: z.string().optional(),
});

export default function EnquireModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  const { register, control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(formSchema)
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-enquire-modal', handleOpen);
    return () => window.removeEventListener('open-enquire-modal', handleOpen);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setApiError('');
      reset();
    }, 300);
  };

  const onSubmit = async (data) => {
    setApiError('');
    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      setIsSuccess(true);
    } catch (err) {
      setApiError(err.message || 'Failed to submit form. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-3xl"
          >
            {/* The user's requested HTML converted to valid JSX */}
            <div className="bg-white rounded-lg shadow-lg w-full flex flex-col sm:flex-row relative">
              <div className="hidden sm:flex w-1/2 bg-blue-100 items-center justify-center rounded-l-lg">
                <img 
                  src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp" 
                  alt="Quote Request" 
                  className="w-full h-full object-cover rounded-l-lg" 
                />
              </div>
              <div id="scrollbar2" className="font-circular w-full md:w-1/2 p-6 max-h-[90vh] overflow-y-auto no-scrollbar">
                
                <div className="flex justify-between items-center pb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Enquire Now</h2>
                  <button onClick={closeModal} type="button" className="text-gray-500 hover:text-gray-800 text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Thank you!</h3>
                    <p className="text-slate-600 mb-6">Your enquiry has been successfully submitted. We will contact you soon.</p>
                    <button 
                      onClick={closeModal}
                      className="bg-blue-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="text-black space-y-4 mt-4">
                      
                      <div>
                        <input 
                          {...register("name")}
                          className="w-full px-4 py-3 font-normal text-sm border-b-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-2 mt-2 border-neutral-200 focus:border-blue-500" 
                          id="name" 
                          type="text" 
                          placeholder="Enter Name" 
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      
                      <div>
                        <input 
                          {...register("email")}
                          className="w-full px-4 py-2 font-normal text-sm bg-white border-b-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-2 mt-2 border-neutral-300 focus:border-blue-500" 
                          id="email" 
                          type="text" 
                          placeholder="Enter Email" 
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      
                      {/* Phone Input */}
                      <div className="relative z-50">
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field: { onChange, value } }) => (
                            <PhoneInput
                              country={'in'}
                              value={value}
                              onChange={onChange}
                              inputStyle={{
                                width: '100%',
                                borderWidth: '0 0 2px 0',
                                borderStyle: 'solid',
                                borderColor: '#e5e7eb',
                                borderRadius: '0',
                                padding: '10px 10px 10px 55px',
                                outline: 'none',
                                fontSize: '0.875rem',
                                lineHeight: '1.25rem',
                                backgroundColor: 'transparent'
                              }}
                              buttonStyle={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                borderBottom: '2px solid #e5e7eb',
                                borderRadius: '0'
                              }}
                              containerStyle={{
                                marginTop: '0.5rem'
                              }}
                              dropdownStyle={{
                                zIndex: 9999
                              }}
                            />
                          )}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                      
                      <div>
                        <input 
                          {...register("company")}
                          className="w-full px-4 py-2 font-normal text-sm bg-white border-b-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-2 mt-2 border-neutral-300 focus:border-blue-500" 
                          id="company" 
                          type="text" 
                          placeholder="Enter company name" 
                        />
                      </div>
                      
                      {/* React Select Static Mock (Domain) */}
                      <div>
                        <div className="css-b62m3t-container">
                          <div className="css-110vbn0-control relative">
                            <select 
                              {...register("courseDomain")}
                              className="w-full px-4 py-3 font-normal text-sm border-b-2 outline-none transition border-neutral-300 focus:border-blue-500 appearance-none bg-transparent relative z-10"
                            >
                              <option value="">Select Domain</option>
                              <option value="Leadership">Leadership</option>
                              <option value="Data">Data & AI</option>
                              <option value="Tech">Technology</option>
                            </select>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
                              <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg text-gray-400">
                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <input 
                          {...register("candidates")}
                          type="text" 
                          placeholder="Enter No. of candidates" 
                          className="w-full px-4 py-2 font-normal text-sm bg-white border-b-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-2 mt-2 border-neutral-300 focus:border-blue-500" 
                        />
                      </div>
                      
                      {/* React Select Static Mock (Mode) */}
                      <div>
                        <div className="css-b62m3t-container">
                          <div className="css-110vbn0-control relative">
                            <select 
                              {...register("mode")}
                              className="w-full px-4 py-3 font-normal text-sm border-b-2 outline-none transition border-neutral-300 focus:border-blue-500 appearance-none bg-transparent relative z-10"
                            >
                              <option value="">Select Mode of Delivery *</option>
                              <option value="Online">Online Virtual</option>
                              <option value="Offline">In-Person Offline</option>
                              <option value="Hybrid">Hybrid</option>
                            </select>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
                              <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg text-gray-400">
                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <input 
                          {...register("location")}
                          type="text" 
                          placeholder="Eg: Gurgoan, Delhi, India" 
                          className="w-full px-4 py-2 font-normal text-sm bg-white border-b-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-2 mt-2 border-neutral-300 focus:border-blue-500" 
                        />
                      </div>
                      
                      {apiError && (
                        <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">
                          {apiError}
                        </div>
                      )}
                      
                      <div className="mt-4">
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Submit'}
                        </button>
                      </div>
                      
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
