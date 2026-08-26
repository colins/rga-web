import React, { useState } from 'react';
import { Search, Filter, Clock, Users, ArrowRight, Check, Sparkles, AlertCircle } from 'lucide-react';
import { classes, classCategories, gymInfo } from '../data/scheduleData';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function ScheduleSection({ activeTheme, onSelectClassToEnroll }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDay, setSelectedDay] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter classes
  const filteredClasses = classes.filter((c) => {
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.genderGroup.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDay = selectedDay === 'all' || (c.schedule[selectedDay] && c.schedule[selectedDay].length > 0);

    return matchesCategory && matchesSearch && matchesDay;
  });

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 font-bold text-xs uppercase tracking-wider mb-3">
            Fall 2026 Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Class Schedule & Programs
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Find the perfect class for your child. All recreational classes run month-to-month with continuous enrollment and makeup availability.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-200 mb-10 shadow-sm space-y-4">
          
          {/* Top Row: Search & Category Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            
            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search class name, level..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {classCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all ${
                      isActive
                        ? 'bg-pink-600 text-white shadow-md shadow-pink-500/20'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-pink-300 hover:bg-pink-50/50'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Bottom Row: Day Filter Pills */}
          <div className="flex items-center gap-2 pt-2 border-t border-gray-200/80 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider shrink-0 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Day:
            </span>
            <button
              onClick={() => setSelectedDay('all')}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg shrink-0 transition-colors ${
                selectedDay === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Days
            </button>
            {daysOfWeek.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg shrink-0 transition-colors ${
                  selectedDay === day
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

        </div>

        {/* Class Cards Grid */}
        {filteredClasses.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-lg font-bold text-gray-700">No classes match your filter criteria.</p>
            <p className="text-sm text-gray-500 mt-1">Try resetting search query or selecting "All Programs".</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDay('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-pink-600 underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredClasses.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl border border-gray-200 hover:border-pink-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6">
                  {/* Category & Badge */}
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md">
                        {c.genderGroup} • {c.ageRange}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2">
                        {c.name}
                      </h3>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-black text-gray-900 leading-none">
                        ${c.priceMonthly}
                      </div>
                      <div className="text-[11px] font-semibold text-gray-500 mt-1">
                        / month ({c.durationMinutes} min)
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {c.description}
                  </p>

                  {/* Class Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.highlights.map((h, i) => (
                      <span key={i} className="text-[11px] font-medium text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-500" /> {h}
                      </span>
                    ))}
                  </div>

                  {/* Schedule Days Grid */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-pink-600" />
                      Weekly Class Times:
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      {daysOfWeek.map((day) => {
                        const times = c.schedule[day] || [];
                        if (times.length === 0) return null;
                        
                        // Highlight Tuesday Advanced time change if applicable
                        const isUpdatedTuesday = c.id === 'girls-advanced' && day === 'Tuesday';

                        return (
                          <div key={day} className="bg-white p-2 rounded-lg border border-gray-200">
                            <span className="font-bold text-gray-900 block border-b border-gray-100 pb-1 mb-1">
                              {day}
                            </span>
                            {times.map((t, idx) => (
                              <span
                                key={idx}
                                className={`block font-medium ${
                                  isUpdatedTuesday ? 'text-pink-700 font-extrabold bg-pink-50 px-1 rounded' : 'text-gray-700'
                                }`}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* Bottom Card Footer */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Continuous re-enrollment
                  </span>
                  <button
                    onClick={() => onSelectClassToEnroll(c)}
                    className={`text-xs font-extrabold px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md ${activeTheme.buttonPrimary}`}
                  >
                    Select & Enroll
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
