"use client";


export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center justify-center text-sm md:text-base cursor-pointer";
  
  const variants = {
    primary: "bg-[#1a73e8] hover:bg-blue-700 text-white shadow-blue-500/30",
    secondary: "bg-[#33bbcf] hover:bg-cyan-600 text-white shadow-cyan-500/30",
    outline: "bg-transparent border-2 border-[#1a73e8] text-[#1a73e8] hover:bg-blue-50",
    white: "bg-white text-[#1a73e8] hover:bg-blue-50 shadow-white/30",
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else {
      // By default, if no onClick is provided, this opens the lead capture form
      window.dispatchEvent(new Event('open-enquire-modal'));
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
