import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  href = "#pricing", 
  className = "", 
  variant = 'primary' 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-lg uppercase tracking-wider";
  
  const variants = {
    primary: "bg-accent text-accent-foreground hover:shadow-accent/40 shadow-accent/20 accent-gradient",
    secondary: "bg-premium-dark text-white hover:bg-premium-black shadow-premium",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-none"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

export default CTAButton;
