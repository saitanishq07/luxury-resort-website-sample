import React from 'react';
import { RESORT_INFO } from '../data/resortData';
import { motion } from 'framer-motion';
import { MapPin, Compass, Clock, Navigation } from 'lucide-react';

export default function DestinationPage() {
  const highlights = [
    { title: "Morjim & Ashvem Shorelines", category: "BEACHES & WILDLIFE", desc: "Secluded soft sands known as quiet nesting grounds for Olive Ridley sea turtles.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85" },
    { title: "Fontainhas Latin Quarter", category: "HERITAGE & ART", desc: "Narrow cobblestone streets lined with pastel-colored 18th-century Portuguese mansions and art galleries.", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85" },
    { title: "Spice Estates of Ponda", category: "NATURE & FLAVOR", desc: "Guided botanical tours through organic vanilla, cardamom, and pepper plantations.", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=85" },
    { title: "Mapusa & Saturday Night Markets", category: "LOCAL CULTURE", desc: "Artisanal handwoven textiles, Goan brasswork, organic spices, and handmade ceramics.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85" }
  ];

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
            LOCATION & ESSENCE
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl font-light text-[#1C1C1A]">
            GOA, BEYOND THE OBVIOUS.
          </h1>
          <p className="text-base text-[#8C867D] font-light leading-relaxed">
            Positioned along North Goa's quietest coastal stretch, Aurelia combines sea-facing privacy with easy access to Goa’s richest heritage, culinary traditions, and natural reserves.
          </p>
        </motion.div>

        {/* Interactive Travel Times Map Section */}
        <div className="bg-white border border-[#EAE3D9] p-8 lg:p-12 mb-24 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase font-semibold block">
              RESORT ACCESSIBILITY
            </span>
            <h2 className="font-serif text-4xl text-[#1C1C1A] font-light">KEY TRAVEL DISTANCES</h2>
            <p className="text-xs text-[#8C867D] font-light leading-relaxed">
              Our private chauffeur service provides seamless transfers in luxury SUVs equipped with chilled beverages and Wi-Fi.
            </p>

            <div className="space-y-4 border-t border-[#EAE3D9] pt-4">
              {RESORT_INFO.travelTimes.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-3 border-b border-[#EAE3D9]/60">
                  <div>
                    <p className="font-medium text-[#1C1C1A] flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{item.destination}</span>
                    </p>
                    <p className="text-[10px] text-[#8C867D] font-light">{item.desc}</p>
                  </div>
                  <span className="font-serif text-2xl text-[#C5A880] font-light">{item.time}</span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-[#8C867D] italic">
              * Travel times shown for demonstration purposes.
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#1C1C1A] text-white p-8 lg:p-12 border border-white/10 space-y-6 relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">ESTATE LOCATION</span>
              <h3 className="font-serif text-3xl font-light">NORTH GOA HEADLAND</h3>
              <p className="text-xs text-[#8C867D] font-light">Coordinates: 15.6322° N, 73.7214° E</p>
            </div>
            <div className="aspect-[16/9] bg-black/60 border border-white/20 flex items-center justify-center p-6 text-center text-xs text-[#EAE3D9] font-light">
              <div className="space-y-2">
                <Navigation className="w-8 h-8 text-[#C5A880] mx-auto animate-pulse" />
                <p className="font-serif text-xl text-white">Private Peninsula Location</p>
                <p className="text-[10px] text-[#8C867D]">Morjim-Ashvem Coastline · Goa, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Local Highlights Grid */}
        <div className="space-y-8">
          <h2 className="font-serif text-4xl text-[#1C1C1A] font-light">CURATED REGIONAL HIGHLIGHTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#EAE3D9] p-6 space-y-4 hover:shadow-lg transition-all">
                <div className="aspect-[16/10] bg-[#EAE3D9] overflow-hidden" data-cursor="view">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] tracking-widest text-[#C5A880] uppercase font-semibold">{item.category}</span>
                  <h3 className="font-serif text-2xl text-[#1C1C1A] font-light">{item.title}</h3>
                  <p className="text-xs text-[#8C867D] font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
