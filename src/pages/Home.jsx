import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, MapPin, Compass, Utensils, Heart, Waves, Calendar } from 'lucide-react';
import BookingBar from '../components/BookingBar';
import RoomExplorer from '../components/RoomExplorer';
import { DINING_EXPERIENCES, CURATED_EXPERIENCES, SPECIAL_OFFERS, GUEST_STORIES, RESORT_INFO } from '../data/resortData';

export default function Home() {
  const heroRef = useRef(null);
  const statementRef = useRef(null);

  // Parallax scroll effects
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.12]);
  const heroY = useTransform(heroScroll, [0, 1], [0, -60]);

  const { scrollYProgress: statementScroll } = useScroll({
    target: statementRef,
    offset: ['start end', 'end start']
  });

  const statementZoom = useTransform(statementScroll, [0, 1], [1, 1.15]);

  return (
    <div className="overflow-x-hidden bg-[#FAF8F5]">
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex flex-col justify-between overflow-hidden bg-black text-white">
        {/* Cinematic Background Visual */}
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=90"
            alt="Aurelia Resort & Spa Luxury Ocean View"
            className="w-full h-full object-cover opacity-80 animate-hero-zoom"
          />
          {/* Subtle Dark Vignette & Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        </motion.div>

        {/* Top Spacer for Nav */}
        <div className="h-24" />

        {/* Hero Content */}
        <motion.div style={{ y: heroY }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full my-auto py-12">
          <div className="max-w-3xl space-y-6">
            {/* Location & Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 border border-white/20 text-[10px] tracking-[0.3em] uppercase text-[#EAE3D9] font-medium"
            >
              <MapPin className="w-3 h-3 text-[#C5A880]" />
              <span>{RESORT_INFO.location}</span>
            </motion.div>

            {/* Line by Line Animated Headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-serif text-6xl sm:text-7xl lg:text-9xl font-light tracking-tight leading-[0.95] text-white"
            >
              <span className="block">ESCAPE</span>
              <span className="block italic text-[#C5A880] font-normal">BEAUTIFULLY.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl text-[#EAE3D9] font-light max-w-xl leading-relaxed"
            >
              "A private retreat where the sea, the forest and thoughtful hospitality meet."
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/stay"
                className="bg-[#C5A880] text-[#1C1C1A] text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 hover:bg-white transition-all duration-300 shadow-lg"
              >
                EXPLORE AURELIA
              </Link>
              <Link
                to="/book"
                data-cursor="book"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 hover:bg-white hover:text-[#1C1C1A] transition-all duration-300"
              >
                BOOK YOUR STAY
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative z-10 pb-8 text-center"
        >
          <a
            href="#booking-bar"
            className="inline-flex flex-col items-center text-[10px] tracking-[0.3em] text-white/70 hover:text-white uppercase transition-colors"
          >
            <span>SCROLL TO DISCOVER</span>
            <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#C5A880]" />
          </a>
        </motion.div>
      </section>

      {/* 2. FLOATING BOOKING BAR */}
      <div id="booking-bar" className="-mt-12 relative z-30 mb-20">
        <BookingBar />
      </div>

      {/* 3. EDITORIAL INTRODUCTION */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Split Left Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
              THE AURELIA ETHOS
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl font-light text-[#1C1C1A] leading-[1.1]">
              A QUIETER KIND OF LUXURY.
            </h2>
            <p className="text-lg lg:text-xl text-[#8C867D] font-light leading-relaxed">
              "AURELIA is designed for people who want to slow down. Wake to the sound of the sea, spend the afternoon beneath the palms and end the day around a table made for lingering."
            </p>
            <div className="pt-4">
              <Link
                to="/story"
                className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] font-semibold text-[#1C1C1A] hover:text-[#C5A880] uppercase pb-1 border-b border-[#1C1C1A] hover:border-[#C5A880] transition-all"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Split Right Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[4/5] bg-[#EAE3D9] overflow-hidden relative shadow-2xl" data-cursor="view">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85"
                alt="Aurelia Palm Sanctuary"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. RESORT STATEMENT (FULL-WIDTH SCROLL ZOOM) */}
      <section ref={statementRef} className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black text-white my-12">
        <motion.div style={{ scale: statementZoom }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
            alt="The World Can Wait at Aurelia"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl space-y-4"
        >
          <span className="text-[11px] tracking-[0.4em] text-[#EAE3D9] uppercase font-light">
            SECLUSION & SERENITY
          </span>
          <h2 className="font-serif text-6xl sm:text-8xl lg:text-9xl font-light tracking-wide text-white leading-none">
            THE WORLD CAN WAIT.
          </h2>
          <p className="font-serif italic text-xl text-[#C5A880] pt-4 font-light">
            Goa, India
          </p>
        </motion.div>
      </section>

      {/* 5. STAY / ROOM EXPLORER */}
      <RoomExplorer />

      {/* 6. EXPERIENCES SECTION */}
      <section className="py-24 bg-white border-t border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
                CURATED MEMORIES
              </span>
              <h2 className="font-serif text-4xl lg:text-6xl font-light text-[#1C1C1A]">
                YOUR DAYS, YOUR WAY.
              </h2>
            </div>
            <Link
              to="/experiences"
              className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] font-semibold text-[#1C1C1A] hover:text-[#C5A880] uppercase pb-1 border-b border-[#1C1C1A] hover:border-[#C5A880] transition-colors"
            >
              <span>EXPLORE ALL EXPERIENCES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {CURATED_EXPERIENCES.slice(0, 3).map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${
                  idx === 0 ? 'md:col-span-7 aspect-[16/10]' : idx === 1 ? 'md:col-span-5 aspect-[4/5]' : 'md:col-span-12 aspect-[21/9]'
                } relative group overflow-hidden bg-[#EAE3D9] flex flex-col justify-end p-8 text-white`}
                data-cursor="view"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="relative z-10 space-y-2">
                  <span className="text-[9px] tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
                    {exp.tag}
                  </span>
                  <h3 className="font-serif text-3xl lg:text-4xl text-white font-light">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#EAE3D9] font-light max-w-md">
                    {exp.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WELLNESS & SPA SANCTUARY */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Large Sanctuary Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative aspect-[4/3] bg-[#EAE3D9] overflow-hidden shadow-2xl"
              data-cursor="view"
            >
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85"
                alt="Aurelia Spa Sanctuary"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#1C1C1A]/90 backdrop-blur-md p-6 text-white border-l-2 border-[#C5A880]">
                <span className="text-[9px] tracking-[0.25em] text-[#C5A880] uppercase block font-semibold mb-1">
                  YOGA & MEDITATION
                </span>
                <h4 className="font-serif text-2xl font-light">BREATHE IN. LET GO.</h4>
                <p className="text-xs text-[#8C867D] mt-1">Sunrise flow, private breathwork and chakra meditation in our open-air pavilion.</p>
              </div>
            </motion.div>

            {/* Right Spa Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
                AURELIA SPA & RETREAT
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#1C1C1A] leading-tight">
                COME BACK TO YOURSELF.
              </h2>
              <p className="text-sm text-[#8C867D] font-light leading-relaxed">
                Rooted in ancient Goan botanical wisdom and Vedic wellness, our spa rituals harness organic essential oils, hot basalt stones, and meditative touch.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#EAE3D9]">
                {['Signature Massage', 'Couples Ritual', 'Ayurvedic Therapy', 'Private Yoga'].map((service, i) => (
                  <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-[#EAE3D9]/60">
                    <span className="font-medium text-[#1C1C1A]">{service}</span>
                    <span className="text-[#8C867D] italic">Curated Therapy</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <Link
                  to="/wellness"
                  className="bg-[#1C1C1A] text-white text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-colors"
                >
                  EXPLORE WELLNESS
                </Link>
                <Link
                  to="/wellness"
                  className="border border-[#1C1C1A] text-[#1C1C1A] text-xs tracking-[0.2em] font-semibold uppercase px-6 py-4 hover:bg-[#1C1C1A] hover:text-white transition-colors"
                >
                  BOOK A WELLNESS SESSION →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FINE DINING & EMBER FEATURE */}
      <section className="py-24 bg-[#1C1C1A] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold">
              CULINARY ARTS
            </span>
            <h2 className="font-serif text-5xl lg:text-7xl font-light tracking-wide text-white">
              FROM LAND. FROM SEA. TO TABLE.
            </h2>
          </div>

          {/* 3 Dining Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {DINING_EXPERIENCES.map((venue) => (
              <div
                key={venue.id}
                className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between space-y-6 group hover:border-[#C5A880]/50 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black relative" data-cursor="view">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#1C1C1A]/80 text-[#C5A880] text-[9px] tracking-widest px-3 py-1 font-semibold uppercase">
                    {venue.hours}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-3xl text-white font-light group-hover:text-[#C5A880] transition-colors">
                    {venue.name}
                  </h3>
                  <p className="text-xs text-[#C5A880] italic font-light">
                    "{venue.tagline}"
                  </p>
                  <p className="text-xs text-[#8C867D] font-light leading-relaxed">
                    {venue.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8C867D]">
                  <span>{venue.cuisine}</span>
                  <Link to="/dining" className="text-[#C5A880] hover:underline uppercase text-[10px] tracking-widest">
                    EXPLORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Special Feature Section for EMBER */}
          <div className="bg-gradient-to-r from-black via-[#2A2A27] to-black border border-[#C5A880]/30 p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold">
                SIGNATURE NIGHT EXPERIENCE
              </span>
              <h3 className="font-serif text-4xl lg:text-6xl font-light text-white leading-tight">
                DINNER UNDER THE STARS.
              </h3>
              <p className="text-sm text-[#EAE3D9] font-light leading-relaxed max-w-xl">
                Set beneath our lit banyan tree, EMBER pairs wood-fired open flame cooking with rare international vintages and local fresh catches.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#C5A880]">
                <span>✓ Seasonal Tasting Menu</span>
                <span>✓ Open-Fire Kitchen</span>
                <span>✓ Curated Wine Pairing</span>
              </div>
              <div className="pt-4">
                <Link
                  to="/dining"
                  className="bg-[#C5A880] text-[#1C1C1A] text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 hover:bg-white transition-colors inline-block"
                >
                  DISCOVER EMBER →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-square overflow-hidden bg-black border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85"
                alt="EMBER open fire experience"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. DESTINATION SECTION */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
                LOCATION & ESSENCE
              </span>
              <h2 className="font-serif text-4xl lg:text-6xl font-light text-[#1C1C1A]">
                GOA, BEYOND THE OBVIOUS.
              </h2>
              <p className="text-sm text-[#8C867D] font-light leading-relaxed">
                Nestled on a secluded coastal headland in North Goa, Aurelia offers peaceful privacy while keeping heritage Portuguese architecture, quiet beaches, and local markets within easy reach.
              </p>

              {/* Travel Times Grid */}
              <div className="space-y-3 pt-4 border-t border-[#EAE3D9]">
                {RESORT_INFO.travelTimes.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-2 border-b border-[#EAE3D9]/60">
                    <div>
                      <p className="font-medium text-[#1C1C1A]">{item.destination}</p>
                      <p className="text-[10px] text-[#8C867D] font-light">{item.desc}</p>
                    </div>
                    <span className="font-serif text-lg text-[#C5A880] font-normal">{item.time}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[10px] text-[#8C867D] italic">
                * Travel times shown for demonstration purposes.
              </div>

              <div>
                <Link
                  to="/destination"
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] font-semibold text-[#1C1C1A] hover:text-[#C5A880] uppercase pb-1 border-b border-[#1C1C1A] transition-colors"
                >
                  <span>EXPLORE DESTINATION GUIDE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-[#EAE3D9] overflow-hidden" data-cursor="view">
                <img
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85"
                  alt="Goa Heritage Quarter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-[#EAE3D9] overflow-hidden mt-8" data-cursor="view">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85"
                  alt="Goa Beach Horizon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SPECIAL OFFERS */}
      <section className="py-24 bg-white border-t border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
              CURATED PACKAGES
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl font-light text-[#1C1C1A]">
              SPECIAL OFFERS.
            </h2>
            <p className="text-xs text-[#8C867D] italic">
              Demonstration offers for portfolio showcase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPECIAL_OFFERS.map((offer) => (
              <div
                key={offer.id}
                className="bg-[#FAF8F5] border border-[#EAE3D9] p-8 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <span className="text-[9px] tracking-[0.25em] text-[#C5A880] uppercase font-semibold bg-white px-3 py-1 border border-[#EAE3D9] inline-block">
                    {offer.badge}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1C1C1A] font-light">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-[#C5A880] italic font-light">
                    "{offer.subtitle}"
                  </p>
                  <p className="text-xs text-[#8C867D] font-light leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE3D9] flex items-center justify-between text-xs">
                  <span className="text-[10px] text-[#8C867D]">{offer.validity}</span>
                  <Link
                    to="/book"
                    className="text-[#1C1C1A] font-semibold uppercase tracking-wider hover:text-[#C5A880]"
                  >
                    BOOK OFFER →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. GUEST STORIES */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#EAE3D9]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
            GUEST MEMORIES
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GUEST_STORIES.map((story, i) => (
              <div key={i} className="bg-white p-8 border border-[#EAE3D9] space-y-6 flex flex-col justify-between text-left shadow-xs">
                <p className="font-serif italic text-lg text-[#1C1C1A] leading-relaxed">
                  "{story.quote}"
                </p>
                <div className="pt-4 border-t border-[#EAE3D9]">
                  <p className="font-semibold text-xs text-[#1C1C1A]">{story.author}</p>
                  <p className="text-[10px] text-[#8C867D]">{story.origin} · {story.stay}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. IMMERSIVE IMAGE BREAK */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85"
          alt="Aurelia Slow Living"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl space-y-4">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-wide text-white leading-tight">
            SOME PLACES ARE BETTER EXPERIENCED SLOWLY.
          </h2>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-24 bg-[#1C1C1A] text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
            YOUR STAY AWAITS
          </span>
          <h2 className="font-serif text-5xl lg:text-7xl font-light text-white">
            YOUR ESCAPE IS WAITING.
          </h2>
          <p className="text-sm text-[#8C867D] font-light max-w-md mx-auto">
            Reserve your private villa or ocean suite at Aurelia Resort & Spa, Goa.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/book"
              data-cursor="book"
              className="bg-[#C5A880] text-[#1C1C1A] text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 hover:bg-white transition-colors"
            >
              BOOK YOUR STAY →
            </Link>
            <Link
              to="/stay"
              className="border border-white/30 text-white text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 hover:bg-white hover:text-[#1C1C1A] transition-colors"
            >
              EXPLORE THE RESORT →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
