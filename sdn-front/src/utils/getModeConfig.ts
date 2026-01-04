import { Activity, Clock, Zap } from 'lucide-react';
import type { NetworkMode, ModeConfig } from '../types';

export const getModeConfig = (mode: NetworkMode): ModeConfig => {
  switch(mode) {
    case 'low':
      return { 
        name: '低速モード', 
        color: 'bg-amber-600', 
        icon: Clock, 
        desc: '帯域幅を制限して省エネ運用' 
      };
    case 'game':
      return { 
        name: 'ゲームモード', 
        color: 'bg-red-600', 
        icon: Zap, 
        desc: '特定IPの通信を優先' 
      };
    default:
      return { 
        name: '通常モード', 
        color: 'bg-teal-600', 
        icon: Activity, 
        desc: '標準的な帯域幅で運用' 
      };
  }
};