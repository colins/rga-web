import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ExternalLink } from 'lucide-react';
import { gymInfo } from '../data/scheduleData';

export default function Navbar({ activeTheme, onOpenEnroll, currentPath, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const navLinks = [
    { label: 'Classes', path: '/classes', isExternal: false },
    { label: 'Events', path: '/events', isExternal: false },
    { label: 'Birthday Parties', path: '/birthday-parties', isExternal: false },
    { label: 'Waivers', url: gymInfo.waiverUrl, isExternal: true },
    { label: 'Team', path: '/team', isExternal: false },
    { label: 'Payment Portal', url: gymInfo.portalUrl, isExternal: true },
    { label: 'About', path: '/about', isExternal: false }
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-slate-900 text-gray-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <a
              href={gymInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-pink-400 hover:text-pink-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              {gymInfo.address}
            </a>
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
            <a 
              href="/" 
              onClick={(e) => handleNavClick('/', e)} 
              className="flex items-center space-x-3 group"
            >
              <img 
                src="/images/phoenix.webp" 
                alt="Resilience Gymnastics Academy" 
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
              />
              <div>
                <span className="font-extrabold text-xl sm:text-2xl text-gray-900 tracking-tight block leading-none">
                  RESILIENCE
                </span>
                <span className="text-[11px] font-bold tracking-widest text-pink-600 uppercase block mt-1">
                  Gymnastics Academy
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              {navLinks.map((link) => {
                if (link.isExternal) {
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[13px] xl:text-sm text-gray-700 hover:text-pink-600 transition-colors flex items-center gap-1 shrink-0"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </a>
                  );
                }

                const isActive = currentPath === link.path;
                return (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={(e) => handleNavClick(link.path, e)}
                    className={`font-bold text-[13px] xl:text-sm transition-colors relative py-1 shrink-0 ${
                      isActive ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-600 rounded-full" />
                    )}
                  </a>
                );
              })}

              {/* CTA Button */}
              <button
                onClick={() => onOpenEnroll()}
                className={`font-extrabold text-xs px-4 xl:px-5 py-2.5 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-md shrink-0 ${activeTheme.buttonPrimary}`}
              >
                Enroll Child
              </button>
            </div>

            {/* Mobile / Tablet Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            {navLinks.map((link) => {
              if (link.isExternal) {
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 text-sm font-bold text-gray-800 hover:text-pink-600"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                );
              }

              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleNavClick(link.path, e)}
                  className={`block py-2 text-sm font-bold transition-colors ${
                    isActive ? 'text-pink-600 pl-2 border-l-2 border-pink-600' : 'text-gray-800 hover:text-pink-600'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 border-t border-gray-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnroll();
                }}
                className={`w-full text-center font-bold text-xs py-3 rounded-xl ${activeTheme.buttonPrimary}`}
              >
                Enroll Child Online
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
