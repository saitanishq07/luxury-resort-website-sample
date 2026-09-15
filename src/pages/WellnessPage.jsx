import React, { useState } from 'react';
import { WELLNESS_SERVICES, YOGA_SESSIONS } from '../data/resortData';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar, Clock, Sparkles, X } from 'lucide-react';

export default function WellnessPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleOpenBooking = (service) => {
    setSelectedService(service);
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
            AURELIA SPA & HOLISTIC HEALING
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl font-light text-[#1C1C1A]">
            COME BACK TO YOURSELF.
          </h1>
          <p className="text-base text-[#8C867D] font-light leading-relaxed">
            Inspired by ancient Goan botanical remedies and Vedic traditions, Aurelia Spa offers custom therapies designed to quiet the mind, restore physical vitality, and realign inner harmony.
          </p>
        </motion.div>

        {/* Tranquil Spa Hero Visual */}
        <div className="aspect-[21/9] bg-[#EAE3D9] overflow-hidden mb-20 shadow-2xl relative" data-cursor="view">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="Aurelia Spa Sanctuary Pavilion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 text-white">
            <div>
              <span className="text-[9px] tracking-[0.25em] text-[#C5A880] uppercase font-semibold block">SANCTUARY AT DUSK</span>
              <h3 className="font-serif text-3xl font-light">Open-Air Oceanfront Treatment Pavilions</h3>
            </div>
          </div>
        </div>

        {/* Spa Treatments Grid */}
        <div className="space-y-8 mb-24">
          <div className="border-b border-[#EAE3D9] pb-4 flex items-end justify-between">
            <h2 className="font-serif text-3xl lg:text-4xl text-[#1C1C1A] font-light">
              CURATED SPA MENU & RITUALS
            </h2>
            <span className="text-xs text-[#8C867D]">All treatments include organic botanical tea service</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WELLNESS_SERVICES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#EAE3D9] p-8 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#C5A880] font-semibold">
                    <span className="uppercase tracking-widest">{item.category}</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1C1C1A] font-light">{item.name}</h3>
                  <p className="text-xs text-[#8C867D] font-light leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-4 border-t border-[#EAE3D9] flex items-center justify-between">
                  <span className="font-serif text-2xl text-[#1C1C1A]">{item.price}</span>
                  <button
                    onClick={() => handleOpenBooking(item.name)}
                    className="bg-[#1C1C1A] text-white text-xs tracking-[0.2em] font-semibold uppercase px-5 py-2.5 hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-colors"
                  >
                    BOOK SESSION
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YOGA & MEDITATION SECTION */}
        <div className="bg-[#1C1C1A] text-white p-8 lg:p-16 border border-[#C5A880]/30 space-y-12">
          <div className="max-w-2xl space-y-4">
            <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
              MINDFUL MOVEMENT
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl font-light leading-tight">
              BREATHE IN. LET GO.
            </h2>
            <p className="text-sm text-[#8C867D] font-light leading-relaxed">
              Experience sunrise pranayama flow, meditative sound baths, and one-on-one yoga sessions conducted by master resident yogis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {YOGA_SESSIONS.map((session, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 space-y-3">
                <span className="text-[9px] text-[#C5A880] font-semibold tracking-widest uppercase block">{session.time}</span>
                <h4 className="font-serif text-xl text-white font-light">{session.title}</h4>
                <p className="text-xs text-[#8C867D] font-light">{session.location}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={() => handleOpenBooking('Private Yoga Session')}
              className="bg-[#C5A880] text-[#1C1C1A] text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 hover:bg-white transition-colors"
            >
              BOOK A WELLNESS SESSION →
            </button>
          </div>
        </div>
      </div>

      {/* Wellness Booking Modal */}
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
                <span className="text-[10px] tracking-widest text-[#C5A880] font-semibold uppercase">WELLNESS RESERVATION</span>
                <h3 className="font-serif text-3xl text-[#1C1C1A]">{selectedService || 'Spa & Yoga Session'}</h3>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <Check className="w-10 h-10 text-[#C5A880] mx-auto" />
                  <h4 className="font-serif text-2xl text-[#1C1C1A]">Reservation Request Received</h4>
                  <p className="text-xs text-[#8C867D] font-light">Our Spa Concierge will contact you shortly to confirm your session time.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">FULL NAME</label>
                    <input required type="text" placeholder="Your name" className="w-full bg-white border border-[#EAE3D9] p-3 outline-none focus:border-[#C5A880]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">PREFERRED DATE</label>
                      <input required type="date" className="w-full bg-white border border-[#EAE3D9] p-3 outline-none focus:border-[#C5A880]" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">PREFERRED TIME</label>
                      <input required type="time" className="w-full bg-white border border-[#EAE3D9] p-3 outline-none focus:border-[#C5A880]" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">ROOM / GUEST EMAIL</label>
                    <input required type="email" placeholder="email@domain.com" className="w-full bg-white border border-[#EAE3D9] p-3 outline-none focus:border-[#C5A880]" />
                  </div>
                  <button type="submit" className="w-full bg-[#1C1C1A] text-white py-4 font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A880] transition-colors">
                    CONFIRM SESSION REQUEST
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
