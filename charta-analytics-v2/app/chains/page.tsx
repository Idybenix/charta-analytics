import Link from "next/link";

export default function ChainsPage() {
  const chains = [
    { name: "Ethereum", tvl: "$42.1B", txns: "12.4M", users: "892k", change: "+1.8%" },
    { name: "Base", tvl: "$8.9B", txns: "8.2M", users: "1.1M", change: "+14.2%" },
    { name: "Arbitrum", tvl: "$11.2B", txns: "6.1M", users: "684k", change: "+3.9%" },
    { name: "Solana", tvl: "$6.4B", txns: "94.2M", users: "2.4M", change: "+22.1%" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight mb-2">Chains</h1>
      <p className="text-[#94a3b8] mb-6">Real-time metrics across major blockchains with Charta analysis.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chains.map((c, i) => (
          <Link key={i} href={`/chains/${c.name.toLowerCase()}`} className="card p-5 block hover:border-[#3b82f6]">
            <div className="flex justify-between">
              <div className="font-semibold text-lg">{c.name}</div>
              <div className="text-emerald-500">{c.change}</div>
            </div>
            <div className="mt-4 grid grid-cols-3 text-sm">
              <div>TVL<br /><span className="font-mono text-xl">{c.tvl}</span></div>
              <div>24h Txns<br /><span className="font-mono text-xl">{c.txns}</span></div>
              <div>Active Users<br /><span className="font-mono text-xl">{c.users}</span></div>
            </div>
          </Link>
        ))}
      </div>
      <p className="text-center mt-8 text-xs text-[#475569]">Full chain pages include developer activity, gas metrics, bridge flows, and AI-generated chain health reports.</p>
    </div>
  );
}
