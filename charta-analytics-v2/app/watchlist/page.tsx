export default function WatchlistPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold tracking-tight">Watchlist &amp; Alerts</h1>
      <p className="mt-2 text-[#94a3b8]">Pin protocols, metrics, and dashboards. Receive alerts for TVL movements, whale transfers, governance events, and more.</p>

      <div className="mt-8 card p-8 text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-[#1e293b] flex items-center justify-center">★</div>
        <div className="font-medium">Your watchlist is empty</div>
        <p className="text-sm text-[#64748b] mt-1">Start by favoriting protocols from the Protocols or Dashboard pages. Alerts and saved views coming in V2.1.</p>
      </div>
    </div>
  );
}
