import Collection from "@/components/Collection";
import VideoBanner from "@/components/VideoBanner";
import Hero from "@/components/Hero";
import Other from "@/components/Other";


export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-5">
      <Hero />
      <Other />
      {/* <VideoBanner /> */}
      {/* <Collection />  */}
    </div>
  );
}
