import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "600"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Induke — Product Engineering Studio",
  description:
    "Induke partners with ambitious teams to design, build, and ship production-ready web and mobile products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${roboto.className} ${playfair.variable} bg-black`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
