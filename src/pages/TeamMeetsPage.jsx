import React from 'react';
import { CalendarDays, ExternalLink, Trophy } from 'lucide-react';

const meetSchedules = [
  {
    title: 'Bronze & Silver',
    program: 'Xcel Bronze and Silver',
    image: '/images/bronze-silver-2027-schedule.png',
    alt: '2027 Bronze and Silver gymnastics meet schedule'
  },
  {
    title: 'Gold & Platinum',
    program: 'Xcel Gold and Platinum',
    image: '/images/gold-platinum-2027-schedule.png',
    alt: '2027 Xcel Gold and Platinum gymnastics meet schedule'
  },
  {
    title: 'Optional Team',
    program: 'RGA Optional Team',
    image: '/images/optional-team-2027-schedule.jpeg',
    alt: '2027 RGA Optional Team meet schedule'
  }
];

export default function TeamMeetsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950 via-slate-950 to-purple-950" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink-200">
            <Trophy className="w-4 h-4" /> 2027 Competitive Season
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight">Team Meets</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-pink-100/90">
            Meet schedules for our Xcel Bronze, Silver, Gold, Platinum, and Optional teams. Select a schedule to open the full-size image.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 items-start">
          {meetSchedules.map((schedule) => (
            <article key={schedule.image} className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-5 py-4">
                <div className="flex items-center gap-2 text-pink-600">
                  <CalendarDays className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">2027 Meet Schedule</span>
                </div>
                <h2 className="mt-1 text-xl font-black text-gray-900">{schedule.title}</h2>
                <p className="text-sm text-gray-500">{schedule.program}</p>
              </div>
              <a
                href={schedule.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open full-size ${schedule.alt}`}
                className="group block bg-pink-50/50 p-3 sm:p-5"
              >
                <img
                  src={schedule.image}
                  alt={schedule.alt}
                  className="mx-auto h-auto w-full max-w-sm rounded-xl shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <span className="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-pink-700">
                  <ExternalLink className="w-4 h-4" /> View full-size schedule
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
