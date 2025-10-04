import ArtisansSection2 from "@/components/sections/ArtisansSection2";
import ArtisansSections from "@/components/sections/ArtisansSections";
import BookService from "@/components/sections/BookService";
import CtaSection from "@/components/sections/CtaSection";
import PaymentSection from "@/components/sections/PaymentSection";

export default function Home() {
  return (
    <div className="bg-white">
      <ArtisansSections />
      <BookService />
      <ArtisansSection2 />
      <CtaSection />
      <PaymentSection />
    </div>
  );
}
