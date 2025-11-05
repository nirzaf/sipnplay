'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                  {siteConfig.company.name}
                </span>
                <span className="text-[10px] text-gray-600 tracking-wider">{siteConfig.company.tagline}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-500">© {siteConfig.footer.copyright}</p>

          <div className="flex justify-center items-center space-x-2 pt-4">
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <span className="text-gray-400">{siteConfig.footer.tagline}</span>
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
}
