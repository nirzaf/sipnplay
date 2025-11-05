'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function WhyChooseUs() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400">Excellence in every aspect of our service</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {siteConfig.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer"
              style={{
                animation: `fadeInRight 0.6s ease-out ${i * 0.1}s both`,
              }}
            >
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-full">
                  <CheckCircle size={24} className="text-white" />
                </div>
              </div>
              <p className="text-gray-300 text-lg">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
