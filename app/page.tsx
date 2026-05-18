"use client";

import React, { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Layers, 
  Settings, 
  Search, 
  RefreshCw, 
  ArrowUpRight 
} from "lucide-react";

export default function FinanceSightTerminal() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const markets = [
    { ticker: "SPY", price: "522.45", change: "+0.85%", up: true },
    { ticker: "QQQ", price: "443.20", change: "+1.24%", up: true },
    { ticker: "IWM", price: "201.10", change: "-0.32%", up: false },
    { ticker: "BTC", price: "66,420", change: "+4.12%", up: true },
  ];

  const holdings = [
    { name: "NVIDIA Corp.", ticker: "NVDA", allocation: "35%", value: "$12,446.80", return: "+112.4%" },
    { name: "Apple Inc.", ticker: "AAPL", allocation: "25%", value: "$8,890.50", return: "+12.7%" },
    { name: "Microsoft Corp.", ticker: "MSFT", allocation: "20%", value: "$7,112.40", return: "+18.2%" },
    { name: "Cash Assets", ticker: "USD", allocation: "20%", value: "$7,112.30", return: "0.0%" },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-gray-100 font-mono flex flex-col antialiased">
      {/* Upper Navigation Terminal Row */}
      <header className="border-b border-[#1F2937] bg-[#0E131F]/90 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold tracking-wider text-emerald-400">financeSight//TERMINAL_v2.6</span>
        </div>
        
        {/* Search Command Input */}
        <div className="relative x-32 hidden md:block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search assets, metrics..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#161B26] border border-[#2D3748] rounded-lg py-1.5 pl-10 pr-4 text-sm text-white outline-none focus:border-emerald-500/40 transition-all shadow-inner"
          />
        </div>
      </header>

      {/* Main Framework Dashboard Grid */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Control Navigation Deck */}
        <aside className="w-full md:w-64 border-r border-[#1F2937] bg-[#0E131F] p-4 flex flex-col space-y-2">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center space-x-2 p-3 px-4 rounded-xl text-xs tracking-wider font-bold transition-all ${activeTab === "dashboard" ? "bg-[#1F2937] text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]" : "text-gray-400 hover:text-gray-200"}`}
          >
            <Activity className="h-4 w-4" />
            <span>MONITOR</span>
          </button>

          <button 
            onClick={() => setActiveTab("portfolio")}
            className={`flex items-center space-x-2 p-3 px-4 rounded-xl text-xs tracking-wider font-bold transition-all ${activeTab === "portfolio" ? "bg-[#1F2937] text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]" : "text-gray-400 hover:text-gray-200"}`}
          >
            <Layers className="h-4 w-4" />
            <span>ALLOCATION</span>
          </button>

          <button 
            onClick={() => setActiveTab("settings")}
            className={`flex items-center space-x-2 p-3 px-4 rounded-xl text-xs tracking-wider font-bold transition-all ${activeTab === "settings" ? "bg-[#1F2937] text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]" : "text-gray-400 hover:text-gray-200"}`}
          >
            <Settings className="h-4 w-4" />
            <span>SYSTEM</span>
          </button>
        </aside>

        {/* Dynamic Context Render Framework */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Top Ticker Row Block */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {markets.map((item) => (
              <div key={item.ticker} className="bg-[#0E131F] border border-[#1F2937] rounded-xl p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 tracking-wider font-bold">{item.ticker}/USD</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded flex items-center space-x-1 ${item.up ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                    {item.up ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                    {item.change}
                  </span>
                </div>
                <div className="text-xl font-bold tracking-tight mt-2 text-white">${item.price}</div>
              </div>
            ))}
          </div>

          {/* Conditional View Router Workspace */}
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Net Asset Core Matrix */}
              <div className="lg:col-span-2 bg-[#0E131F] border border-[#1F2937] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold tracking-wider text-gray-500">NET ASSET INTEGRATION VALUE</span>
                  <div className="text-3xl font-bold tracking-tight mt-1 text-white flex items-center justify-between">
                    <span>$35,562.00</span>
                    <div className="bg-[#161B26] p-2 rounded-lg border border-[#2D3748]">
                      <span className="text-emerald-400 text-sm">$</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#1F2937] pt-4 mt-6 flex justify-between items-center text-xs">
                  <span className="text-emerald-400 font-bold flex items-center">
                    +14.2% <ArrowUpRight className="h-3 w-3 ml-1" />
                    <span className="text-gray-500 ml-2 font-normal">vs global quarterly benchmark</span>
                  </span>
                  <RefreshCw className="h-4 w-4 text-gray-500 animate-spin" style={{ animationDuration: '6s' }} />
                </div>
              </div>

              {/* Core Status Terminal Box */}
              <div className="bg-[#0E131F] border border-[#1F2937] rounded-xl p-6">
                <span className="text-xs font-bold tracking-wider text-gray-500">CORE LOG STATS</span>
                <div className="space-y-3 mt-4 text-xs">
                  <div className="flex justify-between border-b border-[#161B26] pb-2">
                    <span className="text-gray-400">SYSTEM_LIQUIDITY</span>
                    <span className="text-emerald-400 font-bold">HEALTHY [84%]</span>
                  </div>
                  <div className="flex justify-between border-b border-[#161B26] pb-2">
                    <span className="text-gray-400">RISK_FACTOR_INDEX</span>
                    <span className="text-amber-400 font-bold">OPTIMIZED_LOW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">DATA_RECONCILIATION</span>
                    <span className="text-emerald-400 font-bold">AUTOMATED_SYNC</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "portfolio" && (
            <div className="bg-[#0E131F] border border-[#1F2937] rounded-xl overflow-hidden shadow-xl">
              <div className="p-6 border-b border-[#1F2937]">
                <span className="text-xs font-bold tracking-wider text-gray-500">COMPREHENSIVE PORTFOLIO ASSET MATRIX</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#1F2937] bg-[#161B26] text-gray-400 font-bold uppercase tracking-wider">
                      <th className="p-4 font-mono">Asset Class Entity</th>
                      <th className="p-4 font-mono">Ticker</th>
                      <th className="p-4 font-mono">Capital Allocation Weight</th>
                      <th className="p-4 font-mono text-right">Net Valuation Matrix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1F2937]">
                    {holdings.map((asset) => (
                      <tr key={asset.ticker} className="hover:bg-[#161B26]/30 transition-colors">
                        <td className="p-4 font-bold text-white">{asset.name}</td>
                        <td className="p-4 font-mono text-emerald-400 font-bold">{asset.ticker}</td>
                        <td className="p-4 font-mono text-gray-300">{asset.allocation}</td>
                        <td className="p-4 font-mono text-right font-bold text-white">{asset.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-[#0E131F] border border-[#1F2937] rounded-xl p-6 max-w-xl">
              <span className="text-xs font-bold tracking-wider text-gray-500">SYSTEM PRODUCTION BACKEND STATUS</span>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed font-mono">
                This local node execution layer is engineered as a highly-optimized full-stack Next.js deployment. Basic parameters loaded successfully.
              </p>
              <div className="mt-4 p-4 bg-[#161B26] rounded-xl border border-[#2D3748] text-[11px] text-gray-400 space-y-1">
                <div>&gt; ASSET_DATABASE: ONLINE_REPLICA_SYNCED</div>
                <div>&gt; FRAMEWORK_ENGINE: NEXTJS_14_APP_ROUTER</div>
                <div>&gt; TAILWIND_COMPILER: PASSING</div>
                <div>&gt; STYLESHEET_INJECTION_PROCESS: LIVE</div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
                }
