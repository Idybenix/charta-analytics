"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const trendingSearches = [
  "Orbiter Finance", "Uniswap", "Base", " Arbitrum", "Lido", "MakerDAO", "Pendle", "EigenLayer"
];

const recentSearches = [
  "Orbiter Finance Bridge Volume", "ETH Mainnet TVL", "USDC on Solana"
];

const mockResults = [
  { type: "Protocol", name: "Orbiter Finance", href: "/protocols/orbiter-finance", meta: "Bridge • $33M volume" },
  { type: "Chain", name: "Base", href: "/chains/base", meta: "L2 • 1.2M daily txns" },
  { type: "DEX", name: "Uniswap", href: "/dexs/uniswap", meta: "DEX • $2.4B volume" },
  { type: "Bridge", name: "Across", href: "/bridges/across", meta: "Bridge • High security" },
  { type: "Token", name: "ETH", href: "/protocols/ethereum", meta: "Native • $3,400" },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(mockResults);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (!value.trim()) {
      setResults(mockResults);
      return;
    }
    // Simple filter for demo (in production: server-side search + typesense/algolia)
    const filtered = mockResults.filter(
      (r) =>
        r.name.toLowerCase().includes(value.toLowerCase()) ||
        r.type.toLowerCase().includes(value.toLowerCase()) ||
        r.meta.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered.length > 0 ? filtered : mockResults);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.12, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 w-full max-w-[640px] rounded-2xl border border-[#334155] bg-[#0f172a] shadow-2xl"
          >
            {/* Search Input */}
            <div className="flex items-center border-b border-[#1e293b] px-5 py-4">
              <Search className="mr-3 h-5 w-5 text-[#64748b]" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search protocols, chains, tokens, wallets, ENS..."
                className="flex-1 bg-transparent text-lg placeholder:text-[#64748b] focus:outline-none"
              />
              <button onClick={onClose} className="ml-2 rounded-full p-1.5 text-[#64748b] hover:bg-[#1e293b] hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Results or Suggestions */}
            <div className="max-h-[420px] overflow-auto p-2 text-sm">
              {query.length > 0 && results.length > 0 && (
                <div className="mb-2 px-3 pt-2 text-xs uppercase tracking-widest text-[#64748b]">Results</div>
              )}

              {results.map((result, idx) => (
                <Link
                  key={idx}
                  href={result.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-4 py-3 hover:bg-[#1e293b]"
                >
                  <div>
                    <div className="font-medium text-[#e2e8f0]">{result.name}</div>
                    <div className="text-xs text-[#64748b]">{result.meta}</div>
                  </div>
                  <div className="rounded bg-[#1e293b] px-2.5 py-0.5 text-[10px] text-[#94a3b8]">
                    {result.type}
                  </div>
                </Link>
              ))}

              {!query && (
                <>
                  {/* Recent */}
                  <div className="px-3 pt-3 pb-1 text-xs uppercase tracking-widest text-[#64748b] flex items-center gap-2">
                    <Clock className="h-3 w-3" /> Recent Searches
                  </div>
                  {recentSearches.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleSearch(s)}
                      className="w-full rounded-lg px-4 py-2.5 text-left text-[#e2e8f0] hover:bg-[#1e293b]"
                    >
                      {s}
                    </button>
                  ))}

                  {/* Trending */}
                  <div className="px-3 pt-4 pb-1 text-xs uppercase tracking-widest text-[#64748b] flex items-center gap-2">
                    <TrendingUp className="h-3 w-3" /> Trending
                  </div>
                  <div className="flex flex-wrap gap-2 px-3 pb-3">
                    {trendingSearches.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => handleSearch(s)}
                        className="rounded-full border border-[#334155] bg-[#1e293b] px-3 py-1 text-xs text-[#94a3b8] hover:border-[#3b82f6] hover:text-[#60a5fa]"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="border-t border-[#1e293b] px-5 py-3 text-[10px] text-[#475569]">
              Press <kbd className="rounded bg-[#1e293b] px-1.5 py-px">ESC</kbd> to close • Supports protocols, chains, tokens, wallets
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
