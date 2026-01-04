import { useState } from 'react';
import type { Log } from '../types';

export const useNetworkLogs = () => {
  const [logs] = useState<Log[]>([
    { 
      id: 1, 
      time: '2025-11-28 14:23:45', 
      user: 'デバイスA (192.168.1.100)', 
      action: 'YouTube視聴', 
      bandwidth: '5.2 Mbps' 
    },
    { 
      id: 2, 
      time: '2025-11-28 14:22:10', 
      user: 'デバイスB (192.168.1.101)', 
      action: 'Netflix視聴', 
      bandwidth: '8.1 Mbps' 
    },
    { 
      id: 3, 
      time: '2025-11-28 14:20:33', 
      user: 'デバイスC (192.168.1.102)', 
      action: 'ゲームプレイ', 
      bandwidth: '3.5 Mbps' 
    },
    { 
      id: 4, 
      time: '2025-11-28 14:18:55', 
      user: 'ゲストA (192.168.2.50)', 
      action: 'Webブラウジング', 
      bandwidth: '1.2 Mbps' 
    },
    { 
      id: 5, 
      time: '2025-11-28 14:15:22', 
      user: 'デバイスA (192.168.1.100)', 
      action: 'ファイルダウンロード', 
      bandwidth: '12.3 Mbps' 
    },
  ]);

  return { logs };
};