import Loading from "@/components/Loading";
import BlogsCom from "@/components/pageComponent/blogsCo";
import React, { Suspense } from "react";

// app/news/page.tsx   (or app/insights/page.tsx — wherever this page lives)

import type { Metadata } from "next";
import { assets } from "@/public/assets";

export const metadata: Metadata = {
  title: "Latest News & Insights | Audit, Tax & Advisory | JM Associates LLP",
  description:
    "Stay updated with the latest news, expert insights, tax updates, audit trends, and business advisory strategies from JM Associates LLP – a leading audit and tax consultancy firm in Nairobi, Kenya. Expert perspectives for businesses across East Africa.",

  keywords: [
    "latest news audit Kenya",
    "tax insights Nairobi",
    "audit news Kenya",
    "business advisory insights",
    "tax updates Kenya",
    "KRA tax news",
    "JM Associates LLP insights",
    "audit and tax news East Africa",
    "professional services news Kenya",
    "financial advisory insights",
  ],

  openGraph: {
    title: "Latest News & Insights - JM Associates LLP",
    description:
      "Expert articles, tax updates, audit trends, and strategic business insights from one of Kenya’s top audit and advisory firms.",
    images: [
      {
        url: assets.logo, // Recommended: 1200×630 image with “News & Insights” branding
        width: 1200,
        height: 1200,
        alt: "Latest News & Insights from JM Associates LLP – Audit, Tax and Advisory Experts in Kenya",
      },
    ],
    type: "website",
    locale: "en_KE",
  },

  twitter: {
    card: "summary_large_image",
    title: "Latest News & Insights | JM Associates LLP",
    description:
      "Expert audit, tax, and advisory insights for businesses in Kenya and East Africa.",
  },

  alternates: {
    canonical: "https://jmassociates.co.ke/news", // Change to /insights if that’s your actual route
  },

  authors: [{ name: "JM Associates LLP" }],
};

const HomeNews = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BlogsCom />
    </Suspense>
  );
};

export default HomeNews;
