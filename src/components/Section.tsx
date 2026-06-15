import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  id, 
  className = "", 
  dark = false 
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
