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
                <div className="mt-16">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
