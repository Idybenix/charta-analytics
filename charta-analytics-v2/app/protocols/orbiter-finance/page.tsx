"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const bridgeVolumeData = [
  { date: "May 1", volume: 18.2, txns: 42000 },
  { date: "May 15", volume: 24.7, txns: 61000 },
  { date: "Jun 1", volume: 29.1, txns: 78000 },
  { date: "Jun 15", volume: 31.8, txns: 85000 },
  { date: "Jun 28", volume: 33.4, txns: 91000 },
];

export default function OrbiterFinancePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-[#1e293b] pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center text-[#60a5fa] font-bold">OF</div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Orbiter Finance</h1>
              <div className="text-[#94a3b8]">Cross-chain Bridge • Ethereum Ecosystem</div>
            </div>
          </div>
          <div className="mt-2 flex gap-2">
            <a href="https://orbiter.finance" target="_blank" className="text-sm text-[#3b82f6] underline">Official Website</a>
            <a href="https://x.com" target="_blank" className="text-sm text-[#3b82f6] underline">Official X</a>
            <span className="text-sm text-[#64748b]">• Token: ORB (TBD)</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Add to Watchlist</Button>
          <Button>Download Report (PDF)</Button>
          <Button onClick={() => alert("In production: this would open AI chat with protocol-specific context")}>Ask AI about Orbiter</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "TVL", value: "$312M", change: "+4.2%" },
          { label: "24h Bridge Volume", value: "$33.4M", change: "+9.1%" },
          { label: "Transactions (30d)", value: "2.84M", change: "+12%" },
          { label: "Charta Health Score", value: "94/100", change: "Excellent" },
        ].map((m, i) => (
          <div key={i} className="kpi-card p-5 rounded-xl">
            <div className="text-xs text-[#64748b]">{m.label}</div>
            <div className="text-2xl font-semibold mt-1">{m.value}</div>
            <div className="text-emerald-500 text-sm mt-1">{m.change}</div>
          </div>
        ))}
      </div>

      {/* Charts + AI */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 chart-container p-6">
          <div className="font-semibold mb-4">Bridge Volume &amp; Transaction Trend</div>
          <div className="h-[260px]">
            <ResponsiveContainer>
              <LineChart data={bridgeVolumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#64748b" />
                <YAxis yAxisId="left" stroke="#64748b" />
                <YAxis yAxisId="right" orientation="right" stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "none" }} />
                <Line yAxisId="left" type="natural" dataKey="volume" stroke="#3b82f6" strokeWidth={3} name="Volume ($M)" />
                <Line yAxisId="right" type="natural" dataKey="txns" stroke="#10b981" strokeWidth={2} name="Txns" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-container p-6 flex flex-col">
          <div className="font-semibold mb-3 flex items-center gap-2">
            Charta AI Executive Summary
          </div>
          <div className="flex-1 text-sm text-[#cbd5e1] leading-relaxed">
            Orbiter processed $33.4M across 91k transactions in the last 30 days with strong user retention (68% WAU/MAU). Capital inflows primarily from Ethereum to Base and Arbitrum. 
            <span className="text-[#f59e0b]"> Whale activity elevated</span> — top 50 wallets account for 41% of volume. 
            Growth drivers: expanding to new L2s and improved UX. Risk: dependency on a small number of relayers.
          </div>
          <div className="text-[10px] mt-3 text-[#64748b]">Methodology available in docs. Forecast: +18% volume next 30 days (model confidence 82%).</div>
        </div>
      </div>

      {/* Charta Exclusive Metrics */}
      <div>
        <h3 className="font-semibold mb-3">Charta Exclusive Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            { name: "Growth Score", value: "91", desc: "Strong recent inflows" },
            { name: "Liquidity Quality", value: "88", desc: "Diverse liquidity sources" },
            { name: "Retention Score", value: "76", desc: "Above sector average" },
            { name: "Whale Risk", value: "Medium", desc: "Monitor concentration" },
          ].map((m, idx) => (
            <div key={idx} className="rounded-lg border border-[#334155] p-4">
              <div className="flex justify-between">
                <span>{m.name}</span>
                <span className="font-mono font-semibold text-[#10b981]">{m.value}</span>
              </div>
              <div className="text-xs text-[#64748b] mt-1">{m.desc}</div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-[#475569]">Full methodology and calculation transparency available in Documentation.</p>
      </div>

      <div className="flex gap-3">
        <Button variant="secondary">Download CSV / Excel</Button>
        <Button variant="secondary">View Weekly Report</Button>
        <Button>Compare with Across / Synapse</Button>
      </div>
    </div>
  );
}
