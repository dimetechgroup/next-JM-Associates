import CommonHero from "@/components/common-hero";
import Loading from "@/components/Loading";
import { MainService } from "@/components/ui/services";
import React, { Suspense } from "react";

// app/services/page.tsx

import type { Metadata } from "next";
import { assets } from "@/public/assets";

export const metadata: Metadata = {
  title: "Our Services | Audit, Tax Consultancy & Advisory | JM Associates LLP",
  description:
    "Professional audit & assurance, tax consultancy, advisory services, and business process outsourcing in Nairobi, Kenya. JM Associates LLP helps businesses across East Africa achieve compliance, reduce risks, and drive growth with tailored financial solutions.",

  keywords: [
    "audit firm Nairobi",
    "tax consultants Kenya",
    "advisory services Kenya",
    "business process outsourcing Kenya",
    "external audit Kenya",
    "internal audit Nairobi",
    "forensic audit",
    "tax compliance Kenya",
    "tax health check",
    "transfer pricing Kenya",
    "KRA tax returns",
    "JM Associates LLP",
    "ANTEA member firm Kenya",
  ],

  openGraph: {
    title: "Our Services - Audit, Tax & Advisory Solutions | JM Associates LLP",
    description:
      "Expert audit, tax consultancy, advisory, and business process outsourcing services tailored for businesses in Nairobi and East Africa. Member of ANTEA International.",
    type: "website",
    images: [
      {
        url: assets.consultancy, // Create a dedicated 1200x630 image showcasing your services
        width: 1200,
        height: 1200,
        alt: "Professional Audit, Tax Consultancy, Advisory Services & Business Process Outsourcing by JM Associates LLP in Nairobi, Kenya",
      },
    ],
    locale: "en_KE",
  },

  twitter: {
    card: "summary_large_image",
    title: "Audit, Tax Consultancy & Advisory Services | JM Associates LLP",
    description:
      "Comprehensive professional services including audit, tax, advisory, and outsourcing solutions for businesses across Kenya and East Africa.",
  },

  alternates: {
    canonical: "https://jmassociates.co.ke/services",
  },

  authors: [{ name: "JM Associates LLP" }],
};

const page = () => {
  return (
    <>
      <CommonHero title="Services" image="/about-new.jpeg" />
      <Suspense fallback={<Loading />}>
        <MainService />
      </Suspense>
    </>
  );
};

export default page;
