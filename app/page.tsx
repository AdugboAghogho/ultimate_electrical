import Collection from "@/components/Collection";
import VideoBanner from "@/components/VideoBanner";
import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import Other from "@/components/Other";
import MeetTheOwner from "@/components/MeetTheOwner";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-5">
      <Hero />
      <PromoBanner />
      <Other />

      {/* <VideoBanner /> */}
      {/* <Collection />  */}
    </div>
  );
}
