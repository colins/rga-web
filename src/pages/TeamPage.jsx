import React, { useState } from 'react';
import { 
  Trophy, Award, Sparkles, Heart, ShieldCheck, CheckCircle2, 
  ArrowRight, Mail, Phone, Calendar, Users, Star,
  Check, HelpCircle, Send, User, ChevronRight, Activity, Zap, Loader2
} from 'lucide-react';
import { teamData, gymInfo } from '../data/scheduleData';

export default function TeamPage({ activeTheme }) {
  const { preTeam, xcelProgram, dpProgram, comparisonMatrix, coachingCommitment, evaluationProcess } = teamData;

  const [selectedTrack, setSelectedTrack] = useState('all'); // 'all', 'xcel', 'dp'

  // Evaluation Form State
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    athleteName: '',
    athleteAge: '',
    currentExperience: 'recreational',
    programInterest: 'recommendation',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateMailtoLink = () => {
    const targetEmail = gymInfo.enrollmentEmail || 'frontdesk+enroll@rgagymnast.com';
    const subject = encodeURIComponent(`[Team Evaluation Request] ${formData.athleteName} (${formData.athleteAge})`);
    const body = encodeURIComponent(
`Athlete Name: ${formData.athleteName}
Athlete Age: ${formData.athleteAge}
Parent / Guardian: ${formData.parentName}
Phone: ${formData.phone}
Email: ${formData.email}
Current Experience: ${formData.currentExperience}
Program of Interest: ${formData.programInterest}
Athlete Goals / Notes: ${formData.notes || 'None'}

Please contact me to schedule a team evaluation assessment!`
    );
    return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const targetEmail = gymInfo.enrollmentEmail || 'frontdesk+enroll@rgagymnast.com';
    const payload = {
      _subject: `[Team Evaluation Request] ${formData.athleteName} (${formData.athleteAge})`,
      _template: 'table',
      _captcha: 'false',
      formType: 'Team Evaluation Request',
      athleteName: formData.athleteName,
      athleteAge: formData.athleteAge,
      parentName: formData.parentName,
      parentEmail: formData.email,
      parentPhone: formData.phone,
      currentExperience: formData.currentExperience,
      programInterest: formData.programInterest,
      notes: formData.notes || 'None provided',
      submittedAt: new Date().toISOString()
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || (data && (data.success === 'false' || data.success === false))) {
        if (data && data.message && data.message.includes('Activation')) {
          throw new Error(`This form is awaiting one-time email activation. Please click "Activate Form" in the verification email sent to ${targetEmail}, then try again.`);
        }
        throw new Error((data && data.message) || `Submission failed with status: ${response.status}`);
      }

      setFormSubmitted(true);
    } catch (err) {
      console.error('Error submitting team evaluation form:', err);
      setErrorMessage(err.message || 'Unable to submit automatically. Please use the direct email option below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. HERO SECTION — Pink Brand Style with Gymnast Imagery Background from rgagymnast.com */}
      <section className="relative overflow-hidden text-white py-20 lg:py-28 bg-slate-950">
        {/* Gymnast Background Image from rgagymnast.com */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${teamData.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-pink-950/80 to-purple-950/85" />
        
        {/* Glow Accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-pink-400/30 text-xs font-bold text-pink-200 uppercase tracking-widest">
            <Trophy className="w-4 h-4 text-pink-300" />
            USA Gymnastics Pre-Team & Competitive Programs
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
            Resilience Competitive & Pre-Team Programs
          </h1>

          <p className="text-base sm:text-lg text-pink-100/90 leading-relaxed max-w-3xl mx-auto font-normal">
            Developing champions of character, courage, and excellence. From our foundational <strong>Mighty Minis Pre-Team</strong> to our <strong>USAG Xcel</strong> and <strong>Developmental Program (DP)</strong> teams, we provide positive, empowering coaching tailored to every athlete.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToId('eval-form')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-sm shadow-xl shadow-pink-600/40 transform hover:-translate-y-0.5 transition-all"
            >
              Request Team Evaluation
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToId('programs')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-sm transition-all"
            >
              <Trophy className="w-4 h-4 text-pink-300" />
              Explore Programs
            </button>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-pink-200/90">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Evaluation-Based Placement
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> USAG Certified Staff
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Positive Team Culture
            </span>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & READINESS STATEMENT (Modeled from Gymtegrity / 5280) */}
      <section className="py-14 bg-white border-b border-pink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-extrabold text-pink-600 uppercase tracking-widest bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200">
            Our Athlete Development Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            "Effort Over Perfection, Courage Over Fear, Growth Over Comparison"
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Competitive gymnastics at Resilience Gymnastics Academy is evaluation-based and designed for athletes who demonstrate physical readiness, coachability, and desire for an increased training commitment. 
            <strong className="text-gray-900 font-semibold block mt-1">
              Competitive team is an exciting opportunity for athletes ready for more — not a mandatory requirement for recreational gymnasts.
            </strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto text-left">
            <div className="bg-pink-50/50 p-4 rounded-2xl border border-pink-100">
              <span className="font-bold text-xs text-pink-900 block mb-1">1. Fundamentals First</span>
              <p className="text-xs text-gray-600">Sound biomechanics and safety progressions before accelerated skill difficulty.</p>
            </div>
            <div className="bg-pink-50/50 p-4 rounded-2xl border border-pink-100">
              <span className="font-bold text-xs text-pink-900 block mb-1">2. Readiness Over Age</span>
              <p className="text-xs text-gray-600">Athletes advance when their physical conditioning and mental maturity align.</p>
            </div>
            <div className="bg-pink-50/50 p-4 rounded-2xl border border-pink-100">
              <span className="font-bold text-xs text-pink-900 block mb-1">3. Lifelong Resilience</span>
              <p className="text-xs text-gray-600">Building grit, sportsmanship, and confidence that lasts far beyond gym competition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMS OVERVIEW */}
      <section id="programs" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 font-bold text-xs uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5 text-pink-600" /> Program Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Choose the Right Fit for Your Athlete
            </h2>
            <p className="mt-3 text-base text-gray-600">
              We offer three programs tailored to different ages, time commitments, and competitive goals.
            </p>
          </div>

          {/* 3 Program Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Mighty Minis Pre-Team */}
            <div className="bg-white rounded-3xl p-8 border-2 border-pink-200 shadow-sm hover:shadow-xl hover:border-pink-500 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black text-pink-700 bg-pink-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    Pre-Team
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    Ages 4 – 7
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-pink-600 transition-colors">
                    {preTeam.name}
                  </h3>
                  <div className="text-xs font-bold text-pink-600 mt-1">
                    {preTeam.schedule}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our foundational pre-team program for young gymnasts showing natural enthusiasm, coordination, and readiness for structured training beyond recreational classes.
                </p>

                <div className="bg-pink-50/70 rounded-2xl p-4 border border-pink-100 space-y-2">
                  <span className="text-[11px] font-bold text-pink-900 uppercase tracking-wider block">
                    Program Highlights:
                  </span>
                  <div className="space-y-1.5 text-xs text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                      <span>Technique, posture & flexibility</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                      <span>Core conditioning & team habits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                      <span>Coach evaluation entry</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => scrollToId('mighty-minis-section')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md shadow-pink-500/20 transition-all"
                >
                  Explore Mighty Minis
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: USAG Xcel Program */}
            <div className="bg-white rounded-3xl p-8 border-2 border-rose-200 shadow-sm hover:shadow-xl hover:border-rose-500 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black text-rose-700 bg-rose-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    USAG Xcel
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    6 – 12 Hrs / Wk
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-rose-600 transition-colors">
                    USA Gymnastics Xcel
                  </h3>
                  <div className="text-xs font-bold text-rose-600 mt-1">
                    4 Tiers: Bronze • Silver • Gold • Platinum
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Authentic competitive gymnastics with customized routines designed for athletes desiring competition while maintaining flexibility for multi-sport or academic balance.
                </p>

                <div className="bg-rose-50/70 rounded-2xl p-4 border border-rose-100 space-y-2">
                  <span className="text-[11px] font-bold text-rose-900 uppercase tracking-wider block">
                    Program Highlights:
                  </span>
                  <div className="space-y-1.5 text-xs text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>Customized choreography per athlete</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>Colorado state & regional meets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>Flexible training schedule</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => scrollToId('xcel-section')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-500/20 transition-all"
                >
                  Explore Xcel Program
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: USAG Developmental Program (DP) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-purple-200 shadow-sm hover:shadow-xl hover:border-purple-500 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black text-purple-700 bg-purple-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    USAG Developmental (DP)
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    9 – 20+ Hrs / Wk
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-purple-600 transition-colors">
                    Development Program (DP)
                  </h3>
                  <div className="text-xs font-bold text-purple-600 mt-1">
                    Compulsory (L2–5) & Optional (L6–10)
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  USA Gymnastics' premier traditional program. Builds technical perfection through standardized compulsory routines, progressing to high-difficulty optionals and collegiate preparation.
                </p>

                <div className="bg-purple-50/70 rounded-2xl p-4 border border-purple-100 space-y-2">
                  <span className="text-[11px] font-bold text-purple-900 uppercase tracking-wider block">
                    Program Highlights:
                  </span>
                  <div className="space-y-1.5 text-xs text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>National standardized curriculum</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>Elite technical development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>NCAA & championship opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => scrollToId('dp-section')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-500/20 transition-all"
                >
                  Explore DP Program
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Program Placement Callout */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200 text-center max-w-3xl mx-auto shadow-sm">
            <p className="text-xs sm:text-sm text-gray-600">
              <strong className="text-gray-900">Evaluation & Placement:</strong> Our coaching staff provides personalized skill evaluations to help families determine the best fit for their gymnast's readiness, goals, and schedule.
            </p>
          </div>

        </div>
      </section>

      {/* 4. FOUNDATIONAL PRE-TEAM: MIGHTY MINIS */}
      <section id="mighty-minis-section" className="py-16 bg-white border-y border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-white rounded-3xl p-8 sm:p-12 border border-pink-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-pink-600" /> {preTeam.badge}
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                  {preTeam.name}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold text-pink-700">
                  <span className="bg-white px-3 py-1 rounded-lg border border-pink-200">
                    {preTeam.ageRange}
                  </span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-pink-200">
                    {preTeam.schedule}
                  </span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed pt-2">
                  {preTeam.description}
                </p>

                <div className="space-y-2.5 pt-3">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block">
                    What Athletes Develop in Mighty Minis:
                  </span>
                  {preTeam.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, programInterest: 'mighty-minis' }));
                      scrollToId('eval-form');
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md shadow-pink-500/20 transition-all"
                  >
                    Request Mighty Minis Evaluation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={`tel:${gymInfo.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs border border-gray-200"
                  >
                    <Phone className="w-4 h-4 text-pink-600" />
                    Call {gymInfo.phone}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white relative group">
                  <img
                    src="/images/team-mighty-minis.webp"
                    alt="Young gymnast in pre-team training at RGA"
                    className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/10">
                    <span className="font-bold block text-pink-300">Pre-Team Readiness Assessment</span>
                    Evaluates flexibility, core conditioning, listening skills, and coachability.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. XCEL PROGRAM: 4 TIERS (BRONZE, SILVER, GOLD, PLATINUM) */}
      <section id="xcel-section" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black text-pink-700 bg-pink-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
              {xcelProgram.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-3">
              {xcelProgram.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base font-semibold text-pink-700">
              {xcelProgram.subtitle}
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {xcelProgram.description}
            </p>
          </div>

          {/* 4 Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {xcelProgram.tiers.map((tier) => (
              <div 
                key={tier.level}
                className="bg-white rounded-3xl p-6 border border-pink-200 shadow-sm hover:shadow-xl hover:border-pink-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-pink-800 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-100">
                      {tier.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500">
                      {tier.hours}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
                    {tier.level}
                  </h3>
                  <div className="text-xs font-bold text-pink-600 mb-3">
                    {tier.focus}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {tier.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-gray-100">
                    <span className="text-[11px] font-bold text-gray-900 uppercase tracking-wider block mb-1">
                      Key Skill Highlights:
                    </span>
                    {tier.keySkills.map((sk, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-pink-600 shrink-0 mt-0.5" />
                        <span>{sk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ 
                        ...prev, 
                        programInterest: 'xcel', 
                        notes: `Interested in Xcel ${tier.level} evaluation.` 
                      }));
                      scrollToId('eval-form');
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-pink-50 hover:bg-pink-600 text-pink-700 hover:text-white font-bold text-xs border border-pink-200 hover:border-pink-600 transition-all"
                  >
                    Inquire About {tier.level}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. DEVELOPMENT PROGRAM (DP): SEQUENTIAL LEVEL PROGRESSION */}
      <section id="dp-section" className="py-20 bg-white border-t border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black text-purple-700 bg-purple-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
              {dpProgram.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              {dpProgram.name}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-purple-700">
              {dpProgram.subtitle}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {dpProgram.description}
            </p>
          </div>

          {/* Sequential Progression Flow Header Banner */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-purple-500/30">
            <div className="text-center space-y-2 mb-6">
              <span className="text-xs font-bold text-purple-300 uppercase tracking-widest block">
                The DP Advancement Trajectory
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                How Athletes Progress Through the Developmental Program
              </h3>
              <p className="text-xs sm:text-sm text-purple-200 max-w-xl mx-auto">
                Unlike recreational classes, DP is an intentional stage-by-stage progression. Athletes start in Compulsory to build flawless biomechanics, then graduate to Optionals and collegiate competition.
              </p>
            </div>

            {/* Progression Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-[10px] font-black uppercase tracking-wider text-pink-300 block mb-1">Step 1</span>
                <div className="font-bold text-sm text-white">Compulsory Team</div>
                <div className="text-xs text-purple-200 mt-0.5">Levels 2 – 5</div>
                <p className="text-[11px] text-slate-300 mt-2">
                  Master standardized USAG routines, strict body line execution & physical discipline.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-purple-400/50 relative">
                <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center font-bold shadow z-10">
                  →
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-300 block mb-1">Step 2 (Advancement)</span>
                <div className="font-bold text-sm text-white">Optional Team</div>
                <div className="text-xs text-purple-200 mt-0.5">Levels 6 – 10</div>
                <p className="text-[11px] text-slate-300 mt-2">
                  Transition to personalized choreography showcasing unique talents and maximum difficulty.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 relative">
                <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-indigo-500 text-white text-xs flex items-center justify-center font-bold shadow z-10">
                  →
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 block mb-1">Step 3 (Destination)</span>
                <div className="font-bold text-sm text-white">Collegiate / Elite</div>
                <div className="text-xs text-purple-200 mt-0.5">NCAA Divisions I, II, III</div>
                <p className="text-[11px] text-slate-300 mt-2">
                  College recruitment portfolios, regional/national championships, and university athletic careers.
                </p>
              </div>
            </div>
          </div>

          {/* 2 Level Progression Stage Cards (Compulsory -> Optional) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            {dpProgram.tiers.map((division, idx) => (
              <div 
                key={division.level}
                className="bg-purple-50/40 rounded-3xl p-8 sm:p-10 border-2 border-purple-200 shadow-sm hover:shadow-xl hover:border-purple-400 transition-all flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-purple-800 bg-purple-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {division.badge}
                    </span>
                    <span className="text-xs font-bold text-gray-600 bg-white px-3 py-1 rounded-lg border border-purple-200">
                      {division.hours}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-1">
                    {division.stage}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">
                    {division.level}
                  </h3>
                  <div className="text-xs font-bold text-purple-800 mb-4">
                    {division.subheading} • {division.focus}
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-5">
                    {division.description}
                  </p>

                  {/* Advancement Transition Box */}
                  <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-xs mb-6">
                    <span className="text-xs font-bold text-purple-900 block mb-1">
                      {idx === 0 ? "🚀 Advancement to Optionals:" : "🎓 Collegiate & Championship Opportunities:"}
                    </span>
                    <p className="text-xs text-purple-950 font-medium leading-relaxed">
                      {division.advancementCriteria}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-purple-200/60 mb-6">
                    <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block">
                      Curriculum & Skill Progression Milestones:
                    </span>
                    {division.keySkills.map((sk, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span>{sk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ 
                        ...prev, 
                        programInterest: 'dp', 
                        notes: `Interested in DP ${division.level} (${division.subheading}) evaluation.` 
                      }));
                      scrollToId('eval-form');
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-500/20 transition-all"
                  >
                    Request Evaluation for {division.level}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Collegiate Opportunities Callout (from 5280 Gymnastics) */}
          <div className="bg-purple-900 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4">
            <span className="text-xs font-bold text-pink-300 uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Collegiate Gymnastics Trajectory
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Empowering Athletes to Reach Their Maximum Potential
            </h3>
            <p className="text-sm text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Our optional program is structured to support dedicated gymnasts aiming for the highest competitive arenas. We foster the physical fitness, mental toughness, confidence, and positive relationship dynamics required to succeed in high school, club regionals/nationals, and collegiate (NCAA Divisions I, II, III) athletic careers.
            </p>
            <div className="pt-2">
              <button
                onClick={() => scrollToId('eval-form')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-lg shadow-pink-600/30"
              >
                Inquire About DP Team Placement
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. SIDE-BY-SIDE PROGRAM COMPARISON MATRIX */}
      <section id="compare-table" className="py-20 bg-gray-50 border-t border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200">
              Side-by-Side Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-3">
              Which Program Fits Your Athlete Best?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Compare training hours, competition scope, flexibility, and routine format across all three programs.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 sm:p-5 font-black uppercase tracking-wider text-xs w-1/4">Feature / Dimension</th>
                    <th className="p-4 sm:p-5 font-black uppercase tracking-wider text-xs text-pink-300 w-1/4">Mighty Minis Pre-Team</th>
                    <th className="p-4 sm:p-5 font-black uppercase tracking-wider text-xs text-pink-400 w-1/4">USA Gymnastics Xcel Program</th>
                    <th className="p-4 sm:p-5 font-black uppercase tracking-wider text-xs text-purple-300 w-1/4">Development Program (DP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-pink-50/20 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-gray-900 bg-gray-50/60">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-gray-700">
                        {row.mightyMinis}
                      </td>
                      <td className="p-4 sm:p-5 text-gray-700 font-medium">
                        {row.xcel}
                      </td>
                      <td className="p-4 sm:p-5 text-gray-700 font-medium">
                        {row.dp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 text-center">
              * Senior coaching staff provides personalized placement recommendations during athlete evaluation.
            </div>
          </div>

        </div>
      </section>

      {/* 8. COACHING EXCELLENCE & SAFETY STANDARDS */}
      <section className="py-16 bg-pink-50/60 border-y border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest block mb-2">
              Our Safety Standards & Coaching Commitment
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Safety, Encouragement & High Character Standards
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Every team coach at RGA is passionate, USA Gymnastics safety-certified, and committed to long-term athletic health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachingCommitment.map((commitment, idx) => (
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

      {/* 9. EMBEDDED TEAM EVALUATION REQUEST FORM */}
      <section id="eval-form" className="relative overflow-hidden py-20 bg-slate-900 text-white scroll-mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: `url('${teamData.heroImage}')` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-pink-400" /> Evaluations Open Year-Round
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Schedule a Team Evaluation
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              If your gymnast is ready for increased training or transferring from another competitive gym, submit an evaluation request below. Our coaches will reach out to schedule an individualized skills assessment.
            </p>
          </div>

          <div className="bg-slate-800/90 rounded-3xl p-8 sm:p-12 border border-slate-700 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white">
                  Evaluation Request Received!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.parentName}</strong>! Your evaluation inquiry has been sent to our coaching team (<strong className="text-pink-400">{gymInfo.enrollmentEmail}</strong>). We will contact you at <strong className="text-pink-400">{formData.phone}</strong> or <strong className="text-pink-400">{formData.email}</strong> within 24–48 business hours to schedule an evaluation for <strong className="text-white">{formData.athleteName}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        parentName: '',
                        email: '',
                        phone: '',
                        athleteName: '',
                        athleteAge: '',
                        currentExperience: 'recreational',
                        programInterest: 'recommendation',
                        notes: ''
                      });
                    }}
                    className="font-bold text-xs px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Parent Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      placeholder="Jane Doe"
                      value={formData.parentName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="303-555-0199"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>

                  {/* Athlete Name & Age */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                        Athlete Name *
                      </label>
                      <input
                        type="text"
                        name="athleteName"
                        required
                        placeholder="Emma Doe"
                        value={formData.athleteName}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                        Athlete Age *
                      </label>
                      <input
                        type="text"
                        name="athleteAge"
                        required
                        placeholder="e.g. 7"
                        value={formData.athleteAge}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                  </div>

                  {/* Current Experience */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Current Gymnastics Experience
                    </label>
                    <select
                      name="currentExperience"
                      value={formData.currentExperience}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    >
                      <option value="recreational">Currently in Recreational Classes</option>
                      <option value="pre-team">Currently in Pre-Team</option>
                      <option value="transfer-xcel">Transferring Competitor (Xcel)</option>
                      <option value="transfer-dp">Transferring Competitor (DP Levels 2–10)</option>
                      <option value="other">Other Athletic / Dance Background</option>
                    </select>
                  </div>

                  {/* Track of Interest */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Program of Interest
                    </label>
                    <select
                      name="programInterest"
                      value={formData.programInterest}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    >
                      <option value="recommendation">Coach Recommendation / Not Sure Yet</option>
                      <option value="mighty-minis">Mighty Minis Pre-Team (Ages 4–7)</option>
                      <option value="xcel">USA Gymnastics Xcel Track (Bronze - Platinum)</option>
                      <option value="dp">Development Program (DP Compulsory or Optional)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    Athlete Goals or Additional Information
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    placeholder="Tell us about your athlete's goals, preferred practice schedule, or previous gym experience..."
                    value={formData.notes}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                {/* Error Message with Mailto fallback */}
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-2">
                    <p className="font-semibold leading-relaxed">{errorMessage}</p>
                    <div>
                      <a
                        href={generateMailtoLink()}
                        className="inline-flex items-center gap-1.5 font-bold text-pink-400 hover:text-pink-300 underline"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Click here to send inquiry directly to {gymInfo.enrollmentEmail}
                      </a>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-pink-600 hover:bg-pink-700 disabled:bg-pink-800 text-white font-extrabold text-sm shadow-xl shadow-pink-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting Evaluation Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Evaluation Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Direct Contact Footer */}
            <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
              <span>Have immediate questions? Contact our front desk directly:</span>
              <div className="flex items-center gap-4">
                <a href={`tel:${gymInfo.phone}`} className="text-pink-400 hover:text-white font-bold flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> {gymInfo.phone}
                </a>
                <a href={`mailto:${gymInfo.email}`} className="text-pink-400 hover:text-white font-bold flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" /> {gymInfo.email}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
