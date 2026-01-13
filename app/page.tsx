import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <main className="relative">
        <div className="stars absolute top-0 left-0"></div>
        <Navbar />
        <Hero />
        {/* <div className="planet-glow"></div> */}
      </main>
        <Card />
    </>
  );
}
