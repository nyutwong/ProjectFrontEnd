import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { authOptions } from "./(auth)/api/auth/[...nextauth]/route";

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
                        {children}
                    </NextAuthProvider>
                </Provider>
            </body>
        </html>
    );
}
