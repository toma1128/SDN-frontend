import React, { useState } from 'react';
import { Wifi, Activity, Users } from 'lucide-react';
import type { NetworkMode } from './types';
import { getModeConfig } from './utils/getModeConfig';
import { useNetworkLogs } from './hooks/useNetworkLogs';
import { StatusCard } from './components/StatusCard';
import { CurrentModeCard } from './components/CurrentModeCard';
import { ModeSelector } from './components/ModeSelector';
import { GuestWifiControl } from './components/GuestWifiControl';
import { AccessLogTable } from './components/AccessLogTable';

const App: React.FC = () => {
  const [mode, setMode] = useState<NetworkMode>('normal');
  const [guestWifi, setGuestWifi] = useState<boolean>(false);
  const [priorityIP, setPriorityIP] = useState<string>('192.168.1.100');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const { logs } = useNetworkLogs();
  const currentConfig = getModeConfig(mode);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-neutral-900 text-white p-6">
      <div className="w-full mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Wifi className="w-10 h-10" />
            SDNコントローラー
          </h1>
          <p className="text-gray-400">ネットワーク管理ダッシュボード</p>
        </div>

        {/* ステータスカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <CurrentModeCard config={currentConfig} />
          <StatusCard 
            title="接続デバイス" 
            value={8} 
            subtitle="アクティブな接続" 
            icon={Users} 
          />
          <StatusCard 
            title="総帯域幅" 
            value="32.5" 
            subtitle="Mbps" 
            icon={Activity} 
          />
        </div>

        {/* モード切り替えセクション */}
        <ModeSelector
          mode={mode}
          onModeChange={setMode}
          priorityIP={priorityIP}
          onPriorityIPChange={setPriorityIP}
        />

        {/* ゲストWi-Fi設定 */}
        <GuestWifiControl 
          enabled={guestWifi} 
          onToggle={() => setGuestWifi(!guestWifi)} 
        />

        {/* アクセス監視ログ */}
        <AccessLogTable 
          logs={logs} 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
      </div>
    </div>
  );
};

export default App;