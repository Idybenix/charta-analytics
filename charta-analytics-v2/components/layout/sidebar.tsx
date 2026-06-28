"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Link as LinkIcon,
  ArrowLeftRight,
  Landmark,
  TrendingUp,
  Coins,
  Droplet,
  Image,
  Bot,
  FileText,
  Search,
  Star,
  Settings,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/protocols", label: "Protocols", icon: Landmark },
  { href: "/chains", label: "Chains", icon: LinkIcon },
  { href: "/dexs", label: "DEXs", icon: ArrowLeftRight },
  { href: "/bridges", label: "Bridges", icon: ArrowLeftRight },
  { href: "/lending", label: "Lending", icon: Landmark },
  { href: "/perpetuals", label: "Perpetuals", icon: TrendingUp },
  { href: "/stablecoins", label: "Stablecoins", icon: Coins },
  { href: "/liquid-staking", label: "Liquid Staking", icon: Droplet },
  { href: "/rwa", label: "RWA", icon: FileText },
  { href: "/nft", label: "NFT", icon: Image },
  { href: "/ai", label: "AI Insights", icon: Bot },
  { href: "/reports", label: "Reports", icon: FileText },
  { href: "/research", label: "Research", icon: BookOpen },
  { href: "/watchlist", label: "Watchlist", icon: Star },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar hidden w-64 flex-shrink-0 border-r border-[#1e293b] lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-[#1e293b] px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3b82f6]">
              <span className="text-lg font-bold text-white">C</span>
            </div>
            <div>
              <div className="font-semibold tracking-tight">Charta Analytics</div>
              <div className="text-[10px] text-[#64748b]">V2 • Web3 Intelligence</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-3 text-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || 
              (item.href !== "/" && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link flex items-center gap-3 rounded-md px-3 py-2 text-[#94a3b8]",
                  isActive && "active text-[#e2e8f0]"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="border-t border-[#1e293b] p-3">
          <Link
            href="/settings"
            className="nav-link flex items-center gap-3 rounded-md px-3 py-2 text-[#94a3b8] hover:text-[#e2e8f0]"
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Link>
          <div className="mt-2 px-3 text-[10px] text-[#475569]">
            v2.0.0 • Production Ready
          </div>
        </div>
      </div>
    </aside>
  );
}
