import Banner from "@/components/Banner";
import Provider from "@/components/ThemeProvider";
import TravelCard from "@/components/TravelCard";

export default function Home() {
  return (
    <main className="g bg-white">
      <Banner/>
      <TravelCard/>
    </main>
  );
}
