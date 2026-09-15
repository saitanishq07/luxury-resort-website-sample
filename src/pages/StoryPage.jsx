import React from 'react';
import { SUSTAINABILITY_HIGHLIGHTS, RESORT_INFO } from '../data/resortData';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Sun, Recycle, Heart } from 'lucide-react';

export default function StoryPage() {
  const storySections = [
    {
      title: "The Beginning",
      subtitle: "A vision born out of stillness.",
      text: "Aurelia began with a simple search for quiet on North Goa's Morjim headland. Where old coconut groves met the ocean tide, architects and conservationists envisioned a place that wouldn't dominate the landscape, but listen to it.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "The Philosophy",
      subtitle: "Unhurried, natural luxury.",
      text: "We believe true luxury is not defined by excess, but by space, light, time, and thoughtful care. Aurelia is curated for guests who value quiet reflection, organic gastronomy, and meaningful connection with nature.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "The Architecture",
      subtitle: "Low-density, climate-responsive design.",
      text: "Crafted using local Goan red laterite stone, teak timber, and lime plaster. Designed by contemporary tropical architects to capture natural sea breezes, reducing reliance on artificial cooling and honoring traditional Indo-Portuguese courtyard layouts.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "The Landscape",
      subtitle: "Preserving 400+ native palms.",
      text: "Before laying a single stone, every ancient tree on the 12-acre property was mapped and preserved. Our gardens feature indigenous wild flowers, frangipani, and spice flora that support local birdlife.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "The People",
      subtitle: "Genuine Goan warmth.",
      text: "Over 70% of our team call neighboring Goan villages home. Their intuitive hospitality, deep local knowledge, and genuine warmth form the beating heart of the Aurelia stay experience.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
    }
  ];

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
            GENESIS & ETHOS
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl font-light text-[#1C1C1A]">
            OUR STORY.
          </h1>
          <p className="text-base text-[#8C867D] font-light leading-relaxed">
            Aurelia Resort & Spa was built upon a commitment to quiet architecture, tropical conservation, and authentic hospitality in North Goa.
          </p>
        </motion.div>

        {/* Narrative Sections */}
        <div className="space-y-24 mb-32">
          {storySections.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 aspect-[4/3] bg-[#EAE3D9] overflow-hidden shadow-xl ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={sec.image} alt={sec.title} className="w-full h-full object-cover" />
              </div>
              <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase font-semibold block">
                  CHAPTER 0{idx + 1}
                </span>
                <h2 className="font-serif text-3xl lg:text-5xl font-light text-[#1C1C1A]">
                  {sec.title}
                </h2>
                <p className="font-serif italic text-lg text-[#C5A880]">{sec.subtitle}</p>
                <p className="text-sm text-[#8C867D] font-light leading-relaxed">{sec.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SUSTAINABILITY SECTION */}
        <div className="bg-[#1C1C1A] text-white p-8 lg:p-16 border border-[#C5A880]/30 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
              RESPONSIBLE HOSPITALITY
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl font-light leading-tight">
              LUXURY WITH A LIGHTER FOOTPRINT.
            </h2>
            <p className="text-sm text-[#8C867D] font-light leading-relaxed">
              We hold a deep reverence for the delicate coastal ecology of Goa. Our resort operates with zero single-use plastic, closed-loop water management, and organic local farm partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUSTAINABILITY_HIGHLIGHTS.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 space-y-3">
                <span className="text-[10px] tracking-widest text-[#C5A880] font-semibold uppercase block">0{i+1} · INITIATIVE</span>
                <h3 className="font-serif text-2xl text-white font-light">{item.title}</h3>
                <p className="text-xs text-[#8C867D] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-[#8C867D] italic">
            * Sustainability claims formulated as demonstration content.
          </p>
        </div>
      </div>
    </div>
  );
}
