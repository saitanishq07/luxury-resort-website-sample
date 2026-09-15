import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ROOMS } from '../data/resortData';
import Lightbox from '../components/Lightbox';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Maximize2, Users, Bed, Eye, ShieldCheck, Sparkles, Calendar } from 'lucide-react';

export default function RoomDetail() {
  const { roomId } = useParams();
  const navigate = useNavigate();

  // Find room by id or slug
  const room = ROOMS.find(r => r.id === roomId || r.slug === roomId) || ROOMS[0];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const openPhoto = (idx) => {
    setActivePhotoIdx(idx);
    setLightboxOpen(true);
  };

  const handleBookNow = () => {
    navigate('/book', { state: { selectedRoomId: room.id } });
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Back Link */}
        <Link
          to="/stay"
          className="inline-flex items-center space-x-2 text-xs tracking-widest text-[#8C867D] hover:text-[#1C1C1A] uppercase transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL STAYS</span>
        </Link>

        {/* Room Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
              {room.code} · {room.type}
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl font-light text-[#1C1C1A]">
              {room.name}
            </h1>
            <p className="font-serif italic text-lg text-[#8C867D]">
              "{room.subtitle}"
            </p>
          </div>

          <div className="text-left lg:text-right">
            <span className="text-[10px] text-[#8C867D] uppercase tracking-widest block font-medium">
              Starting Rate
            </span>
            <div className="flex items-baseline space-x-1">
              <span className="font-serif text-4xl text-[#1C1C1A] font-light">
                {room.formattedPrice}
              </span>
              <span className="text-xs text-[#8C867D]">{room.period}</span>
            </div>
          </div>
        </div>

        {/* Full-width Photo Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-16">
          {/* Main Feature Photo */}
          <div
            onClick={() => openPhoto(0)}
            className="lg:col-span-8 aspect-[16/10] bg-[#EAE3D9] overflow-hidden cursor-pointer relative group shadow-lg"
            data-cursor="view"
          >
            <img
              src={room.gallery[0]}
              alt={`${room.name} main view`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs tracking-widest uppercase font-semibold">
              <span>EXPAND GALLERY (4 PHOTOS)</span>
            </div>
          </div>

          {/* Secondary Photos */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {room.gallery.slice(1, 3).map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => openPhoto(idx + 1)}
                className="aspect-[16/10] lg:aspect-auto lg:h-[calc(50%-8px)] bg-[#EAE3D9] overflow-hidden cursor-pointer relative group shadow-md"
                data-cursor="view"
              >
                <img
                  src={imgUrl}
                  alt={`${room.name} detail ${idx + 2}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Specs Bar */}
        <div className="bg-white border border-[#EAE3D9] p-6 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-xs text-center">
          <div className="space-y-1">
            <span className="text-[10px] tracking-widest text-[#8C867D] uppercase font-semibold block">SPACE</span>
            <span className="font-serif text-xl text-[#1C1C1A]">{room.size}</span>
          </div>
          <div className="space-y-1 border-l border-[#EAE3D9]">
            <span className="text-[10px] tracking-widest text-[#8C867D] uppercase font-semibold block">CAPACITY</span>
            <span className="font-serif text-xl text-[#1C1C1A]">{room.guestLabel}</span>
          </div>
          <div className="space-y-1 border-l border-[#EAE3D9]">
            <span className="text-[10px] tracking-widest text-[#8C867D] uppercase font-semibold block">BEDDING</span>
            <span className="font-serif text-xl text-[#1C1C1A]">{room.bedType}</span>
          </div>
          <div className="space-y-1 border-l border-[#EAE3D9]">
            <span className="text-[10px] tracking-widest text-[#8C867D] uppercase font-semibold block">ORIENTATION</span>
            <span className="font-serif text-xl text-[#1C1C1A]">{room.view}</span>
          </div>
        </div>

        {/* Two-Column Details & Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Room Overview */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Copy */}
            <div className="space-y-4">
              <h3 className="font-serif text-3xl text-[#1C1C1A] font-light">SANCTUARY OVERVIEW</h3>
              <p className="text-base text-[#8C867D] font-light leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Floor-plan style architectural specs */}
            <div className="bg-white border border-[#EAE3D9] p-8 space-y-4">
              <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase font-semibold block">
                ARCHITECTURAL SPECIFICATION
              </span>
              <h4 className="font-serif text-2xl text-[#1C1C1A]">LAYOUT & ESSENCE</h4>
              <p className="text-xs text-[#8C867D] font-light leading-relaxed">
                {room.floorplan}
              </p>
            </div>

            {/* Comprehensive Amenities List */}
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-[#1C1C1A] font-light">AMENITIES & SERVICED FEATURES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.allAmenities.map((amenity, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs text-[#1C1C1A] bg-white p-4 border border-[#EAE3D9]">
                    <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="bg-[#FAF8F5] border-t border-b border-[#EAE3D9] py-8 space-y-4 text-xs text-[#8C867D]">
              <h4 className="font-serif text-xl text-[#1C1C1A]">RESORT POLICIES & STAY INCLUSIONS</h4>
              <ul className="space-y-2 list-disc list-inside font-light">
                <li>Check-in from 15:00 hrs | Check-out until 12:00 hrs noon.</li>
                <li>Complimentary organic breakfast harvest served daily at SORA or in-villa.</li>
                <li>Chauffeur transfers can be pre-arranged from Goa International Airport.</li>
                <li>Flexible cancellation up to 7 days prior to arrival.</li>
              </ul>
            </div>
          </div>

          {/* Right Sticky Booking Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-[#EAE3D9] p-8 shadow-xl space-y-6">
              <div className="space-y-2 border-b border-[#EAE3D9] pb-6">
                <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
                  RESERVE YOUR STAY
                </span>
                <h4 className="font-serif text-3xl text-[#1C1C1A] font-light">{room.name}</h4>
                <div className="flex items-baseline space-x-1 pt-2">
                  <span className="font-serif text-3xl text-[#1C1C1A] font-light">{room.formattedPrice}</span>
                  <span className="text-xs text-[#8C867D]">{room.period}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs text-[#8C867D]">
                <div className="flex items-center justify-between">
                  <span>Demo Availability:</span>
                  <span className="bg-[#2D3A2E] text-white px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase">
                    {room.availability}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Included Tax & Fees:</span>
                  <span className="text-[#1C1C1A]">18% GST Applicable</span>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                data-cursor="book"
                className="w-full bg-[#1C1C1A] text-white text-xs tracking-[0.2em] font-semibold uppercase py-4 hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK THIS ROOM</span>
              </button>

              <p className="text-[10px] text-center text-[#8C867D] italic">
                Demonstration booking system. No real payment required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={room.gallery.map(g => ({ src: g, title: room.name, category: room.type }))}
        currentIndex={activePhotoIdx}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setActivePhotoIdx(prev => (prev > 0 ? prev - 1 : room.gallery.length - 1))}
        onNext={() => setActivePhotoIdx(prev => (prev < room.gallery.length - 1 ? prev + 1 : 0))}
      />
    </div>
  );
}
