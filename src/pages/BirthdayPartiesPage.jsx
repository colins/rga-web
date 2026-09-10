import React from 'react';
import { 
  PartyPopper, Clock, DollarSign, Users, Sparkles, 
  CheckCircle2, ArrowRight, ExternalLink, Phone, Mail, Gift, ShieldCheck, Heart 
} from 'lucide-react';
import { eventsData, gymInfo } from '../data/scheduleData';

export default function BirthdayPartiesPage({ activeTheme }) {
  const { birthdayParties } = eventsData;

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
            Give your child an unforgettable birthday celebration with 100% exclusive, private access to our full gymnastics gym, foam pit, trampolines, and private party room!
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
                Birthday parties at Resilience Gymnastics Academy are private parties! Celebrate with your friends and family with active play, trampoline fun, obstacle courses, and private party room festivities led by our energetic coaches.
              </p>
              
              <div className="pt-2 flex flex-wrap items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-black text-white">{birthdayParties.price}</span>
                <span className="text-pink-300 font-semibold text-sm">/ {birthdayParties.duration} (Up to 10 Children Included)</span>
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
                  Email Front Desk: {gymInfo.email}
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

        {/* Pricing & Add-on Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {birthdayParties.pricingDetails.map((pkg, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-pink-300 transition-all">
              <div>
                <span className="text-xs font-bold text-pink-600 uppercase tracking-widest block mb-2">Package Option</span>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{pkg.item}</h4>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <span className="text-2xl font-black text-gray-900">{pkg.cost}</span>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works & Waiver Info */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-black text-gray-900 mb-6">
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

          <div className="mt-8 p-6 bg-pink-50 rounded-2xl border border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-pink-950 text-sm">Digital Guest Waivers Required</h4>
              <p className="text-xs text-pink-800">
                All guests must complete our digital special event waiver before stepping onto the gym floor so they can play the entire hour.
              </p>
            </div>
            <a
              href={gymInfo.waiverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-sm shrink-0"
            >
              Complete Event Waiver
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black">Reserve Your Child's Party Date Early</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Weekend party spots fill up quickly. Call our Front Desk team at {gymInfo.phone} to check availability and tailor your party experience.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`tel:${gymInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs"
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
        </div>

      </div>
    </div>
  );
}
