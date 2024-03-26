import TopMenu from "@/components/TopMenu";
import Footer from "@/components/Footer";


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body className={`{inter.className}`}>
                <TopMenu />
                {children}
                <Footer />
            </body>
        </html>
    );
}
