"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Button } from "@/components/ui/button";

const chainData = [
  { name: "Ethereum", tvl: 42.1, volume: 4.8 },
  { name: "Base", tvl: 8.9, volume: 2.1 },
  { name: "Arbitrum", tvl: 11.2, volume: 1.9 },
  { name: "Solana", tvl: 6.4, volume: 3.2 },
];

const categoryDistribution = [
  { name: "DEX", value: 28 },
  { name: "Lending", value: 22 },
  { name: "Bridge", value: 15 },
  { name: "Liquid Staking", value: 18 },
  { name: "Perps", value: 12 },
  { name: "Other", value: 5 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#64748b"];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-[#94a3b8]">Comprehensive view across all categories • Filters apply globally</p>
        </div>
        <Button variant="secondary">Export Full Report (PDF/CSV)</Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-[#1e293b] bg-[#1e293b]/40 p-4 text-sm">
        <div className="font-medium text-[#64748b]">Global Filters:</div>
        <select className="rounded-md border border-[#334155] bg-[#0a0f1e] px-3 py-1.5 text-sm">
          <option>All Chains</option>
          <option>Ethereum + L2s</option>
          <option>EVM Only</option>
        </select>
        <select className="rounded-md border border-[#334155] bg-[#0a0f1e] px-3 py-1.5 text-sm">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>Last 90 Days</option>
          <option>Custom Range</option>
        </select>
        <div className="flex-1" />
        <div className="text-xs text-[#10b981]">Data fresh • Auto-sync enabled</div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="chart-container p-6">
          <div className="mb-4 font-semibold">TVL by Major Chain</div>
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={chainData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "none" }} />
                <Bar dataKey="tvl" fill="#3b82f6" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-container p-6">
          <div className="mb-4 font-semibold">Category Distribution (TVL)</div>
          <div className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={categoryDistribution} cx="50%" cy="50%" innerRadius={70} outerRadius={110} dataKey="value">
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-x-4 gap-y-1 text-xs">
            {categoryDistribution.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                {c.name}: {c.value}%
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-[#475569]">
        All charts are interactive (zoom/pan in full implementation). Data synchronized across views.
      </div>
    </div>
  );
}
