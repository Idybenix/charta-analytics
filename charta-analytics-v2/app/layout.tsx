import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SearchProvider } from "@/components/search/search-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Charta Analytics | Web3 Intelligence Platform",
  description: "Premium on-chain analytics, forecasting, and AI-powered insights for Web3 protocols, chains, DEXs, bridges, and more. Production-ready intelligence platform.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-[#0a0f1e] text-[#e2e8f0] antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SearchProvider>
            <div className="flex min-h-screen flex-col">
              {/* Top Navigation */}
              <Header />

              <div className="flex flex-1">
                {/* Desktop Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 overflow-auto p-6 lg:p-8">
                  <div className="mx-auto max-w-[1600px]">
                    {children}
                  </div>
                </main>

                {/* Optional Right Panel - can be toggled */}
                {/* For V2, we keep it minimal; future: context panel */}
              </div>

              <Footer />
            </div>
            <Toaster />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
