import React from 'react';
import { 
  Calendar, Clock, DollarSign, Users, Sparkles, 
  CheckCircle2, ArrowRight, ExternalLink, Phone, Mail, Pizza, Gift, ShieldCheck, Heart,
  AlertCircle
} from 'lucide-react';
import { eventsData, gymInfo } from '../data/scheduleData';

export default function EventsPage({ activeTheme }) {
  const { parentsNightOut } = eventsData;
  const parseEventDate = (dateLabel) => {
    const match = dateLabel.match(/([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})/);
    if (!match) return null;
    const date = new Date(`${match[1]} ${match[2]}, ${match[3]}`);
    return Number.isNaN(date.getTime()) ? null : date;
  };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const allEventDates = Object.values(parentsNightOut.upcomingDates).flat();
  const nextEvent = allEventDates
    .map((label) => ({ label, date: parseEventDate(label) }))
    .filter(({ date }) => date && date >= today)
    .sort((a, b) => a.date - b.date)[0];
  const nextEventDate = nextEvent?.date.toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  });
  const isPastDate = (dateLabel) => {
    const date = parseEventDate(dateLabel);
    return date ? date < today : false;
  };

  return (
    <div className="py-12 sm:py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 font-bold text-xs uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-purple-600" /> Resilience Academy Events
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Events at Resilience
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Join us for exciting youth events! Our signature Parents' Night Out gives kids an active, fun-filled evening with friends while parents enjoy a night out.
          </p>
        </div>

        {/* =========================================================================
            PARENTS' NIGHT OUT (COPIED DIRECTLY FROM rgagymnast.com/events)
           ========================================================================= */}
        <div className="space-y-8">
          
          {/* Main PNO Card */}
          <div className="bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl space-y-5 relative z-10">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/30 text-purple-200 text-xs font-bold uppercase">
                  <Pizza className="w-3.5 h-3.5" /> Featured Youth Event
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-black uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-pink-300" />
                  {nextEventDate ? `Next Event: ${nextEventDate}` : 'No upcoming events scheduled'}
                </div>
              </div>

              <div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                  Parents' Night Out 🎉
                </h2>
                <p className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-pink-400 mt-1">
                  {parentsNightOut.tagline}
                </p>
              </div>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                Need a few hours to yourself? Let us keep the kids entertained while you enjoy a night out! Our <strong>Parents' Night Out</strong> is packed with active play, pizza dinner, creative crafts, group games, and a movie option later in the evening for those who need a less active environment—giving your child a fun-filled evening with friends at Resilience Gymnastics Academy!
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-semibold text-purple-200">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 text-purple-300" /> ⏰ {parentsNightOut.time}
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Users className="w-4 h-4 text-purple-300" /> 👶 Ages 4 to 12 (Potty-Trained)
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Members & Non-Members Welcome
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={gymInfo.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-purple-500/30 transition-all"
                >
                  📝 Register Through Parent Portal
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${gymInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-purple-300" />
                  {gymInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown: Timeline + Pricing & Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Timeline (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                ⏰ 5:00–9:00 PM Event Schedule
              </h3>

              <div className="space-y-4">
                {parentsNightOut.timeline.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-purple-50/50 border border-purple-100">
                    <div className="text-xs font-bold text-purple-800 bg-white px-3 py-1 rounded-lg border border-purple-200 shrink-0">
                      {item.time}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-800">
                      {item.activity}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 italic bg-gray-50 p-3 rounded-xl border border-gray-200">
                * Parents are welcome to pick up their child earlier, if that is more convenient.
              </p>
            </div>

            {/* Pricing & What to Bring (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Pricing Box */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-600" />
                  💖 Pricing
                </h3>
                <div className="space-y-3">
                  {parentsNightOut.pricing.map((tier, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0">
                      <span className="font-semibold text-gray-700 text-sm">{tier.label}</span>
                      <span className="font-black text-gray-900 text-xl">{tier.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Bring & Wear */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-black text-gray-900 mb-4">
                  👟 What to Bring & Wear
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
                  {parentsNightOut.whatToBring.map((wear, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>{wear}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Upcoming Dates Calendar (Fall 2026 & Spring 2027) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-purple-600" />
              📅 Upcoming Dates
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fall 2026 */}
              <div className="bg-purple-50/60 rounded-2xl p-6 border border-purple-100">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-widest block mb-4">
                  Fall 2026
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {parentsNightOut.upcomingDates.fall2026.map((date, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-xl border border-purple-200 text-center shadow-xs">
                      <span className={`text-xs font-bold text-purple-900 ${isPastDate(date) ? 'line-through' : ''}`}>{date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spring 2027 */}
              <div className="bg-indigo-50/60 rounded-2xl p-6 border border-indigo-100">
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block mb-4">
                  Spring 2027
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {parentsNightOut.upcomingDates.spring2027.map((date, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-xl border border-indigo-200 text-center shadow-xs">
                      <span className={`text-xs font-bold text-indigo-900 ${isPastDate(date) ? 'line-through' : ''}`}>{date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration Note */}
            <div className="mt-8 text-center bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 text-sm mb-1">📝 How to Register in Parent Portal</h4>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-2 max-w-xl mx-auto">
                {parentsNightOut.registrationInstructions}
              </p>
              <p className="text-xs text-purple-700 font-medium mb-4 max-w-xl mx-auto">
                {parentsNightOut.registrationNote}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={gymInfo.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-500/20"
                >
                  Open Parent Portal to Register
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${gymInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-800 font-bold text-xs border border-gray-200 hover:bg-gray-100"
                >
                  <Mail className="w-4 h-4 text-purple-600" />
                  {gymInfo.email}
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
