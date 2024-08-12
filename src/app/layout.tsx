import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { MetaData } from "@/constants";

export const metadata: Metadata = MetaData

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <TopBar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
