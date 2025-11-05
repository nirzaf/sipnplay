'use client';

import React from 'react';
import { siteConfig } from '@/lib/site-config';

export function Services() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-xl text-gray-400">Comprehensive solutions for your commercial kitchen needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                <div className="mb-6 inline-block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-slate-700 p-4 rounded-full group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-yellow-500 transition-all">
                      <service.icon size={32} className="text-orange-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
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
