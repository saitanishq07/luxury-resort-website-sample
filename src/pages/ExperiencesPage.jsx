import React from 'react';
import { CURATED_EXPERIENCES } from '../data/resortData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Anchor, Sun, MapPin } from 'lucide-react';

export default function ExperiencesPage() {
  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-3xl mb-20"
        >
          <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
            GOAN CURATIONS & MEMORIES
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl font-light text-[#1C1C1A]">
            YOUR DAYS, YOUR WAY.
          </h1>
          <p className="text-base text-[#8C867D] font-light leading-relaxed">
            From dawn barefoot walks along isolated shores to private evening yacht charters across the Arabian Sea. Aurelia’s experience concierges craft moments tailored strictly to your rhythm.
          </p>
        </motion.div>

        {/* Editorial Asymmetrical Blocks */}
        <div className="space-y-24">
          {CURATED_EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 aspect-[16/10] bg-[#EAE3D9] overflow-hidden shadow-2xl relative ${
                    isEven ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                  data-cursor="view"
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#1C1C1A]/80 backdrop-blur-md text-[#C5A880] text-[9px] tracking-[0.2em] font-semibold uppercase px-3 py-1">
                    {exp.tag}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase font-semibold block">
                    0{idx + 1} · AURELIA CURATION
                  </span>
                  <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#1C1C1A]">
                    {exp.title}
                  </h2>
                  <p className="font-serif italic text-lg text-[#C5A880] font-light">
                    "{exp.subtitle}"
                  </p>
                  <p className="text-sm text-[#8C867D] font-light leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] font-semibold text-[#1C1C1A] hover:text-[#C5A880] uppercase pb-1 border-b border-[#1C1C1A] transition-colors"
                    >
                      <span>INQUIRE ABOUT THIS EXPERIENCE</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
