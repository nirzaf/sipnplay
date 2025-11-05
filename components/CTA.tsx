'use client';

import React from 'react';
import { MessageCircle, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function CTA() {
  const whatsappLink = `https://wa.me/${siteConfig.company.whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative bg-gradient-to-r from-orange-500 to-yellow-500 p-1 rounded-3xl">
          <div className="bg-slate-900 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">{siteConfig.cta.title}</h2>
            <p className="text-xl text-gray-300 mb-8">{siteConfig.cta.description}</p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 px-10 py-5 rounded-full text-xl font-semibold transition-all transform hover:scale-110 shadow-2xl"
            >
              <MessageCircle size={28} />
              <span>{siteConfig.cta.buttonText}</span>
            </a>

            <p className="mt-6 text-gray-400">
              <Clock className="inline mr-2" size={18} />
              {siteConfig.cta.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
