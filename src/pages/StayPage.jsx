import React from 'react';
import RoomExplorer from '../components/RoomExplorer';
import { motion } from 'framer-motion';

export default function StayPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-3xl"
        >
          <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
            ACCOMMODATIONS & RESIDENCES
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl font-light text-[#1C1C1A]">
            STAY YOUR WAY.
          </h1>
          <p className="text-base text-[#8C867D] font-light leading-relaxed">
            Every room, suite, and villa at Aurelia is designed around light, privacy, and connection to Goa’s coastal landscape. Discover private pools, open-air rainforest showers, and floor-to-ceiling ocean vistas.
          </p>
        </motion.div>
      </div>

      <RoomExplorer />
    </div>
  );
}
