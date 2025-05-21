import { BottomFooter, MainFooter } from "@/components/ui/footer";
import { BottomNav, MainNav, TopNav } from "@/components/ui/navbar";
import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import Whatsapp from "@/components/Whatsapp";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JM Associates",
  description:
    "We are a consultancy firm that offers professional services in Audit, Tax, Consulting, and Financial advisory to public and private clients in Africa, spanning multiple industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader color="#aa1f30" showSpinner />
        <Provider>
          <TopNav />
          <MainNav />
          <BottomNav />
          {children}
          <MainFooter />
          <BottomFooter />
          <Whatsapp />
        </Provider>
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  );
}
