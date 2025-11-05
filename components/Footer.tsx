'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="relative border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center">
            <Image
              src="/sipnplay-logo.png"
              alt="Sip & Play Commercial Kitchenware"
              width={180}
              height={54}
              className="h-14 w-auto"
            />
          </div>

          <p className="text-gray-600 text-lg font-medium">{siteConfig.footer.tagline}</p>
          <p className="text-gray-500 text-sm">© {siteConfig.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
