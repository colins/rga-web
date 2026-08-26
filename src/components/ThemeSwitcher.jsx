import React from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { themeOptions } from '../data/scheduleData';

export default function ThemeSwitcher({ activeTheme, onSelectTheme }) {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200">
      <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
        <div className="flex items-center space-x-2 text-gray-800">
          <Palette className="w-5 h-5 text-pink-600" />
          <span className="font-bold text-sm uppercase tracking-wider">Website Theme Selector</span>
        </div>
        <span className="text-xs bg-pink-100 text-pink-800 font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> 3 Styles Available
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {themeOptions.map((t) => {
          const isSelected = activeTheme.id === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onSelectTheme(t)}
              className={`relative text-left p-3.5 rounded-xl transition-all duration-200 border-2 ${
                isSelected
                  ? 'border-pink-600 bg-pink-50/50 shadow-md ring-2 ring-pink-500/20'
                  : 'border-gray-200 hover:border-pink-300 hover:bg-gray-50'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 bg-pink-600 text-white rounded-full p-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
              )}
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-3.5 h-3.5 rounded-full inline-block shadow-sm"
                  style={{ backgroundColor: t.primaryColor }}
                />
                <span className="font-bold text-xs text-gray-900 leading-tight">
                  {t.name}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 leading-snug">
                {t.subtitle}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
