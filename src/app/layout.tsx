import type { Metadata } from "next";
import { Lato, Bree_Serif } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SectionVisibilityProvider } from "@/context/SectionVisibilityContext";
import SplashScreen from "@/components/ui/SplashScreen";
import Navbar from "@/components/ui/Navbar";
import BackgroundMusic from "@/components/ui/BackgroundMusic";
import FloralAnimation from "@/components/ui/FloralAnimation";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const bree = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bree",
});

export const metadata: Metadata = {
  title: "Chaitu & Ammu Wedding",
  description: "Wedding invitation of Chaitanya Gupta and Malika Devi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${bree.variable} font-sans antialiased`}>
        <LanguageProvider>
          <SectionVisibilityProvider>
            <SplashScreen />
            <Navbar />
            <FloralAnimation />
            <BackgroundMusic />
            <main>{children}</main>
          </SectionVisibilityProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
