'use client';

import React from 'react';
import { siteConfig } from '@/lib/site-config';

export function Stats() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900/20 to-blue-900/20 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
              }}
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
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
