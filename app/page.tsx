"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Newspaper, 
  Sliders, 
  Briefcase, 
  Activity, 
  Search, 
  ShieldCheck, 
  Flame, 
  TrendingUp, 
  BellRing, 
  Plus, 
  Check 
} from 'lucide-react';

export default function FinanceSightTerminal() {
  const [activeTab, setActiveTab] = useState('wire');
  const [searchQuery, setSearchQuery] = useState('');
  const [watchlist, setWatchlist] = useState(['AAPL']);
  const [activeAsset, setActiveAsset] = useState('AAPL');

  // Interactive Calculator States
  const [calcSavings, setCalcSavings] = useState(5000);
  const [calcDebt, setCalcDebt] = useState(200000);
  const [calcDiv, setCalcDiv] = useState(4);
  const [calcEmerg, setCalcEmerg] = useState(15000);

  // Financial Health Calculation Matrix Formula variables
  const [healthScore, setHealthScore] = useState(80);

  useEffect(() => {
    // Basic calculation for live health score index stability
    const savingsFactor = Math.min((calcSavings / 10000) * 30, 30);
    const debtFactor = Math.max(35 - (calcDebt / 50000), 5);
    const emergFactor = Math.min((calcEmerg / 20000) * 35, 35);
    const calculatedScore = Math.round(savingsFactor + debtFactor + emergFactor);
    setHealthScore(Math.min(Math.max(calculatedScore, 10), 100));
  }, [calcSavings, calcDebt, calcEmerg]);

  const ASSET_DATABASE = {
    "AAPL": {
      name: "Apple Inc.",
      score: 78,
      rating: "Buy",
      confidence: "89%",
      speed: 75,
      narrative: [
        { d: "Jan", h: "Cycle Shift", b: "Lags in hardware volumes evaluated." },
        { d: "Mar", h: "Margin Alpha", b: "Services yield reaches alpha structural highs." }
      ],
      signals: [
        { type: "cyan", text: "Ecosystem Support Inflow" },
        { type: "gold", text: "Margin Expansion Spike" }
      ]
    },
    "NVDA": {
      name: "NVIDIA Corp.",
      score: 94,
      rating: "Strong Buy",
      confidence: "96%",
      speed: 92,
      narrative: [
        { d: "Feb", h: "Compute Surge", b: "Enterprise AI backlogs expand demand limits." },
        { d: "May", h: "Monopoly Lock", b: "Hyperscaler capex solidifies node dominance." }
      ],
      signals: [
        { type: "green", text: "Aggressive Call Option Blocks" },
        { type: "red", text: "Volatility Velocity Deflection" }
      ]
    }
  };

  const toggleWatchlist = (ticker: string) => {
    setWatchlist(prev => 
      prev.includes(ticker) ? prev.filter(t => t !== ticker) : [...prev, ticker]
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = searchQuery.toUpperCase().trim();
    if (ASSET_DATABASE[cleanKey]) {
      setActiveAsset(cleanKey);
      setActiveTab('desk');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col p-4 antialiased selection:bg-neon-green/30">
      
      {/* HOLOGRAPHIC SCROLLING WIRE TICKER DOCK */}
      <div className="w-full bg-[#050505] border border-zinc-900 rounded-xl p-3 mb-4 overflow-hidden text-xs flex items-center justify-between shadow-2xl">
        <div className="flex space-x-6 items-center animate-pulse">
          <span className="text-zinc-500 font-bold tracking-widest">S&P 500</span>
          <span className="text-emerald-400 font-bold">7,379.8 (+0.14%)</span>
          <span className="text-zinc-700">|</span>
          <span className="text-zinc-500 font-bold tracking-widest">NASDAQ 100</span>
          <span className="text-rose-500 font-bold">28,893.9 (-0.42%)</span>
        </div>
        <div className="text-[10px] bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded-md font-sans font-bold border border-zinc-800 uppercase tracking-widest">Node Stable</div>
      </div>

      {/* BRAND INTERACTION TOP DECK */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-900">
        <div>
          <h1 className="text-2xl font-black bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent tracking-tighter">financeSight.online</h1>
          <p className="text-[11px] text-zinc-500 font-sans font-semibold mt-0.5">AI Financial Intelligence & Narrative Tracking Terminal</p>
        </div>

        {/* STRATEGIC UNIFIED SEARCH ARCHITECTURE */}
        <form onSubmit={handleSearch} className="flex items-center bg-[#070707] border border-zinc-800 rounded-xl focus-within:border-zinc-700 transition-all p-1.5 w-full md:w-96 shadow-inner">
          <Search className="h-4 w-4 text-zinc-600 ml-2.5 mr-2" />
          <input 
            type="text" 
            placeholder="Query assets or narratives (e.g., NVDA, AAPL)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none placeholder-zinc-600"
          />
        </form>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* RETENTION MECHANISM: THE AI DAILY BRIEF SUMMARY CARD */}
        <div className="lg:col-span-4 bg-[#050505] border border-zinc-900 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center space-x-2 text-zinc-400">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="text-xs font-black tracking-widest uppercase">Today's Intelligent Brief Dispatch</span>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-200 leading-tight">Systemic Capital Re-Rotation Patterns</h2>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Enterprise structural investments continue shielding accelerator compute nodes from localized liquidity deflections. Long-term capital accumulation metrics preserve support lines smoothly.
            </p>
            <div className="bg-[#090909] border border-zinc-800 rounded-xl p-3 flex justify-between items-center">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Bullish Core AI Confidence</span>
              <span className="text-sm font-black text-emerald-400">94%</span>
            </div>
          </div>

          {/* WATCHLIST PERSISTENCE MODULE */}
          <div className="pt-4 border-t border-zinc-900">
            <span className="text-[10px] text-zinc-600 font-bold tracking-widest block mb-2.5 uppercase">Active Workspace Watchlist Monitor</span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.keys(ASSET_DATABASE).map((ticker) => (
                <button 
                  key={ticker}
                  onClick={() => { setActiveAsset(ticker); setActiveTab('desk'); }}
                  className={`p-3 rounded-xl border transition-all text-left flex justify-between items-center ${activeAsset === ticker && activeTab === 'desk' ? 'bg-zinc-900 border-zinc-700 text-white' : 'bg-[#030303] border-zinc-900 text-zinc-400 hover:border-zinc-800'}`}
                >
                  <span className="font-bold">{ticker}</span>
                  <span className="text-[10px] font-sans text-zinc-500 font-semibold">{ASSET_DATABASE[ticker].score}%</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CORE CONTEXT INTERACTIVE TERMINAL VIEWS DECK */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          
          {/* NAVIGATION BAR HEADER */}
          <div className="flex bg-[#050505] p-1 border border-zinc-900 rounded-xl shadow-lg space-x-1">
            <button onClick={() => setActiveTab('wire')} className={`flex-1 flex items-center justify-center space-x-2 py-2.5 text-xs font-bold rounded-lg transition-all ${activeTab === 'wire' ? 'bg-zinc-900 text-white border border-zinc-800' : 'text-zinc-500 hover:text-zinc-300'}`}>
              <Newspaper className="h-3.5 w-3.5" />
              <span>Wire</span>
            </button>
            <button onClick={() => setActiveTab('desk')} className={`flex-1 flex items-center justify-center space-x-2 py-2.5 text-xs font-bold rounded-lg transition-all ${activeTab === 'desk' ? 'bg-zinc-900 text-white border border-zinc-800' : 'text-zinc-500 hover:text-zinc-300'}`}>
              <Briefcase className="h-3.5 w-3.5" />
              <span>Desk</span>
            </button>
            <button onClick={() => setActiveTab('suite')} className={`flex-1 flex items-center justify-center space-x-2 py-2.5 text-xs font-bold rounded-lg transition-all ${activeTab === 'suite' ? 'bg-zinc-900 text-white border border-zinc-800' : 'text-zinc-500 hover:text-zinc-300'}`}>
              <Sliders className="h-3.5 w-3.5" />
              <span>Suite</span>
            </button>
          </div>

          {/* DYNAMIC FRAME ROUTING MONITOR PANEL */}
          <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6 min-h-[360px] shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: EXPLAINABLE INTELLIGENCE BRIEF DATA CARD */}
              {activeTab === 'desk' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="desk" className="space-y-5">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                    <div>
                      <h3 className="text-lg font-black text-white tracking-tight">{ASSET_DATABASE[activeAsset].name}</h3>
                      <p className="text-[10px] text-zinc-500 font-mono mt-0.5">Asset Frame Reference Matrix: {activeAsset}</p>
                    </div>
                    <button 
                      onClick={() => toggleWatchlist(activeAsset)}
                      className={`p-2 px-3 rounded-xl border text-xs font-bold flex items-center space-x-1.5 transition-all ${watchlist.includes(activeAsset) ? 'bg-zinc-900 border-zinc-700 text-white' : 'bg-transparent border-zinc-800 text-zinc-400 hover:border-zinc-700'}`}
                    >
                      {watchlist.includes(activeAsset) ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      <span>{watchlist.includes(activeAsset) ? 'Watching' : 'Track'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#030303] border border-zinc-950 p-3 rounded-xl"><span className="text-[9px] text-zinc-600 block uppercase font-bold tracking-widest">AI Scoring</span><span className="text-xl font-black text-white">{ASSET_DATABASE[activeAsset].score}</span></div>
                    <div className="bg-[#030303] border border-zinc-950 p-3 rounded-xl"><span className="text-[9px] text-zinc-600 block uppercase font-bold tracking-widest">Rating Tier</span><span className="text-xl font-black text-emerald-400">{ASSET_DATABASE[activeAsset].rating}</span></div>
                    <div className="bg-[#030303] border border-zinc-950 p-3 rounded-xl"><span className="text-[9px] text-zinc-600 block uppercase font-bold tracking-widest">Confidence</span><span className="text-xl font-black text-zinc-400">{ASSET_DATABASE[activeAsset].confidence}</span></div>
                  </div>

                  {/* SIGNAL ALERTS ROW CONTAINER */}
                  <div className="space-y-2">
                    <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest block">Live Neural Alpha Signal Logs</span>
                    <div className="flex flex-wrap gap-2">
                      {ASSET_DATABASE[activeAsset].signals.map((sig, i) => (
                        <span key={i} className={`text-[10px] font-bold px-3 py-1 rounded-md border ${sig.type === 'cyan' ? 'bg-cyan-500/5 text-cyan-400 border-cyan-500/20' : sig.type === 'gold' ? 'bg-amber-500/5 text-amber-400 border-amber-500/20' : sig.type === 'green' ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/5 text-rose-400 border-rose-500/20'}`}>
                          {sig.text}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* NARRATIVE TRACKING HISTORICAL SYSTEM ROW */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest block">Historical Story-Arc Journey Track</span>
                    <div className="space-y-2 font-sans">
                      {ASSET_DATABASE[activeAsset].narrative.map((node, i) => (
                        <div key={i} className="bg-[#030303] border border-zinc-950 p-3 rounded-xl text-xs flex items-start space-x-3">
                          <span className="font-mono font-bold text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900">{node.d}</span>
                          <div>
                            <h4 className="font-bold text-zinc-300">{node.h}</h4>
                            <p className="text-zinc-500 text-[11px] mt-0.5 leading-normal">{node.b}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: SYSTEMIC CHRONOLOGICAL TIMELINE STREAM */}
              {activeTab === 'wire' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="wire" className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-1">
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Chronological Event-Horizon Stream Log</span>
                    <Activity className="h-4 w-4 text-zinc-600 animate-spin" />
                  </div>
                  <div className="space-y-3 text-xs leading-relaxed text-zinc-400">
                    <div className="p-4 bg-[#030303] border border-zinc-950 rounded-xl space-y-1">
                      <span className="text-emerald-400 font-bold text-[10px] uppercase block tracking-wider">[Macro Pulse // Fed Strategy]</span>
                      Liquidity consolidation profiles indicate systematic stabilization thresholds holding steady across domestic deployment environments.
                    </div>
                    <div className="p-4 bg-[#030303] border border-zinc-950 rounded-xl space-y-1">
                      <span className="text-cyan-400 font-bold text-[10px] uppercase block tracking-wider">[Alpha Vector // Scale Shifts]</span>
                      High-conviction capex updates confirm accelerated computing hardware architectures command dominant capital share allocations.
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: COMPREHENSIVE REUSABLE FISCAL INTEGRITY METERS SCORE GAUGE CARD */}
              {activeTab === 'suite' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="suite" className="space-y-5">
                  <div className="border-b border-zinc-900 pb-3">
                    <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Financial Wellness Health Verification Matrix</h3>
                  </div>

                  <div className="bg-[#030303] border border-zinc-950 p-4 rounded-xl space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400 font-bold">Aggregated Asset Safety Ratio</span>
                      <span className={`font-bold px-2.5 py-0.5 rounded border ${healthScore >= 75 ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/5 text-amber-400 border-amber-500/20'}`}>
                        {healthScore} / 100
                      </span>
                    </div>
                    <div className="h-2 bg-zinc-950 border border-zinc-900 rounded-full overflow-hidden p-0.5">
                      <div className="h-full bg-gradient-to-r from-zinc-700 via-zinc-400 to-white rounded-full transition-all duration-500" style={{ width: `${healthScore}%` }} />
                    </div>
                  </div>

                  {/* PERMANENT NAV DOCK GRID FOOTER BAR FRAME */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans font-semibold text-zinc-400">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider font-bold block text-zinc-600 uppercase">Monthly Savings Volume (₹)</label>
                      <input type="number" value={calcSavings} onChange={(e) => setCalcSavings(Number(e.target.value))} className="w-full bg-[#030303] border border-zinc-900 rounded-xl p-2.5 font-mono text-white outline-none focus:border-zinc-700" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider font-bold block text-zinc-600 uppercase">Outstanding Debt Runway (₹)</label>
                      <input type="number" value={calcDebt} onChange={(e) => setCalcDebt(Number(e.target.value))} className="w-full bg-[#030303] border border-zinc-900 rounded-xl p-2.5 font-mono text-white outline-none focus:border-zinc-700" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider font-bold block text-zinc-600 uppercase">Target Dividend Yield (%)</label>
                      <input type="number" value={calcDiv} onChange={(e) => setCalcDiv(Number(e.target.value))} className="w-full bg-[#030303] border border-zinc-900 rounded-xl p-2.5 font-mono text-white outline-none focus:border-zinc-700" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider font-bold block text-zinc-600 uppercase">Emergency Cash Reserves (₹)</label>
                      <input type="number" value={calcEmerg} onChange={(e) => setCalcEmerg(Number(e.target.value))} className="w-full bg-[#030303] border border-zinc-900 rounded-xl p-2.5 font-mono text-white outline-none focus:border-zinc-700" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-4 right-6 opacity-5 pointer-events-none">
              <ShieldCheck className="h-24 w-24 text-white" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
                      }
