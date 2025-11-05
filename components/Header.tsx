'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function Header() {
  const whatsappLink = `https://wa.me/${siteConfig.company.whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <header className="relative z-10 backdrop-blur-md bg-slate-900/50 border-b border-white/10 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-3 rounded-lg">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                    {siteConfig.company.name}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-600 tracking-wider">
                    {siteConfig.company.tagline}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={20} />
            <span className="font-semibold">Contact Us</span>
          </a>
        </div>
      </div>
    </header>
  );
}
