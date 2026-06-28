"use client";

import { useState } from "react";
import { Search, RefreshCw, Bell, User } from "lucide-react";
import { useSearch } from "@/components/search/search-provider";
import { Button } from "@/components/ui/button";

export function Header() {
  const { openSearch } = useSearch();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate background refresh (in production: revalidate data)
    await new Promise(resolve => setTimeout(resolve, 800));
    setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setIsRefreshing(false);
    // Trigger global data refresh via context or event in full impl
    window.dispatchEvent(new CustomEvent('charta:refresh'));
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center border-b border-[#1e293b] bg-[#0a0f1e]/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-[#0a0f1e]/80">
      <div className="flex w-full items-center justify-between">
        {/* Mobile Logo */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b82f6]">
            <span className="text-sm font-bold text-white">C</span>
          </div>
          <span className="font-semibold">Charta</span>
        </div>

        {/* Global Search Trigger */}
        <button
          onClick={openSearch}
          className="search-input group flex flex-1 max-w-md items-center gap-3 rounded-lg border border-[#334155] bg-[#1e293b] px-4 py-2 text-left text-sm text-[#94a3b8] transition hover:border-[#3b82f6] lg:max-w-lg"
        >
          <Search className="h-4 w-4" />
          <span className="flex-1">Search protocols, chains, tokens, wallets...</span>
          <kbd className="hidden rounded bg-[#0f172a] px-2 py-0.5 text-xs text-[#64748b] group-hover:bg-[#1e293b] lg:inline-block">
            ⌘K
          </kbd>
        </button>

        <div className="flex items-center gap-3">
          {/* Last Updated + Manual Refresh */}
          <div className="hidden items-center gap-2 text-xs text-[#64748b] md:flex">
            <span>Last updated: {lastUpdated}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="h-8 w-8 text-[#94a3b8] hover:text-[#e2e8f0]"
              aria-label="Refresh data"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
            </Button>
          </div>

          {/* Alerts */}
          <Button variant="ghost" size="icon" className="relative h-9 w-9 text-[#94a3b8] hover:text-[#e2e8f0]">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#ef4444]" />
          </Button>

          {/* User / Account */}
          <div className="flex items-center gap-2 rounded-full border border-[#334155] bg-[#1e293b] pl-1 pr-4 py-1 text-sm">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3b82f6]/20 text-[#60a5fa]">
              <User className="h-4 w-4" />
            </div>
            <div className="hidden text-left text-xs leading-tight md:block">
              <div className="font-medium text-[#e2e8f0]">Idara Benn</div>
              <div className="text-[#64748b]">Pro • Charta</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
