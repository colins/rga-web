import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnrollmentModal from './components/EnrollmentModal';
import HomePage from './pages/HomePage';
import ClassesPage from './pages/ClassesPage';
import EventsPage from './pages/EventsPage';
import BirthdayPartiesPage from './pages/BirthdayPartiesPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import { themeOptions } from './data/scheduleData';

function normalizePath(path) {
  if (!path || path === '/') return '/';
  const clean = path.replace(/\/+$/, '');
  return clean.startsWith('/') ? clean : `/${clean}`;
}

export default function App() {
  const [activeTheme, setActiveTheme] = useState(themeOptions[0]);
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedClassForEnroll, setSelectedClassForEnroll] = useState(null);
  const [isTrialMode, setIsTrialMode] = useState(false);

  // Sync with browser back/forward history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    const normalized = normalizePath(path);
    setCurrentPath(normalized);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

  // Render current view
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/classes':
        return (
          <ClassesPage
            activeTheme={activeTheme}
            onSelectClassToEnroll={handleOpenEnroll}
            onOpenEnroll={handleOpenEnroll}
          />
        );
      case '/events':
        return <EventsPage activeTheme={activeTheme} />;
      case '/birthday-parties':
        return <BirthdayPartiesPage activeTheme={activeTheme} />;
      case '/team':
        return <TeamPage activeTheme={activeTheme} onOpenEnroll={handleOpenEnroll} />;
      case '/about':
        return <AboutPage activeTheme={activeTheme} />;
      case '/':
      default:
        return (
          <HomePage
            activeTheme={activeTheme}
            onNavigate={navigate}
            onOpenEnroll={handleOpenEnroll}
            onOpenTrial={handleOpenTrial}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-pink-500 selection:text-white flex flex-col justify-between">
      
      {/* Header Navigation */}
      <Navbar
        activeTheme={activeTheme}
        onSelectTheme={setActiveTheme}
        onOpenEnroll={() => handleOpenEnroll()}
        currentPath={currentPath}
        onNavigate={navigate}
      />

      {/* Main Page View */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer
        onOpenEnroll={() => handleOpenEnroll()}
        onNavigate={navigate}
      />

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
