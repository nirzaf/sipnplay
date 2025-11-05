'use client';

import React from 'react';
import { siteConfig } from '@/lib/site-config';

export function Services() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">Our Product Range</h2>
          <div className="h-1 w-24 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Everything you need for your commercial kitchen</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-gray-50 p-8 rounded-xl border-2 border-gray-200 hover:border-black transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
              }}
            >
              <div className="relative">
                <div className="mb-6 inline-block">
                  <div className="relative bg-white p-4 rounded-full border-2 border-gray-300 group-hover:border-black group-hover:bg-black transition-all">
                    <service.icon size={32} className="text-black group-hover:text-white transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
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
