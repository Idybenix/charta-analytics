export default function AIPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight">AI Insights Engine</h1>
      <p className="mt-2 text-[#94a3b8]">Automatically generated executive summaries, growth drivers, risk assessments, forecasts and key takeaways for every protocol and category. Powered by Charta's proprietary models referencing live metrics.</p>

      <div className="mt-8 card p-8">
        <div className="uppercase tracking-[2px] text-xs text-[#3b82f6] mb-2">EXAMPLE: ORBITER FINANCE</div>
        <h3 className="text-xl font-semibold mb-4">Key Takeaways — June 2026</h3>
        <ul className="space-y-3 text-sm leading-relaxed">
          <li><strong>Growth Drivers:</strong> New L2 expansions and improved bridging UX drove 34% MoM volume increase.</li>
          <li><strong>Risks:</strong> Elevated whale concentration (top 50 wallets = 41% volume). Relayer dependency should be diversified.</li>
          <li><strong>Opportunities:</strong> Strong retention on Base corridor. Recommend targeted incentives for new chains.</li>
          <li><strong>Forecast:</strong> Expected bridge volume $38–42M in next 30 days (model confidence 82%).</li>
        </ul>
      </div>

      <div className="mt-6 text-xs text-[#64748b]">
        All AI content references displayed metrics only. No hallucination. Full transparency on data sources and model version available in methodology docs.
      </div>
    </div>
  );
}
