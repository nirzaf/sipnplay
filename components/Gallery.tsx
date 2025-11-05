'use client';

import React from 'react';
import { ZoomIn } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import Image from 'next/image';

export function Gallery() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">Our Projects</h2>
          <div className="h-1 w-24 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Delivering excellence across diverse commercial kitchens</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.gallery.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border-4 border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer aspect-[4/3]"
              style={{
                animation: `zoomIn 0.6s ease-out ${i * 0.1}s both`,
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="text-white w-12 h-12 mb-4 mx-auto transform group-hover:scale-125 transition-transform" />
                  <p className="text-white text-lg font-semibold px-4 text-center">{item.title}</p>
                </div>
              </div>

              {/* Title bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-black p-4">
                <h3 className="text-white font-semibold text-base">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
