import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ROOMS } from '../data/resortData';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Home, Check, ArrowRight, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';

export default function BookPage() {
  const location = useLocation();

  // Pre-fill state if passed from BookingBar or RoomDetail
  const navState = location.state || {};

  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState(navState.checkIn || '2026-10-12');
  const [checkOut, setCheckOut] = useState(navState.checkOut || '2026-10-15');
  const [adults, setAdults] = useState(navState.adults || 2);
  const [children, setChildren] = useState(0);
  const [roomsCount, setRoomsCount] = useState(navState.rooms || 1);

  const [selectedRoom, setSelectedRoom] = useState(
    ROOMS.find(r => r.id === navState.selectedRoomId) || ROOMS[0]
  );

  const [guestDetails, setGuestDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate number of nights
  const calculateNights = () => {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return isNaN(diffDays) || diffDays <= 0 ? 3 : diffDays;
  };

  const nights = calculateNights();
  const basePrice = selectedRoom ? selectedRoom.price * nights * roomsCount : 0;
  const taxAmount = Math.round(basePrice * 0.18); // 18% GST
  const totalPrice = basePrice + taxAmount;

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const stepsList = [
    { num: 1, label: 'DATES' },
    { num: 2, label: 'GUESTS & ROOMS' },
    { num: 3, label: 'SELECT STAY' },
    { num: 4, label: 'GUEST DETAILS' },
    { num: 5, label: 'REVIEW & CONFIRM' }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-semibold block">
            RESERVATION ENGINE
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-[#1C1C1A]">
            YOUR ESCAPE STARTS HERE.
          </h1>
          <p className="text-xs text-[#8C867D] italic">
            * Availability shown for demonstration purposes. No payment required.
          </p>
        </div>

        {/* Step Progress Bar */}
        {!isSubmitted && (
          <div className="bg-white border border-[#EAE3D9] p-4 mb-12 shadow-xs">
            <div className="grid grid-cols-5 gap-2">
              {stepsList.map((s) => (
                <div
                  key={s.num}
                  onClick={() => {
                    if (s.num < step) setStep(s.num);
                  }}
                  className={`text-center py-2 border-b-2 transition-all cursor-pointer ${
                    step === s.num
                      ? 'border-[#C5A880] text-[#1C1C1A] font-semibold'
                      : step > s.num
                      ? 'border-[#1C1C1A] text-[#1C1C1A]'
                      : 'border-[#EAE3D9] text-[#8C867D]'
                  }`}
                >
                  <span className="text-[9px] tracking-widest block">STEP 0{s.num}</span>
                  <span className="text-[10px] hidden sm:block truncate uppercase font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submission Confirmation Screen */}
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-[#EAE3D9] p-8 lg:p-16 text-center space-y-6 shadow-2xl max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 bg-[#FAF8F5] border border-[#C5A880] rounded-full flex items-center justify-center mx-auto text-[#C5A880]">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] text-[#C5A880] font-semibold uppercase">DEMO RESERVATION COMPLETE</span>
              <h2 className="font-serif text-3xl lg:text-5xl text-[#1C1C1A] font-light">
                YOUR REQUEST HAS BEEN RECEIVED.
              </h2>
              <p className="text-sm text-[#8C867D] font-light italic pt-2">
                "We'll be in touch shortly to confirm your stay."
              </p>
            </div>

            {/* Summary Ticket */}
            <div className="bg-[#FAF8F5] border border-[#EAE3D9] p-6 text-left space-y-3 text-xs text-[#8C867D]">
              <div className="flex justify-between border-b border-[#EAE3D9] pb-2">
                <span className="font-semibold text-[#1C1C1A]">Reservation Ref:</span>
                <span className="font-mono text-[#C5A880]">AUR-2026-9842</span>
              </div>
              <div className="flex justify-between">
                <span>Guest Name:</span>
                <span className="font-medium text-[#1C1C1A]">{guestDetails.fullName || 'Valued Guest'}</span>
              </div>
              <div className="flex justify-between">
                <span>Selected Stay:</span>
                <span className="font-medium text-[#1C1C1A]">{selectedRoom.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Dates:</span>
                <span className="font-medium text-[#1C1C1A]">{checkIn} to {checkOut} ({nights} Nights)</span>
              </div>
              <div className="flex justify-between border-t border-[#EAE3D9] pt-2 text-[#1C1C1A] font-semibold">
                <span>Estimated Total:</span>
                <span className="font-serif text-lg">₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center space-x-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                }}
                className="bg-[#1C1C1A] text-white text-xs tracking-widest font-semibold uppercase px-8 py-4 hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-colors"
              >
                START NEW DEMO BOOKING
              </button>
              <Link
                to="/"
                className="border border-[#1C1C1A] text-[#1C1C1A] text-xs tracking-widest font-semibold uppercase px-8 py-4 hover:bg-[#1C1C1A] hover:text-white transition-colors"
              >
                RETURN HOME
              </Link>
            </div>
          </motion.div>
        ) : (
          /* Multi-Step Forms Container */
          <div className="bg-white border border-[#EAE3D9] p-6 lg:p-10 shadow-lg">
            {/* STEP 01: DATES */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="space-y-1">
                  <span className="text-[10px] tracking-widest text-[#C5A880] uppercase font-semibold">STEP 01</span>
                  <h2 className="font-serif text-3xl text-[#1C1C1A] font-light">SELECT DATES OF STAY</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2 bg-[#FAF8F5] p-4 border border-[#EAE3D9]">
                    <label className="text-[10px] tracking-widest font-semibold text-[#8C867D] uppercase flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#C5A880]" />
                      <span>CHECK-IN DATE</span>
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-white border border-[#EAE3D9] p-3 text-sm font-medium outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div className="space-y-2 bg-[#FAF8F5] p-4 border border-[#EAE3D9]">
                    <label className="text-[10px] tracking-widest font-semibold text-[#8C867D] uppercase flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#C5A880]" />
                      <span>CHECK-OUT DATE</span>
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-white border border-[#EAE3D9] p-3 text-sm font-medium outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                <div className="p-4 bg-[#FAF8F5] border border-[#EAE3D9] text-xs text-[#8C867D] flex justify-between items-center">
                  <span>Selected Duration:</span>
                  <span className="font-serif text-xl text-[#1C1C1A] font-medium">{nights} Nights</span>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-[#1C1C1A] text-white text-xs tracking-widest font-semibold uppercase px-8 py-4 hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-colors flex items-center space-x-2"
                  >
                    <span>CONTINUE TO GUESTS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 02: GUESTS & ROOMS */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="space-y-1">
                  <span className="text-[10px] tracking-widest text-[#C5A880] uppercase font-semibold">STEP 02</span>
                  <h2 className="font-serif text-3xl text-[#1C1C1A] font-light">GUESTS & ROOM COUNT</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Adults */}
                  <div className="bg-[#FAF8F5] p-4 border border-[#EAE3D9] space-y-3">
                    <label className="text-[10px] tracking-widest font-semibold text-[#8C867D] uppercase">ADULTS (12+ YRS)</label>
                    <div className="flex items-center justify-between bg-white border border-[#EAE3D9] p-3">
                      <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 font-bold border rounded-full">-</button>
                      <span className="font-serif text-xl font-semibold">{adults}</span>
                      <button onClick={() => setAdults(adults + 1)} className="w-8 h-8 font-bold border rounded-full">+</button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="bg-[#FAF8F5] p-4 border border-[#EAE3D9] space-y-3">
                    <label className="text-[10px] tracking-widest font-semibold text-[#8C867D] uppercase">CHILDREN (0-11 YRS)</label>
                    <div className="flex items-center justify-between bg-white border border-[#EAE3D9] p-3">
                      <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-8 h-8 font-bold border rounded-full">-</button>
                      <span className="font-serif text-xl font-semibold">{children}</span>
                      <button onClick={() => setChildren(children + 1)} className="w-8 h-8 font-bold border rounded-full">+</button>
                    </div>
                  </div>

                  {/* Rooms Count */}
                  <div className="bg-[#FAF8F5] p-4 border border-[#EAE3D9] space-y-3">
                    <label className="text-[10px] tracking-widest font-semibold text-[#8C867D] uppercase">NUMBER OF ROOMS</label>
                    <select
                      value={roomsCount}
                      onChange={(e) => setRoomsCount(Number(e.target.value))}
                      className="w-full bg-white border border-[#EAE3D9] p-3 text-sm font-medium outline-none"
                    >
                      <option value={1}>1 Room / Villa</option>
                      <option value={2}>2 Rooms</option>
                      <option value={3}>3 Rooms</option>
                      <option value={4}>4+ Entire Estate</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-[#EAE3D9]">
                  <button onClick={handlePrev} className="text-xs tracking-widest font-semibold text-[#8C867D] uppercase hover:text-[#1C1C1A]">
                    ← BACK
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-[#1C1C1A] text-white text-xs tracking-widest font-semibold uppercase px-8 py-4 hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-colors flex items-center space-x-2"
                  >
                    <span>SELECT STAY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 03: SELECT YOUR STAY */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="space-y-1">
                  <span className="text-[10px] tracking-widest text-[#C5A880] uppercase font-semibold">STEP 03</span>
                  <h2 className="font-serif text-3xl text-[#1C1C1A] font-light">AVAILABLE ACCOMMODATIONS</h2>
                </div>

                <div className="space-y-6">
                  {ROOMS.map((room) => {
                    const isSelected = selectedRoom?.id === room.id;
                    const roomTotal = room.price * nights * roomsCount;

                    return (
                      <div
                        key={room.id}
                        className={`border p-6 flex flex-col md:flex-row gap-6 items-center transition-all ${
                          isSelected ? 'border-[#C5A880] bg-[#FAF8F5] ring-1 ring-[#C5A880]' : 'border-[#EAE3D9] bg-white'
                        }`}
                      >
                        <div className="w-full md:w-56 aspect-[4/3] bg-[#EAE3D9] overflow-hidden shrink-0">
                          <img src={room.featuredImage} alt={room.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] tracking-widest text-[#8C867D] uppercase font-bold">{room.code}</span>
                            <span className={`text-[9px] tracking-widest uppercase px-2.5 py-1 font-semibold ${
                              room.availability === 'AVAILABLE' ? 'bg-[#2D3A2E] text-white' : 'bg-[#C5A880] text-[#1C1C1A]'
                            }`}>
                              {room.availability}
                            </span>
                          </div>

                          <h3 className="font-serif text-2xl text-[#1C1C1A] font-light">{room.name}</h3>
                          <p className="text-xs text-[#8C867D] font-light">{room.subtitle}</p>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {room.features.map((f, idx) => (
                              <span key={idx} className="text-[9px] bg-white border border-[#EAE3D9] px-2 py-0.5 text-[#1C1C1A]">
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="text-left md:text-right space-y-3 shrink-0 border-t md:border-t-0 md:border-l border-[#EAE3D9] pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
                          <div>
                            <span className="text-[10px] text-[#8C867D] uppercase tracking-widest block">Per Night</span>
                            <span className="font-serif text-xl font-light text-[#1C1C1A]">{room.formattedPrice}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-[#8C867D] uppercase tracking-widest block">{nights} Nights Total</span>
                            <span className="font-serif text-2xl font-light text-[#C5A880]">₹{roomTotal.toLocaleString()}</span>
                          </div>

                          <button
                            onClick={() => {
                              setSelectedRoom(room);
                              setStep(4);
                            }}
                            className={`w-full text-xs tracking-widest font-semibold uppercase px-6 py-3 transition-colors ${
                              isSelected
                                ? 'bg-[#C5A880] text-[#1C1C1A]'
                                : 'bg-[#1C1C1A] text-white hover:bg-[#C5A880] hover:text-[#1C1C1A]'
                            }`}
                          >
                            {isSelected ? 'SELECTED ✓' : 'SELECT ROOM'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-4 border-t border-[#EAE3D9]">
                  <button onClick={handlePrev} className="text-xs tracking-widest font-semibold text-[#8C867D] uppercase hover:text-[#1C1C1A]">
                    ← BACK
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 04: GUEST DETAILS */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="space-y-1">
                  <span className="text-[10px] tracking-widest text-[#C5A880] uppercase font-semibold">STEP 04</span>
                  <h2 className="font-serif text-3xl text-[#1C1C1A] font-light">PRIMARY GUEST DETAILS</h2>
                </div>

                <form onSubmit={handleNext} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">FULL NAME *</label>
                    <input
                      required
                      type="text"
                      value={guestDetails.fullName}
                      onChange={(e) => setGuestDetails({ ...guestDetails, fullName: e.target.value })}
                      placeholder="e.g. Vikramaditya Sharma"
                      className="w-full bg-[#FAF8F5] border border-[#EAE3D9] p-3.5 outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">EMAIL ADDRESS *</label>
                      <input
                        required
                        type="email"
                        value={guestDetails.email}
                        onChange={(e) => setGuestDetails({ ...guestDetails, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full bg-[#FAF8F5] border border-[#EAE3D9] p-3.5 outline-none focus:border-[#C5A880]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">PHONE NUMBER *</label>
                      <input
                        required
                        type="tel"
                        value={guestDetails.phone}
                        onChange={(e) => setGuestDetails({ ...guestDetails, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#FAF8F5] border border-[#EAE3D9] p-3.5 outline-none focus:border-[#C5A880]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest font-semibold text-[#8C867D] uppercase">SPECIAL REQUESTS / DIETARY NOTES</label>
                    <textarea
                      rows={3}
                      value={guestDetails.specialRequests}
                      onChange={(e) => setGuestDetails({ ...guestDetails, specialRequests: e.target.value })}
                      placeholder="High floor, floral welcome, airport pickup arrangements..."
                      className="w-full bg-[#FAF8F5] border border-[#EAE3D9] p-3.5 outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#EAE3D9]">
                    <button type="button" onClick={handlePrev} className="text-xs tracking-widest font-semibold text-[#8C867D] uppercase hover:text-[#1C1C1A]">
                      ← BACK
                    </button>
                    <button
                      type="submit"
                      className="bg-[#1C1C1A] text-white text-xs tracking-widest font-semibold uppercase px-8 py-4 hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-colors flex items-center space-x-2"
                    >
                      <span>REVIEW RESERVATION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 05: REVIEW & SUMMARY */}
            {step === 5 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="space-y-1">
                  <span className="text-[10px] tracking-widest text-[#C5A880] uppercase font-semibold">STEP 05</span>
                  <h2 className="font-serif text-3xl text-[#1C1C1A] font-light">REVIEW & REQUEST RESERVATION</h2>
                </div>

                <div className="bg-[#FAF8F5] border border-[#EAE3D9] p-6 space-y-6 text-xs text-[#8C867D]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-[#EAE3D9] pb-4">
                    <div>
                      <span className="text-[9px] uppercase font-semibold text-[#8C867D] block">ACCOMMODATION</span>
                      <span className="font-serif text-2xl text-[#1C1C1A] font-light">{selectedRoom.name}</span>
                      <span className="text-[10px] text-[#8C867D] block">{selectedRoom.size} · {selectedRoom.view}</span>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase font-semibold text-[#8C867D] block">DATES & DURATION</span>
                      <span className="font-medium text-[#1C1C1A] block">{checkIn} — {checkOut}</span>
                      <span className="text-[10px] text-[#C5A880] font-semibold block">{nights} Nights Stay</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-[#EAE3D9] pb-4">
                    <div>
                      <span className="text-[9px] uppercase font-semibold text-[#8C867D] block">GUESTS & ROOMS</span>
                      <span className="font-medium text-[#1C1C1A]">{adults} Adults, {children} Children ({roomsCount} Room)</span>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase font-semibold text-[#8C867D] block">PRIMARY GUEST</span>
                      <span className="font-medium text-[#1C1C1A] block">{guestDetails.fullName || 'Valued Guest'}</span>
                      <span className="text-[10px] text-[#8C867D]">{guestDetails.email} | {guestDetails.phone}</span>
                    </div>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between">
                      <span>Base Rate ({nights} nights × {selectedRoom.formattedPrice}):</span>
                      <span className="font-mono text-[#1C1C1A]">₹{basePrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Applicable Luxury GST (18%):</span>
                      <span className="font-mono text-[#1C1C1A]">₹{taxAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-t border-[#EAE3D9] pt-3 text-[#1C1C1A] font-semibold">
                      <span className="text-sm">TOTAL ESTIMATED RATE:</span>
                      <span className="font-serif text-3xl text-[#C5A880]">₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-[#EAE3D9]">
                  <button onClick={handlePrev} className="text-xs tracking-widest font-semibold text-[#8C867D] uppercase hover:text-[#1C1C1A]">
                    ← BACK
                  </button>
                  <button
                    onClick={handleSubmitBooking}
                    data-cursor="book"
                    className="bg-[#C5A880] text-[#1C1C1A] text-xs tracking-widest font-semibold uppercase px-10 py-4 hover:bg-[#1C1C1A] hover:text-white transition-colors flex items-center space-x-2 shadow-lg"
                  >
                    <span>REQUEST RESERVATION</span>
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
