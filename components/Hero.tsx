'use client';

import React, { useState, useEffect } from 'react';
import { ChefHat, Utensils, Flame, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const whatsappLink = `https://wa.me/${siteConfig.company.whatsappNumber.replace(/[^0-9]/g, '')}`;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="relative inline-block">
            <h1
              className="text-5xl sm:text-7xl font-bold mb-6"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <span className="block mb-2 text-white">Where</span>
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
                Precision
              </span>
              <span className="text-white"> Meets </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                Passion
              </span>
            </h1>
            <div className="absolute -top-8 -right-8 text-yellow-400 animate-spin hidden md:block" style={{ animationDuration: '3s' }}>
              <Sparkles size={40} />
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.hero.description}
          </p>

          {/* Animated Icons Row */}
          <div className="flex justify-center items-center space-x-8 pt-8">
            {[ChefHat, Utensils, Flame].map((Icon, i) => (
              <div
                key={i}
                className="relative group cursor-pointer"
                style={{
                  animation: `float ${3 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-slate-800 p-4 rounded-full border border-orange-500/50 group-hover:border-orange-500 transition-all">
                  <Icon size={32} className="text-orange-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl"
            >
              <span>{siteConfig.hero.ctaText}</span>
              <ChefHat className="animate-bounce" />
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
