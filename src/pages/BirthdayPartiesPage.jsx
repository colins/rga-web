import React, { useState } from 'react';
import { 
  PartyPopper, Clock, DollarSign, Users, Sparkles, 
  CheckCircle2, ArrowRight, ExternalLink, Phone, Mail, Gift, 
  ShieldCheck, AlertTriangle, Eye, Calendar, Maximize2, ZoomIn, 
  Download, FileText, X, MapPin 
} from 'lucide-react';
import { eventsData, gymInfo } from '../data/scheduleData';

export default function BirthdayPartiesPage({ activeTheme }) {
  const { birthdayParties } = eventsData;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="py-12 sm:py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 font-bold text-xs uppercase tracking-wider mb-3">
            <PartyPopper className="w-3.5 h-3.5 text-pink-600" /> Private Facility Celebrations
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Gymnastics Birthday Parties 🎂
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Give your child an unforgettable birthday celebration with 90 minutes of active gymnastics play, obstacle courses, trampoline fun, and private party room celebration at Resilience Gymnastics Academy!
          </p>
        </div>

        {/* Hero Card */}
        <div className="bg-gradient-to-br from-pink-900 via-purple-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/30 text-pink-200 text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" /> 100% Private Gym Facility
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Resilience Gymnastics Birthday Parties
              </h2>
              <p className="text-slate-200 text-base leading-relaxed">
                Birthday parties at Resilience Gymnastics Academy are private celebrations! Celebrate with active gym play, foam pit, trampolines, and obstacle courses tailored to your child's age, followed by dedicated private party room festivities.
              </p>
              
              <div className="pt-2 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-white">$300 – $400</span>
                <span className="text-pink-300 font-semibold text-sm">/ 90-Minute Private Party (1–20 Children)</span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${gymInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-pink-500/30 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call {gymInfo.phone} to Book
                </a>
                <a
                  href={`mailto:${gymInfo.email}?subject=Birthday%20Party%20Booking%20Inquiry`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email: {gymInfo.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-4">
                <h3 className="font-bold text-lg text-pink-200 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-pink-400" /> What's Included:
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-100">
                  {birthdayParties.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Available Times & Weekend Schedule */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200">
              Weekend Availability
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
              Available Party Times
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Parties are scheduled on weekends with private facility access during your reserved time block.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {birthdayParties.availableTimes.map((slot, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-pink-50 via-white to-purple-50 rounded-2xl p-6 border border-pink-200 text-center flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-pink-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-700 block mb-1">
                    {slot.day}
                  </span>
                  <div className="text-xl font-black text-gray-900">
                    {slot.time}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-pink-100 text-xs text-gray-500 font-medium">
                  90-Minute Private Party
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages & Pricing Breakdown */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200">
              Pricing & Packages
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
              Choose Your Party Package
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Both packages provide 90 minutes of total party celebration with full gymnastics supervision and private party room time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {birthdayParties.packages.map((pkg, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border-2 border-pink-200 shadow-sm flex flex-col justify-between hover:border-pink-500 hover:shadow-xl transition-all relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-pink-700 bg-pink-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {pkg.name}
                    </span>
                    <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">
                      {pkg.guests}
                    </span>
                  </div>

                  <div>
                    <span className="text-4xl sm:text-5xl font-black text-gray-900">{pkg.cost}</span>
                    <span className="text-xs text-gray-500 block mt-1">{pkg.deposit}</span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 pt-2 text-xs text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                      <span>60 min supervised gym play & obstacles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                      <span>30 min private party room celebration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                      <span>Dedicated RGA party instructors</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6">
                  <a
                    href={`tel:${gymInfo.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md shadow-pink-500/20 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Book {pkg.name}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-amber-50 rounded-2xl p-4 border border-amber-200 text-center text-xs text-amber-900 font-medium">
            💡 <strong>Staff Gratuity:</strong> Tips for our hardworking party coaches are accepted and appreciated, but not included in the package total.
          </div>
        </div>

        {/* 90-Minute Party Timeline */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200">
              Party Breakdown
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
              How Your 90-Minute Party Runs
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Our structured timeline ensures maximum active fun in the gym and plenty of time for cake and celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {birthdayParties.timeline.map((block, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-pink-400 bg-pink-950/80 px-3 py-1 rounded-full border border-pink-800/60 inline-block">
                    {block.time}
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {block.activity}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {idx === 0 ? "Age-appropriate gymnastics games & obstacle courses" : "Bring your own cake, food & refreshments"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Information, Rules & Policies */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200">
              Facility Policies
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
              General Information & Safety Rules
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Please review these important guidelines from our official party policies to ensure a safe and fun event for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {birthdayParties.policies.map((policy, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center mb-3 font-black text-sm">
                    {idx === 0 ? <Users className="w-4 h-4" /> : 
                     idx === 1 ? <Eye className="w-4 h-4" /> : 
                     idx === 2 ? <FileText className="w-4 h-4" /> : 
                     idx === 3 ? <AlertTriangle className="w-4 h-4" /> : 
                     <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">{policy.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {policy.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick Contact Info Card */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-white/20 text-white flex items-center justify-center mb-3 font-black text-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Facility Location</h4>
                <p className="text-xs text-pink-100 leading-relaxed">
                  {gymInfo.name}<br />
                  {gymInfo.address}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/20 text-xs font-bold text-white">
                Phone: {gymInfo.phone}
              </div>
            </div>
          </div>

          {/* Digital Guest Waivers Callout */}
          <div className="mt-8 p-6 bg-pink-50 rounded-2xl border border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-pink-950 text-sm">Digital Guest Waivers Required Prior to Party</h4>
              <p className="text-xs text-pink-800">
                All parents entering the gym and all children participating must have a digital waiver signed by a parent/guardian prior to party day.
              </p>
            </div>
            <a
              href={gymInfo.waiverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-sm shrink-0"
            >
              Complete Digital Waiver
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Step Booking Process */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
            Booking Your Party: Simple 4-Step Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {birthdayParties.howItWorks.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-pink-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {step.replace(/^[0-9]\.\s*/, '')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Official Birthday Party Flyer Card with Lightbox (Matching /events pattern) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-2 mb-6">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-widest bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200">
                Official Event Flyer
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                Resilience Birthday Party Flyer
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Click the flyer below to inspect in high-resolution or download a copy to share with your family and party guests.
              </p>
            </div>

            <div className="bg-gradient-to-b from-gray-50 to-pink-50/30 rounded-2xl p-4 sm:p-6 border border-pink-100 flex flex-col items-center">
              <div 
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={birthdayParties.flyerImage}
                  alt="Resilience Gymnastics Academy Birthday Party Flyer"
                  className="w-full max-w-lg h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <span className="px-5 py-2.5 rounded-xl bg-white text-gray-900 font-extrabold text-xs shadow-xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                    <Maximize2 className="w-4 h-4 text-pink-600" />
                    Click to View Full Size
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 px-2 w-full max-w-lg">
                <span className="text-xs text-gray-500 font-medium">
                  Saturdays & Sundays • 90-Minute Private Parties
                </span>
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition-colors"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-pink-600" />
                    Expand Fullscreen
                  </button>
                  <a
                    href={birthdayParties.flyerImage}
                    download="Resilience-Gymnastics-Birthday-Party-Flyer.png"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-sm shadow-pink-500/20 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Flyer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal for Full-Resolution Viewing */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 transition-opacity"
            onClick={() => setLightboxOpen(false)}
          >
            <div 
              className="relative max-w-4xl w-full max-h-[94vh] bg-slate-900 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl flex flex-col items-center border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between pb-3 px-1 sm:px-2 text-white border-b border-slate-800 mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-pink-400" />
                  <span className="font-bold text-xs sm:text-sm text-pink-200">Official Birthday Party Flyer</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={birthdayParties.flyerImage}
                    download="Resilience-Gymnastics-Birthday-Party-Flyer.png"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-pink-400" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="overflow-auto max-h-[80vh] w-full flex justify-center rounded-xl bg-slate-950/60 p-2">
                <img 
                  src={birthdayParties.flyerImage} 
                  alt="Resilience Gymnastics Academy Birthday Party Flyer" 
                  className="max-h-[76vh] w-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Contact Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black">Reserve Your Child's Party Date Early</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Weekend party slots fill up quickly. Call our Front Desk team at {gymInfo.phone} or email {gymInfo.email} to check availability and reserve your preferred time.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href={`tel:${gymInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md shadow-pink-600/30"
            >
              <Phone className="w-4 h-4" />
              Call {gymInfo.phone}
            </a>
            <a
              href={`mailto:${gymInfo.email}?subject=Birthday%20Party%20Availability`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700"
            >
              <Mail className="w-4 h-4" />
              {gymInfo.email}
            </a>
          </div>
          <div className="text-xs text-slate-400 pt-2">
            📍 Located at {gymInfo.address}
          </div>
        </div>

      </div>
    </div>
  );
}
