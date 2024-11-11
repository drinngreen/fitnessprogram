import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PlanCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
}

export function PlanCard({ title, items, icon: Icon }: PlanCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Icon className="w-5 h-5" />
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600">{item}</li>
        ))}
      </ul>
    </div>
  );
}