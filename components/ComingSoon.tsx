'use client';

import React from 'react';
import { Sparkles, Clock, Flame } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function ComingSoon() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 p-1 rounded-3xl animate-pulse">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 right-0 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>

            <div className="relative text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                <Sparkles size={16} />
                <span>{siteConfig.comingSoon.badge}</span>
                <Sparkles size={16} />
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
                {siteConfig.comingSoon.title}
                <span className="block mt-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                  {siteConfig.comingSoon.titleHighlight} <Flame className="inline-block" size={40} />
                </span>
              </h2>

              <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {siteConfig.comingSoon.description}
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                {siteConfig.comingSoon.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/30 text-orange-400 font-semibold text-sm hover:border-orange-500 hover:scale-110 transition-all cursor-pointer"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <div className="inline-flex items-center space-x-2 text-yellow-400 animate-pulse">
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
