import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { stockPhotos } from '../data/scheduleData';

export default function PhotoGallery({ activeTheme }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 font-bold text-xs uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            Inside Our Gym
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Gymnastics Activities & Energy
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Take a look at the equipment, routines, and joyful moments waiting for your child at Resilience Gymnastics Academy.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stockPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/80 bg-gray-900"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-widest bg-pink-600 text-white px-2.5 py-0.5 rounded-full inline-block mb-1 shadow-sm">
                  {photo.category}
                </span>
                <h3 className="font-bold text-base text-white group-hover:text-pink-200 transition-colors">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Preview Modal */}
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
              <div className="bg-slate-900 p-4 text-center text-white">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">
                  {selectedPhoto.category}
                </span>
                <h4 className="text-lg font-bold">{selectedPhoto.title}</h4>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
