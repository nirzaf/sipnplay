'use client';

import React from 'react';
import { ChefHat, Utensils, Flame } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function Hero() {
  const whatsappLink = `https://wa.me/${siteConfig.company.whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="relative inline-block">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-black leading-tight">
              {siteConfig.hero.title}
            </h1>
            <div className="h-2 w-32 bg-black mx-auto mt-6"></div>
          </div>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.hero.description}
          </p>

          {/* Animated Icons Row */}
          <div className="flex justify-center items-center space-x-8 pt-8">
            {[ChefHat, Utensils, Flame].map((Icon, i) => (
              <div
                key={i}
                className="group cursor-pointer"
                style={{
                  animation: `float ${3 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <div className="relative bg-white p-6 rounded-full border-2 border-gray-200 group-hover:border-black transition-all shadow-lg group-hover:shadow-xl">
                  <Icon size={32} className="text-black group-hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              <span>{siteConfig.hero.ctaText}</span>
              <ChefHat />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
