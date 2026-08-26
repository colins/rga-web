import React from 'react';
import { Sparkles, Calendar, Award, ShieldCheck, ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';
import { gymInfo } from '../data/scheduleData';

export default function Hero({ activeTheme, onOpenEnroll, onOpenTrial }) {
  return (
    <section id="about" className={`relative overflow-hidden text-white py-16 lg:py-24 bg-gradient-to-br ${activeTheme.heroGradient}`}>
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-pink-200">
              <Sparkles className="w-4 h-4 text-pink-300" />
              <span>Denver's Premier Youth Gymnastics & Ninja Academy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Where Young Athletes <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200">
                Build Confidence & Resilience
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
              At <strong className="text-white font-semibold">Resilience Gymnastics Academy</strong> (formerly Gymnastics Plus), we empower children ages 3 and up to develop strength, agility, self-confidence, and a lifelong love for movement in a positive, supportive environment.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                <ShieldCheck className="w-5 h-5 text-pink-300 shrink-0" />
                <span className="text-xs font-medium text-slate-100">Month-to-Month Flexibility</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                <Award className="w-5 h-5 text-amber-300 shrink-0" />
                <span className="text-xs font-medium text-slate-100">Certified Expert Coaches</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                <HeartHandshake className="w-5 h-5 text-teal-300 shrink-0" />
                <span className="text-xs font-medium text-slate-100">Positive & Uplifting Culture</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenEnroll()}
                className="inline-flex items-center justify-center gap-2 text-base font-extrabold px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-xl shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all"
              >
                Enroll Your Child Now
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onOpenTrial()}
                className="inline-flex items-center justify-center gap-2 text-base font-bold px-7 py-4 rounded-xl bg-white/15 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md transition-all"
              >
                <Calendar className="w-5 h-5 text-pink-300" />
                Request Trial Class
              </button>
            </div>

            <p className="text-xs text-slate-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Easy continuous re-enrollment • No long-term lock-in • Makeup options available
            </p>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=1000&q=80"
                  alt="Young gymnast balancing on beam at RGA"
                  className="w-full h-[420px] object-cover"
                />
                
                {/* Floating Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-pink-400 uppercase tracking-wider">
                        Fall 2026 Registration Open
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        Classes for Ages 3 to 18
                      </div>
                    </div>
                    <a
                      href="#schedule"
                      className="text-xs font-bold bg-pink-600 hover:bg-pink-700 text-white px-3 py-2 rounded-lg transition-colors"
                    >
                      View Schedule
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
