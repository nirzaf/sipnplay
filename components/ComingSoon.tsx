'use client';

import React from 'react';
import { Sparkles, Clock, Flame } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function ComingSoon() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-black p-1 rounded-3xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border-4 border-black">
            <div className="relative text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm font-bold">
                <Sparkles size={16} />
                <span>{siteConfig.comingSoon.badge}</span>
                <Sparkles size={16} />
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold text-black leading-tight">
                {siteConfig.comingSoon.title}
                <span className="block mt-2 text-gray-700">
                  {siteConfig.comingSoon.titleHighlight}
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {siteConfig.comingSoon.description}
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                {siteConfig.comingSoon.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 px-4 py-2 rounded-full border-2 border-gray-300 text-black font-semibold text-sm hover:border-black hover:scale-110 transition-all cursor-pointer"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <div className="inline-flex items-center space-x-2 text-gray-700">
                  <Clock size={24} />
                  <span className="text-lg font-semibold">{siteConfig.comingSoon.subtitle}</span>
                  <Clock size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
