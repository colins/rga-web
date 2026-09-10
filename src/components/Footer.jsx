import React from 'react';
import { MapPin, Phone, Mail, Globe, Heart, ArrowUp, ExternalLink } from 'lucide-react';
import { gymInfo } from '../data/scheduleData';

export default function Footer({ onOpenEnroll, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (path, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L10.5 5.5L8 3L8.5 7L5 6L6.5 9.5L2 10L5.5 12L2 14L6.5 14.5L5 18L8.5 17L8 21L10.5 18.5L12 22L13.5 18.5L16 21L15.5 17L19 18L17.5 14.5L22 14L18.5 12L22 10L17.5 9.5L19 6L15.5 7L16 3L13.5 5.5L12 2Z" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block leading-none">
                  RESILIENCE
                </span>
                <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest block mt-0.5">
                  Gymnastics Academy
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Building strength, confidence, and character — one skill at a time. Serving Denver families with recreational gymnastics, GymNinjas, birthday parties, and competitive USAG teams.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenEnroll}
                className="font-bold text-xs px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-600/20 transition-all"
              >
                Enroll Child Online
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-2 text-pink-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" onClick={(e) => handleLinkClick('/', e)} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/classes" onClick={(e) => handleLinkClick('/classes', e)} className="hover:text-white transition-colors">
                  Class Schedule & Offerings
                </a>
              </li>
              <li>
                <a href="/events" onClick={(e) => handleLinkClick('/events', e)} className="hover:text-white transition-colors">
                  Events (Parents' Night Out)
                </a>
              </li>
              <li>
                <a href="/birthday-parties" onClick={(e) => handleLinkClick('/birthday-parties', e)} className="hover:text-white transition-colors">
                  Gymnastics Birthday Parties
                </a>
              </li>
              <li>
                <a href="/team" onClick={(e) => handleLinkClick('/team', e)} className="hover:text-white transition-colors">
                  Competitive & Pre-Team Program
                </a>
              </li>
              <li>
                <a href={gymInfo.waiverUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  Digital Waivers <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href={gymInfo.portalUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  Payment / Parent Portal <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleLinkClick('/about', e)} className="hover:text-white transition-colors">
                  About Us & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Location & Front Desk */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-2 text-pink-400">
              Denver Facility & Front Desk
            </h4>
            
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <a 
                  href={gymInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {gymInfo.address}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={`tel:${gymInfo.phone}`} className="hover:text-white font-semibold">
                  {gymInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={`mailto:${gymInfo.email}`} className="hover:text-white font-semibold">
                  {gymInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={gymInfo.currentWebsite} target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold underline">
                  rgagymnast.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 {gymInfo.name}. All rights reserved. Denver, Colorado.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
