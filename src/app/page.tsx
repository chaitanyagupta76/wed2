import Hero from "@/components/sections/Hero";
import HappyCouple from "@/components/sections/HappyCouple";
import Story from "@/components/sections/Story";
import Gallery from "@/components/sections/Gallery";
import Countdown from "@/components/sections/Countdown";
import GiftRegistry from "@/components/sections/GiftRegistry";
import RSVP from "@/components/sections/RSVP";
import LiveStream from "@/components/sections/LiveStream";
import WhereWhen from "@/components/sections/WhereWhen";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HappyCouple />
      <Story />
      <Countdown />
      <GiftRegistry />
      <RSVP />
      <LiveStream />
      <Gallery />
      <WhereWhen />
      <Footer />
    </div>
  );
}
