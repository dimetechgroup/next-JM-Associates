import CommonHero from "@/components/common-hero";
import Map from "@/components/map";
import { ContactDetails } from "@/components/ui/contact";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

// app/contact/page.tsx

import type { Metadata } from "next";
import { url } from "inspector/promises";
import { assets } from "@/public/assets";

export const metadata: Metadata = {
  title:
    "Contact Us | Audit, Tax & Advisory Experts in Nairobi | JM Associates LLP",
  description:
    "Contact JM Associates LLP – Leading audit firm in Nairobi, Kenya. Get expert help with audit & assurance, tax consultancy, advisory services, and business process outsourcing. Reach our team in Nairobi for professional financial solutions across East Africa.",
  keywords: [
    "contact audit firm Nairobi",
    "tax consultants Nairobi contact",
    "audit services Kenya contact",
    "tax advisory Nairobi",
    "JM Associates LLP contact",
    "accounting firm Nairobi",
    "KRA tax help Kenya",
    "business advisory services contact",
    "audit and tax firm East Africa",
  ],

  openGraph: {
    title: "Contact JM Associates LLP | Audit, Tax & Advisory Firm Nairobi",
    description:
      "Get in touch with our experienced team for professional audit, tax consultancy, advisory, and outsourcing services in Nairobi and across East Africa.",
    images: [
      {
        url: assets.antea, // Create a 1200x630 image (office, team, or map)
        width: 1200,
        height: 1200,
        alt: "Contact JM Associates LLP - Audit and Tax Firm in Nairobi, Kenya",
      },
    ],
    type: "website",
    locale: "en_KE",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact JM Associates LLP - Nairobi Audit & Tax Experts",
    description:
      "Reach out for expert audit, tax, and advisory support in Kenya. Professional team ready to assist your business.",
  },

  alternates: {
    canonical: "https://jmassociates.co.ke/contact",
  },

  authors: [{ name: "JM Associates LLP" }],

  // Optional: Help with local SEO
  other: {
    "business:contact_data:street_address":
      "8th Floor, Westland Towers, Nairobi, Kenya", // Replace with actual address if available
    "business:contact_data:locality": "Nairobi",
    "business:contact_data:country": "Kenya",
  },
};
const page = () => {
  return (
    <>
      <Box
        position="relative"
        w="100%"
        h={{ base: "300px", md: "300px", lg: "90vh" }}
        bgImage={`url("/slider/Slide2.jpg")`}
        bgSize="contain"
        bgRepeat={"no-repeat"}
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        pb={5} // Padding at the bottom
      >
        {/* Background Blur & Dark Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
        />

        {/* Title Text */}
        <Heading
          position="relative"
          color="white"
          fontSize={{ base: "2xl", md: "4xl", lg: "10xl" }}
          fontWeight="bold"
          maxW="90%"
          textShadow="0 4px 8px rgba(0, 0, 0, 0.7)"
        >
          Contact Us
        </Heading>
      </Box>
      <Map />
      <ContactDetails />
    </>
  );
};

export default page;
