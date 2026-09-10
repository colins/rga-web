import React, { useState } from 'react';
import { 
  Search, Filter, Clock, Users, ArrowRight, Check, Sparkles, 
  AlertCircle, DollarSign, ShieldCheck, Calendar, Info, FileText, ChevronRight,
  ZoomIn, Download, X, Maximize2
} from 'lucide-react';
import { classes, classCategories, gymInfo } from '../data/scheduleData';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function ClassesPage({ activeTheme, onSelectClassToEnroll, onOpenEnroll }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDay, setSelectedDay] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('cards'); // 'cards' or 'table'
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
    <div className="py-12 sm:py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 font-bold text-xs uppercase tracking-wider mb-3">
            Fall 2026 Class Schedule
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Recreational Gymnastics Classes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From parent-tot bonding to advanced gymnastics, explore our safe, fun, and empowering classes. All recreational programs operate month-to-month with continuous enrollment.
          </p>
        </div>

        {/* Schedule Summary Banner (from latest_schedule.jpg) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="md:pr-6">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-widest block mb-1">Tuition Pricing</span>
              <p className="text-2xl font-black text-gray-900">$108 <span className="text-sm font-semibold text-gray-500">/ 60-min</span></p>
              <p className="text-2xl font-black text-gray-900 mt-1">$148 <span className="text-sm font-semibold text-gray-500">/ 90-min</span></p>
              <span className="text-xs text-gray-500 mt-1 block">10% Sibling discount applied</span>
            </div>

            <div className="pt-4 md:pt-0 md:px-6">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-widest block mb-1">Annual Membership</span>
              <p className="text-2xl font-black text-gray-900">$50 <span className="text-sm font-semibold text-gray-500">/ child</span></p>
              <p className="text-2xl font-black text-gray-900 mt-1">$75 <span className="text-sm font-semibold text-gray-500">/ family</span></p>
              <span className="text-xs text-gray-500 mt-1 block">Covers insurance & facility safety</span>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-widest block mb-1">Flexible Enrollment</span>
              <p className="text-sm font-bold text-gray-900">Month-to-Month (No Sessions)</p>
              <p className="text-xs text-gray-600 mt-1">Automatic re-enrollment each month. Simply provide 14 days written notification prior to month end to withdraw.</p>
              <span className="text-xs font-semibold text-emerald-600 mt-2 block">✓ 1 Makeup class per month</span>
            </div>
          </div>
        </div>

        {/* View Switcher & Search Bar */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 mb-8 shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search class name, age, level..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            {/* View Toggle */}
            <div className="inline-flex rounded-xl bg-gray-100 p-1 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('cards')}
                className={`text-xs font-bold px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'cards' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Class Cards
              </button>
              <button
                onClick={() => setActiveTab('table')}
                className={`text-xs font-bold px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'table' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Schedule Table
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            {classCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'bg-pink-600 text-white shadow-md shadow-pink-500/20'
                      : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-pink-300 hover:bg-pink-50/50'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Day Filter Pills */}
          <div className="flex items-center gap-2 pt-2 border-t border-gray-100 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Day:
            </span>
            <button
              onClick={() => setSelectedDay('all')}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg shrink-0 transition-colors ${
                selectedDay === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: Class Cards */}
        {activeTab === 'cards' && (
          <div className="space-y-6">
            {filteredClasses.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-lg font-bold text-gray-700">No classes match your filter criteria.</p>
                <p className="text-sm text-gray-500 mt-1">Try resetting your search query or selecting "All Programs".</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedDay('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 text-xs font-bold text-pink-600 hover:text-pink-700 underline"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClasses.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-pink-300 transition-all flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {/* Image Header */}
                      <div className="h-44 relative overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                          {item.genderGroup}
                        </div>
                        <div className="absolute top-3 right-3 bg-pink-600 text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-md">
                          ${item.priceMonthly}/mo
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold mb-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-pink-600" />
                            {item.durationMinutes} Minutes
                          </span>
                          <span>•</span>
                          <span>{item.ageRange}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.name}
                        </h3>

                        <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-1.5 mb-5">
                          {item.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                              <Check className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Schedule Times List */}
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 mb-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2">
                            Available Days & Times
                          </span>
                          <div className="space-y-1.5 text-xs text-gray-700">
                            {Object.entries(item.schedule).map(([day, times]) => {
                              if (!times || times.length === 0) return null;
                              return (
                                <div key={day} className="flex items-start justify-between">
                                  <span className="font-semibold text-gray-900">{day}:</span>
                                  <span className="text-right text-gray-600">{times.join(', ')}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => onSelectClassToEnroll(item)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md shadow-pink-500/20 transition-all"
                      >
                        Enroll in This Class
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Table View Matching latest_schedule.jpg */}
        {activeTab === 'table' && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold text-pink-400 uppercase tracking-widest block">Complete Matrix</span>
                <h3 className="text-xl font-black">Fall 2026 Recreational Gymnastics Matrix</h3>
              </div>
              <a
                href={gymInfo.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold bg-pink-600 hover:bg-pink-700 text-white px-4 py-2.5 rounded-xl transition-colors"
              >
                Register in Parent Portal
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-100 text-gray-800 uppercase tracking-wider font-bold border-b border-gray-200">
                    <th className="p-4 min-w-[200px]">Class & Group</th>
                    <th className="p-4 min-w-[120px]">Age Range</th>
                    <th className="p-4 min-w-[150px]">Monday</th>
                    <th className="p-4 min-w-[150px]">Tuesday</th>
                    <th className="p-4 min-w-[150px]">Wednesday</th>
                    <th className="p-4 min-w-[150px]">Thursday</th>
                    <th className="p-4 min-w-[100px]">Friday</th>
                    <th className="p-4 min-w-[160px]">Saturday</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {classes.map((cls) => (
                    <tr key={cls.id} className="hover:bg-pink-50/30 transition-colors">
                      <td className="p-4 font-bold text-gray-900">
                        {cls.name}
                        <span className="block text-[11px] font-medium text-pink-600">
                          {cls.durationMinutes} min • ${cls.priceMonthly}/mo
                        </span>
                      </td>
                      <td className="p-4 text-gray-600 font-medium">{cls.ageRange}</td>
                      <td className="p-4 text-gray-700">{cls.schedule.Monday?.join(', ') || '—'}</td>
                      <td className="p-4 text-gray-700">{cls.schedule.Tuesday?.join(', ') || '—'}</td>
                      <td className="p-4 text-gray-700">{cls.schedule.Wednesday?.join(', ') || '—'}</td>
                      <td className="p-4 text-gray-700">{cls.schedule.Thursday?.join(', ') || '—'}</td>
                      <td className="p-4 text-gray-400 italic">No classes</td>
                      <td className="p-4 text-gray-700">{cls.schedule.Saturday?.join(', ') || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex items-center justify-between">
              <span>* Schedule verified with Resilience Gymnastics Academy Fall 2026 published schedule.</span>
              <button
                onClick={() => onOpenEnroll()}
                className="font-bold text-pink-600 hover:text-pink-700"
              >
                Need assistance selecting a level? Contact us →
              </button>
            </div>
          </div>
        )}

        {/* Official Published Schedule Flyer Section (from latest_schedule.jpg) */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 font-bold text-xs uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5 text-pink-600" />
              Published Schedule Document
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Official Fall 2026 Schedule Flyer
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Below is the official schedule flyer published by Resilience Gymnastics Academy. Click the image to open the high-resolution viewer or download a printable copy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden p-3 sm:p-5">
              <div 
                className="relative group cursor-pointer rounded-2xl overflow-hidden bg-gray-50 border border-gray-100"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src="/images/latest_schedule.jpg"
                  alt="Resilience Gymnastics Academy Fall 2026 Published Schedule"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <span className="px-5 py-2.5 rounded-xl bg-white text-gray-900 font-extrabold text-xs shadow-xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                    <Maximize2 className="w-4 h-4 text-pink-600" />
                    Click to View Full Size
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
                <span className="text-xs text-gray-500 font-medium">
                  Official flyer • Dimensions: 1999 × 1545px • Fall 2026
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
                    href="/images/latest_schedule.jpg"
                    download="Resilience-Gymnastics-Fall-2026-Schedule.jpg"
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
              className="relative max-w-6xl w-full max-h-[92vh] bg-slate-900 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl flex flex-col items-center border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between pb-3 px-1 sm:px-2 text-white border-b border-slate-800 mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-pink-400" />
                  <span className="font-bold text-xs sm:text-sm text-pink-200">Fall 2026 Class Schedule Flyer</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/images/latest_schedule.jpg"
                    download="Resilience-Gymnastics-Fall-2026-Schedule.jpg"
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
              <div className="overflow-auto max-h-[78vh] w-full flex justify-center rounded-xl bg-slate-950/60 p-2">
                <img 
                  src="/images/latest_schedule.jpg" 
                  alt="Resilience Gymnastics Academy Fall 2026 Class Schedule" 
                  className="max-w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom Help Banner */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Not Sure Which Class Is Right?</h3>
          <p className="text-sm text-gray-600 mb-6">
            Our friendly coaching staff is always happy to recommend the ideal class based on your child's age, motor experience, and interest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onOpenEnroll()}
              className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md shadow-pink-500/20"
            >
              Request Class Consultation
            </button>
            <a
              href={`tel:${gymInfo.phone}`}
              className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs"
            >
              Call Front Desk: {gymInfo.phone}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
