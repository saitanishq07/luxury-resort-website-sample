import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#1C1C1A] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Newsletter Section */}
        <div className="border-b border-white/10 pb-16 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase font-medium">
              NEWSLETTER
            </span>
            <h3 className="font-serif text-3xl lg:text-4xl font-light tracking-wide text-white">
              A LITTLE MORE AURELIA.
            </h3>
            <p className="text-sm text-[#8C867D] max-w-md font-light">
              Receive occasional notes about new experiences, seasonal escapes and special stays.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="flex items-center space-x-2 text-[#C5A880] text-sm bg-white/5 p-4 border border-[#C5A880]/30">
                <Check className="w-5 h-5" />
                <span>Thank you. You have been added to our guest list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-white/5 border border-white/20 text-white placeholder-[#8C867D] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C5A880] flex-1 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#C5A880] text-[#1C1C1A] text-xs font-semibold tracking-[0.2em] px-8 py-3.5 uppercase hover:bg-white transition-colors flex items-center justify-center space-x-2 shrink-0"
                >
                  <span>JOIN</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10 text-sm">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.2em] font-light text-white block">
                {RESORT_INFO.brand}
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#8C867D] uppercase">
                {RESORT_INFO.fullName}
              </span>
            </Link>
            <p className="font-serif italic text-lg text-[#C5A880]">
              "{RESORT_INFO.tagline}"
            </p>
            <p className="text-xs text-[#8C867D] max-w-sm leading-relaxed font-light">
              {RESORT_INFO.concept}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs text-[#8C867D]">
              <li><Link to="/stay" className="hover:text-white transition-colors">Stay & Villas</Link></li>
              <li><Link to="/experiences" className="hover:text-white transition-colors">Curated Experiences</Link></li>
              <li><Link to="/dining" className="hover:text-white transition-colors">Dining & Ember</Link></li>
              <li><Link to="/wellness" className="hover:text-white transition-colors">Aurelia Spa & Yoga</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Visual Gallery</Link></li>
              <li><Link to="/story" className="hover:text-white transition-colors">Our Story & Ethos</Link></li>
              <li><Link to="/destination" className="hover:text-white transition-colors">Destination Goa</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              CONTACT
            </h4>
            <div className="space-y-2 text-xs text-[#8C867D]">
              <p className="text-white font-medium">{RESORT_INFO.location}</p>
              <p>{RESORT_INFO.address}</p>
              <p className="pt-2 text-white"><a href={`tel:${RESORT_INFO.phone}`} className="hover:text-[#C5A880] transition-colors">{RESORT_INFO.phone}</a></p>
              <p><a href={`mailto:${RESORT_INFO.email}`} className="hover:text-[#C5A880] transition-colors">{RESORT_INFO.email}</a></p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-xs tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
              FOLLOW
            </h4>
            <ul className="space-y-2 text-xs text-[#8C867D]">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8C867D] gap-4">
          <p>© 2026 AURELIA Resort & Spa. All rights reserved. Demonstration content.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="text-white/40">|</span>
            <span className="text-[#C5A880] font-light tracking-wider">
              Designed & Developed by <strong className="font-semibold text-white">TanovaX</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
