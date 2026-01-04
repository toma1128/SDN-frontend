import React from 'react';

interface StatusCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ElementType;
}

export const StatusCard: React.FC<StatusCardProps> = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon 
}) => {
  return (
    <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-4xl font-bold mb-2">{value}</div>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
};