import {
  About,
  Carousel,
  GetAQuote,
  RecentNews,
  Services,
} from "@/components/ui/home";
import HomeNews from "./blogs/page";

export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Services />
      <GetAQuote />
      {/* <RecentNews /> */}
      <HomeNews />
    </>
  );
}
