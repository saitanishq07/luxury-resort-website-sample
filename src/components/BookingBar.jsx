import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar as CalendarIcon, Users, Home, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingBar({ className = '' }) {
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState('2026-10-12');
  const [checkOut, setCheckOut] = useState('2026-10-15');
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/book', {
      state: {
        checkIn,
        checkOut,
        adults,
        rooms
      }
    });
  };

  return (
    <div className={`w-full max-w-6xl mx-auto px-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-[#FAF8F5] border border-[#EAE3D9] shadow-2xl p-4 lg:p-6 rounded-none relative z-20"
      >
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          {/* Check-In */}
          <div className="flex flex-col space-y-1.5 p-3 border border-[#EAE3D9] bg-white transition-colors focus-within:border-[#C5A880]">
            <label className="text-[9px] tracking-[0.25em] font-semibold text-[#8C867D] uppercase flex items-center space-x-1.5">
              <CalendarIcon className="w-3 h-3 text-[#C5A880]" />
              <span>CHECK-IN</span>
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="text-xs font-medium text-[#1C1C1A] bg-transparent outline-none cursor-pointer"
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col space-y-1.5 p-3 border border-[#EAE3D9] bg-white transition-colors focus-within:border-[#C5A880]">
            <label className="text-[9px] tracking-[0.25em] font-semibold text-[#8C867D] uppercase flex items-center space-x-1.5">
              <CalendarIcon className="w-3 h-3 text-[#C5A880]" />
              <span>CHECK-OUT</span>
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="text-xs font-medium text-[#1C1C1A] bg-transparent outline-none cursor-pointer"
            />
          </div>

          {/* Guests Picker */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
              className="w-full flex flex-col space-y-1.5 p-3 border border-[#EAE3D9] bg-white text-left hover:border-[#C5A880] transition-colors"
            >
              <span className="text-[9px] tracking-[0.25em] font-semibold text-[#8C867D] uppercase flex items-center space-x-1.5">
                <Users className="w-3 h-3 text-[#C5A880]" />
                <span>GUESTS</span>
              </span>
              <span className="text-xs font-medium text-[#1C1C1A] flex items-center justify-between">
                <span>{adults} {adults === 1 ? 'Adult' : 'Adults'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8C867D]" />
              </span>
            </button>

            {/* Guest Dropdown */}
            <AnimatePresence>
              {guestDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#EAE3D9] shadow-xl p-4 z-30 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#1C1C1A]">Adults</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-7 h-7 border border-[#EAE3D9] rounded-full flex items-center justify-center hover:bg-[#FAF8F5]"
                      >
                        -
                      </button>
                      <span className="w-4 text-center font-semibold">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-7 h-7 border border-[#EAE3D9] rounded-full flex items-center justify-center hover:bg-[#FAF8F5]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setGuestDropdownOpen(false)}
                    className="w-full text-center text-[10px] tracking-widest text-[#C5A880] font-semibold pt-2 border-t border-[#EAE3D9] uppercase"
                  >
                    APPLY
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Rooms Selector */}
          <div className="flex flex-col space-y-1.5 p-3 border border-[#EAE3D9] bg-white transition-colors">
            <label className="text-[9px] tracking-[0.25em] font-semibold text-[#8C867D] uppercase flex items-center space-x-1.5">
              <Home className="w-3 h-3 text-[#C5A880]" />
              <span>ROOMS</span>
            </label>
            <select
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className="text-xs font-medium text-[#1C1C1A] bg-transparent outline-none cursor-pointer"
            >
              <option value={1}>1 Room</option>
              <option value={2}>2 Rooms</option>
              <option value={3}>3 Rooms</option>
              <option value={4}>4+ Villa Estate</option>
            </select>
          </div>

          {/* Submit CTA */}
          <div>
            <button
              type="submit"
              data-cursor="book"
              className="w-full bg-[#1C1C1A] text-white text-xs tracking-[0.2em] font-semibold uppercase py-4 px-6 hover:bg-[#C5A880] hover:text-[#1C1C1A] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>CHECK AVAILABILITY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
