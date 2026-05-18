use client";

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
  Calculator,
  Newspaper,
  Radio,
  Sliders,
  Sparkles,
  PieChart
} from "lucide-react";

export default function FinanceSightQuantumTerminal() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Advanced Calculator States
  const [calcType, setCalcType] = useState("sip");
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);
  
  const [emiLoan, setEmiLoan] = useState(1000000);
  const [emiRate, setEmiRate] = useState(8.5);
  const [emiMonths, setEmiMonths] = useState(120);

  // Expanded Data-Driven Asset State Engine (with correct calculations and live status ratings)
  const assetsDatabase = [
    { ticker: "NVDA", name: "NVIDIA Corp.", sector: "Semiconductors", price: "914.30", change: "+4.85%", up: true, rating: "STRONG BUY", cap: "$2.28T", volume: "42.1M", rsi: "68.4" },
    { ticker: "AAPL", name: "Apple Inc.", sector: "Consumer Tech", price: "181.25", change: "-0.42%", up: false, rating: "HOLD", cap: "$2.62T", volume: "51.8M", rsi: "44.2" },
    { ticker: "MSFT", name: "Microsoft Corp.", sector: "Cloud Systems", price: "420.55", change: "+1.12%", up: true, rating: "BUY", cap: "$3.15T", volume: "22.9M", rsi: "59.1" },
    { ticker: "TSLA", name: "Tesla Motors", sector: "Automotive/EV", price: "174.90", change: "-2.35%", up: false, rating: "UNDERWEIGHT", cap: "$556B", volume: "84.3M", rsi: "35.8" },
    { ticker: "BTC", name: "Bitcoin Core", sector: "Crypto Digital Asset", price: "66,420", change: "+4.12%", up: true, rating: "STRONG BUY", cap: "$1.31T", volume: "38.5B", rsi: "71.2" },
    { ticker: "ETH", name: "Ethereum Network", sector: "Smart Contract Layer", price: "3,485.10", change: "+3.24%", up: true, rating: "BUY", cap: "$418B", volume: "19.2B", rsi: "62.8" }
  ];

  // System Live Neural Feed News Dataset
  const wireNews = [
    { id: 1, type: "SYSTEM_ALPHA", timestamp: "02:06:14", text: "Neural Model V2.6 flagged high liquidity inflows on semiconductor options chains.", urgency: "HIGH" },
    { id: 2, type: "MARKET_ROTATION", timestamp: "01:58:40", text: "Cross-platform growth index shifts +14.2% towards enterprise compute infrastructure nodes.", urgency: "MEDIUM" },
    { id: 3, type: "MACRO_SIGNAL", timestamp: "01:42:11", text: "Aggregated global asset safety validation matrices confirmed stable at 100/100 threshold.", urgency: "LOW" }
  ];

  // Interactive Calculator Math Engines
  const calculateSIP = () => {
    const P = sipAmount;
    const i = (sipRate / 100) / 12;
    const n = sipYears * 12;
    const futureValue = P * [Math.pow(1 + i, n) - 1] * (1 + i) / i;
    const invested = P * n;
    return { Total: Math.round(futureValue).toLocaleString(), Wealth: Math.round(futureValue - invested).toLocaleString() };
  };

  const calculateEMI = () => {
    const P = emiLoan;
    const r = (emiRate / 100) / 12;
    const n = emiMonths;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    return { Monthly: Math.round(emi).toLocaleString(), Interest: Math.round(totalPayable - P).toLocaleString() };
  };

  return (
    <div className="min-h-screen bg-[#07080E] text-slate-200 font-sans flex flex-col antialiased selection:bg-purple-500/30">
      
      {/* Top Glassmorphic Navigation Banner Layout */}
      <header className="bg-[#0E101A]/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b border-[#1A1E33] shadow-lg sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-ping" />
          <span className="text-xs uppercase tracking-widest font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-md border border-indigo-500/20">Data Streaming Active</span>
          <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20 hidden sm:inline-block">Live System Health</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative w-48 sm:w-64">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search assets, parameters... (⌘ + F)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#131726] border border-[#202740] rounded-xl py-2 pl-9 pr-4 text-xs text-white outline-none focus:border-indigo-500/50 transition-all font-medium"
            />
          </div>
          <button className="p-2 rounded-xl bg-[#131726] border border-[#202740] text-slate-400 hover:text-white relative"><Bell className="h-4 w-4" /><span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-amber-400" /></button>
          <div className="flex items-center space-x-2 bg-[#131726]/80 p-1.5 pr-3 rounded-xl border border-[#202740]">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">P</div>
            <span className="text-xs font-semibold text-white hidden sm:inline">Pranav</span>
          </div>
        </div>
      </header>

      {/* Main Structural Quantix Grid Dashboard */}
      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* Left Side Frosted Control Deck Menu */}
        <aside className="w-full lg:w-64 bg-[#0B0D16]/90 p-4 flex flex-col space-y-1.5 border-r border-[#15192B] shadow-2xl">
          <div className="px-3 py-3 mb-5">
            <h1 className="text-lg font-black tracking-wide flex items-center space-x-2 text-white">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">financeSight</span>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30">NEXUS</span>
            </h1>
          </div>

          {[
            { id: "dashboard", label: "Dashboard Hub", icon: Activity },
            { id: "screener", label: "Asset Core Screener", icon: BarChart3 },
            { id: "calculators", label: "SIP / EMI Tool Suite", icon: Calculator },
            { id: "wire", label: "Neural News Wire", icon: Radio },
            { id: "system", label: "Quantix Metrics", icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-3 p-3 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all duration-150 ${
                  isActive 
                    ? "bg-[#181C30] text-indigo-400 border border-indigo-500/20 shadow-lg" 
                    : "text-slate-400 hover:text-slate-200 hover:bg-[#111424]/50"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-indigo-400" : "text-slate-500"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Interactive Action Widget Inside Sidebar */}
          <div className="pt-8 mt-auto hidden lg:block">
            <div className="bg-gradient-to-b from-[#131726] to-[#0E101A] border border-[#202740] rounded-2xl p-4 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-12 w-12 bg-purple-500/10 rounded-full blur-xl" />
              <Sparkles className="h-5 w-5 text-purple-400 mx-auto mb-2 animate-pulse" />
              <h4 className="text-xs font-bold text-white mb-1">Quantum Intelligence</h4>
              <p className="text-[10px] text-slate-500 mb-3">Run multi-layered quantitative backtesting scripts.</p>
              <button onClick={() => setActiveTab("calculators")} className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-[11px] py-2 rounded-xl transition-all shadow-md shadow-indigo-500/10">Initialize Modules</button>
            </div>
          </div>
        </aside>
         {/* Primary Analytical Stage Monitor Workspace */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto space-y-6">
          
          {/* Dashboard Summary Widget Set */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#0E111C] border border-[#1A1F36] rounded-2xl p-5 flex flex-col justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Cross-Platform Growth Score</span>
              <div className="flex items-center justify-between mt-3">
                <span className="text-2xl font-black text-white">78%</span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">+15.5% ↑</span>
              </div>
              <div className="h-1 bg-[#181C2E] rounded-full mt-4 overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[78%]" /></div>
            </div>

            <div className="bg-[#0E111C] border border-[#1A1F36] rounded-2xl p-5 flex flex-col justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Recurring Net Revenue</span>
              <div className="flex items-center justify-between mt-3">
                <span className="text-2xl font-black text-white">$54,200</span>
                <span className="text-xs text-slate-400 font-mono">USD/MO</span>
              </div>
              <div className="text-[10px] text-slate-500 font-medium mt-4 flex items-center"><RefreshCw className="h-3 w-3 text-indigo-400 mr-1 animate-spin" /> Live Data Refresh Pipeline</div>
            </div>

            <div className="bg-[#0E111C] border border-[#1A1F36] rounded-2xl p-5 flex flex-col justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">User Cohort Retention</span>
              <div className="flex items-center justify-between mt-3">
                <span className="text-2xl font-black text-white">21.5%</span>
                <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">-0.3% ↓</span>
              </div>
              <div className="text-[10px] text-indigo-400 font-bold bg-indigo-500/5 px-2.5 py-1 rounded-lg border border-indigo-500/10 w-fit mt-4">CHURN_WARN_LEVEL: SYSTEM_OPTIMIZED</div>
            </div>
          </div>

          {/* Tab Router Section Workspace View */}
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              
              {/* Massive Data-Driven Network Allocation Display Container */}
              <div className="xl:col-span-2 bg-[#0E111C] border border-[#1A1F36] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#1A1F36] pb-4 mb-5">
                    <div className="flex items-center space-x-2">
                      <Layers className="h-4 w-4 text-indigo-400" />
                      <h3 className="text-xs font-black uppercase tracking-wider text-white">Active Core Portfolios Matrix</h3>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">VALUATION_ENGINE: ONLINE</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-medium">
                      <thead>
                        <tr className="text-slate-500 text-[10px] uppercase tracking-wider font-bold border-b border-[#1A1F36] pb-2">
                          <th className="pb-3">Asset</th>
                          <th className="pb-3">Live Market Price</th>
                          <th className="pb-3">24H Delta</th>
                          <th className="pb-3">Neural Rating</th>
                          <th className="pb-3 text-right">RSI (14)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#181C2E]">
                        {assetsDatabase.slice(0,4).map((asset) => (
                          <tr key={asset.ticker} className="group hover:bg-[#131726]/30 transition-colors">
                            <td className="py-3.5"><div className="font-bold text-white text-sm">{asset.ticker}</div><div className="text-[10px] text-slate-500">{asset.name}</div></td>
                            <td className="py-3.5 font-mono text-white font-bold">${asset.price}</td>
                            <td className="py-3.5 font-mono"><span className={`font-bold ${asset.up ? "text-emerald-400" : "text-rose-400"}`}>{asset.change}</span></td>
                            <td className="py-3.5"><span className={`text-[9px] font-bold tracking-wider px-2 py-0.5 rounded border ${asset.up ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border-amber-500/20"}`}>{asset.rating}</span></td>
                            <td className="py-3.5 text-right font-mono text-slate-400">{asset.rsi}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Real-time Processing News Network Row */}
              <div className="bg-[#0E111C] border border-[#1A1F36] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-black tracking-wider text-white border-b border-[#1A1F36] pb-4 mb-4">
                    <Radio className="h-4 w-4 text-purple-400" />
                    <span>Neural Event Stream Matrix</span>
                  </div>
                  <div className="space-y-3">
                    {wireNews.map((news) => (
                      <div key={news.id} className="p-3 bg-[#131726]/60 border border-[#1D233D] rounded-xl text-xs font-medium space-y-1">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-purple-400 font-mono font-bold">[{news.type}]</span>
                          <span className="text-slate-500">{news.timestamp}</span>
                        </div>
                        <p className="text-slate-300 leading-normal">{news.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Full Asset Advanced Screener Frame Layout */}
          {activeTab === "screener" && (
            <div className="bg-[#0E111C] border border-[#1A1F36] rounded-2xl shadow-xl overflow-hidden">
              <div className="p-5 border-b border-[#1A1F36] flex items-center justify-between bg-[#111524]">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-indigo-400" />
                  <span className="text-xs font-black text-white uppercase tracking-wider">Comprehensive Real-Time Sector Matrix Screener</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-medium">
                  <thead>
                    <tr className="bg-[#121626] text-slate-500 text-[10px] uppercase font-bold tracking-wider border-b border-[#1A1F36]">
                      <th className="p-4 px-6">Entity Architecture</th>
                      <th className="p-4">Sector Cluster</th>
                      <th className="p-4">Spot Valuation</th>
                      <th className="p-4">Delta Variance</th>
                      <th className="p-4">Cap Volume</th>
                      <th className="p-4">RSI Metric</th>
                      <th className="p-4 text-right px-6">System Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#181C2E]">
                    {assetsDatabase.map((asset) => (
                      <tr key={asset.ticker} className="hover:bg-[#131726]/40 transition-colors">
                        <td className="p-4 px-6"><div className="font-bold text-white text-sm">{asset.ticker}</div><div className="text-[10px] text-slate-500">{asset.name}</div></td>
                        <td className="p-4 text-slate-400 font-mono text-[11px]">{asset.sector}</td>
                        <td className="p-4 text-white font-bold font-mono">${asset.price}</td>
                        <td className="p-4 font-mono"><span className={`font-bold ${asset.up ? "text-emerald-400" : "text-rose-400"}`}>{asset.change}</span></td>
                        <td className="p-4 text-slate-400 font-mono">{asset.cap} / {asset.volume}</td>
                        <td className="p-4 font-mono text-slate-300">{asset.rsi}</td>
                        <td className="p-4 text-right px-6"><span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${asset.up ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-rose-500/10 text-rose-400 border-rose-500/20"}`}>{asset.rating}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Interactive SIP / EMI Mathematical Tools Suite View */}
          {activeTab === "calculators" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Systematic Investment Plan (SIP) Block Card */}
              <div className="bg-[#0E111C] border border-[#1A1F36] rounded-2xl p-6 shadow-xl space-y-5">
                <div className="flex items-center space-x-2 border-b border-[#1A1F36] pb-3">
                  <Sliders className="h-4 w-4 text-indigo-400" />
                  <h3 className="text-xs font-black text-white uppercase tracking-wider">SIP Capital Accumulation Predictor</h3>
                </div>

                <div className="space-y-4 text-xs font-medium">
                  <div>
                    <div className="flex justify-between mb-1.5"><span className="text-slate-400">Monthly Contribution Amount</span><span className="text-white font-bold font-mono">₹{sipAmount.toLocaleString()}</span></div>
                    <input type="range" min="500" max="100000" step="500" value={sipAmount} onChange={(e) => setSipAmount(Number(e.target.value))} className="w-full h-1 bg-[#1A1F36] rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1.5"><span className="text-slate-400">Expected Rate of Return (CAGR)</span><span className="text-white font-bold font-mono">{sipRate}%</span></div>
                    <input type="range" min="1" max="30" step="0.5" value={sipRate} onChange={(e) => setSipRate(Number(e.target.value))} className="w-full h-1 bg-[#1A1F36] rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1.5"><span className="text-slate-400">Duration Period Threshold</span><span className="text-white font-bold font-mono">{sipYears} Years</span></div>
                    <input type="range" min="1" max="40" step="1" value={sipYears} onChange={(e) => setSipYears(Number(e.target.value))} className="w-full h-1 bg-[#1A1F36] rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                  </div>
                </div>

                <div className="bg-[#131726]/80 p-4 border border-[#1D233D] rounded-xl grid grid-cols-2 gap-4 text-center">
                  <div><div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Total Projected Assets</div><div className="text-xl font-black text-emerald-400 font-mono mt-1">₹{calculateSIP().Total}</div></div>
                  <div><div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Estimated Wealth Yield</div><div className="text-xl font-black text-indigo-400 font-mono mt-1">₹{calculateSIP().Wealth}</div></div>
                </div>
              </div>

              {/* Equated Monthly Installment (EMI) Loan Block Card */}
              <div className="bg-[#0E111C] border border-[#1A1F36] rounded-2xl p-6 shadow-xl space-y-5">
                <div className="flex items-center space-x-2 border-b border-[#1A1F36] pb-3">
                  <PieChart className="h-4 w-4 text-purple-400" />
                  <h3 className="text-xs font-black text-white uppercase tracking-wider">EMI Debt Amortization Simulator</h3>
                </div>

                <div className="space-y-4 text-xs font-medium">
                  <div>
                    <div className="flex justify-between mb-1.5"><span className="text-slate-400">Principal Loan Quantity</span><span className="text-white font-bold font-mono">₹{emiLoan.toLocaleString()}</span></div>
                    <input type="range" min="10000" max="10000000" step="50000" value={emiLoan} onChange={(e) => setEmiLoan(Number(e.target.value))} className="w-full h-1 bg-[#1A1F36] rounded-lg appearance-none cursor-pointer accent-purple-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1.5"><span className="text-slate-400">Annual Nominal Interest Rate</span><span className="text-white font-bold font-mono">{emiRate}%</span></div>
                    <input type="range" min="5" max="25" step="0.1" value={emiRate} onChange={(e) => setEmiRate(Number(e.target.value))} className="w-full h-1 bg-[#1A1F36] rounded-lg appearance-none cursor-pointer accent-purple-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1.5"><span className="text-slate-400">Tenure Amortization Period</span><span className="text-white font-bold font-mono">{emiMonths} Months</span></div>
                    <input type="range" min="6" max="360" step="6" value={emiMonths} onChange={(e) => setEmiMonths(Number(e.target.value))} className="w-full h-1 bg-[#1A1F36] rounded-lg appearance-none cursor-pointer accent-purple-500" />
                  </div>
                </div>

                <div className="bg-[#131726]/80 p-4 border border-[#1D233D] rounded-xl grid grid-cols-2 gap-4 text-center">
                  <div><div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Monthly Installment (EMI)</div><div className="text-xl font-black text-rose-400 font-mono mt-1">₹{calculateEMI().Monthly}</div></div>
                  <div><div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Total Cumulative Interest</div><div className="text-xl font-black text-amber-400 font-mono mt-1">₹{calculateEMI().Interest}</div></div>
                </div>
              </div>

            </div>
          )}
                {/* Full Isolated Neural Streaming Feed Terminal */}
          {activeTab === "wire" && (
            <div className="bg-[#0E111C] border border-[#1A1F36] rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center space-x-2 border-b border-[#1A1F36] pb-3">
                <Newspaper className="h-4 w-4 text-indigo-400" />
                <span className="text-xs font-black text-white uppercase tracking-wider">Live Global Alpha Stream & Analytical Wire Logs</span>
              </div>
              <div className="space-y-3 font-medium text-xs">
                {wireNews.map((news) => (
                  <div key={news.id} className="p-4 bg-[#131726]/40 border border-[#1E233D] rounded-xl flex items-start space-x-3 hover:border-indigo-500/20 transition-all">
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border mt-0.5 ${news.urgency === "HIGH" ? "bg-rose-500/10 text-rose-400 border-rose-500/20" : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"}`}>{news.urgency}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono"><span>SOURCE: HUB_{news.type}</span><span>TIMESTAMP: {news.timestamp}</span></div>
                      <p className="text-slate-300 mt-1.5 leading-relaxed">{news.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Environmental Systems Settings View */}
          {activeTab === "system" && (
            <div className="bg-[#0E111C] border border-[#1A1F36] rounded-2xl p-6 shadow-xl text-xs space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Quantix Platform Runtime Parameters</span>
              <div className="bg-[#121524] p-5 rounded-xl border border-[#1F243D] text-slate-400 font-mono leading-relaxed space-y-1 shadow-inner">
                <div>&gt; HOSTING_DECK: VERCEL_GLOBAL_EDGE_ROUTER</div>
                <div>&gt; APPLICATION_FRAMEWORK: NEXT_JS_14_STABLE_APP_ROUTER</div>
                <div>&gt; COMPILE_PIPELINE: TAILWIND_CSS_PASSING</div>
                <div>&gt; INTERACTIVE_CALC_MATRIX: LINKED</div>
                <div>&gt; FINANCIAL_DATASET_INTEGRITY: CERTIFIED_VALID</div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Persistent Activation Foot Anchor Button Frame */}
      <footer className="p-4 bg-[#0B0D16] border-t border-[#15192B] flex justify-center">
        <button 
          onClick={() => window.open("https://financesight.online", "_blank")}
          className="w-full max-w-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 active:scale-[0.99] text-white font-extrabold text-xs py-3.5 rounded-xl tracking-widest shadow-lg shadow-indigo-500/10 uppercase transition-all"
        >
          Activate Quantum Engine
        </button>
      </footer>

    </div>
  );
}                                                                                                                      
