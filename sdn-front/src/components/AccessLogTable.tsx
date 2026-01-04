import React from 'react';
import { Search } from 'lucide-react';
import { Log } from '../types';

interface AccessLogTableProps {
  logs: Log[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const AccessLogTable: React.FC<AccessLogTableProps> = ({
  logs,
  searchTerm,
  onSearchChange,
}) => {
  const filteredLogs = logs.filter(log => 
    log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.action.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">アクセス監視ログ</h2>
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="bg-neutral-900 border border-neutral-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-teal-500 text-white"
            placeholder="検索..."
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-700">
              <th className="text-left py-3 px-4 text-gray-400 font-semibold">時刻</th>
              <th className="text-left py-3 px-4 text-gray-400 font-semibold">ユーザー</th>
              <th className="text-left py-3 px-4 text-gray-400 font-semibold">アクション</th>
              <th className="text-left py-3 px-4 text-gray-400 font-semibold">帯域幅</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log) => (
              <tr 
                key={log.id} 
                className="border-b border-neutral-700/50 hover:bg-neutral-700/30 transition-colors"
              >
                <td className="py-3 px-4 text-sm font-mono text-gray-300">{log.time}</td>
                <td className="py-3 px-4 text-white">{log.user}</td>
                <td className="py-3 px-4 text-white">{log.action}</td>
                <td className="py-3 px-4 text-teal-400 font-semibold">{log.bandwidth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};