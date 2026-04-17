import { BottomFooter, MainFooter } from "@/components/ui/footer";
import { BottomNav, MainNav, TopNav } from "@/components/ui/navbar";
import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import Whatsapp from "@/components/Whatsapp";
import NextTopLoader from "nextjs-toploader";
import { assets } from "@/public/assets";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});
import "./globals.css";
import PageToTheTop from "@/components/common/PageToTheTop";

// app/layout.tsx

export const metadata: Metadata = {
  metadataBase: new URL("https://jmassociates.co.ke"), // Replace with your actual domain
  title: {
    template: "%s | JM Associates LLP",
    default: "JM Associates LLP - Audit, Tax & Advisory Firm in Kenya",
  },
  description:
    "Professional audit, tax consultancy, and advisory services in Nairobi, Kenya. Expert financial solutions for businesses across East Africa. Member of ANTEA International.",
  keywords: [
    "audit firm Nairobi",
    "tax consultants Kenya",
    "advisory services Kenya",
    "external audit",
    "internal audit",
    "forensic audit",
    "tax compliance Nairobi",
    "business process outsourcing",
    "JM Associates LLP",
    "ANTEA member",
  ],
  authors: [{ name: "JM Associates LLP" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: assets.logo, // Create a dedicated 1200x630 image for OG
        width: 1500,
        height: 1500,
        alt: "JM Associates LLP - Leading Audit, Tax & Advisory Firm in Nairobi, Kenya",
      },
    ],
    siteName: "JM Associates LLP",
    title: "JM Associates LLP - Leading Audit, Tax & Advisory Firm in Kenya",
    description:
      "Discover our professional audit, tax consultancy, and advisory services in Nairobi, Kenya. We help businesses grow profitably across East Africa. Member of ANTEA International.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader
          color="#aa1f30"
          height={5}
          shadow="0 0 10px #FF5733, 0 0 5px #FF5733"
        />
        <Provider>
          <MainNav />
          {children}
          <MainFooter />
          <PageToTheTop />
          <BottomFooter />
          <Whatsapp />
        </Provider>
        {/* <Analytics />
        <SpeedInsights /> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
