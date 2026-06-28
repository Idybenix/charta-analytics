import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#1e293b] bg-[#020617] px-6 py-8 text-sm text-[#64748b]">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-y-6 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/docs/methodology" className="hover:text-[#94a3b8]">Methodology</Link>
            <Link href="/docs/data-sources" className="hover:text-[#94a3b8]">Data Sources</Link>
            <Link href="/docs/api" className="hover:text-[#94a3b8]">API</Link>
            <Link href="https://github.com" target="_blank" className="hover:text-[#94a3b8]">GitHub</Link>
            <Link href="https://x.com" target="_blank" className="hover:text-[#94a3b8]">X</Link>
            <Link href="/contact" className="hover:text-[#94a3b8]">Contact</Link>
            <Link href="/privacy" className="hover:text-[#94a3b8]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#94a3b8]">Terms</Link>
            <Link href="/status" className="hover:text-[#94a3b8]">Status</Link>
          </div>
          <div className="text-xs">
            © {new Date().getFullYear()} Charta Analytics. All rights reserved. • v2.0.0
          </div>
        </div>
        <div className="mt-4 text-[10px] text-[#475569]">
          Premium Web3 intelligence platform combining real-time on-chain data, statistical analysis, forecasting and AI-generated insights. Not financial advice.
        </div>
      </div>
    </footer>
  );
}
