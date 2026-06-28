import { LucideIcon, ArrowUp, ArrowDown } from "lucide-react";

interface KPICardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: LucideIcon;
}

export function KPICard({ label, value, change, positive, icon: Icon }: KPICardProps) {
  return (
    <div className="kpi-card rounded-xl p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#64748b]">{label}</div>
          <div className="mt-1.5 text-3xl font-semibold tabular-nums tracking-tighter">{value}</div>
        </div>
        <div className="rounded-lg bg-[#0a0f1e] p-2 text-[#3b82f6]">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className={`mt-3 inline-flex items-center text-sm font-medium ${positive ? "text-[#10b981]" : "text-[#ef4444]"}`}>
        {positive ? <ArrowUp className="mr-1 h-3.5 w-3.5" /> : <ArrowDown className="mr-1 h-3.5 w-3.5" />}
        {change}
        <span className="ml-1.5 text-xs text-[#64748b]">vs previous period</span>
      </div>
    </div>
  );
}
