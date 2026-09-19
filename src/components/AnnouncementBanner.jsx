import React, { useState, useEffect } from 'react';
import { AlertTriangle, X, ArrowRight, Bell } from 'lucide-react';
import initialAnnouncement from '../data/announcement.json';

/**
 * Checks whether an announcement object is currently valid and not expired.
 */
function isAnnouncementActive(data) {
  if (!data || !data.enabled) return false;
  if (!data.text || !data.text.trim()) return false;

  if (data.expiresAt) {
    const expiryTimestamp = Date.parse(data.expiresAt);
    if (!isNaN(expiryTimestamp) && Date.now() >= expiryTimestamp) {
      return false; // Expired
    }
  }

  return true;
}

export default function AnnouncementBanner({ onNavigate }) {
  const [announcement, setAnnouncement] = useState(initialAnnouncement);
  const [isActive, setIsActive] = useState(() => isAnnouncementActive(initialAnnouncement));
  const [isDismissed, setIsDismissed] = useState(false);

  // Poll for expiration every 20 seconds so it automatically disappears at the 12-hour mark
  useEffect(() => {
    const checkExpiration = () => {
      setIsActive(isAnnouncementActive(announcement));
    };

    checkExpiration();
    const timer = setInterval(checkExpiration, 20000);
    return () => clearInterval(timer);
  }, [announcement]);

  // Fetch updated announcement from GitHub (or local server) so edits on GitHub show up without redeploying
  useEffect(() => {
    let isMounted = true;
    const githubRawUrl = 'https://raw.githubusercontent.com/colins/rga-web/main/src/data/announcement.json';

    fetch(`${githubRawUrl}?_cb=${Date.now()}`)
      .then((res) => {
        if (res.ok) return res.json();
        return fetch(`/announcement.json?_cb=${Date.now()}`).then((r) => (r.ok ? r.json() : null));
      })
      .then((data) => {
        if (isMounted && data && typeof data === 'object' && data.text) {
          setAnnouncement(data);
          setIsActive(isAnnouncementActive(data));
        }
      })
      .catch(() => {
        // Silently keep the bundled default
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isActive || isDismissed) {
    return null;
  }

  const handleClick = (e) => {
    if (announcement.link) {
      e.preventDefault();
      if (announcement.link.startsWith('http')) {
        window.open(announcement.link, '_blank', 'noopener,noreferrer');
      } else if (onNavigate) {
        onNavigate(announcement.link);
      }
    }
  };

  // Build repeated items for an ultra-wide seamless marquee loop
  const repeatCount = 5;
  const items = Array.from({ length: repeatCount }, (_, i) => i);

  return (
    <div
      role="alert"
      aria-live="polite"
      className="relative bg-gradient-to-r from-rose-900 via-rose-700 to-rose-900 text-white border-b border-rose-500/40 shadow-md overflow-hidden banner-marquee-container select-none group"
    >
      <div className="flex items-center h-11 sm:h-12 relative">
        {/* Stationary Left Alert Badge */}
        <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center pl-3 sm:pl-4 pr-3 sm:pr-4 bg-gradient-to-r from-rose-950 via-rose-900 to-transparent">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white text-rose-900 font-extrabold text-[10px] sm:text-xs tracking-wider uppercase shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600 animate-pulse shrink-0" />
            <span className="whitespace-nowrap">{announcement.badge || 'Notice'}</span>
          </span>
        </div>

        {/* Continuous Scrolling Marquee Ticker */}
        <div className="overflow-hidden whitespace-nowrap w-full flex items-center pl-24 sm:pl-32 pr-10">
          <div className="animate-marquee-scroll flex items-center cursor-pointer" onClick={handleClick}>
            {/* First Set */}
            <div className="flex items-center">
              {items.map((idx) => (
                <div key={`set1-${idx}`} className="flex items-center space-x-4 px-6 sm:px-8">
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-white drop-shadow-sm flex items-center gap-2">
                    {announcement.text}
                    {announcement.link && (
                      <span className="inline-flex items-center text-[11px] underline underline-offset-2 opacity-90 group-hover:opacity-100 font-bold ml-1">
                        View Details <ArrowRight className="w-3 h-3 ml-0.5 inline" />
                      </span>
                    )}
                  </span>
                  <span className="text-rose-300/60 font-bold text-sm select-none" aria-hidden="true">
                    ✦
                  </span>
                </div>
              ))}
            </div>

            {/* Second Duplicate Set for 100% Seamless Infinite Looping */}
            <div className="flex items-center" aria-hidden="true">
              {items.map((idx) => (
                <div key={`set2-${idx}`} className="flex items-center space-x-4 px-6 sm:px-8">
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-white drop-shadow-sm flex items-center gap-2">
                    {announcement.text}
                    {announcement.link && (
                      <span className="inline-flex items-center text-[11px] underline underline-offset-2 opacity-90 group-hover:opacity-100 font-bold ml-1">
                        View Details <ArrowRight className="w-3 h-3 ml-0.5 inline" />
                      </span>
                    )}
                  </span>
                  <span className="text-rose-300/60 font-bold text-sm select-none">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stationary Right Dismiss Button */}
        <div className="absolute right-0 top-0 bottom-0 z-20 flex items-center pr-2 sm:pr-3 pl-3 bg-gradient-to-l from-rose-950 via-rose-900 to-transparent">
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss announcement"
            className="p-1 rounded-md text-rose-200 hover:text-white hover:bg-rose-800/80 transition-colors"
            title="Dismiss announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
