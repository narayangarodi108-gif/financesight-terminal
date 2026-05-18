"use client";

import React, { useState } from 'react';
import { 
  TrendingUp, TrendingDown, BarChart2, 
  Layers, Settings, Search, RefreshCw, ArrowUpRight 
} from 'lucide-react';

export default function FinanceSightTerminal() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const markets = [
    { ticker: "SPY", price: "522.45", change: "+0.85%", up: true },
    { ticker: "QQQ", price: "443.20", change: "+1.24%", up: true },
    { ticker: "IWM", price: "201.10", change: "-0.32%", up: false },
    { ticker: "BTC", price: "66,420", change: "+4.12%", up: true }
  ];

  const holdings = [
    { name: "NVIDIA Corp", ticker: "NVDA", allocation: "35%", value: "$12,450.00", return: "+112.4%" },
    { name: "Apple Inc", ticker: "AAPL", allocation: "25%", value: "$8,890.00", return: "-2.1%" },
    { name: "Microsoft Corp", ticker: "MSFT", allocation: "20%", value: "$7,110.00", return: "+14.8%" },
    { name: "Cash Assets", ticker: "USD", allocation: "20%", value: "$7,112.00", return: "0.0%" }
  ];

  return (
    <div className="min-h-screen bg-[#010409] text-gray-100 font-mono flex flex-col antialiased">
      {/* Upper Navigation Terminal Row */}
      <header className="border-b border-[#21262d] bg-[#0d1117] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-bold tracking-wider text-emerald-400">financeSight//TERMINAL_v2.6</span>
        </div>
        
        {/* Search Command input */}
        <div className="relative w-64 hidden md:block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search assets, macros..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#010409] border border-[#21262d] rounded px-9 py-1.5 text-xs focus:outline-none focus:border-emerald-500 text-gray-300"
          />
        </div>
      </header>

      {/* Main Framework Dashboard Grid */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Control Sidebar */}
        <nav className="w-full md:w-64 border-r border-[#21262d] bg-[#0d1117] p-4 flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-1">
          {[
            { id: 'dashboard', label: 'MONITOR', icon: BarChart2 },
            { id: 'portfolio', label: 'ALLOCATION', icon: Layers },
            { id: 'settings', label: 'SYSTEM', icon: Settings }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-1 md:flex-initial flex items-center space-x-3 px-4 py-3 rounded text-xs tracking-wider transition-colors ${
                  activeTab === item.id 
                    ? 'bg-[#1f242c] text-emerald-400 border border-[#30363d]' 
                    : 'text-gray-400 hover:bg-[#161b22] hover:text-gray-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-bold">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Central Terminal Control Feed */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Realtime Asset Monitor Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {markets.map((m) => (
              <div key={m.ticker} className="bg-[#0d1117] border border-[#21262d] rounded p-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-[10px] tracking-widest">{m.ticker}/USD</p>
                  <p className="text-lg font-bold mt-1 tracking-tight">${m.price}</p>
                </div>
                <div className={`flex items-center space-x-1 text-xs px-2 py-0.5 rounded ${
                  m.up ? 'bg-emerald-950/50 text-emerald-400' : 'bg-rose-950/50 text-rose-400'
                }`}>
                  {m.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  <span className="font-bold text-[10px]">{m.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Conditional View Router Workspace */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Matrix Metric Card */}
              <div className="lg:col-span-2 bg-[#0d1117] border border-[#21262d] rounded p-6 flex flex-col justify-between min-h-[220px]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-gray-400">NET ASSET INTEGRATION VALUE</h3>
                    <h2 className="text-3xl font-bold tracking-tight mt-2 text-white">$35,562.00</h2>
                  </div>
                  <div className="px-3 py-1 bg-[#161b22] border border-[#21262d] rounded flex items-center justify-center">
                    <span className="text-base font-bold text-emerald-400 font-sans">$</span>
                  </div>
                </div>
                <div className="border-t border-[#21262d] pt-4 mt-6 flex justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-400 font-bold flex items-center">
                      +14.2% <ArrowUpRight className="h-3 w-3 ml-0.5" />
                    </span>
                    <span>vs global quarterly benchmark</span>
                  </div>
                  <RefreshCw className="h-3 w-3 text-gray-500 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
              </div>

              {/* Quick Status Terminal Box */}
              <div className="bg-[#0d1117] border border-[#21262d] rounded p-6 space-y-4">
                <h3 className="text-xs font-bold tracking-widest text-gray-400">CORE LOG STATS</h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between border-b border-[#161b22] pb-2">
                    <span className="text-gray-500">SYSTEM_LIQUIDITY</span>
                    <span className="text-emerald-400 font-bold">HEALTHY [84%]</span>
                  </div>
                  <div className="flex justify-between border-b border-[#161b22] pb-2">
                    <span className="text-gray-500">RISK_FACTOR_INDEX</span>
                    <span className="text-amber-400 font-bold">OPTIMIZED_LOW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">DATA_RECONCILIATION</span>
                    <span className="text-gray-300">AUTOMATED_SYNC</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className="bg-[#0d1117] border border-[#21262d] rounded overflow-hidden">
              <div className="px-6 py-4 border-b border-[#21262d]">
                <h3 className="text-xs font-bold tracking-widest text-gray-400">COMPREHENSIVE PORTFOLIO WEIGHT MATRIX</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#21262d] bg-[#161b22] text-gray-400 font-bold text-[10px] tracking-widest">
                      <th className="p-4">ASSET CLASS NAME</th>
                      <th className="p-4">TICKER</th>
                      <th className="p-4">WEIGHT</th>
                      <th className="p-4">TOTAL POSITION VALUE</th>
                      <th className="p-4 text-right">NET UNREALIZED YIELD</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#21262d]">
                    {holdings.map((h) => (
                      <tr key={h.ticker} className="hover:bg-[#161b22]/40 transition-colors">
                        <td className="p-4 font-bold text-white">{h.name}</td>
                        <td className="p-4 text-emerald-400 font-bold">{h.ticker}</td>
                        <td className="p-4 text-gray-300">{h.allocation}</td>
                        <td className="p-4 text-gray-300">{h.value}</td>
                        <td className={`p-4 text-right font-bold ${h.return.startsWith('+') ? 'text-emerald-400' : h.return.startsWith('-') ? 'text-rose-400' : 'text-gray-400'}`}>
                          {h.return}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-[#0d1117] border border-[#21262d] rounded p-6 space-y-4 max-w-xl">
              <h3 className="text-xs font-bold tracking-widest text-gray-400">TERMINAL HARDWARE ENVIRONMENT</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                This local node execution layer is engineered as a highly-optimized full-stack Next.js deployment. Design frames utilize client-state processing hooks via React structures paired with utility engines from Tailwind CSS and Lucide primitives.
              </p>
              <div className="p-4 bg-[#010409] border border-[#21262d] rounded text-[11px] text-gray-500 space-y-1">
                <p>CONNECTION_NODE: REGIONAL_EDGE_SERVERS</p>
                <p>COMPILER: NEXT_FRAMEWORK_ENGINE_V14</p>
                <p>STYLE_INJECTOR: TAILWIND_POST_PROCESSING</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
              }
