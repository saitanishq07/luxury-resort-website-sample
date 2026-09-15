import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ROOMS } from '../data/resortData';
import { ArrowRight, Check, Users, Maximize2, Sparkles } from 'lucide-react';

export default function RoomExplorer({ title = "STAY YOUR WAY.", subtitle = "From private villas to ocean-facing suites, every space is designed around light, privacy and connection to nature." }) {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState('All');
  const [selectedView, setSelectedView] = useState('All');
  const [selectedGuests, setSelectedGuests] = useState('All');

  const filteredRooms = ROOMS.filter((room) => {
    if (selectedType !== 'All' && room.type !== selectedType) return false;
    if (selectedView !== 'All' && !room.view.toLowerCase().includes(selectedView.toLowerCase())) return false;
    if (selectedGuests !== 'All') {
      const num = parseInt(selectedGuests);
      if (room.maxGuests < num) return false;
    }
    return true;
  });

  return (
    <section className="py-24 bg-[#FAF8F5] border-t border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
              ACCOMMODATIONS & VILLAS
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl font-light tracking-wide text-[#1C1C1A]">
              {title}
            </h2>
            <p className="text-base text-[#8C867D] font-light leading-relaxed">
              {subtitle}
            </p>
          </div>

          <Link
            to="/stay"
            className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] font-semibold text-[#1C1C1A] hover:text-[#C5A880] uppercase pb-1 border-b border-[#1C1C1A] hover:border-[#C5A880] transition-colors self-start lg:self-end"
          >
            <span>VIEW ALL RESIDENCES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Filter Bar */}
        <div className="bg-white border border-[#EAE3D9] p-4 lg:p-6 mb-12 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Room Type Filter */}
          <div className="space-y-2">
            <label className="text-[9px] tracking-[0.25em] font-bold text-[#8C867D] uppercase block">
              ROOM TYPE
            </label>
            <div className="flex flex-wrap gap-2">
              {['All', 'Villas', 'Suites', 'Residences'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`text-xs px-3.5 py-1.5 transition-all ${
                    selectedType === type
                      ? 'bg-[#1C1C1A] text-white font-medium'
                      : 'bg-[#FAF8F5] text-[#1C1C1A] border border-[#EAE3D9] hover:border-[#C5A880]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* View Filter */}
          <div className="space-y-2">
            <label className="text-[9px] tracking-[0.25em] font-bold text-[#8C867D] uppercase block">
              VIEW
            </label>
            <div className="flex flex-wrap gap-2">
              {['All', 'Ocean', 'Garden', 'Pool'].map((view) => (
                <button
                  key={view}
                  onClick={() => setSelectedView(view)}
                  className={`text-xs px-3.5 py-1.5 transition-all ${
                    selectedView === view
                      ? 'bg-[#1C1C1A] text-white font-medium'
                      : 'bg-[#FAF8F5] text-[#1C1C1A] border border-[#EAE3D9] hover:border-[#C5A880]'
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>

          {/* Guests Filter */}
          <div className="space-y-2">
            <label className="text-[9px] tracking-[0.25em] font-bold text-[#8C867D] uppercase block">
              GUESTS
            </label>
            <div className="flex flex-wrap gap-2">
              {['All', '2', '3', '4+'].map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGuests(g)}
                  className={`text-xs px-3.5 py-1.5 transition-all ${
                    selectedGuests === g
                      ? 'bg-[#1C1C1A] text-white font-medium'
                      : 'bg-[#FAF8F5] text-[#1C1C1A] border border-[#EAE3D9] hover:border-[#C5A880]'
                  }`}
                >
                  {g === 'All' ? 'Any' : `${g} Guests`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredRooms.map((room) => (
              <motion.div
                key={room.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[#EAE3D9] group flex flex-col justify-between hover:shadow-xl transition-all duration-500"
              >
                {/* Image Header */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE3D9]" data-cursor="view">
                  <img
                    src={room.featuredImage}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#1C1C1A]/80 backdrop-blur-md text-[#FAF8F5] text-[10px] tracking-[0.2em] font-medium uppercase px-3 py-1">
                    {room.code}
                  </div>
                  {room.badge && (
                    <div className="absolute top-4 right-4 bg-[#C5A880] text-[#1C1C1A] text-[9px] tracking-[0.2em] font-semibold uppercase px-3 py-1">
                      {room.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#8C867D]">
                      <span className="flex items-center space-x-1">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>{room.size}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>{room.guestLabel}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl lg:text-3xl text-[#1C1C1A] group-hover:text-[#C5A880] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#8C867D] font-light italic">
                      "{room.subtitle}"
                    </p>
                  </div>

                  {/* Key Features Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#EAE3D9]/60">
                    {room.features.map((feat, i) => (
                      <span
                        key={i}
                        className="text-[10px] text-[#2D3A2E] bg-[#FAF8F5] border border-[#EAE3D9] px-2.5 py-1 font-medium"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 border-t border-[#EAE3D9] flex items-end justify-between">
                    <div>
                      <span className="text-[10px] text-[#8C867D] uppercase tracking-widest block font-medium">
                        Starting from
                      </span>
                      <div className="flex items-baseline space-x-1">
                        <span className="font-serif text-2xl text-[#1C1C1A] font-light">
                          {room.formattedPrice}
                        </span>
                        <span className="text-xs text-[#8C867D]">{room.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Link
                        to={`/stay/${room.slug}`}
                        className="inline-flex items-center space-x-1 text-xs tracking-widest text-[#1C1C1A] font-semibold uppercase hover:text-[#C5A880] transition-colors py-2"
                      >
                        <span>VIEW</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#EAE3D9] space-y-3">
            <Sparkles className="w-8 h-8 text-[#C5A880] mx-auto opacity-60" />
            <p className="font-serif text-xl text-[#1C1C1A]">No rooms match your specific criteria.</p>
            <button
              onClick={() => {
                setSelectedType('All');
                setSelectedView('All');
                setSelectedGuests('All');
              }}
              className="text-xs tracking-widest text-[#C5A880] font-semibold uppercase underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
