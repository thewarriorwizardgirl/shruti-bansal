import React from 'react';
import { Heart } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#4A6163] text-[#F9FAF4] py-8 border-t border-[#4A6163]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#F9FAF4]/80 gap-3 text-center sm:text-left">
          <p>© 2026 Shruti Bansal. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#F17A7E] fill-current" />
            <span>for art, education & community.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
