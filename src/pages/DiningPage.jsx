import React, { useState } from 'react';
import { DINING_EXPERIENCES } from '../data/resortData';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Clock, Flame, Wine, Check, X } from 'lucide-react';

export default function DiningPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleReserve = (venueName) => {
    setSelectedVenue(venueName);
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 4000);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-3xl mb-16"
        >
          <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
            GOAN & INTERNATIONAL GASTRONOMY
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl font-light text-[#1C1C1A]">
            FROM LAND. FROM SEA. TO TABLE.
          </h1>
          <p className="text-base text-[#8C867D] font-light leading-relaxed">
            Aurelia’s culinary philosophy centers around local Goan spice harvests, wild ocean catches, and wood-fired open flames under ancient banyan trees.
          </p>
        </motion.div>

        {/* 3 Main Venues */}
        <div className="space-y-24 mb-24">
          {DINING_EXPERIENCES.map((venue, idx) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div
                className={`lg:col-span-7 aspect-[16/10] bg-[#EAE3D9] overflow-hidden shadow-2xl relative ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
                data-cursor="view"
              >
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#1C1C1A]/90 text-[#C5A880] text-[9px] tracking-widest px-3 py-1 font-semibold uppercase">
                  {venue.hours}
                </div>
              </div>

              <div className={`lg:col-span-5 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase font-semibold block">
                  0{idx + 1} · DINING VENUE
                </span>
                <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#1C1C1A]">
                  {venue.name}
                </h2>
                <p className="font-serif italic text-lg text-[#C5A880] font-light">
                  "{venue.tagline}"
                </p>
                <p className="text-sm text-[#8C867D] font-light leading-relaxed">
                  {venue.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#EAE3D9]">
                  <span className="text-[10px] tracking-widest font-semibold text-[#8C867D] uppercase block">HIGHLIGHTS</span>
                  <div className="flex flex-wrap gap-2">
                    {venue.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] bg-white border border-[#EAE3D9] px-3 py-1 text-[#1C1C1A]">
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleReserve(venue.name)}
                    className="bg-[#1C1C1A] text-white text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-colors"
                  >
                    RESERVE A TABLE →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EMBER Feature Section */}
        <div className="bg-[#1C1C1A] text-white p-8 lg:p-16 border border-[#C5A880]/30 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
              SIGNATURE OPEN-FIRE RESTAURANT
            </span>
            <h2 className="font-serif text-5xl lg:text-7xl font-light leading-none">
              DINNER UNDER THE STARS.
            </h2>
            <p className="text-sm text-[#EAE3D9] font-light leading-relaxed">
              An intimate open-air culinary theatre beneath our ancient lit banyan tree. Chef-curated tasting menus feature wood-fired local ocean catches, organic heritage vegetables, and rare wine pairings.
            </p>
            <div className="flex flex-wrap gap-6 text-xs text-[#C5A880]">
              <span className="flex items-center space-x-2">
                <Flame className="w-4 h-4" />
                <span>Open-Fire Kitchen</span>
              </span>
              <span className="flex items-center space-x-2">
                <Wine className="w-4 h-4" />
                <span>Curated Wine Cellar</span>
              </span>
              <span className="flex items-center space-x-2">
                <Utensils className="w-4 h-4" />
                <span>7-Course Tasting Menu</span>
              </span>
            </div>
            <div className="pt-4">
              <button
                onClick={() => handleReserve('EMBER Open-Fire Dinner')}
                className="bg-[#C5A880] text-[#1C1C1A] text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 hover:bg-white transition-colors"
              >
                RESERVE EMBER TABLE →
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-square bg-black border border-white/20 overflow-hidden" data-cursor="view">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85"
              alt="EMBER banyan open fire"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#FAF8F5] border border-[#EAE3D9] p-8 max-w-lg w-full relative space-y-6 shadow-2xl"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-[#8C867D] hover:text-[#1C1C1A]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 border-b border-[#EAE3D9] pb-4">
                <span className="text-[10px] tracking-widest text-[#C5A880] font-semibold uppercase">TABLE RESERVATION</span>
                <h3 className="font-serif text-3xl text-[#1C1C1A]">{selectedVenue}</h3>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <Check className="w-10 h-10 text-[#C5A880] mx-auto" />
                  <h4 className="font-serif text-2xl text-[#1C1C1A]">Reservation Received</h4>
                  <p className="text-xs text-[#8C867D] font-light">Our Maître d' will confirm your table seating via email shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">FULL NAME</label>
                    <input required type="text" placeholder="Your name" className="w-full bg-white border border-[#EAE3D9] p-3 outline-none focus:border-[#C5A880]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">DATE</label>
                      <input required type="date" className="w-full bg-white border border-[#EAE3D9] p-3 outline-none focus:border-[#C5A880]" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">TIME</label>
                      <input required type="time" className="w-full bg-white border border-[#EAE3D9] p-3 outline-none focus:border-[#C5A880]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">NUMBER OF GUESTS</label>
                      <select className="w-full bg-white border border-[#EAE3D9] p-3 outline-none focus:border-[#C5A880]">
                        <option value="2">2 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8">8+ Large Table</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">EMAIL</label>
                      <input required type="email" placeholder="email@domain.com" className="w-full bg-white border border-[#EAE3D9] p-3 outline-none focus:border-[#C5A880]" />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-[#1C1C1A] text-white py-4 font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A880] transition-colors">
                    REQUEST TABLE RESERVATION
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
