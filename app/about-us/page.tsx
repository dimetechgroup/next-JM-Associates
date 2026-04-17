import CommonHero from "@/components/common-hero";
import { CompanyHistory, Mission_Vission } from "@/components/ui/about";
import React from "react";
import Team from "../team/page";
import TeamCard from "../team/page";
// app/about/page.tsx  (or wherever your About Us page is)

import type { Metadata } from "next";
import { assets } from "@/public/assets";

export const metadata: Metadata = {
  title: "About JM Associates LLP | Audit, Tax & Advisory Firm in Kenya",
  description:
    "JM Associates LLP is a leading audit and tax consultancy firm in Nairobi, Kenya, providing professional audit, assurance, tax, advisory, and business process outsourcing services across East Africa. With over 50 professional accountants and membership in ANTEA International (70+ countries), we help businesses grow profitably.",

  keywords: [
    "about JM Associates",
    "audit firm Nairobi",
    "tax consultants Kenya",
    "advisory services Kenya",
    "JM Associates LLP",
    "audit and assurance East Africa",
    "ANTEA member firm Kenya",
    "professional accountants Nairobi",
  ],

  openGraph: {
    title: "About JM Associates LLP - Leading Audit & Tax Firm in Kenya",
    description:
      "Established audit, tax consultancy, and advisory firm in Nairobi with over 10 years of excellence. More than 50 professionals serving businesses across East Africa. Member of ANTEA International.",
    images: [
      {
        url: assets.aboutImage, // Create a dedicated 1200x630 image for this page
        width: 1200,
        height: 1200,
        alt: "JM Associates LLP Team - Audit, Tax and Advisory Firm in Nairobi",
      },
    ],
    type: "website",
    locale: "en_KE",
  },

  twitter: {
    card: "summary_large_image",
    title: "About JM Associates LLP | Audit, Tax & Advisory Experts",
    description:
      "Discover our story, vision, mission, and the experienced team behind Kenya’s trusted audit and tax consultancy firm.",
  },

  alternates: {
    canonical: "https://jmassociates.co.ke/about", // Very important for SEO
  },

  // Optional but recommended for About page
  authors: [{ name: "JM Associates LLP" }],
};
const page = () => {
  return (
    <>
      <CommonHero title="About Us" image="/about-new.jpeg" />
      <CompanyHistory />
      <Mission_Vission />
      <TeamCard />
    </>
  );
};

export default page;
