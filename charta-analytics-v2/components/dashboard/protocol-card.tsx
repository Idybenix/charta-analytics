import Link from "next/link";

interface ProtocolCardProps {
  name: string;
  tvl: string;
  volume: string;
  score: number;
  category: string;
}

export function ProtocolCard({ name, tvl, volume, score, category }: ProtocolCardProps) {
  return (
    <Link 
      href={`/protocols/${name.toLowerCase().replace(/\s+/g, "-")}`}
      className="group flex items-center justify-between rounded-lg border border-[#334155] bg-[#0a0f1e] p-4 transition hover:border-[#3b82f6]"
    >
      <div>
        <div className="font-medium group-hover:text-[#60a5fa]">{name}</div>
        <div className="text-xs text-[#64748b]">{category} • TVL {tvl} • Vol {volume}</div>
      </div>
      <div className="text-right">
        <div className="text-lg font-semibold tabular-nums text-[#10b981]">{score}</div>
        <div className="text-[10px] text-[#64748b]">Charta Score</div>
      </div>
    </Link>
  );
}
