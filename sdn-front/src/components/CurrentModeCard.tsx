import React from 'react';
import { ModeConfig } from '../types';

interface CurrentModeCardProps {
  config: ModeConfig;
}

export const CurrentModeCard: React.FC<CurrentModeCardProps> = ({ config }) => {
  const Icon = config.icon;
  
  return (
    <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">現在のモード</h3>
        <Icon className="w-6 h-6" />
      </div>
      <div className={`${config.color} text-white px-4 py-2 rounded-lg text-center font-bold mb-2`}>
        {config.name}
      </div>
      <p className="text-sm text-gray-400">{config.desc}</p>
    </div>
  );
};
