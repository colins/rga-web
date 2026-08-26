import React from 'react';
import { DollarSign, ShieldCheck, RefreshCw, CalendarCheck, Percent, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { gymInfo } from '../data/scheduleData';

export default function TuitionPolicySection({ activeTheme, onOpenEnroll }) {
  return (
    <section id="tuition" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/20 text-pink-300 font-bold text-xs uppercase tracking-wider mb-3 border border-pink-500/30">
            Simple & Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tuition & Membership Fees
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            No long-term contracts. No confusing session end dates. Straightforward month-to-month tuition for Denver families.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* 60 Minute Classes */}
          <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/80 shadow-xl flex flex-col justify-between hover:border-pink-500/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">60 Minute Classes</h3>
              <p className="text-xs text-slate-400 mb-6">Preschool, Beginner, Intermediate & GymNinjas</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">${gymInfo.tuition.min60}</span>
                <span className="text-sm font-semibold text-slate-400">/ month</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  Weekly 1-hour structured practice
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  Small athlete-to-coach ratios
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  Full access to all apparatuses
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenEnroll()}
              className="mt-8 w-full font-bold text-xs py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-colors"
            >
              Enroll in 60-Min Class
            </button>
          </div>

          {/* 90 Minute Classes (Featured) */}
          <div className="bg-gradient-to-b from-pink-950/90 to-slate-800/90 backdrop-blur-md rounded-2xl p-8 border-2 border-pink-500 shadow-2xl flex flex-col justify-between relative transform hover:-translate-y-1 transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
              Extended Practice
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">90 Minute Classes</h3>
              <p className="text-xs text-pink-200 mb-6">Advanced Girls & Advanced Boys Programs</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">${gymInfo.tuition.min90}</span>
                <span className="text-sm font-semibold text-pink-200">/ month</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-pink-400 shrink-0" />
                  Extended 1.5-hour deep skill training
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-pink-400 shrink-0" />
                  Flight elements & complex conditioning
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-pink-400 shrink-0" />
                  Includes updated Advanced Tuesday hours
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenEnroll()}
              className="mt-8 w-full font-extrabold text-xs py-3.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-600/30 transition-all"
            >
              Enroll in 90-Min Class
            </button>
          </div>

          {/* Membership & Discounts */}
          <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/80 shadow-xl flex flex-col justify-between hover:border-pink-500/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Annual Membership</h3>
              <p className="text-xs text-slate-400 mb-6">Covers facility maintenance, insurance & safety</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                  <span className="text-xs text-slate-300">Single Child Fee</span>
                  <span className="text-lg font-bold text-amber-300">${gymInfo.membershipFee.child} / year</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                  <span className="text-xs text-slate-300">Family Fee (2+ children)</span>
                  <span className="text-lg font-bold text-amber-300">${gymInfo.membershipFee.family} / year</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-xs font-semibold text-emerald-400">Sibling Discount</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    {gymInfo.tuition.siblingDiscount} OFF 2nd Child
                  </span>
                </div>
              </div>

            </div>

            <button
              onClick={() => onOpenEnroll()}
              className="mt-8 w-full font-bold text-xs py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-colors"
            >
              Ask About Sibling Rates
            </button>
          </div>

        </div>

        {/* Policies Highlight Grid */}
        <div className="bg-slate-800/60 rounded-3xl p-8 border border-slate-700/80">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-pink-400" />
            Important Enrollment & Attendance Policies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="flex gap-3">
              <RefreshCw className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm mb-1">Month-to-Month Enrollment</strong>
                Classes run continuously year-round. No re-registering every few weeks! Simply notify us 14 days before month-end if you need to drop.
              </div>
            </div>

            <div className="flex gap-3">
              <CalendarCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm mb-1">Makeup Class Policy</strong>
                Each enrolled student is allowed 1 makeup class per month. Prior written or email notification of absence is required to qualify.
              </div>
            </div>

            <div className="flex gap-3">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm mb-1">Safety & Coach Ratios</strong>
                All coaches are safety-certified and background-checked. Equipment is inspected daily to ensure peak safety standards.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
