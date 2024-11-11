import React from 'react';

interface DaySelectorProps {
  selectedDay: string;
  onDaySelect: (day: string) => void;
  days: string[];
}

export function DaySelector({ selectedDay, onDaySelect, days }: DaySelectorProps) {
  const translateDay = (day: string) => {
    const translations: { [key: string]: string } = {
      lunedi: 'Lunedì',
      martedi: 'Martedì',
      mercoledi: 'Mercoledì',
      giovedi: 'Giovedì',
      venerdi: 'Venerdì',
      sabato: 'Sabato',
      domenica: 'Domenica'
    };
    return translations[day] || day;
  };

  return (
    <div className="grid grid-cols-7 gap-2 mb-8">
      {days.map((day) => (
        <button
          key={day}
          onClick={() => onDaySelect(day)}
          className={`p-3 rounded-lg text-sm font-medium transition-colors
            ${selectedDay === day 
              ? 'bg-blue-500 text-white' 
              : 'bg-white text-gray-600 hover:bg-gray-100'}`}
        >
          {translateDay(day)}
        </button>
      ))}
    </div>
  );
}