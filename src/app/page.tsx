import ArtisansSection2 from "@/components/sections/ArtisansSection2";
import ArtisansSections from "@/components/sections/ArtisansSections";
import BookService from "@/components/sections/BookService";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="">
      <ArtisansSections />
      <BookService />
      <ArtisansSection2 />
      <CtaSection />
    </div>
  );
}
