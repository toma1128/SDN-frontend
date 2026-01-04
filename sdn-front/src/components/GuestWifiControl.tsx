import React from 'react';
import { Shield } from 'lucide-react';

interface GuestWifiControlProps {
  enabled: boolean;
  onToggle: () => void;
}

export const GuestWifiControl: React.FC<GuestWifiControlProps> = ({ 
  enabled, 
  onToggle 
}) => {
  return (
    <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 shadow-xl mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-lime-400" />
          <div>
            <h2 className="text-xl font-bold">ゲストWi-Fi</h2>
            <p className="text-sm text-gray-400">訪問者用の隔離ネットワーク</p>
          </div>
        </div>
        <button
          onClick={onToggle}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            enabled
              ? 'bg-lime-600 hover:bg-lime-700 text-white'
              : 'bg-neutral-600 hover:bg-neutral-500 text-gray-300'
          }`}
        >
          {enabled ? 'ON' : 'OFF'}
        </button>
      </div>
      {enabled && (
        <div className="mt-4 p-4 bg-neutral-900 rounded-lg border border-lime-500/50">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">SSID:</span>
              <span className="ml-2 font-mono font-semibold text-lime-400">
                Guest_Network_5G
              </span>
            </div>
            <div>
              <span className="text-gray-400">パスワード:</span>
              <span className="ml-2 font-mono font-semibold text-lime-400">
                guest2025
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};