import Loading from "@/components/Loading";
import Careers from "@/components/pageComponent/careerCo";
import React, { Suspense } from "react";

// app/careers/page.tsx   (or app/join-our-team/page.tsx)

import type { Metadata } from "next";
import { assets } from "@/public/assets";

export const metadata: Metadata = {
  title:
    "Careers | Join Our Audit, Tax & Advisory Team in Nairobi | JM Associates LLP",
  description:
    "Join JM Associates LLP – a leading audit and tax consultancy firm in Nairobi, Kenya. Explore exciting career opportunities in audit, assurance, tax, advisory, and business process outsourcing. Grow your career with over 50 professionals across East Africa and become part of an ANTEA International member firm.",

  keywords: [
    "careers audit firm Nairobi",
    "jobs tax consultancy Kenya",
    "audit jobs Nairobi",
    "tax consultant jobs Kenya",
    "advisory careers East Africa",
    "join audit team Kenya",
    "accounting jobs Nairobi",
    "JM Associates LLP careers",
    "professional accountant jobs Kenya",
    "audit and tax careers East Africa",
  ],

  openGraph: {
    title: "Careers at JM Associates LLP | Join Our Growing Team in Kenya",
    description:
      "Build your career with a dynamic audit, tax, and advisory firm in Nairobi. Opportunities for accountants, consultants, and finance professionals across East Africa.",
    images: [
      {
        url: assets.careerImage, // Recommended: 1200×630 image (team photo + "Join Our Team" text)
        width: 1200,
        height: 1200,
        alt: "Careers at JM Associates LLP – Join Our Audit and Tax Team in Nairobi",
      },
    ],
    type: "website",
    locale: "en_KE",
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers | Join JM Associates LLP in Nairobi",
    description:
      "Exciting opportunities in audit, tax consultancy, advisory, and outsourcing. Grow with Kenya’s leading professional services firm.",
  },

  alternates: {
    canonical: "https://jmassociates.co.ke/careers", // Update if your route is /join-our-team
  },

  authors: [{ name: "JM Associates LLP" }],
};

const CareersPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Careers />
    </Suspense>
  );
};

export default CareersPage;
