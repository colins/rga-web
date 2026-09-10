import React from 'react';
import { 
  MapPin, Phone, Mail, Clock, ExternalLink, Heart, Sparkles, 
  ShieldCheck, Award, Users, ChevronRight, MessageSquare 
} from 'lucide-react';
import { gymInfo, values } from '../data/scheduleData';

export default function AboutPage({ activeTheme }) {
  return (
    <div className="bg-gray-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 font-bold text-xs uppercase tracking-wider mb-3">
            About Resilience Gymnastics Academy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Who We Are
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Building strength, confidence, and character in young Denver athletes — one skill at a time.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-widest block">
                Our Purpose & Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                "True strength comes from more than just muscles — it comes from confidence, character, and community."
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Our academy was built on the vision of creating a safe, positive, and empowering environment where athletes can thrive both in and out of the gym. Every program, every practice, and every conversation reflects our belief that gymnastics should build resilience for life — teaching discipline, teamwork, and self-belief along the way.
                </p>
                <p>
                  At Resilience, we celebrate <strong className="text-gray-900 font-semibold">effort over perfection</strong>, <strong className="text-gray-900 font-semibold">courage over fear</strong>, and <strong className="text-gray-900 font-semibold">growth over comparison</strong>. Whether your gymnast is just beginning or pursuing competitive goals, we’re here to support them every step, jump, and handstand of the way.
                </p>
                <p className="text-xs text-gray-500 italic">
                  * Proudly continuing a rich gymnastics tradition in Southeast Denver, formerly known as Gymnastics Plus.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img 
                  src="/images/value-confidence.webp" 
                  alt="Coach and young gymnasts at Resilience Gymnastics Academy"
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest block mb-1">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
              Our Four Core Pillars
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${v.color} text-white flex items-center justify-center mb-4 shadow-sm`}>
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info & Map Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-pink-600 uppercase tracking-widest block mb-1">
                  Get In Touch
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                  Contact Us
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Communication and connection are part of who we are. Whether you’re a current family or new to gymnastics, we’re always happy to talk about our approach to athlete development and training.
                </p>
              </div>

              <div className="space-y-4">
                {/* Clickable Email */}
                <a
                  href={`mailto:${gymInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:border-pink-300 hover:bg-pink-50/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Email Our Front Desk</span>
                    <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                      {gymInfo.email}
                    </span>
                  </div>
                </a>

                {/* Clickable Phone */}
                <a
                  href={`tel:${gymInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:border-pink-300 hover:bg-pink-50/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Call Our Office</span>
                    <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                      {gymInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Clickable Address / Google Maps */}
                <a
                  href={gymInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:border-pink-300 hover:bg-pink-50/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Facility Location</span>
                    <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                      {gymInfo.address}
                    </span>
                    <span className="text-xs font-semibold text-pink-600 flex items-center gap-1 mt-0.5">
                      Open in Google Maps <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Google Map Embed & Schedule Hours */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 aspect-video relative shadow-inner">
                <iframe
                  title="Resilience Gymnastics Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.767117013919!2d-104.9184594236113!3d39.67406980061291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7dd286ef5e8b%3A0xe54e6ffecba1c247!2s6180%20E%20Warren%20Ave%2C%20Denver%2C%20CO%2080222!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-pink-600" />
                  Facility & Front Desk Hours
                </h4>
                <div className="space-y-1.5 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800">Monday – Thursday:</span>
                    <span>3:30 PM – 7:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800">Friday:</span>
                    <span>Events & Private Bookings</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800">Saturday:</span>
                    <span>8:30 AM – 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800">Sunday:</span>
                    <span>Private Parties & Events</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
