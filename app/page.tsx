"use client";

import React, { useState } from 'react';
import { 
  TrendingUp, TrendingDown, DollarSign, BarChart2, 
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

          
