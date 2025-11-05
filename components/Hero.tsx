'use client';

import React from 'react';
import { ChefHat, Utensils, Flame, Sparkles, ShoppingCart } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function Hero() {
  const whatsappLink = `https://wa.me/${siteConfig.company.whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Coming Soon Banner */}
          <div className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full text-sm font-bold animate-pulse">
            <Sparkles size={20} className="animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-base">OUR BRAND NEW ECOMMERCE SITE IS COOKING!</span>
            <Sparkles size={20} className="animate-spin" style={{ animationDuration: '3s' }} />
          </div>

          <div className="relative inline-block">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-black leading-tight">
              {siteConfig.hero.title}
            </h1>
            <div className="h-2 w-32 bg-black mx-auto mt-6"></div>
          </div>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.hero.description}
          </p>

          {/* Coming Soon Announcement Box */}
          <div className="max-w-4xl mx-auto mt-12 mb-8">
            <div className="relative bg-black p-1 rounded-2xl">
              <div className="bg-white rounded-2xl p-8 border-4 border-black">
                <div className="flex items-center justify-center mb-4">
                  <ShoppingCart size={48} className="text-black animate-bounce" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                  Launching Soon: Your Complete Online Kitchenware Store
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Browse thousands of products, compare prices, and order with just a few clicks.
                  The future of commercial kitchenware shopping is almost here!
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Easy Ordering', '24/7 Shopping', 'Secure Payments', 'Fast Delivery'].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 px-4 py-2 rounded-full border-2 border-gray-300 text-black font-semibold text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

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
              <span>Contact Us for Orders & Inquiries</span>
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
