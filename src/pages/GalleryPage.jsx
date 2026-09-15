import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/resortData';
import Lightbox from '../components/Lightbox';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['ALL', 'RESORT', 'ROOMS', 'DINING', 'WELLNESS', 'DESTINATION'];

  const filteredImages = activeCategory === 'ALL'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (idx) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-3xl mb-12"
        >
          <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
            VISUAL PORTFOLIO & ATMOSPHERE
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl font-light text-[#1C1C1A]">
            CINEMATIC GALLERY.
          </h1>
          <p className="text-base text-[#8C867D] font-light leading-relaxed">
            A visual journey through the architecture, palm sanctuaries, ocean vistas, and dining moments at Aurelia Resort & Spa, Goa.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-16 pb-4 border-b border-[#EAE3D9]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs tracking-[0.2em] font-medium uppercase px-5 py-2.5 transition-all ${
                activeCategory === cat
                  ? 'bg-[#1C1C1A] text-white'
                  : 'bg-white text-[#1C1C1A] border border-[#EAE3D9] hover:border-[#C5A880]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className="break-inside-avoid relative group overflow-hidden bg-[#EAE3D9] cursor-pointer shadow-md"
                data-cursor="view"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                  <span className="text-[9px] tracking-[0.2em] text-[#C5A880] uppercase font-semibold">
                    {img.category}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-white">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={lightboxOpen}
          images={filteredImages}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentIndex(prev => (prev > 0 ? prev - 1 : filteredImages.length - 1))}
          onNext={() => setCurrentIndex(prev => (prev < filteredImages.length - 1 ? prev + 1 : 0))}
        />
      </div>
    </div>
  );
}
