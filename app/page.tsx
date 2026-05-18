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
  ArrowUpRight,
  Terminal,
  Cpu,
  BarChart3
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
      {/* Upper Header Row */}
      <header className="border-b border-[#1F2937] bg-[#0E131F]/90 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold tracking-wider text-emerald-400">financeSight//TERMINAL_v2.6</span>
        </div>
        <div className="relative w-48 md:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Query workspace..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#161B26] border border-[#2D3748] rounded-lg py-1.5 pl-10 pr-4 text-sm text-white outline-none focus:border-emerald-500/40 transition-all"
          />
        </div>
      </header>

      {/* Main Framework Stack */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Expanded Navigation Deck */}
        <aside className="w-full md:w-64 border-r border-[#1F2937] bg-[#0E131F] p-4 flex flex-col space-y-2">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center space-x-2 p-3 px-4 rounded-xl text-xs tracking-wider font-bold transition-all ${activeTab === "dashboard" ? "bg-[#1F2937] text-emerald-400 border border-emerald-500/20" : "text-gray-400 hover:text-gray-200"}`}
          >
            <Activity className="h-4 w-4" />
            <span>MONITOR</span>
          </button>

          <button 
            onClick={() => setActiveTab("portfolio")}
            className={`flex items-center space-x-2 p-3 px-4 rounded-xl text-xs tracking-wider font-bold transition-all ${activeTab === "portfolio" ? "bg-[#1F2937] text-emerald-400 border border-emerald-500/20" : "text-gray-400 hover:text-gray-200"}`}
          >
            <Layers className="h-4 w-4" />
            <span>ALLOCATION</span>
          </button>

          <button 
            onClick={() => setActiveTab("wire")}
            className={`flex items-center space-x-2 p-3 px-4 rounded-xl text-xs tracking-wider font-bold transition-all ${activeTab === "wire" ? "bg-[#1F2937] text-emerald-400 border border-emerald-500/20" : "text-gray-400 hover:text-gray-200"}`}
          >
            <Terminal className="h-4 w-4" />
            <span>WIRE BROKERAGES</span>
          </button>

          <button 
            onClick={() => setActiveTab("screener")}
            className={`flex items-center space-x-2 p-3 px-4 rounded-xl text-xs tracking-wider font-bold transition-all ${activeTab === "screener" ? "bg-[#1F2937] text-emerald-400 border border-emerald-500/20" : "text-gray-400 hover:text-gray-200"}`}
          >
            <BarChart3 className="h-4 w-4" />
            <span>SCREENER</span>
          </button>

          <button 
            onClick={() => setActiveTab("quant")}
            className={`flex items-center space-x-2 p-3 px-4 rounded-xl text-xs tracking-wider font-bold transition-all ${activeTab === "quant" ? "bg-[#1F2937] text-emerald-400 border border-emerald-500/20" : "text-gray-400 hover:text-gray-200"}`}
          >
            <Cpu className="h-4 w-4" />
            <span>QUANT SUITE</span>
          </button>

          <button 
            onClick={() => setActiveTab("settings")}
            className={`flex items-center space-x-2 p-3 px-4 rounded-xl text-xs tracking-wider font-bold transition-all ${activeTab === "settings" ? "bg-[#1F2937] text-emerald-400 border border-emerald-500/20" : "text-gray-400 hover:text-gray-200"}`}
          >
            <Settings className="h-4 w-4" />
            <span>SYSTEM</span>
          </button>
        </aside>

        {/* Dynamic Context Workspace Container */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Top Ticker Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {markets.map((item) => (
              <div key={item.ticker} className="bg-[#0E131F] border border-[#1F2937] rounded-xl p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-bold">{item.ticker}/USD</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.up ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                    {item.change}
                  </span>
                </div>
                <div className="text-xl font-bold mt-2 text-white">${item.price}</div>
              </div>
            ))}
          </div>

          {/* Router Views */}
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#0E131F] border border-[#1F2937] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-500">NET ASSET INTEGRATION VALUE</span>
                  <div className="text-3xl font-bold mt-1 text-white flex items-center justify-between">
                    <span>$35,562.00</span>
                  </div>
                </div>
                <div className="border-t border-[#1F2937] pt-4 mt-6 text-xs text-emerald-400 font-bold">
                  +14.2% <span className="text-gray-500 font-normal ml-1">vs global quarterly benchmark</span>
                </div>
              </div>
              <div className="bg-[#0E131F] border border-[#1F2937] rounded-xl p-6 text-xs space-y-2">
                <span className="text-xs font-bold text-gray-500 block mb-2">SYSTEM STATUS</span>
                <div className="flex justify-between"><span>CORE_LIQUIDITY</span><span className="text-emerald-400 font-bold">HEALTHY</span></div>
                <div className="flex justify-between"><span>RECONCILIATION</span><span className="text-emerald-400 font-bold">AUTOMATED</span></div>
              </div>
            </div>
          )}

          {activeTab === "portfolio" && (
            <div className="bg-[#0E131F] border border-[#1F2937] rounded-xl overflow-hidden">
              <div className="p-4 border-b border-[#1F2937]"><span className="text-xs font-bold text-gray-500">ASSET METRIC MATRIX</span></div>
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#161B26] text-gray-400 font-bold"><th className="p-4">Asset Class</th><th className="p-4">Ticker</th><th className="p-4 text-right">Valuation</th></tr>
                </thead>
                <tbody className="divide-y divide-[#1F2937]">
                  {holdings.map((asset) => (
                    <tr key={asset.ticker} className="hover:bg-[#161B26]/20"><td className="p-4 text-white font-bold">{asset.name}</td><td className="p-4 text-emerald-400">{asset.ticker}</td><td className="p-4 text-right text-white font-bold">{asset.value}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "wire" && (
            <div className="bg-[#0E131F] border border-[#1F2937] rounded-xl p-6">
              <span className="text-xs font-bold text-gray-500 block mb-4">HOLOGRAPHIC STRATEGIC WIRE FEED</span>
              <div className="space-y-4 text-xs">
                <div className="p-3 bg-[#161B26] rounded-lg border border-[#2D3748]">
                  <span className="text-emerald-400 font-bold">[ALERTS // SYS]</span> Live Neural Alpha Signal Logs initialized. Route channel clear.
                </div>
                <div className="p-3 bg-[#161B26] rounded-lg border border-[#2D3748]">
                  <span className="text-amber-400 font-bold">[MARKET // ROTATION]</span> Systemic Capital Re-Rotation Patterns detected in enterprise infrastructure clusters.
                </div>
              </div>
            </div>
          )}

          {activeTab === "screener" && (
            <div className="bg-[#0E131F] border border-[#1F2937] rounded-xl p-6">
              <span className="text-xs font-bold text-gray-500 block mb-4">ACTIVE REAL-TIME MATRIX SCREENER</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="border border-[#1F2937] p-4 rounded-xl bg-[#161B26]/30">
                  <div className="text-gray-400 font-bold">NVDA // CORE CONFIDENCE</div>
                  <div className="text-2xl font-bold text-white mt-1">94%</div>
                </div>
                <div className="border border-[#1F2937] p-4 rounded-xl bg-[#161B26]/30">
                  <div className="text-gray-400 font-bold">ALPHA ALIGNMENT METRIC</div>
                  <div className="text-2xl font-bold text-emerald-400 mt-1">OPTIMIZED</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "quant" && (
            <div className="bg-[#0E131F] border border-[#1F2937] rounded-xl p-6">
              <span className="text-xs font-bold text-gray-500 block mb-4">REUSABLE FISCAL INTEGRITY GAUGE</span>
              <div className="bg-[#161B26] p-4 rounded-xl border border-[#2D3748] space-y-3 text-xs">
                <div className="flex justify-between"><span>AGGREGATED ASSET SAFETY RATIO</span><span className="text-emerald-400 font-bold">100 / 100</span></div>
                <div className="h-2 bg-[#0B0F17] rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-full" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-[#0E131F] border border-[#1F2937] rounded-xl p-6 text-xs">
              <span className="text-xs font-bold text-gray-500 block mb-2">SYSTEM METRICS</span>
              <div className="bg-[#161B26] p-4 rounded-lg border border-[#2D3748] text-gray-400">
                &gt; DEPLOYMENT_STATUS: PASSING<br />
                &gt; ROUTING_ENGINE: NEXT_JS_APP_ROUTER
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
          }
