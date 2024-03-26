import Banner from "@/components/Banner";
import Provider from "@/components/ThemeProvider";
import TravelCard from "@/components/TravelCard";

export default function Home() {
    return (
        <main className=" bg-white dark:bg-gray-800">
            <Provider>
                <Banner />
                <TravelCard />
            </Provider>
        </main>
    );
}
