import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, images = [], currentIndex = 0, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 lg:p-8"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-wider text-[#C5A880]">
              {currentImage?.title || 'AURELIA Gallery'}
            </span>
            <span className="text-[10px] tracking-widest text-white/60 uppercase">
              {currentIndex + 1} / {images.length} · {currentImage?.category || 'Resort'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Center Image Display */}
        <div className="relative flex-1 flex items-center justify-center p-2 lg:p-6 overflow-hidden">
          <button
            onClick={onPrev}
            className="absolute left-4 z-10 p-3 text-white bg-black/40 hover:bg-[#C5A880] hover:text-[#1C1C1A] rounded-full transition-all"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <motion.img
            key={currentIndex}
            src={currentImage?.src || currentImage}
            alt={currentImage?.title || 'Gallery image'}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="max-h-[80vh] max-w-full object-contain rounded-none shadow-2xl"
          />

          <button
            onClick={onNext}
            className="absolute right-4 z-10 p-3 text-white bg-black/40 hover:bg-[#C5A880] hover:text-[#1C1C1A] rounded-full transition-all"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Caption & Thumbnails */}
        <div className="text-center text-xs text-[#8C867D] border-t border-white/10 pt-3">
          <p className="font-light italic text-white/80">"Escape beautifully at AURELIA RESORT & SPA, Goa."</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
