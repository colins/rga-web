import React from 'react';
import { Sparkles, HeartPulse, ShieldCheck, Users, Quote, Heart } from 'lucide-react';
import { values, gymInfo } from '../data/scheduleData';

const iconMap = {
  Sparkles: Sparkles,
  HeartPulse: HeartPulse,
  ShieldCheck: ShieldCheck,
  Users: Users
};

export default function ValuesSection({ activeTheme }) {
  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 font-bold text-xs uppercase tracking-wider mb-3">
            Who We Are & What We Stand For
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Building Resilience For Life
          </h2>
          <p className="mt-4 text-base sm:text-xl text-pink-700 font-semibold leading-relaxed">
            "{gymInfo.belief}"
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {gymInfo.vision}
          </p>
        </div>

        {/* 4 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => {
            const IconComponent = iconMap[v.icon] || Sparkles;
            return (
              <div
                key={v.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${v.color} opacity-40 group-hover:opacity-30 transition-opacity`} />
                  
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-900 shadow-md">
                    <IconComponent className="w-6 h-6 text-pink-600" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motto Callout Banner */}
        <div className="mt-12 bg-pink-50 border border-pink-200 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <p className="text-base sm:text-lg font-bold text-gray-900">
            At Resilience, {gymInfo.motto.toLowerCase()}
          </p>
          <p className="mt-2 text-sm text-pink-700 font-medium">
            Whether your gymnast is just beginning or pursuing competitive goals, we’re here to support them every step, jump, and handstand of the way.
          </p>
        </div>

        {/* Parent Testimonial Quote Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <Quote className="w-12 h-12 text-pink-400 mx-auto opacity-80" />
            <p className="text-lg sm:text-xl md:text-2xl font-medium italic text-slate-100 leading-relaxed">
              "Resilience Gymnastics Academy has transformed my daughter's confidence. The coaches encourage every child to try again when a trick is tough, and the joy on her face when she sticks her landing is priceless!"
            </p>
            <div className="pt-2">
              <div className="font-bold text-base text-pink-300">
                — Sarah M., Denver Parent
              </div>
              <div className="text-xs text-slate-400">
                Parent of 8-year-old Intermediate Gymnast
              </div>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-pink-300 font-bold text-sm">
              <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
              <span>{gymInfo.tagline}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
