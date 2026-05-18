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
  BarChart3,
  Bell,
  User,
  LogOut,
  Wallet,
  Coins,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function FinanceSightTerminal() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const markets = [
    { ticker: "SPY/USD", price: "522.45", change: "+0.85%", up: true },
    { ticker: "QQQ/USD", price: "443.20", change: "+1.24%", up: true },
    { ticker: "IWM/USD", price: "201.10", change: "-0.32%", up: false },
    { ticker: "BTC/USD", price: "66,420", change: "+4.12%", up: true },
  ];

  const holdings = [
    { name: "NVIDIA Corp.", ticker: "NVDA", allocation: "35%", value: "$12,446.80", return: "+112.4%", trend: [20, 40, 35, 50, 75, 80, 94] },
    { name: "Apple Inc.", ticker: "AAPL", allocation: "25%", value: "$8,890.50", return: "+12.7%", trend: [30, 25, 35, 45, 40, 55, 60] },
    { name: "Microsoft Corp.", ticker: "MSFT", allocation: "20%", value: "$7,112.40", return: "+18.2%", trend: [50, 48, 55, 62, 58, 65, 70] },
    { name: "Cash Assets", ticker: "USD", allocation: "20%", value: "$7,112.30", return: "0.0%", trend: [40, 40, 40, 40, 40, 40, 40] },
  ];

  return (
    <div className="min-h-screen bg-[#0C0D12] text-gray-200 font-sans flex flex-col antialiased selection:bg-[#2EE56B]/30">
      
      {/* Premium Sleek Profile Header */}
      <header className="bg-[#14161F] px-6 py-4 flex items-center justify-between border-b border-[#1E2230]/40 shadow-xl">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-[#2EE56B] to-emerald-500 p-[2px] shadow-lg shadow-[#2EE56B]/10">
              <div className="h-full w-full rounded-full bg-[#14161F] flex items-center justify-between overflow-hidden">
                <User className="h-5 w-5 text-gray-400 mx-auto" />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#2EE56B] border-2 border-[#14161F]" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide">Pranav</h2>
            <p className="text-[11px] text-gray-400 font-medium">Joined 4 months ago</p>
          </div>
        </div>

        {/* Dynamic Search Box and Action Hub */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search assets, trends..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1D29] border border-[#252A3C] rounded-xl py-2 pl-10 pr-4 text-xs text-white outline-none focus:border-[#2EE56B]/50 transition-all font-medium"
            />
          </div>
          <button className="p-2.5 rounded-xl bg-[#1A1D29] border border-[#252A3C] text-gray-400 hover:text-white transition-all">
            <Bell className="h-4 w-4" />
          </button>
          <button className="p-2.5 rounded-xl bg-[#1A1D29] border border-[#252A3C] text-rose-400 hover:bg-rose-500/10 transition-all">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Main Layout Body */}
      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* Curved Matte Left Sidebar */}
        <aside className="w-full lg:w-72 bg-[#14161F] p-5 flex flex-col space-y-2 border-r border-[#1E2230]/30 shadow-2xl">
          <div className="px-3 py-2 mb-4">
            <h1 className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-[#2EE56B] to-emerald-400 bg-clip-text text-transparent">
              financeSight
            </h1>
          </div>

          {[
            { id: "dashboard", label: "Overview", icon: Activity },
            { id: "portfolio", label: "Holdings", icon: Layers },
            { id: "wire", label: "Wire Brokerages", icon: Terminal },
            { id: "screener", label: "Screener", icon: BarChart3 },
            { id: "quant", label: "Quant Suite", icon: Cpu },
            { id: "settings", label: "System", icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-3.5 p-3.5 px-5 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive 
                    ? "bg-[#1A1D29] text-[#2EE56B] border border-[#2EE56B]/20 shadow-lg shadow-[#2EE56B]/5" 
                    : "text-gray-400 hover:text-gray-200 hover:bg-[#1A1D29]/40"
                }`}
              >
                <Icon className={`h-4.5 w-4.5 ${isActive ? "text-[#2EE56B]" : "text-gray-400"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Primary Content Desk */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto space-y-8">
          
          {/* Section Dynamic Heading Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white tracking-wide capitalize">
              {activeTab === "dashboard" ? "System Workspace Overview" : `${activeTab} Control Center`}
            </h3>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#2EE56B] bg-[#2EE56B]/10 px-3 py-1 rounded-full border border-[#2EE56B]/20">
              Live Feed Engine
            </span>
          </div>

          {/* Top Ticker Micro-Cards */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
            {markets.map((item) => (
              <div key={item.ticker} className="bg-[#14161F] border border-[#1E2230]/60 rounded-2xl p-5 shadow-lg relative overflow-hidden group hover:border-[#2EE56B]/30 transition-all">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-gray-400 tracking-wide">{item.ticker}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    item.up 
                      ? "bg-[#2EE56B]/10 text-[#2EE56B] border-[#2EE56B]/20" 
                      : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                  }`}>
                    {item.change}
                  </span>
                </div>
                <div className="text-xl font-bold tracking-tight text-white mt-3">${item.price}</div>
              </div>
            ))}
          </div>

          {/* Main Dashboard Panel Layer */}
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              
              {/* Massive Net Asset Card */}
              <div className="xl:col-span-2 bg-[#14161F] border border-[#1E2230]/60 rounded-3xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <Wallet className="h-32 w-32 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-gray-400 tracking-wider">
                    <Coins className="h-4 w-4 text-[#2EE56B]" />
                    <span>NET INTEGRATION ASSET VALUE</span>
                  </div>
                  <div className="text-4xl font-extrabold mt-3 text-white tracking-tight flex items-center justify-between">
                    <span>$35,562.00</span>
                    <div className="bg-[#1A1D29] border border-[#252A3C] p-3 rounded-2xl shadow-inner shadow-black/20">
                      <Zap className="h-5 w-5 text-[#2EE56B]" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#1E2230]/60 pt-5 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span className="text-[#2EE56B] font-bold flex items-center bg-[#2EE56B]/5 px-3 py-1 rounded-full border border-[#2EE56B]/10 w-fit">
                    +14.2% <ArrowUpRight className="h-3 w-3 ml-1" />
                    <span className="text-gray-400 font-medium ml-2">vs global quarterly benchmark</span>
                  </span>
                  <div className="flex items-center space-x-2 text-gray-400 font-medium">
                    <RefreshCw className="h-3.5 w-3.5 text-[#2EE56B] animate-spin" style={{ animationDuration: '8s' }} />
                    <span>Real-time processing active</span>
                  </div>
                </div>
              </div>

              {/* System Module Summary Panel */}
              <div className="bg-[#14161F] border border-[#1E2230]/60 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-gray-400 tracking-wider mb-5">
                    <ShieldCheck className="h-4 w-4 text-[#2EE56B]" />
                    <span>SYSTEM ARCHITECTURE LOGS</span>
                  </div>
                  <div className="space-y-3.5 text-xs font-medium">
                    {[
                      { label: "SYSTEM_LIQUIDITY", val: "HEALTHY [84%]", color: "text-[#2EE56B] bg-[#2EE56B]/10 border-[#2EE56B]/20" },
                      { label: "RISK_FACTOR_INDEX", val: "OPTIMIZED_LOW", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
                      { label: "DATA_RECONCILIATION", val: "AUTOMATED_SYNC", color: "text-[#2EE56B] bg-[#2EE56B]/10 border-[#2EE56B]/20" }
                    ].map((row, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-[#1A1D29]/40 border border-[#1E2230]/40 p-3 rounded-xl">
                        <span className="text-gray-400 tracking-wide">{row.label}</span>
                        <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${row.color}`}>{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Holdings Layout Framework View */}
          {activeTab === "portfolio" && (
            <div className="bg-[#14161F] border border-[#1E2230]/60 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-5 px-6 border-b border-[#1E2230]/60 flex items-center justify-between bg-[#1A1D29]/20">
                <span className="text-xs font-bold tracking-wider text-gray-400">COMPREHENSIVE PORTFOLIO WEIGHT MATRIX</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-medium">
                  <thead>
                    <tr className="border-b border-[#1E2230]/60 bg-[#1A1D29]/50 text-gray-400 font-bold uppercase tracking-wider text-[10px]">
                      <th className="p-5 px-6">Asset Class Name</th>
                      <th className="p-5">Ticker Identifier</th>
                      <th className="p-5">Weight Scale</th>
                      <th className="p-5 text-right">Net Value Matrix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E2230]/40">
                    {holdings.map((asset) => (
                      <tr key={asset.ticker} className="hover:bg-[#1A1D29]/30 transition-colors duration-150 group">
                        <td className="p-5 px-6 text-white font-bold text-sm tracking-wide">{asset.name}</td>
                        <td className="p-5"><span className="text-[#2EE56B] bg-[#2EE56B]/10 px-2.5 py-1 border border-[#2EE56B]/20 rounded-md font-bold">{asset.ticker}</span></td>
                        <td className="p-5 text-gray-300 font-semibold">{asset.allocation}</td>
                        <td className="p-5 text-right font-extrabold text-white text-sm">${asset.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Wire Brokerages View */}
          {activeTab === "wire" && (
            <div className="bg-[#14161F] border border-[#1E2230]/60 rounded-3xl p-6 shadow-xl space-y-4">
              <span className="text-xs font-bold text-gray-400 block tracking-wider">STRATEGIC NODE REAL-TIME LOG FEED</span>
              <div className="space-y-3.5 text-xs font-medium">
                <div className="p-4 bg-[#1A1D29]/50 rounded-2xl border border-[#252A3C] flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-[#2EE56B] mt-1.5 animate-ping" />
                  <p className="text-gray-300 leading-relaxed"><span className="text-[#2EE56B] font-bold mr-2">[ALERTS // PIPELINE]</span> Live Neural Alpha Signal core logs successfully linked with structural cloud instances.</p>
                </div>
                <div className="p-4 bg-[#1A1D29]/50 rounded-2xl border border-[#252A3C] flex items-start space-x-3">
                  <div className="h-2 w-2 rounded-full bg-amber-400 mt-1.5" />
                  <p className="text-gray-300 leading-relaxed"><span className="text-amber-400 font-bold mr-2">[MARKET // RADAR]</span> Strategic macro capital adjustments monitored moving towards server acceleration nodes.</p>
                </div>
              </div>
            </div>
          )}

          {/* Screener Framework View */}
          {activeTab === "screener" && (
            <div className="bg-[#14161F] border border-[#1E2230]/60 rounded-3xl p-6 shadow-xl space-y-4">
              <span className="text-xs font-bold text-gray-400 block tracking-wider">REAL-TIME SECTOR MATRIX ENGINE</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                <div className="border border-[#1E2230]/60 p-5 rounded-2xl bg-[#1A1D29]/30 flex flex-col justify-between">
                  <span className="text-gray-400 font-bold">NVDA // STABILITY SCORE</span>
                  <div className="text-3xl font-extrabold text-white mt-2">94%</div>
                </div>
                <div className="border border-[#1E2230]/60 p-5 rounded-2xl bg-[#1A1D29]/30 flex flex-col justify-between">
                  <span className="text-gray-400 font-bold">ALPHA SYNC COEFFICIENT</span>
                  <div className="text-sm font-bold text-[#2EE56B] mt-3 tracking-wide bg-[#2EE56B]/10 px-3 py-1 rounded-md border border-[#2EE56B]/20 w-fit">OPTIMIZED_PASSING</div>
                </div>
              </div>
            </div>
          )}

          {/* Quant Suite View */}
          {activeTab === "quant" && (
            <div className="bg-[#14161F] border border-[#1E2230]/60 rounded-3xl p-6 shadow-xl space-y-5">
              <span className="text-xs font-bold text-gray-400 block tracking-wider">REUSABLE QUANT RISK METERS</span>
              <div className="bg-[#1A1D29]/40 p-5 rounded-2xl border border-[#1E2230]/60 space-y-4 text-xs">
                <div className="flex justify-between items-center font-bold">
                  <span className="text-gray-300">AGGREGATED INTEGRITY MATRIX</span>
                  <span className="text-[#2EE56B] bg-[#2EE56B]/10 px-2.5 py-0.5 rounded-md border border-[#2EE56B]/20">100 / 100</span>
                </div>
                <div className="h-2.5 bg-[#0C0D12] rounded-full overflow-hidden p-[2px] border border-[#1E2230]">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-[#2EE56B] rounded-full w-full shadow-lg shadow-[#2EE56B]/50" />
                </div>
              </div>
            </div>
          )}

          {/* System Settings View */}
          {activeTab === "settings" && (
            <div className="bg-[#14161F] border border-[#1E2230]/60 rounded-3xl p-6 shadow-xl text-xs space-y-3">
              <span className="text-xs font-bold text-gray-400 block tracking-wider">ENVIRONMENT ROUTING ENGINE</span>
              <div className="bg-[#1A1D29] p-5 rounded-2xl border border-[#252A3C] text-gray-400 font-mono leading-relaxed space-y-1">
                <div>&gt; HOSTING_CLUSTER: VERCEL_PRODUCTION_EDGE</div>
                <div>&gt; FRAMEWORK_CORE: NEXT_JS_APP_CONTAINER</div>
                <div>&gt; TAILWIND_ENGINE: COMPILING_SUCCESS</div>
                <div>&gt; THEME_INJECTION: MATTE_NEON_OBSIDIAN</div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Massive Accent Action Verification Block at Bottom */}
      <footer className="p-4 px-6 bg-[#14161F] border-t border-[#1E2230]/40 flex justify-center">
        <button 
          onClick={() => window.open("https://financesight.online", "_blank")}
          className="w-full max-w-md bg-gradient-to-r from-[#2EE56B] to-emerald-500 text-[#0C0D12] font-extrabold text-sm py-3.5 rounded-2xl tracking-wider hover:brightness-110 active:scale-[0.99] transition-all shadow-xl shadow-[#2EE56B]/10 uppercase"
        >
          Verify Live Interface
        </button>
      </footer>

    </div>
  );
          }
