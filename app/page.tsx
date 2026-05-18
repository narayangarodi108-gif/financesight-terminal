"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Sliders, Briefcase, Activity, Search, ShieldCheck, Flame, TrendingUp, BellRing, Plus, Check } from 'lucide-react';

const ASSET_DATABASE = {
  "AAPL": { 
    name: "Apple Inc.", 
    score: 78, 
    rating: "Buy", 
    confidence: "89%", 
    speed: 75, 
    narrative: [
      { d: "Jan", h: "Cycle Shift", b: "Lags in hardware volumes evaluated." }, 
      { d: "Mar", h: "Margin Alpha", b: "Services yield reaches all-time structural highs." }
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
    confidence: "94%", 
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

export default function TerminalDashboardHub() {
  const [activeTab, setActiveTab] = useState('wire');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAsset, setActiveAsset] = useState('AAPL');
  const [watchlist, setWatchlist] = useState<string[]>(['AAPL']);
  const [healthScore, setHealthScore] = useState(80);

  // Financial Health Calculation Matrix Formula Link
  const [savings, setSavings] = useState(25);
  const [debt, setDebt] = useState(20);
  const [div, setDiv] = useState(20);
  const [emerg, setEmerg] = useState(15);

  useEffect(() => {
    setHealthScore(Number(savings) + Number(debt) + Number(div) + Number(emerg));
  }, [savings, debt, div, emerg]);

  const toggleWatchlist = (ticker: string) => {
    setWatchlist(prev => prev.includes(ticker) ? prev.filter(t => t !== ticker) : [...prev, ticker]);
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
    <div className="max-w-2xl mx-auto px-4 pt-6 font-sans">
      
      {/* BRAND INTERACTION TOP DECK */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-extrabold tracking-tight text-white">
          financeSight<span className="text-[#34D399]">.online</span>
        </h1>
        <div className="px-3 py-1 bg-[#0D1117] border border-white/10 rounded-full text-[10px] font-bold text-gray-400 tracking-widest uppercase">
          AI Engine v2.60
        </div>
      </div>

      {/* STRATEGIC UNIFIED SEARCH ARCHITECTURE */}
      <form onSubmit={handleSearch} className="relative mb-6">
        <Search className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Query assets or narratives (e.g., NVDA, AAPL)..."
          className="w-full bg-[#0D1117] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-[#34D399]/40 transition-all shadow-inner"
        />
      </form>

      {/* SYSTEM WORKSPACE NAVIGATION ANCHOR BAR HOOK */}
      <AnimatePresence mode="wait">
        {activeTab === 'wire' && (
          <motion.div key="wire" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="space-y-6">
            
            {/* RETENTION MECHANISM: THE AI DAILY BRIEF SUMMARY CARD */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#C084FC]/5 to-transparent border border-[#C084FC]/20 relative overflow-hidden backdrop-blur-xl shadow-2xl">
              <div className="text-[10px] font-bold tracking-widest text-[#C084FC] uppercase mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC] animate-pulse" /> Today's Intelligent Brief Dispatch
              </div>
              <h2 className="text-lg font-bold text-white mb-2 tracking-tight">Systemic Capital Re-Rotation Patterns</h2>
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-extrabold bg-[#34D399]/10 text-[#34D399] px-2 py-0.5 rounded">Bullish Core</span>
                <span className="text-[10px] font-extrabold bg-[#22D3EE]/10 text-[#22D3EE] px-2 py-0.5 rounded">AI Confidence: 94%</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Enterprise structural investments continue shielding accelerator compute nodes from localized liquidity deflections. Long-term capital accumulation metrics preserve support lines smoothly.</p>
            </div>

            {/* WATCHLIST PERSISTENCE MODULE */}
            <div className="p-5 rounded-2xl bg-[#0D1117] border border-white/10 shadow-xl">
              <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">Active Workspace Watchlist Monitor</div>
              <div className="space-y-2">
                {watchlist.map(ticker => (
                  <div key={ticker} onClick={() => { setActiveAsset(ticker); setActiveTab('desk'); }} className="p-3 bg-[#161B22] border border-white/5 rounded-xl flex justify-between items-center cursor-pointer hover:border-white/20 transition-all">
                    <div>
                      <span className="font-bold text-white block text-sm">{ticker}</span>
                      <span className="text-[10px] text-gray-500 font-bold uppercase">{ASSET_DATABASE[ticker]?.name || "Asset"}</span>
                    </div>
                    <span className="text-xs font-bold text-[#34D399] bg-[#34D399]/5 px-2 py-1 rounded">+1.84%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'screens' && (
          <motion.div key="screens" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="space-y-6">
            {/* SCREENER WORKSPACE LAYER */}
            <div className="p-5 rounded-2xl bg-[#0D1117] border border-white/10 shadow-xl">
              <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">Real-Time Core Market Screener Matrix</div>
              <div className="space-y-3">
                {Object.keys(ASSET_DATABASE).map((ticker) => (
                  <div key={ticker} onClick={() => { setActiveAsset(ticker); setActiveTab('desk'); }} className="p-4 bg-[#161B22] border border-white/5 rounded-xl flex justify-between items-center cursor-pointer hover:border-white/20 transition-all">
                    <div>
                      <h4 className="text-sm font-bold text-white">{ASSET_DATABASE[ticker].name} ({ticker})</h4>
                      <p className="text-[10px] text-gray-500 font-mono mt-0.5">Asset Speed Quotient: {ASSET_DATABASE[ticker].speed}M/s</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-white">Score: {ASSET_DATABASE[ticker].score}</div>
                      <span className="text-[10px] font-semibold text-[#22D3EE]">{ASSET_DATABASE[ticker].rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'desk' && (
          <motion.div key="desk" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="space-y-6">
            
            {/* EXPLAINABLE INTELLIGENCE BRIEF DATA CARD */}
            <div className="p-5 rounded-2xl bg-[#0D1117] border border-white/10 shadow-xl">
              <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight">{ASSET_DATABASE[activeAsset].name}</h3>
                  <span className="text-xs font-bold text-[#22D3EE]">{activeAsset}</span>
                </div>
                <button onClick={() => toggleWatchlist(activeAsset)} className="p-2 bg-[#161B22] border border-white/5 rounded-lg text-gray-400 hover:text-white transition-all">
                  {watchlist.includes(activeAsset) ? <Check className="w-4 h-4 text-[#34D399]" /> : <Plus className="w-4 h-4" />}
                </button>
              </div>

              {/* SIGNAL ALERTS ROW CONTAINER */}
              <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">Live Neural Alpha Signal Logs</div>
              <div className="grid grid-cols-1 gap-2 mb-4">
                {ASSET_DATABASE[activeAsset].signals.map((sig, i) => (
                  <div key={i} className="p-3 bg-[#161B22] border border-white/5 rounded-xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                    <span className="text-xs font-bold text-white">{sig.text}</span>
                  </div>
                ))}
              </div>

              {/* NARRATIVE TRACKING HISTORICAL SYSTEM ROW */}
              <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mt-4 mb-2">Historical Story-Arc Journey Track</div>
              <div className="border-l-2 border-[#161B22] pl-4 ml-2 mt-3 space-y-4">
                {ASSET_DATABASE[activeAsset].narrative.map((node, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[22px] top-1.5 w-2 h-2 rounded-full bg-[#C084FC] shadow-[0_0_8px_#C084FC]" />
                    <span className="text-[10px] font-bold text-[#C084FC] uppercase tracking-wider">{node.d}</span>
                    <h4 className="text-xs font-bold text-white">{node.h}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{node.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'suite' && (
          <motion.div key="suite" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="space-y-6">
            
            {/* COMPREHENSIVE REUSABLE FISCAL INTEGRITY METERS SCORE GAUGE CARD */}
            <div className="p-5 rounded-2xl bg-[#0D1117] border border-white/10 shadow-xl">
              <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">Financial Wellness Health Verification Matrix</div>
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="text-3xl font-extrabold tracking-tighter text-22D3EE text-[#22D3EE]">
                  {healthScore} <span className="text-xs text-gray-500">/ 100</span>
                </div>
                <p className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Aggregated Asset Safety Ratio</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 font-bold text-[10px] uppercase">Savings Core</span>
                  <input type="number" value={savings} onChange={(e)=>setSavings(Number(e.target.value))} className="bg-[#161B22] border border-white/5 rounded-xl p-3 text-white focus:outline-none focus:border-[#22D3EE]/40" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 font-bold text-[10px] uppercase">Debt Runway</span>
                  <input type="number" value={debt} onChange={(e)=>setDebt(Number(e.target.value))} className="bg-[#161B22] border border-white/5 rounded-xl p-3 text-white focus:outline-none focus:border-[#22D3EE]/40" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 font-bold text-[10px] uppercase">Diversification</span>
                  <input type="number" value={div} onChange={(e)=>setDiv(Number(e.target.value))} className="bg-[#161B22] border border-white/5 rounded-xl p-3 text-white focus:outline-none focus:border-[#22D3EE]/40" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 font-bold text-[10px] uppercase">Emergency Cash</span>
                  <input type="number" value={emerg} onChange={(e)=>setEmerg(Number(e.target.value))} className="bg-[#161B22] border border-white/5 rounded-xl p-3 text-white focus:outline-none focus:border-[#22D3EE]/40" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PERMANENT FIXED FOOTER BAR DECK ROUTER */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#010409]/90 border-t border-white/5 backdrop-blur-md h-20 flex items-center justify-around px-2 z-50">
        <button onClick={() => setActiveTab('wire')} className={`flex flex-col items-center justify-center text-[11px] font-bold w-16 h-14 rounded-xl transition-all ${activeTab === 'wire' ? 'text-white bg-white/5' : 'text-gray-500'}`}>
          <Newspaper className="w-5 h-5 mb-1" />
          <span>Wire</span>
        </button>
        <button onClick={() => setActiveTab('screens')} className={`flex flex-col items-center justify-center text-[11px] font-bold w-16 h-14 rounded-xl transition-all ${activeTab === 'screens' ? 'text-white bg-white/5' : 'text-gray-500'}`}>
          <Sliders className="w-5 h-5 mb-1" />
          <span>Screener</span>
        </button>
        <button onClick={() => setActiveTab('desk')} className={`flex flex-col items-center justify-center text-[11px] font-bold w-16 h-14 rounded-xl transition-all ${activeTab === 'desk' ? 'text-white bg-white/5' : 'text-gray-500'}`}>
          <Activity className="w-5 h-5 mb-1" />
          <span>Desk</span>
        </button>
        <button onClick={() => setActiveTab('suite')} className={`flex flex-col items-center justify-center text-[11px] font-bold w-16 h-14 rounded-xl transition-all ${activeTab === 'suite' ? 'text-white bg-white/5' : 'text-gray-500'}`}>
          <Briefcase className="w-5 h-5 mb-1" />
          <span>Quant Suite</span>
        </button>
      </div>

    </div>
  );
                                                 }
                
