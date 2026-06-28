import Link from "next/link";
import { Button } from "@/components/ui/button";

const protocols = [
  { slug: "orbiter-finance", name: "Orbiter Finance", category: "Bridge", tvl: "$312M", volume: "$33.4M", score: 94, chains: "ETH, Base, Arbitrum, Optimism" },
  { slug: "uniswap", name: "Uniswap", category: "DEX", tvl: "$4.82B", volume: "$2.14B", score: 91, chains: "Ethereum, Base, Arbitrum, Polygon" },
  { slug: "lido", name: "Lido", category: "Liquid Staking", tvl: "$32.1B", volume: "$1.18B", score: 89, chains: "Ethereum, Polygon, Solana" },
  { slug: "aave", name: "Aave", category: "Lending", tvl: "$12.4B", volume: "$890M", score: 87, chains: "Ethereum, Polygon, Avalanche" },
  { slug: "pendle", name: "Pendle", category: "Yield", tvl: "$4.1B", volume: "$420M", score: 85, chains: "Ethereum, Arbitrum, Mantle" },
];

export default function ProtocolsPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Protocols</h1>
          <p className="text-[#94a3b8]">All tracked protocols with Charta Health Scores and key metrics</p>
        </div>
        <Button>Filter &amp; Compare</Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#1e293b]">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th>Protocol</th>
              <th>Category</th>
              <th>TVL</th>
              <th>24h Volume</th>
              <th>Charta Score</th>
              <th>Chains</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {protocols.map((p) => (
              <tr key={p.slug} className="hover:bg-[#1e293b]">
                <td className="font-medium">{p.name}</td>
                <td><span className="rounded bg-[#1e293b] px-2 py-0.5 text-xs">{p.category}</span></td>
                <td className="tabular-nums">{p.tvl}</td>
                <td className="tabular-nums text-[#10b981]">{p.volume}</td>
                <td>
                  <span className="font-mono text-lg font-semibold text-[#10b981]">{p.score}</span>
                  <span className="text-xs text-[#64748b]">/100</span>
                </td>
                <td className="text-xs text-[#94a3b8]">{p.chains}</td>
                <td>
                  <Link href={`/protocols/${p.slug}`} className="text-[#3b82f6] hover:underline">View →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-center text-xs text-[#475569]">Click any protocol for detailed overview, forecasts, AI insights, downloadable reports and Charta exclusive metrics methodology.</p>
    </div>
  );
}
