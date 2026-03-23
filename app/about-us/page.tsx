import CommonHero from "@/components/common-hero";
import { CompanyHistory, Mission_Vission } from "@/components/ui/about";
import React from "react";
import Team from "../team/page";
import TeamCard from "../team/page";

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
