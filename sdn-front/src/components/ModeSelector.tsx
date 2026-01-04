import React from 'react';
import { Activity, Clock, Zap } from 'lucide-react';
import { NetworkMode } from '../types';

interface ModeSelectorProps {
  mode: NetworkMode;
  onModeChange: (mode: NetworkMode) => void;
  priorityIP: string;
  onPriorityIPChange: (ip: string) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({
  mode,
  onModeChange,
  priorityIP,
  onPriorityIPChange,
}) => {
  return (
    <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 shadow-xl mb-8">
      <h2 className="text-2xl font-bold mb-6">ネットワークモード設定</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          onClick={() => onModeChange('normal')}
          className={`p-4 rounded-xl border-2 transition-all ${
            mode === 'normal'
              ? 'border-teal-500 bg-teal-500/20'
              : 'border-neutral-600 hover:border-neutral-500'
          }`}
        >
          <Activity className="w-8 h-8 mb-2 mx-auto text-teal-400" />
          <div className="font-bold">通常モード</div>
          <div className="text-sm text-gray-400 mt-1">標準設定</div>
        </button>

        <button
          onClick={() => onModeChange('low')}
          className={`p-4 rounded-xl border-2 transition-all ${
            mode === 'low'
              ? 'border-amber-500 bg-amber-500/20'
              : 'border-neutral-600 hover:border-neutral-500'
          }`}
        >
          <Clock className="w-8 h-8 mb-2 mx-auto text-amber-400" />
          <div className="font-bold">低速モード</div>
          <div className="text-sm text-gray-400 mt-1">帯域制限</div>
        </button>

        <button
          onClick={() => onModeChange('game')}
          className={`p-4 rounded-xl border-2 transition-all ${
            mode === 'game'
              ? 'border-red-500 bg-red-500/20'
              : 'border-neutral-600 hover:border-neutral-500'
          }`}
        >
          <Zap className="w-8 h-8 mb-2 mx-auto text-red-400" />
          <div className="font-bold">ゲームモード</div>
          <div className="text-sm text-gray-400 mt-1">優先制御</div>
        </button>
      </div>

      {mode === 'game' && (
        <div className="bg-neutral-900 rounded-lg p-4 border border-red-500/50">
          <label className="block text-sm font-semibold mb-2">優先するIPアドレス</label>
          <input
            type="text"
            value={priorityIP}
            onChange={(e) => onPriorityIPChange(e.target.value)}
            className="w-full bg-neutral-800 border border-neutral-600 rounded px-4 py-2 focus:outline-none focus:border-red-500 text-white"
            placeholder="例: 192.168.1.100"
          />
        </div>
      )}
    </div>
  );
};