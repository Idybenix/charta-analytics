import { Button } from "@/components/ui/button";

export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight mb-2">Research &amp; Reports</h1>
      <p className="text-[#94a3b8] mb-8">Downloadable weekly, monthly, and quarterly intelligence reports with forecasts and recommendations.</p>

      <div className="space-y-4">
        {[
          { title: "Orbiter Finance — Q2 2026 Bridge Intelligence Report", date: "Jun 25, 2026", type: "Quarterly" },
          { title: "Weekly Market Pulse — Week 26", date: "Jun 28, 2026", type: "Weekly" },
          { title: "RWA Tokenization Landscape Deep Dive", date: "Jun 20, 2026", type: "Research" },
          { title: "L2 User Retention &amp; Capital Efficiency Analysis", date: "Jun 18, 2026", type: "Monthly" },
        ].map((r, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-[#1e293b] bg-[#1e293b]/40 p-5">
            <div>
              <div className="font-medium">{r.title}</div>
              <div className="text-xs text-[#64748b]">{r.date} • {r.type}</div>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">PDF</Button>
              <Button variant="secondary" size="sm">CSV</Button>
              <Button size="sm">Excel</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
