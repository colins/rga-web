import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValuesSection from './components/ValuesSection';
import ScheduleSection from './components/ScheduleSection';
import TuitionPolicySection from './components/TuitionPolicySection';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import EnrollmentModal from './components/EnrollmentModal';
import { themeOptions } from './data/scheduleData';

export default function App() {
  const [activeTheme, setActiveTheme] = useState(themeOptions[0]);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedClassForEnroll, setSelectedClassForEnroll] = useState(null);
  const [isTrialMode, setIsTrialMode] = useState(false);

  const handleOpenEnroll = (classObj = null) => {
    setSelectedClassForEnroll(classObj);
    setIsTrialMode(false);
    setEnrollModalOpen(true);
  };

  const handleOpenTrial = (classObj = null) => {
    setSelectedClassForEnroll(classObj);
    setIsTrialMode(true);
    setEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-pink-500 selection:text-white">
      
      {/* Navigation */}
      <Navbar
        activeTheme={activeTheme}
        onSelectTheme={setActiveTheme}
        onOpenEnroll={() => handleOpenEnroll()}
      />

      {/* Hero Section */}
      <Hero
        activeTheme={activeTheme}
        onOpenEnroll={() => handleOpenEnroll()}
        onOpenTrial={() => handleOpenTrial()}
      />

      {/* Core Values Section */}
      <ValuesSection activeTheme={activeTheme} />

      {/* Class Schedule & Offerings */}
      <ScheduleSection
        activeTheme={activeTheme}
        onSelectClassToEnroll={(classObj) => handleOpenEnroll(classObj)}
      />

      {/* Tuition & Membership Policy */}
      <TuitionPolicySection
        activeTheme={activeTheme}
        onOpenEnroll={() => handleOpenEnroll()}
      />

      {/* Photo Gallery */}
      <PhotoGallery activeTheme={activeTheme} />

      {/* Footer */}
      <Footer onOpenEnroll={() => handleOpenEnroll()} />

      {/* Enrollment & Trial Request Modal */}
      <EnrollmentModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        selectedClass={selectedClassForEnroll}
        isTrialMode={isTrialMode}
      />

    </div>
  );
}
