import React, { useState } from 'react';
import { Calendar, Dumbbell, Utensils, Pill } from 'lucide-react';
import { DaySelector } from './components/DaySelector';
import { PlanCard } from './components/PlanCard';
import { workoutPlans, mealPlans, supplements } from './data/fitnessData';

function App() {
  const [selectedDay, setSelectedDay] = useState<string>('lunedi');
  const days = Object.keys(workoutPlans);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          <Calendar className="w-8 h-8" />
          Pianificatore Fitness
        </h1>

        <DaySelector
          selectedDay={selectedDay}
          onDaySelect={setSelectedDay}
          days={days}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <PlanCard
            title="Piano Allenamento"
            items={workoutPlans[selectedDay as keyof typeof workoutPlans]}
            icon={Dumbbell}
          />
          <PlanCard
            title="Piano Alimentare"
            items={mealPlans[selectedDay as keyof typeof mealPlans]}
            icon={Utensils}
          />
        </div>

        <div className="mt-6">
          <PlanCard
            title="Integratori Giornalieri"
            items={supplements}
            icon={Pill}
          />
        </div>
      </div>
    </div>
  );
}

export default App;