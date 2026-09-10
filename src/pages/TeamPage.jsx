import React from 'react';
import { 
  Trophy, Award, Sparkles, Heart, ShieldCheck, CheckCircle2, 
  ArrowRight, Mail, Phone, Calendar, Users, Star 
} from 'lucide-react';
import { teamData, gymInfo } from '../data/scheduleData';

export default function TeamPage({ activeTheme, onOpenEnroll }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section — Pink Style with Gymnast Background */}
      <section className="relative overflow-hidden text-white py-20 lg:py-28 bg-pink-900">
        {/* Gymnast Background Image with Pink / Magenta Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-950/95 via-pink-900/90 to-purple-950/85" />
        
        {/* Subtle Decorative Accents */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-pink-400/30 text-xs font-bold text-pink-200 uppercase tracking-widest mb-6">
            <Trophy className="w-4 h-4 text-pink-300" />
            RGA Competitive Program
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Resilience Competitive & Pre-Team Program
          </h1>

          <p className="mt-6 text-base sm:text-lg text-pink-100/90 leading-relaxed font-normal">
            Developing champions of character, courage, and excellence. We empower gymnasts with the technical foundation, mental discipline, and self-belief required to thrive both on the competition floor and in life.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${gymInfo.email}?subject=Competitive%20Team%20Evaluation%20Request`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-sm shadow-xl shadow-pink-600/40 transform hover:-translate-y-0.5 transition-all"
            >
              Request Team Evaluation
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${gymInfo.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-sm transition-all"
            >
              <Phone className="w-4 h-4 text-pink-300" />
              Call Front Desk: {gymInfo.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Team Philosophy Callout */}
      <section className="py-16 bg-white border-b border-pink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-extrabold text-pink-600 uppercase tracking-widest bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200">
            Our Competitive Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            "Effort Over Perfection, Courage Over Fear, Growth Over Comparison"
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Resilience Gymnastics Academy, competitive gymnastics is never defined solely by scores or podiums. Our mission is to cultivate athletic excellence side-by-side with genuine self-esteem, deep teamwork, and resilient life habits.
          </p>
        </div>
      </section>

      {/* Program Breakdown Cards */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamData.programs.map((prog) => (
            <div 
              key={prog.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-pink-200/80 shadow-md hover:shadow-xl hover:border-pink-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                    {prog.badge}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    {prog.schedule}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {prog.name}
                </h3>

                <p className="text-xs font-bold text-pink-600 mb-4">
                  {prog.ageRange}
                </p>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {prog.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100 mb-6">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block">
                    Key Focus Areas:
                  </span>
                  {prog.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`mailto:${gymInfo.email}?subject=Evaluation%20Inquiry:%20${encodeURIComponent(prog.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-pink-50 hover:bg-pink-600 text-pink-700 hover:text-white font-bold text-xs border border-pink-200 hover:border-pink-600 transition-all"
                >
                  Inquire About Placement for {prog.name}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coaching Standards & Culture */}
      <section className="py-16 bg-pink-50/60 border-y border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest block mb-2">
              Our Safety & Coaching Standards
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Safety, Encouragement & High Standards
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Every team coach at RGA is passionate, background-checked, and committed to developing whole athletes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.coachingCommitment.map((commitment, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-pink-200/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center mb-4 font-black text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 font-semibold leading-relaxed">
                    {commitment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Banner / Next Steps */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-pink-400" /> Evaluations Open
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {teamData.tryoutInfo.heading}
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {teamData.tryoutInfo.description}
          </p>

          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 max-w-xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              {teamData.tryoutInfo.contactText}
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${gymInfo.email}?subject=Team%20Evaluation%20Booking`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shadow-lg shadow-pink-600/30 transition-all"
            >
              <Mail className="w-4 h-4" />
              Email frontdesk@rgagymnast.com
            </a>
            <a
              href={`tel:${gymInfo.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all"
            >
              <Phone className="w-4 h-4 text-pink-400" />
              Call (303) 512-0799
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
