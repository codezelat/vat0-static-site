import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import ServicesStack from "@/components/sections/ServicesStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full relative">
      <Navbar />
      <Hero />
      <BrandStatement />
      <ServicesStack />
    </main>
  );
}
