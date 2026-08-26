import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { gymInfo } from '../data/scheduleData';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ activeTheme, onSelectTheme, onOpenEnroll }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-slate-900 text-gray-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 font-medium text-pink-400">
              <MapPin className="w-3.5 h-3.5" />
              {gymInfo.address}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300 font-medium">
              Formerly {gymInfo.formerly}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${gymInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-pink-400" />
              {gymInfo.phone}
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${gymInfo.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-pink-400" />
              {gymInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`shadow-sm transition-all duration-300 ${activeTheme.navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
                {/* Phoenix Icon SVG */}
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L10.5 5.5L8 3L8.5 7L5 6L6.5 9.5L2 10L5.5 12L2 14L6.5 14.5L5 18L8.5 17L8 21L10.5 18.5L12 22L13.5 18.5L16 21L15.5 17L19 18L17.5 14.5L22 14L18.5 12L22 10L17.5 9.5L19 6L15.5 7L16 3L13.5 5.5L12 2Z" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-xl sm:text-2xl text-gray-900 tracking-tight block leading-none">
                  RESILIENCE
                </span>
                <span className="text-[11px] font-semibold tracking-widest text-pink-600 uppercase block mt-1">
                  Gymnastics Academy
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="font-semibold text-gray-700 hover:text-pink-600 transition-colors">
                About Us
              </a>
              <a href="#values" className="font-semibold text-gray-700 hover:text-pink-600 transition-colors">
                Our Values
              </a>
              <a href="#schedule" className="font-semibold text-gray-700 hover:text-pink-600 transition-colors">
                Classes & Schedule
              </a>
              <a href="#tuition" className="font-semibold text-gray-700 hover:text-pink-600 transition-colors">
                Tuition & Fees
              </a>
              <a href="#gallery" className="font-semibold text-gray-700 hover:text-pink-600 transition-colors">
                Gallery
              </a>

              {/* Theme Toggle Button */}
              <button
                onClick={() => setShowThemeSwitcher(!showThemeSwitcher)}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 hover:border-pink-300 hover:text-pink-600 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span>Theme: {activeTheme.name.split(' ')[0]}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {/* CTA Button */}
              <button
                onClick={() => onOpenEnroll()}
                className={`font-bold text-sm px-5 py-2.5 rounded-xl transition-all transform hover:-translate-y-0.5 ${activeTheme.buttonPrimary}`}
              >
                Enroll Child
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setShowThemeSwitcher(!showThemeSwitcher)}
                className="p-2 text-pink-600 bg-pink-50 rounded-lg"
                title="Change Theme"
              >
                <Sparkles className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Floating Theme Switcher Modal/Bar */}
        {showThemeSwitcher && (
          <div className="border-t border-gray-200 bg-gray-50/95 p-4 transition-all">
            <div className="max-w-4xl mx-auto">
              <ThemeSwitcher activeTheme={activeTheme} onSelectTheme={onSelectTheme} />
            </div>
          </div>
        )}

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 pt-2 pb-6 space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 font-semibold text-gray-800 hover:text-pink-600"
            >
              About Us
            </a>
            <a
              href="#values"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 font-semibold text-gray-800 hover:text-pink-600"
            >
              Our Values
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 font-semibold text-gray-800 hover:text-pink-600"
            >
              Classes & Schedule
            </a>
            <a
              href="#tuition"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 font-semibold text-gray-800 hover:text-pink-600"
            >
              Tuition & Fees
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 font-semibold text-gray-800 hover:text-pink-600"
            >
              Gallery
            </a>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnroll();
                }}
                className={`w-full text-center font-bold text-sm px-5 py-3 rounded-xl ${activeTheme.buttonPrimary}`}
              >
                Enroll Child
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
