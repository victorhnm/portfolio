import React from 'react';
import { Stat } from '../../types/portfolio';

interface StatCardProps {
  stat: Stat;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 text-center hover:border-emerald-500/50 transition-all duration-300">
      <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
      <div className="text-gray-300 text-sm">{stat.label}</div>
    </div>
  );
};