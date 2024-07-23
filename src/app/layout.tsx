import type { Metadata } from "next";
import { Poppins, Krona_One } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileHeader } from "@/components/Header/MobileHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faculdade Única",
  description: "Faculdade Única",
};

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${kronaOne.className} `}>
        <div className="flex flex-col">
          <MobileHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
