import React from 'react';
import { 
  Sparkles, Calendar, Award, ShieldCheck, ArrowRight, CheckCircle2, 
  HeartHandshake, PartyPopper, Users, Star, MapPin, Phone, Mail, ExternalLink, Trophy
} from 'lucide-react';
import { gymInfo, values, eventsData, stockPhotos } from '../data/scheduleData';

export default function HomePage({ activeTheme, onNavigate, onOpenEnroll, onOpenTrial }) {
  const testimonials = [
    {
      quote: "My daughter loves Resilience! She has never gotten better coaching or felt more cared about. The coaches are attentive, encouraging, and celebrate every milestone.",
      author: "Sarah M.",
      detail: "Parent of 7-year-old Recreational Gymnast"
    },
    {
      quote: "Quality instruction and safe progressions by caring, well-trained staff. Our family loves the positive environment — it has built so much confidence in our kids.",
      author: "David K.",
      detail: "Parent of Preschool & GymNinja Athletes"
    },
    {
      quote: "The month-to-month flexibility and continuous enrollment makes scheduling so simple. Wonderful facility, fantastic staff, and truly empowering for young athletes.",
      author: "Jessica T.",
      detail: "Parent of Advanced Gymnast"
    }
  ];

  const programSpotlights = [
    {
      title: "Recreational Gymnastics",
      age: "Ages 5 & Up (Girls & Boys)",
      description: "Structured progressive training across all apparatuses—vault, bars, beam, floor, and rings. Fosters strength, agility, and lifelong love for movement.",
      image: "/images/class-girls-rec.webp",
      action: () => onNavigate('/classes'),
      buttonText: "Explore Classes"
    },
    {
      title: "Tots & Preschool",
      age: "Ages 18 Mo – 5 Years",
      description: "Playful introductory movement, motor skill coordination, foam pit exploration, and obstacle courses in a positive, confidence-building environment.",
      image: "/images/class-preschool.webp",
      action: () => onNavigate('/classes'),
      buttonText: "Preschool Schedule"
    },
    {
      title: "GymNinjas Agility",
      age: "Ages 5 & Up",
      description: "High-octane agility training combining gymnastics tumbling, obstacle course navigation, parkour vaults, and body control challenges.",
      image: "/images/class-gymninjas.webp",
      action: () => onNavigate('/classes'),
      buttonText: "Ninja Programs"
    },
    {
      title: "USAG Competitive Team",
      age: "Pre-Team & USAG Levels 2–10 / Xcel",
      description: "Dedicated pre-team Mighty Minis and USAG competitive gymnastics programs developing discipline, poise, character, and athletic excellence.",
      image: "/images/team-xcel.webp",
      action: () => onNavigate('/team'),
      buttonText: "Meet The Team"
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Hero Section — Achieve Sports Inspired: Impactful, Clean, Direct */}
      <section className={`relative overflow-hidden text-white py-20 lg:py-28 bg-gradient-to-br ${activeTheme.heroGradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Mission & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-pink-200">
                <Sparkles className="w-4 h-4 text-pink-300" />
                <span>Denver's Home for Youth Gymnastics & Ninja</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                Building Strength, Confidence, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200">
                  and Character
                </span>
                <span className="block text-2xl sm:text-3xl font-medium text-pink-100/90 mt-2">
                  — One Skill at a Time.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At <strong className="text-white font-semibold">Resilience Gymnastics Academy</strong>, we help athletes grow through safe, positive, and empowering training that builds lifelong resilience — on and off the mat.
              </p>

              {/* Highlights Pill Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-pink-300 shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">Month-to-Month</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                  <Award className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">Certified Coaches</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                  <HeartHandshake className="w-4 h-4 text-teal-300 shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">Safe Progressions</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onNavigate('/classes')}
                  className="inline-flex items-center justify-center gap-2 text-base font-extrabold px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-xl shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all"
                >
                  View Class Schedule
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href={gymInfo.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-base font-bold px-7 py-4 rounded-xl bg-white/15 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md transition-all"
                >
                  Payment / Parent Portal
                  <ExternalLink className="w-4 h-4 text-pink-200" />
                </a>
              </div>

              <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Continuous Enrollment
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 10% Sibling Discount
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Makeup Classes
                </span>
              </div>
            </div>

            {/* Right Column: Hero Graphic / Schedule Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-xl opacity-40"></div>
                <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <img
                    src="/images/hero-gymnast.webp"
                    alt="Youth gymnast balance beam training at RGA"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Floating Notification */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-slate-100">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-semibold text-pink-400 uppercase tracking-wider">
                          Fall 2026 Schedule Ready
                        </div>
                        <div className="text-sm font-bold text-white mt-0.5">
                          Tots, Rec Girls & Boys, Ninjas & Team
                        </div>
                      </div>
                      <button
                        onClick={() => onOpenEnroll()}
                        className="text-xs font-bold bg-pink-600 hover:bg-pink-700 text-white px-3.5 py-2 rounded-lg transition-colors shrink-0"
                      >
                        Enroll Child
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Navigation Cards — Clean & Uncluttered Category Entrypoints */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Our Core Programs
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Positive coaching for every stage of your child's athletic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programSpotlights.map((prog, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:border-pink-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={prog.image} 
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                      {prog.age}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={prog.action}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-4 rounded-xl border border-pink-200 bg-pink-50/50 text-pink-700 hover:bg-pink-600 hover:text-white transition-all"
                  >
                    {prog.buttonText}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Core Values Section — "Effort Over Perfection" */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold text-pink-600 uppercase tracking-widest bg-pink-50 px-3.5 py-1 rounded-full border border-pink-100">
              The RGA Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3">
              We Celebrate Effort Over Perfection
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              At Resilience Gymnastics Academy, we believe true strength comes from more than just muscles — it comes from confidence, character, and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div 
                key={val.id} 
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-pink-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${val.color} text-white flex items-center justify-center mb-5 shadow-md`}>
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200/60">
                  <span className="text-[11px] font-semibold text-pink-600">
                    Resilience Core Pillar
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Callout: Events & Birthday Parties */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Birthday Parties */}
            <div className="bg-slate-800/90 rounded-3xl p-8 border border-slate-700/80 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase mb-4">
                <PartyPopper className="w-4 h-4" /> Private Celebrations
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                Gymnastics Birthday Parties
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Enjoy 100% private facility access! 60 minutes of obstacle courses, trampoline, foam pit & structured games, plus 30 minutes in the private party room.
              </p>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-black text-white">$250</span>
                <span className="text-xs text-slate-400">/ 1.5 Hour Party (10 children included)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onNavigate('/birthday-parties')}
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold px-5 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white transition-colors"
                >
                  Party Details & Pricing
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${gymInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-pink-400" />
                  Call {gymInfo.phone} to Book
                </a>
              </div>
            </div>

            {/* Parents' Night Out */}
            <div className="bg-slate-800/90 rounded-3xl p-8 border border-slate-700/80 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase mb-4">
                <Calendar className="w-4 h-4" /> Monthly Event
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                Parents' Night Out 🎉
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Need a few hours to yourself? 4 hours of supervised open gym, pizza dinner, crafts, and games from 5:00 PM – 9:00 PM. Ages 4 to 12.
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-black text-white">$50</span>
                <span className="text-xs text-slate-400">for 1 child ($90 for 2, $40 each addl)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onNavigate('/events')}
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                >
                  Upcoming Dates & Schedule
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={gymInfo.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                >
                  Register via Portal
                  <ExternalLink className="w-4 h-4 text-purple-300" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Parent Testimonials — Achieve Sports Style Credibility */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Loved by Denver Families
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Hear what parents have to say about their experience at Resilience Gymnastics Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-sm text-gray-900">{item.author}</div>
                  <div className="text-xs text-gray-500">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quick Contact & Location Bar */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 sm:p-10 border border-pink-100 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">
                Visit Us in Denver
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                Ready to Experience RGA?
              </h3>
              <p className="text-sm text-gray-600 max-w-xl">
                Located at 6180 East Warren Ave in Denver. Stop by or contact our friendly front desk team to learn more.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={gymInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-800 font-bold text-xs shadow-sm hover:shadow border border-gray-200 transition-all"
              >
                <MapPin className="w-4 h-4 text-pink-600" />
                Directions & Map
              </a>

              <a
                href={`mailto:${gymInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-800 font-bold text-xs shadow-sm hover:shadow border border-gray-200 transition-all"
              >
                <Mail className="w-4 h-4 text-pink-600" />
                {gymInfo.email}
              </a>

              <a
                href={`tel:${gymInfo.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md shadow-pink-500/20 transition-all"
              >
                <Phone className="w-4 h-4" />
                {gymInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
