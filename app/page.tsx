import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { BookingSection } from "@/components/sections/BookingSection";
import { LocationHours } from "@/components/sections/LocationHours";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <BookingSection />
        <Gallery />
        <LocationHours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
