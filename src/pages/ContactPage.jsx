import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDates: '',
    guests: '2 Guests',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        travelDates: '',
        guests: '2 Guests',
        message: ''
      });
    }, 5000);
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
            CONCIERGE & ENQUIRIES
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl font-light text-[#1C1C1A]">
            CONNECT WITH AURELIA.
          </h1>
          <p className="text-base text-[#8C867D] font-light leading-relaxed">
            Our guest experience hosts are available around the clock to assist with villa reservations, private charters, and custom Goan itineraries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#EAE3D9] p-8 space-y-6 shadow-xs">
              <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase font-semibold block">
                RESORT DIRECTORY
              </span>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1C1C1A]">AURELIA RESORT & SPA</p>
                    <p className="text-[#8C867D]">{RESORT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 border-t border-[#EAE3D9] pt-3">
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1C1C1A]">Concierge Desk</p>
                    <a href={`tel:${RESORT_INFO.phone}`} className="text-[#8C867D] hover:text-[#C5A880]">{RESORT_INFO.phone}</a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 border-t border-[#EAE3D9] pt-3">
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1C1C1A]">Reservations Email</p>
                    <a href={`mailto:${RESORT_INFO.email}`} className="text-[#8C867D] hover:text-[#C5A880]">{RESORT_INFO.email}</a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 grid grid-cols-3 gap-2">
                <a
                  href={`tel:${RESORT_INFO.phone}`}
                  className="bg-[#1C1C1A] text-white text-[10px] tracking-widest font-semibold uppercase py-3 text-center hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-colors"
                >
                  CALL
                </a>
                <a
                  href={`mailto:${RESORT_INFO.email}`}
                  className="bg-[#1C1C1A] text-white text-[10px] tracking-widest font-semibold uppercase py-3 text-center hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-colors"
                >
                  EMAIL
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#1C1C1A] text-[#1C1C1A] text-[10px] tracking-widest font-semibold uppercase py-3 text-center hover:bg-[#1C1C1A] hover:text-white transition-colors"
                >
                  DIRECTIONS
                </a>
              </div>
            </div>

            {/* Quiet Hours note */}
            <div className="bg-[#1C1C1A] text-white p-6 space-y-2 border border-white/10">
              <span className="text-[9px] tracking-widest text-[#C5A880] font-semibold uppercase block">PERSONAL SERVICE</span>
              <p className="font-serif text-xl">24/7 Dedicated Villa Host Concierge</p>
              <p className="text-xs text-[#8C867D] font-light">Every guest is assigned a private villa host prior to arrival in Goa.</p>
            </div>
          </div>

          {/* Right Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#EAE3D9] p-8 lg:p-12 shadow-lg space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] tracking-widest text-[#C5A880] uppercase font-semibold">GUEST ENQUIRY</span>
                <h2 className="font-serif text-3xl text-[#1C1C1A] font-light">SEND A MESSAGE TO OUR TEAM</h2>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3 bg-[#FAF8F5] p-8 border border-[#EAE3D9]">
                  <Check className="w-10 h-10 text-[#C5A880] mx-auto" />
                  <h3 className="font-serif text-2xl text-[#1C1C1A]">Message Sent Successfully</h3>
                  <p className="text-xs text-[#8C867D] font-light">Thank you. Our reservations team will respond within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">YOUR NAME *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Nair"
                      className="w-full bg-[#FAF8F5] border border-[#EAE3D9] p-3.5 outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">EMAIL ADDRESS *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="priya@example.com"
                        className="w-full bg-[#FAF8F5] border border-[#EAE3D9] p-3.5 outline-none focus:border-[#C5A880]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">PHONE NUMBER</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 90000 00000"
                        className="w-full bg-[#FAF8F5] border border-[#EAE3D9] p-3.5 outline-none focus:border-[#C5A880]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">ESTIMATED TRAVEL DATES</label>
                      <input
                        type="text"
                        value={formData.travelDates}
                        onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                        placeholder="Oct 2026 / Winter Season"
                        className="w-full bg-[#FAF8F5] border border-[#EAE3D9] p-3.5 outline-none focus:border-[#C5A880]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">NUMBER OF GUESTS</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#EAE3D9] p-3.5 outline-none focus:border-[#C5A880]"
                      >
                        <option value="2 Guests">2 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="6+ Guests">6+ Guests (Full Villa)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">YOUR MESSAGE *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share any special preferences, private dining requests or villa questions..."
                      className="w-full bg-[#FAF8F5] border border-[#EAE3D9] p-3.5 outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1C1C1A] text-white text-xs tracking-widest font-semibold uppercase py-4 hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>SEND ENQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
