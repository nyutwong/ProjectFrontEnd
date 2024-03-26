import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { setEngine } from "crypto";
import Footer from "@/components/Footer";
import Provider from "../components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCKML Car Rental",
  description: "mai-chob-kin-mala car rental service",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <body className={`{inter.className}`}>
                <Provider>
                    <NextAuthProvider session={session}>
                        <TopMenu />
                        {children}
                        <Footer />
                    </NextAuthProvider>
                </Provider>
            </body>
        </html>
    );
}
