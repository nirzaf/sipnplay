'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function Header() {
  const whatsappLink = `https://wa.me/${siteConfig.company.whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <header className="relative z-10 backdrop-blur-md bg-white/95 border-b border-gray-200 sticky top-0 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative group cursor-pointer">
              <Image
                src="/sipnplay-logo.png"
                alt="Sip & Play Commercial Kitchenware"
                width={200}
                height={60}
                className="h-12 sm:h-16 w-auto transition-transform group-hover:scale-105"
                priority
              />
            </div>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={20} />
            <span className="font-semibold">Contact Us</span>
          </a>
        </div>
      </div>
    </header>
  );
}
