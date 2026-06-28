"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Area, AreaChart, PieChart, Pie, Cell
} from "recharts";
import { TrendingUp, Users, DollarSign, Activity, ArrowUp, ArrowDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KPICard } from "@/components/dashboard/kpi-card";
import { ProtocolCard } from "@/components/dashboard/protocol-card";

// Mock Global KPIs (in production: fetched via TanStack Query + multiple API fallbacks)
const globalKPIs = [
  { label: "Total Value Locked", value: "$87.4B", change: "+2.8%", positive: true, icon: DollarSign },
  { label: "24h Volume", value: "$12.9B", change: "+14.2%", positive: true, icon: Activity },
  { label: "Daily Transactions", value: "48.2M", change: "-3.1%", positive: false, icon: Zap },
  { label: "Active Users (24h)", value: "2.84M", change: "+8.7%", positive: true, icon: Users },
  { label: "Total Fees", value: "$48.6M", change: "+21.4%", positive: true, icon: DollarSign },
  { label: "Bridge Volume (24h)", value: "$1.84B", change: "+6.9%", positive: true, icon: TrendingUp },
];

// Mock time series for main chart
const tvlTrend = [
  { date: "Jun 1", tvl: 78.2, volume: 9.1 },
  { date: "Jun 8", tvl: 81.5, volume: 11.4 },
  { date: "Jun 15", tvl: 83.9, volume: 10.8 },
  { date: "Jun 22", tvl: 85.1, volume: 13.2 },
  { date: "Jun 28", tvl: 87.4, volume: 12.9 },
];

const topGainers = [
  { name: "Pendle", change: "+34.2%", category: "Yield" },
  { name: "EigenLayer", change: "+19.8%", category: "Restaking" },
  { name: "Hyperliquid", change: "+12.4%", category: "Perps" },
];

const topLosers = [
  { name: "SomeProtocol", change: "-8.7%", category: "Lending" },
];

const trendingProtocols = [
  { name: "Orbiter Finance", tvl: "$312M", volume: "$33M", score: 94, category: "Bridge" },
  { name: "Uniswap v4", tvl: "$4.8B", volume: "$2.1B", score: 91, category: "DEX" },
  { name: "Lido", tvl: "$32.1B", volume: "$1.2B", score: 89, category: "Liquid Staking" },
];

const aiSummary = `Global TVL grew 2.8% WoW driven primarily by restaking inflows into EigenLayer and yield opportunities on Pendle. Bridge activity remains robust with Orbiter Finance processing $33M in volume across 91k transactions. User retention on L2s continues to improve, though Ethereum mainnet fees remain elevated. Key risk: concentration of whale holdings in top 3 protocols. Opportunity: expanding RWA tokenization pipelines showing early momentum.`;

export default function ChartaAnalyticsV2Homepage() {
  const [timeRange, setTimeRange] = useState<"24H" | "7D" | "30D" | "90D">("30D");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate filter change updating data (in full V2: refetch with date params + ISR)
  const handleTimeRangeChange = (range: "24H" | "7D" | "30D" | "90D") => {
    setTimeRange(range);
    // In production this would trigger consistent updates across all charts/metrics via global state or URL params
  };

  const simulateRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 650);
  };

  return (
    <div className="space-y-8 fade-in">
      {/* Hero Section */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[#1e293b] bg-[#1e293b]/60 p-8 md:flex-row md:items-center">
        <div>
          <div className="inline-flex items-center rounded-full bg-[#3b82f6]/10 px-3 py-1 text-xs font-medium text-[#60a5fa] mb-3">
            PRODUCTION READY • V2
          </div>
          <h1 className="text-4xl font-semibold tracking-tighter">Web3 Intelligence Platform</h1>
          <p className="mt-2 max-w-lg text-[#94a3b8]">
            Real-time on-chain data, statistical forecasting, exclusive Charta metrics, and AI-generated insights for protocols, researchers, and investors.
          </p>
          <div className="mt-5 flex gap-3">
            <Button onClick={() => window.location.href = '/dashboard'}>Explore Dashboard</Button>
            <Button variant="secondary" onClick={() => window.location.href = '/reports'}>Download Latest Reports</Button>
          </div>
        </div>
        <div className="text-right text-sm text-[#64748b]">
          <div>Multi-source • Fallback resilient</div>
          <div>Dune • DefiLlama • The Graph • RPCs</div>
        </div>
      </div>

      {/* Global KPIs */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Global Market Overview</h2>
          <div className="flex items-center gap-2 text-sm">
            {(["24H", "7D", "30D", "90D"] as const).map((r) => (
              <button
                key={r}
                onClick={() => handleTimeRangeChange(r)}
                className={`rounded-md px-3 py-1 transition ${timeRange === r ? "bg-[#3b82f6] text-white" : "bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155]"}`}
              >
                {r}
              </button>
            ))}
            <Button variant="ghost" size="sm" onClick={simulateRefresh} disabled={isRefreshing}>
              Refresh
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {globalKPIs.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* TVL & Volume Trend */}
        <div className="lg:col-span-3 chart-container p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="font-semibold">TVL &amp; Volume Trend</div>
              <div className="text-xs text-[#64748b]">Last 30 days • Auto-refreshes every 5 min</div>
            </div>
            <div className="text-xs text-[#10b981]">▲ 11.8% MoM</div>
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer>
              <AreaChart data={tvlTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#64748b" />
                <YAxis yAxisId="left" stroke="#64748b" />
                <YAxis yAxisId="right" orientation="right" stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: "6px" }} />
                <Area yAxisId="left" type="natural" dataKey="tvl" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.15} name="TVL ($B)" />
                <Line yAxisId="right" type="natural" dataKey="volume" stroke="#10b981" strokeWidth={2} name="Volume ($B)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Executive Summary */}
        <div className="lg:col-span-2 chart-container flex flex-col p-6">
          <div className="mb-3 flex items-center gap-2">
            <Zap className="h-4 w-4 text-[#3b82f6]" />
            <div className="font-semibold">Charta AI Summary</div>
          </div>
          <div className="flex-1 text-sm leading-relaxed text-[#cbd5e1]">
            {aiSummary}
          </div>
          <div className="mt-4 text-[10px] text-[#64748b]">
            Generated from live metrics • Updated {new Date().toLocaleDateString()}
          </div>
          <Button variant="secondary" size="sm" className="mt-3 w-full" onClick={() => window.location.href = '/ai'}>
            View Full AI Insights &amp; Forecasts
          </Button>
        </div>
      </div>

      {/* Trending + Market Highlights */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Trending Protocols */}
        <div className="chart-container p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Trending Protocols</h3>
            <Button variant="ghost" size="sm" onClick={() => window.location.href = '/protocols'}>View all</Button>
          </div>
          <div className="space-y-3">
            {trendingProtocols.map((p, i) => (
              <ProtocolCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* Market Highlights + Charta Scores */}
        <div className="chart-container p-6">
          <h3 className="mb-4 font-semibold">Market Highlights &amp; Charta Scores</h3>
          
          <div className="mb-5 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-[#64748b] mb-1.5">Top Gainers (24h)</div>
              {topGainers.map((g, i) => (
                <div key={i} className="flex justify-between py-1 border-b border-[#1e293b] last:border-none">
                  <span>{g.name} <span className="text-xs text-[#64748b]">({g.category})</span></span>
                  <span className="text-[#10b981]">{g.change}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="text-[#64748b] mb-1.5">Key Observations</div>
              <ul className="space-y-1.5 text-xs text-[#94a3b8]">
                <li>• Strong capital inflows into restaking (+$1.2B)</li>
                <li>• L2 user retention at 68% (↑4pp)</li>
                <li>• Stablecoin supply growth steady at 3.1%</li>
                <li>• Whale concentration risk elevated in top protocols</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-[#0a0f1e] p-4 text-xs">
            <div className="font-medium text-[#60a5fa] mb-2">Charta Health Score — Ecosystem: 87/100</div>
            <div className="text-[#64748b]">High momentum in DeFi primitives. Liquidity quality strong. Monitor developer activity on newer L2s.</div>
          </div>
        </div>
      </div>

      {/* Latest Reports & Research CTA */}
      <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#1e293b] bg-[#1e293b]/40 p-6 md:flex-row md:items-center">
        <div>
          <div className="font-semibold">Latest Intelligence</div>
          <div className="text-sm text-[#94a3b8]">Orbiter Finance Q2 Bridge Report • Weekly Market Pulse • RWA Tokenization Deep Dive</div>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => window.location.href = '/reports'}>Browse All Reports</Button>
          <Button onClick={() => window.location.href = '/research'}>Research Hub</Button>
        </div>
      </div>

      <div className="text-center text-xs text-[#475569] pt-4">
        Data aggregated from Dune, DefiLlama, CoinGecko, RPC nodes with fallback logic. Charta exclusive metrics include methodology transparency.
      </div>
    </div>
  );
}
