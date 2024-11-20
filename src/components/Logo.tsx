import React from 'react';
import LogoIcon from '../assets/logo.svg?react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon width={40} height={40} className="w-10 h-10" />
      <span className="text-2xl font-bold tracking-tight">Exat Homes</span>
    </div>
  );
};

export default Logo;